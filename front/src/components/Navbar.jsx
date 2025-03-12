import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#1a5f7a" />
          <text x="20" y="22" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">SP</text>
        </svg>
        <Link to="/" className="nav-logo">Sindikat Plovput</Link>
        <div className="nav-toggle" onClick={toggleMenu}>&#9776;</div>
        <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
          <li><Link to="/" className="nav-link">Početna</Link></li>
          <li><Link to="/news" className="nav-link">Novosti</Link></li>
          <li><Link to="/about" className="nav-link">O nama</Link></li>
          <li><Link to="/contact" className="nav-link">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
