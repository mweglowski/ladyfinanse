import React from "react";

const InsuranceTypeCard = ({ title, description, icon }) => {
  return (
    <div className="border-2 border-slate-100 p-5 relative rounded-lg">
      <div className="text-lg">{title}</div>
      <div className="text-gray-600 text-justify">{description}</div>

      <img
        src={icon}
        className="w-[40px] absolute top-[-25px] left-[-20px]"
        alt="Insurance Type Icon"
      />
    </div>
  );
};

export default InsuranceTypeCard;
