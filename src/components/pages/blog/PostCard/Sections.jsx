import React from "react";

const Sections = ({ sections }) => {
  return (
    <div className="shadow-inset-white max-h-[170px] overflow-hidden z-10">
      {sections.map((section, index) => {
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
  );
};

export default Sections;
