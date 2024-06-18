import React from "react";

const CompanyFeatureText = ({ text }) => {
  return (
    <p key={text} className="text-white text-4xl animated-text px-8">
      {text}
    </p>
  );
};

export default CompanyFeatureText;
