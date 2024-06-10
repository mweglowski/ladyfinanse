import React from "react";
import SamplePersonPhoto from "../../../images/sample-person.png";

const EmployeeImageCard = ({ name }) => {
  return (
    <div className="relative">
      <img
        src={SamplePersonPhoto}
        alt="Employee Image"
        className="w-[270px] h-[270px] rounded-lg"
      />

      <div className="absolute bg-white rounded-lg p-1 bottom-[-12px] left-[-12px] shadow-md">
        <p className="p-1">{name}</p>
      </div>
    </div>
  );
};

export default EmployeeImageCard;
