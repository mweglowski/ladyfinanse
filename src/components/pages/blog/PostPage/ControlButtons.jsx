import React from "react";
import { Link } from "react-router-dom";

const ControlButtons = ({ isUserLoggedIn, showCommentModal }) => {
  return (
    <div className="flex sm:justify-between mb-[70px] mt-[30px] max-w-[850px] w-full mx-auto flex-wrap justify-center gap-[20px] sm:gap-0">
      {/* GO BACK BUTTON */}
      <Link to="/blog" className="button-transparent rounded-lg px-4 py-2">
        Powrót
      </Link>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdLZNN0iXmXa1f7jYmj1f_s6nK2VQl_NkKrtxMM57RbSV8kCA/viewform"
        target="_blank"
        className="button rounded-lg px-4 py-2"
      >
        Więcej Szczegółów
      </a>
      {/* ADD COMMENT BUTTON */}
      <div className="flex gap-2">
        {isUserLoggedIn ? (
          <button
            className="button rounded-lg px-4 py-2"
            onClick={showCommentModal}
          >
            Skomentuj
          </button>
        ) : (
          <Link
            to="/login"
            className="button rounded-lg px-4 py-2"
          >
            Skomentuj
          </Link>
        )}
      </div>
    </div>
  );
};

export default ControlButtons;
