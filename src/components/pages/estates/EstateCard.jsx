import React from "react";

const EstateCard = ({ imageSrc, title, link }) => {
  return (
    <a href={link}>
      <img src={imageSrc} alt="Real Estate Image" />

      <div>{title}</div>
    </a>
  );
};

export default EstateCard;
