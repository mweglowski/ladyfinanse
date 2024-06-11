import React from "react";
import { Link } from "react-router-dom";

const ControlButtons = ({ isUserLoggedIn, showCommentModal }) => {
  return (
    <div className="flex justify-between mb-[70px] mt-[30px]">
      {/* GO BACK BUTTON */}
      <Link to="/blog" className="button-transparent rounded-lg">
        Powrót
      </Link>

      {/* ADD COMMENT BUTTON */}
      <div className="flex gap-2">
        {isUserLoggedIn ? (
          <button className="button rounded-lg" onClick={showCommentModal}>
            Skomentuj
          </button>
        ) : (
          <Link
            to="/login"
            className="button rounded-lg"
            onClick={showCommentModal}
          >
            Skomentuj
          </Link>
        )}

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLZNN0iXmXa1f7jYmj1f_s6nK2VQl_NkKrtxMM57RbSV8kCA/viewform"
          target="_blank"
          className="button rounded-lg"
        >
          Więcej
        </a>
      </div>
    </div>
  );
};

export default ControlButtons;
