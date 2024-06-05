import React from "react";

const ImageCard = ({ logo, cardClasses, imgClasses }) => {
  return (
    <div className={"max-w-[200px] " + cardClasses}>
      <img src={logo} className={"rounded-lg " + imgClasses} alt="Bank Logo" />
    </div>
  );
};

export default ImageCard;
