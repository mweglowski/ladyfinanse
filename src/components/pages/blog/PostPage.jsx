import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { db } from "../../../firebaseConfig";
import {
  doc,
  getDoc,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import Section from "../../UI/Section";
import CommentModal from "./CommentModal";
import LikeIcon from "../../../icons/like.svg";
import UserIcon from "../../../icons/user.svg";
import { useModal } from "../../../context/modal-context";

const PostPage = () => {
  const { currentUser, userDoc } = useAuth();
  const { toggleVisibility: toggleModalVisibility } = useModal();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [areCommentsShown, setCommentsDisplay] = useState(false);
  const [isCommentModalShown, setCommentModalDisplay] = useState(false);
  const [comments, setComments] = useState([]);
  const [userLikesPost, setUserLikesPost] = useState(false);

  // CHANGING COMMENTS DISPLAY
  const toggleCommentsDisplay = () => {
    setCommentsDisplay((prevDisplay) => !prevDisplay);
  };

  // TOGGLING COMMENT MODAL DISPLAY
  const showCommentModal = () => {
    setCommentModalDisplay(true);
  };
  const hideCommentModal = () => {
    setCommentModalDisplay(false);
  };

  // FETCHING POST
  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      }

      // SET USER LIKES POST STATE, CHECK WHETHER USER LIKES POST ALREADY
      const userLikeObject = await getUserLikeObject(docRef, currentUser.uid);
      if (userLikeObject) {
        setUserLikesPost(true);
      } else {
        setUserLikesPost(false);
      }
    };

    fetchPost();
    // WHEN COMMENTS QUANTITY IS CHANGING RE-RENDER COMPONENT
  }, [id, comments]);

  // ADDING COMMENT
  const addComment = async (comment) => {
    const newComment = {
      userId: currentUser.uid,
      firstName: userDoc.firstName,
      lastName: userDoc.lastName,
      email: userDoc.email,
      text: comment,
      createdAt: new Date(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      comments: arrayUnion(newComment),
    });
    hideCommentModal();
  };

  // CONFIRMING COMMENT DELETION
  const confirmDelete = (comment) => {
    toggleModalVisibility(
      <div>
        <p className="text-center mb-[40px]">
          Czy na pewno chcesz usunąć ten komentarz?
        </p>

        <div className="flex justify-between">
          <button
            onClick={toggleModalVisibility}
            className="button-transparent rounded-lg"
          >
            Anuluj
          </button>
          <button
            onClick={() => handleDeleteComment(comment)}
            className="button rounded-lg"
          >
            Tak
          </button>
        </div>
      </div>
    );
  };

  // DELETING COMMENT
  const handleDeleteComment = async (comment) => {
    const updatedComments = comments.filter((c) => c !== comment);
    setComments(updatedComments);

    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      comments: arrayRemove(comment),
    });

    toggleModalVisibility();
  };

  // TOGGLE LIKE
  const toggleLike = async () => {
    setUserLikesPost((prevLikeState) => !prevLikeState);

    const docRef = doc(db, "posts", id);

    const likeObject = await getUserLikeObject(docRef, currentUser.uid);

    if (likeObject) {
      await updateDoc(docRef, {
        likes: arrayRemove(likeObject),
      });
    } else {
      const newLike = {
        userId: currentUser.uid,
        createdAt: new Date(),
      };

      await updateDoc(docRef, {
        likes: arrayUnion(newLike),
      });
    }
  };

  // HELPER FUNCTION TO CHECK WHETHER USER LIKED THIS POST ALREADY
  const getUserLikeObject = async (docRef, userId) => {
    const docSnapshot = await getDoc(docRef);

    const likes = docSnapshot.data().likes || [];

    const likeObject = likes.find((like) => like.userId === userId);

    return likeObject;
  };

  // FUNCTION TO CALCULATE TIME SINCE COMMENT WAS CREATED
  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " lat temu";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " miesięcy temu";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " dni temu";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " godzin temu";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minut temu";
    }
    return Math.floor(seconds) + " sekund temu";
  };

  // SHOW STH WHILE LOADING
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Section classNames="p-8 max-w-[900px] mx-auto w-full">
      {/* POST TITLE WITH DATE AND CATEGORIES */}
      <div className="mx-auto w-full">
        {/* DATE */}
        <p className="mt-[70px] text-gray-500">
          Post z dnia{" "}
          {post.createdAt.toDate().toLocaleString("pl-PL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>

        {/* CATEGORIES */}
        <ul className="flex gap-2 flex-wrap my-[10px]">
          {post.categories.map((category) => (
            <li
              key={category}
              className="bg-white border-2 border-gray-200 text-gray-400 rounded-lg px-2"
            >
              {category}
            </li>
          ))}
        </ul>

        {/* TITLE */}
        <div className="text-left text-5xl mt-[20px] text-shadow-white">
          {post.postTitle}
        </div>
      </div>

      {/* POST SECTIONS */}
      <div className="mx-auto max-w-[700px] mt-[70px] w-full">
        {post.sections.map((section, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <div>
              {section.type === "title" && (
                <h1 className="text-2xl font-bold">{section.content}</h1>
              )}
              {section.type === "subtitle" && (
                <h2 className="text-xl font-semibold">{section.content}</h2>
              )}
              {section.type === "text" && <p>{section.content}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* EXPAND COMMENTS */}
      {post.comments.length > 0 ? (
        <div className="relative">
          <button
            className="mt-[30px] text-gray-500 hover:underline duration-300 hover:text-gray-700"
            onClick={toggleCommentsDisplay}
          >
            {areCommentsShown ? "Ukryj " : "Pokaż "} komentarze (
            {post.comments.length})
          </button>

          {currentUser ? (
            <div
              className="p-1 rounded-lg border-2 border-gray-400 flex w-fit items-center absolute right-0 top-6 hover:border-gray-500 cursor-pointer duration-300 text-gray-400 hover:text-gray-500"
              onClick={toggleLike}
            >
              <img src={LikeIcon} className="w-[27px] " />
              <p className="ml-2 pl-2 border-l-2 border-gray-400">
                {userLikesPost ? "Lubisz To!" : "Polub"}
              </p>
            </div>
          ) : (
            <Link
              to="/login"
              className="p-1 rounded-lg border-2 border-gray-400 flex w-fit items-center absolute right-0 top-6 hover:border-gray-500 cursor-pointer duration-300 text-gray-400 hover:text-gray-500"
            >
              <img src={LikeIcon} className="w-[27px] " />
              <p className="ml-2 pl-2 border-l-2 border-gray-400">Polub</p>
            </Link>
          )}
        </div>
      ) : (
        <div className="relative">
          <p className="text-gray-500 mt-[30px] mx-auto">Brak komentarzy</p>

          {currentUser ? (
            <div
              className="p-1 rounded-lg border-2 border-gray-400 flex w-fit items-center absolute right-0 top-6 hover:border-gray-500 cursor-pointer duration-300 text-gray-400 hover:text-gray-500"
              onClick={toggleLike}
            >
              <img src={LikeIcon} className="w-[27px] " />
              <p className="ml-2 pl-2 border-l-2 border-gray-400">
                {userLikesPost ? "Lubisz To!" : "Polub"}
              </p>
            </div>
          ) : (
            <Link
              to="/login"
              className="p-1 rounded-lg border-2 border-gray-400 flex w-fit items-center absolute right-0 top-6 hover:border-gray-500 cursor-pointer duration-300 text-gray-400 hover:text-gray-500"
            >
              <img src={LikeIcon} className="w-[27px] " />
              <p className="ml-2 pl-2 border-l-2 border-gray-400">Polub</p>
            </Link>
          )}
        </div>
      )}

      {/* COMMENTS */}
      {areCommentsShown && (
        <ul className="my-8 max-w-[700px] mx-auto w-full">
          {post.comments.map((comment, index) => (
            <li key={index} className="relative">
              {/* DATE */}
              <div className="text-gray-500">
                {timeSince(comment.createdAt.toDate())}
              </div>

              {/* USER INFO */}
              <div className="flex">
                <img src={UserIcon} alt="User Icon" className="w-[20px]" />
                <div>
                  {comment.firstName} {comment.lastName}
                </div>
              </div>

              {/* TEXT */}
              <div className="border-b-2 border-gray-100 mb-4">
                {comment.text}
              </div>

              {/* REMOVE COMMENT BUTTON */}
              {userDoc && userDoc.role === "admin" && (
                <button
                  onClick={() => confirmDelete(comment)}
                  className="absolute right-0 top-2 text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300"
                >
                  Usuń
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* CONTROL BUTTONS */}
      <div className="flex justify-between mb-[70px] mt-[30px]">
        {/* GO BACK BUTTON */}
        <Link to="/blog" className="button-transparent rounded-lg">
          Powrót
        </Link>

        {/* ADD COMMENT BUTTON */}
        {currentUser ? (
          <button className="button rounded-lg" onClick={showCommentModal}>
            Skomentuj
          </button>
        ) : (
          <Link
            to="/login"
            className="button rounded-lg"
            onClick={showCommentModal}
          >
            Skomentuj
          </Link>
        )}
      </div>

      {/* COMMENT MODAL */}
      {isCommentModalShown && (
        <CommentModal
          onHideModal={hideCommentModal}
          onAddComment={addComment}
        />
      )}
    </Section>
  );
};

export default PostPage;
