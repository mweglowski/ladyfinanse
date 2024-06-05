import { Link } from "react-router-dom";
import CommentIcon from "../../../icons/comment.svg";
import LikeIcon from "../../../icons/like.svg";
import BlogPost from "./PostPage";

const PostCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="p-4 border-2 border-slate-200 flex flex-col relative rounded-lg"
    >
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
        element={<BlogPost />}
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
