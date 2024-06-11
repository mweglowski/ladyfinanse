import React from "react";

const Card = ({
  title,
  description,
  icon,
  titleClasses,
  descriptionClasses,
  iconClasses,
  cardClasses,
}) => {
  return (
    <div className={"border-2 p-4 relative " + cardClasses}>
      <div className={"text-lg " + titleClasses}>{title}</div>
      <div className={"text-justify " + descriptionClasses}>{description}</div>

      <img
        src={icon}
        className={"w-[40px] absolute top-[-25px] left-[-20px] " + iconClasses}
        alt="Icon"
      />
    </div>
  );
};

export default Card;
