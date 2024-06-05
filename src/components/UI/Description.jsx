import React from "react";

const Description = ({ children, classNames }) => {
  return (
    <div className={"p-8 text-center max-w-[600px] mx-auto animate-slide-down " + classNames}>
      {children}
    </div>
  );
};

export default Description;
