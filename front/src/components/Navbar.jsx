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
        <Link to="/" className="nav-logo">Novosti</Link>
        <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
          <li><Link to="/" className="nav-link">Početna</Link></li>
          <li><Link to="/add-news" className="nav-link">Dodaj novost</Link></li>
          <li><Link to="/about" className="nav-link">O nama</Link></li>
        </ul>
        <i className="nav-toggle" onClick={toggleMenu}>
          &#9776;
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
