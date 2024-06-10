import React from 'react';

const Backdrop = ({ toggleVisibility, children }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[100] bg-[#000000bb] animate-none flex justify-center items-center"
      onClick={toggleVisibility}
    >
      {children}
    </div>
  );
};

export default Backdrop;
