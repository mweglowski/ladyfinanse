import React from "react";

const Sections = ({ sections }) => {
  return (
    <div className="mx-auto max-w-[700px] mt-[70px] w-full">
      {sections.map((section, index) => (
        <div key={index} className="mb-4 flex items-center justify-between">
          <div>
            {section.type === "title" && (
              <h1 className="text-2xl font-bold">{section.content}</h1>
            )}
            {section.type === "subtitle" && (
              <h2 className="text-xl font-semibold">{section.content}</h2>
            )}
            {section.type === "text" && (
              <div
                key={"text" + index}
                dangerouslySetInnerHTML={{ __html: section.content }}
                className="text-justify"
              />
            )}
            {section.type === "image" && (
              <img
                key={"image" + index}
                src={section.content}
                alt="Uploaded"
                className="max-w-full h-auto"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sections;
