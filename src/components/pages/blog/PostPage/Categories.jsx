import React from "react";

const Categories = ({ categories, classNames }) => {
  return (
    <ul className={"flex gap-2 flex-wrap mb-[10px] " + classNames}>
      {categories.map((category) => (
        <li
          key={category}
          className="border-2 border-gray-500 text-gray-400 rounded-lg px-2"
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
