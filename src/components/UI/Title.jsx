import React from "react";

const Title = ({ classNames, children }) => {
  return (
    <div
      className={"mx-auto text-5xl p-6 text-center animate-slide-down title " + classNames}
    >
      {children}
    </div>
  );
};

export default Title;
