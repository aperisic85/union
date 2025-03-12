import React, { useState } from "react";
import { Link } from "react-router-dom";
import lighthouseLogo from "../assets/lighthouse-logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <img
          src={lighthouseLogo}
          alt="Lighthouse Logo"
          width="50"
          height="50"
          className="nav-logo"
        />

        <p className="nav-title">Sindikat Plovput</p>

        <div className="nav-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-list ${showMenu ? "show" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              Početna
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              O nama
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
