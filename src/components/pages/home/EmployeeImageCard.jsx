import React from "react";

const EmployeeImageCard = ({ name, imgSrc }) => {
  return (
    <div className="relative">
      <div className="w-[290px] h-[360px] flex justify-center items-center rounded-lg overflow-hidden employee-image-shadow-inset">
        <img
          src={imgSrc}
          alt="Employee Image"
          className="rounded-lg"
        />
      </div>

      <div className="absolute bg-white rounded-lg p-1 bottom-[-12px] left-[-12px] shadow-md">
        <p className="p-1">{name}</p>
      </div>
    </div>
  );
};

export default EmployeeImageCard;
