import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/auth-context";
import { useModal } from "../../../../context/modal-context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import ControlButtons from "./ControlButtons";
import Categories from "./Categories";
import MainTitle from "./MainTitle";
import Sections from "./Sections";
import PostDate from "./PostDate";
import CommentsLikesCountContainer from "./CommentsLikesCountContainer";

const PostCard = ({ post, onDelete }) => {
  const { userDoc } = useAuth();
  const { toggleVisibility } = useModal();

  // MODAL DELETE CONTENT
  const confirmDelete = () => {
    toggleVisibility(
      <div>
        <p className="text-center mb-[40px]">
          Czy na pewno chcesz usunąć ten post?
        </p>

        <div className="flex justify-between">
          <button
            onClick={toggleVisibility}
            className="button-transparent rounded-lg"
          >
            Anuluj
          </button>
          <button
            onClick={() => handleDelete(post.id)}
            className="button rounded-lg"
          >
            Tak
          </button>
        </div>
      </div>
    );
  };

  // HANDLING POST DELETION
  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      toggleVisibility();

      // DELETE FROM BlogPage.jsx
      onDelete(postId);
    } catch (error) {
      console.error("Error trying to delete post: ", error);
    }
  };

  return (
    <div
      key={post.id}
      className="p-4 border-2 border-slate-200 flex flex-col relative rounded-lg"
    >
      {/* POST CONTROL BUTTONS */}
      <ControlButtons
        confirmDelete={confirmDelete}
        userDoc={userDoc}
        postId={post.id}
      />

      {/* CATEGORIES */}
      <Categories categories={post.categories} />

      {/* MAIN TITLE */}
      <MainTitle text={post.postTitle} />

      {/* SECTIONS */}
      <Sections sections={post.sections} />

      {/* DATE OF POST CREATION */}
      <PostDate createdAt={post.createdAt} />

      {/* LINK TO SPECIFIC POST */}
      <Link
        to={`/blog/post/${post.id}`}
        className="button absolute bottom-2 right-2 z-20 rounded-lg"
      >
        Więcej
      </Link>

      {/* LIKES & COMMENTS COUNT */}
      <CommentsLikesCountContainer
        likesCount={post.likes.length}
        commentsCount={post.comments.length}
      />
    </div>
  );
};

export default PostCard;
