import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ onDisplayChange }) => {
  return (
    <>
      <Link to="/" className="nav-link" onClick={onDisplayChange}>
        O Nas
      </Link>

      <Link to="/loans" className="nav-link" onClick={onDisplayChange}>
        Kredyty
      </Link>
      <Link to="/insurance" className="nav-link" onClick={onDisplayChange}>
        Ubezpieczenia
      </Link>

      <Link to="/realestates" className="nav-link" onClick={onDisplayChange}>
        Nieruchomości
      </Link>

      <Link to="/blog" className="nav-link" onClick={onDisplayChange}>
        Blog
      </Link>

      <Link to="/contact" className="nav-link" onClick={onDisplayChange}>
        Kontakt
      </Link>
    </>
  );
};

export default NavLinks;
