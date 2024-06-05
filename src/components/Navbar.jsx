import React, { useState } from "react";
import ExpandDownIcon from "../icons/expand-down.svg";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Navbar = () => {
  const [areLinksShown, setLinksDisplay] = useState(false);
  const { currentUser } = useAuth();

  const toggleLinksDisplay = () => {
    setLinksDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="fixed bg-[#ffffffee] w-full p-2 border-b-2 z-50">
      <button onClick={toggleLinksDisplay}  className="md:hidden flex ml-auto">
        <img
          src={ExpandDownIcon}
          className={`w-[35px] h-[35px] duration-300 button-hover ${
            areLinksShown ? "rotate-180" : null
          }`}
        />
      </button>

      {areLinksShown && (
        <ul className="flex flex-col text-center gap-3 mt-3 md:hidden">
          <NavLinks onDisplayChange={toggleLinksDisplay} />

          {currentUser ? (
            <Link to="/logout" className="nav-link" onClick={toggleLinksDisplay}>
              Wyloguj
            </Link>
          ) : (
            <Link to="/login" className="nav-link" onClick={toggleLinksDisplay}>
              Zaloguj
            </Link>
          )}
        </ul>
      )}

      <div className="flex justify-between">
        <ul className="hidden md:flex md:justify-center">
          <NavLinks onDisplayChange={toggleLinksDisplay} />
        </ul>

        {currentUser ? (
          <Link
            to="/logout"
            className="hidden nav-link md:block"
            onClick={toggleLinksDisplay}
          >
            Wyloguj
          </Link>
        ) : (
          <Link
            to="/login"
            className="hidden nav-link md:block"
            onClick={toggleLinksDisplay}
          >
            Zaloguj
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
