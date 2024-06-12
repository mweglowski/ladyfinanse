import React from "react";

const ContactCard = ({ children, cardClasses }) => {
  return (
    <div className={"px-8 py-5 flex items-center justify-between w-full flex-wrap " + cardClasses}>
      {children}
    </div>
  );
};

export default ContactCard;
