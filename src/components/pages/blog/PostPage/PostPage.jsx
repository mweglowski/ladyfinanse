import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/auth-context";
import { db } from "../../../../firebaseConfig";
import {
  doc,
  getDoc,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import Section from "../../../UI/Section";
import LikeIcon from "../../../../icons/like.svg";
import UserIcon from "../../../../icons/user.svg";
import { useModal } from "../../../../context/modal-context";
import PostDate from "./PostDate";
import Categories from "./Categories";
import MainTitle from "./MainTitle";
import Sections from "./Sections";
import ControlButtons from "./ControlButtons";

const PostPage = () => {
  const { currentUser, userDoc } = useAuth();
  const { toggleVisibility: toggleModalVisibility } = useModal();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [areCommentsShown, setCommentsDisplay] = useState(false);
  const [comments, setComments] = useState([]);
  const [userLikesPost, setUserLikesPost] = useState(false);
  const textareaRef = useRef();

  // FETCHING POST
  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      }

      // SET USER LIKES POST STATE, CHECK WHETHER USER LIKES POST ALREADY
      if (currentUser) {
        const userLikeObject = await getUserLikeObject(docRef, currentUser.uid);
        if (userLikeObject) {
          setUserLikesPost(true);
        } else {
          setUserLikesPost(false);
        }
      }
    };

    fetchPost();
    // WHEN COMMENTS QUANTITY IS CHANGING RE-RENDER COMPONENT
  }, [id, comments]);

  // CHANGING COMMENTS DISPLAY
  const toggleCommentsDisplay = () => {
    setCommentsDisplay((prevDisplay) => !prevDisplay);
  };

  // TOGGLING COMMENT MODAL DISPLAY
  const showCommentModal = () => {
    toggleModalVisibility(
      // MODAL CONTAINER BOX
      <div>
        {/* TITLE */}
        <div className="text-center text-xl font-bold mb-[10px] w-full px-[70px]">
          Nowy komentarz
        </div>

        {/* COMMENT TEXT */}
        <textarea
          ref={textareaRef}
          className="input mx-auto w-full min-h-[100px] max-h-[200px]"
          placeholder="Skomentuj..."
        />

        {/* CONTROL BUTTONS */}
        <div className="flex justify-between mt-[30px] w-full mx-auto">
          <button
            className="button-transparent rounded-lg px-5 py-2"
            onClick={toggleModalVisibility}
          >
            Anuluj
          </button>

          <button
            type="submit"
            className="button rounded-lg px-5 py-2"
            onClick={addComment}
          >
            Skomentuj
          </button>
        </div>
      </div>
    );
  };

  // ADDING COMMENT
  const addComment = async () => {
    if (textareaRef.current.value === "") {
      return;
    }

    const newComment = {
      userId: currentUser.uid,
      firstName: userDoc.firstName,
      lastName: userDoc.lastName,
      email: userDoc.email,
      text: textareaRef.current.value,
      createdAt: new Date(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      comments: arrayUnion(newComment),
    });

    toggleModalVisibility();
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
            className="button-transparent rounded-lg px-4 py-2"
          >
            Anuluj
          </button>
          <button
            onClick={() => handleDeleteComment(comment)}
            className="button rounded-lg px-6 py-2"
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
    <Section classNames="p-8 mx-auto w-full bg-[#1a1a1a] text-white">
      {/* POST TITLE WITH DATE AND CATEGORIES */}
      <div className="mx-auto w-full max-w-[800px]">
        {/* DATE */}
        <PostDate createdAt={post.createdAt} />

        {/* CATEGORIES */}
        <Categories categories={post.categories} classNames="mt-[20px]" />

        {/* TITLE */}
        <MainTitle text={post.postTitle} />
      </div>

      {/* POST SECTIONS */}
      <Sections sections={post.sections} />

      {/* EXPAND COMMENTS */}
      {post.comments.length > 0 ? (
        <div className="relative max-w-[800px] w-full mx-auto">
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
        <div className="relative max-w-[800px] w-full mx-auto">
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
        <ul className="my-8 max-w-[800px] mx-auto w-full">
          {post.comments.map((comment, index) => (
            <li key={index} className="relative">
              {/* DATE */}
              <div className="text-gray-500">
                {timeSince(comment.createdAt.toDate())}
              </div>

              {/* USER INFO */}
              <div className="flex">
                <img src={UserIcon} alt="User Icon" className="w-[20px]" />
                <div className="text-gray-400">
                  {comment.firstName} {comment.lastName}
                </div>
              </div>

              {/* TEXT */}
              <div className="border-b-2 border-gray-600 mb-4 text-gray-200">
                {comment.text}
              </div>

              {/* REMOVE COMMENT BUTTON */}
              {userDoc && userDoc.role === "admin" && (
                <button
                  onClick={() => confirmDelete(comment)}
                  className="absolute right-0 top-6 text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black duration-300"
                >
                  Usuń
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* CONTROL BUTTONS */}
      <ControlButtons
        showCommentModal={showCommentModal}
        isUserLoggedIn={Boolean(currentUser)}
      />
    </Section>
  );
};

export default PostPage;
