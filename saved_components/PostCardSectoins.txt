import React from "react";

const Sections = ({ sections }) => {
  return (
    <div className="shadow-inset-white max-h-[170px] overflow-hidden z-10">
      {sections.map((section, index) => {
        if (section.type === "subtitle") {
          return (
            <div key={"subtitle" + index} className="font-bold text-[1.2em]">
              {section.content}
            </div>
          );
        } else if (section.type === "text") {
          return (
            <div
              key={"text" + index}
              dangerouslySetInnerHTML={{ __html: section.content }}
              className="text-justify"
            />
          );
        } else if (section.type === "image") {
          return (
            <img
              key={"image" + index}
              src={section.content}
              alt="Uploaded"
              className="max-w-full h-auto"
            />
          );
        }
      })}
    </div>
  );
};

export default Sections;
