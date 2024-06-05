import React from "react";

const LoanCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-[700px] border-2 border-[#695b21] p-4 relative rounded-lg">
      <div className="text-lg">{title}</div>
      <div className="text-slate-300 text-justify">{description}</div>

      <img
        src={icon}
        className="w-[40px] absolute top-[-25px] left-[-20px] bg-[#1a1a1a] p-1 border-2 border-[#695b21] rounded-lg"
        alt="Loan Type Icon"
      />
    </div>
  );
};

export default LoanCard;
