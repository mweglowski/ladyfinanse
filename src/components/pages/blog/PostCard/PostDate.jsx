import React from "react";

const PostDate = ({createdAt}) => {
  return (
    <div className="absolute bottom-2 z-20 text-gray-500">
      {createdAt.toDate().toLocaleString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })}
    </div>
  );
};

export default PostDate;
