import React from "react";
import EstateCard from "./EstateCard";

const EstateCardList = ({ estates, onDelete }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto items-center">
      {estates.map((estate) => (
        <EstateCard
          key={estate.id}
          estateId={estate.id}
          imageSrc={estate.image}
          title={estate.title}
          link={estate.link}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EstateCardList;
