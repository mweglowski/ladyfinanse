import React from "react";
import Card from "./Card";

const CardList = ({
  data,
  titleClasses,
  descriptionClasses,
  iconClasses,
  cardClasses,
  listClasses,
}) => {
  return (
    <ul className={listClasses}>
      {data.map((item) => (
        <li key={item.id}>
          <Card
            {...item}
            titleClasses={titleClasses}
            descriptionClasses={descriptionClasses}
            iconClasses={iconClasses}
            cardClasses={cardClasses}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
