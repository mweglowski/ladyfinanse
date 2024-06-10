import { Link } from "react-router-dom";
import CommentIcon from "../../../icons/comment.svg";
import LikeIcon from "../../../icons/like.svg";
import BlogPost from "./PostPage";
import { useAuth } from "../../../context/auth-context";
import { useModal } from "../../../context/modal-context";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const PostCard = ({ post, onDelete }) => {
  const { userDoc } = useAuth();
  const { toggleVisibility } = useModal();

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
      {/* ABILITY TO RAPIDLY DELETE POST */}
      {userDoc && userDoc.role === "admin" && (
        <div className="absolute top-[-25px] left-0">
          <button
            onClick={confirmDelete}
            className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300"
          >
            Usuń
          </button>
          <button className="text-white rounded-lg bg-black px-2 py-1 hover:bg-white hover:text-black border-2 duration-300">
            Edytuj
          </button>
        </div>
      )}

      {/* CATEGORIES */}
      <ul className="flex gap-2 flex-wrap mb-[10px]">
        {post.categories.map((category) => (
          <li
            key={category}
            className="bg-white border-2 border-gray-200 text-gray-400 rounded-lg px-2"
          >
            {category}
          </li>
        ))}
      </ul>

      {/* MAIN TITLE */}
      <div className="font-bold border-b-2 border-slate-200 text-[1.7em] mb-[15px]">
        {post.postTitle}
      </div>

      {/* SECTIONS */}
      <div className="shadow-inset-white max-h-[170px] overflow-hidden z-10">
        {post.sections.map((section, index) => {
          if (section.type === "subtitle") {
            return (
              <div key={"s" + index} className="font-bold text-[1.2em]">
                {section.content}
              </div>
            );
          } else if (section.type === "text") {
            return <p key={"p" + index}>{section.content}</p>;
          }
        })}
      </div>

      {/* DATE OF POST CREATION */}
      <div className="absolute bottom-2 z-20 text-gray-500">
        {post.createdAt.toDate().toLocaleString("pl-PL", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>

      {/* LINK TO SPECIFIC POST */}
      <Link
        to={`/blog/post/${post.id}`}
        className="button absolute bottom-2 right-2 z-20 rounded-lg"
      >
        Więcej
      </Link>

      {/* LIKES & COMMENTS COUNT */}
      <div className="absolute bottom-1 right-[120px] z-20 rounded-lg flex">
        <div className="flex flex-col text-center">
          <img src={LikeIcon} className="w-[23px]" />
          <p className="mt-[-4px] text-gray-400">{post.likes.length}</p>
        </div>
        <div className="flex flex-col text-center">
          <img src={CommentIcon} className="w-[25px]" />
          <p className="mt-[-6px] text-gray-400">{post.comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
