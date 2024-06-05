import React from "react";
import PostCard from "./PostCard";

const PostsList = ({ posts }) => {
  return (
    <div className="p-4 flex flex-col gap-[2em] max-w-[700px] mx-auto w-full">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
