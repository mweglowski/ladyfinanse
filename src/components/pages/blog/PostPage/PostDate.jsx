import React from "react";

const PostDate = ({createdAt}) => {
  return (
    <p className="mt-[70px] text-gray-500">
      Post z dnia{" "}
      {createdAt.toDate().toLocaleString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })}
    </p>
  );
};

export default PostDate;
