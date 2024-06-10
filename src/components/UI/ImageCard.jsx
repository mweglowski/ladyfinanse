import React from "react";

const ImageCard = ({ logo, cardClasses, imgClasses }) => {
  return (
    <div className={"max-w-[150px] " + cardClasses}>
      <img src={logo} className={" " + imgClasses} alt="Bank Logo" />
    </div>
  );
};

export default ImageCard;
