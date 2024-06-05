import React from "react";

const CompanyFeatureText = ({ text }) => {
  return (
    <p key={text} className="text-white text-5xl animated-text">
      {text}
    </p>
  );
};

export default CompanyFeatureText;
