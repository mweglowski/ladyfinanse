import React from "react";

const Description = ({ children, classNames }) => {
  return (
    <div className={"text-center max-w-[600px] mx-auto animate-slide-down px-8 " + classNames}>
      {children}
    </div>
  );
};

export default Description;
