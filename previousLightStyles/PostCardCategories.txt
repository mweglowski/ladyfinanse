import React from "react";

const Categories = ({ categories }) => {
  return (
    <ul className="flex gap-2 flex-wrap mb-[10px]">
      {categories.map((category) => (
        <li
          key={category}
          className="bg-white border-2 border-gray-200 text-gray-400 rounded-lg px-2"
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
