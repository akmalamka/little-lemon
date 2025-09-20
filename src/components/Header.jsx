import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/Logo.svg";

function Header() {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < prevScroll || current < 50);
      setPrevScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${visible ? "visible" : "hidden"}`} role="banner" aria-label="Main Header">
      <nav className="navbar" aria-label="Primary Navigation">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick} aria-label="Go to Home">
            <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
        >
          ☰
        </button>

        <ul id="primary-menu" className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
          </li>
          <li>
            <Link to="/reservations" onClick={handleLinkClick}>Reservations</Link>
          </li>
          <li>
            <Link to="/order-online" onClick={handleLinkClick}>Order Online</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
