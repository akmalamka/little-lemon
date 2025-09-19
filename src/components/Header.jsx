import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../assets/Logo.svg"; // adjust path if your Logo.svg is elsewhere

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
    <header className={`site-header ${visible ? "visible" : "hidden"}`}>
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
          </a>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#menu" onClick={handleLinkClick}>Menu</a></li>
          <li><a href="#reservations" onClick={handleLinkClick}>Reservations</a></li>
          <li><a href="#order-online" onClick={handleLinkClick}>Order Online</a></li>
          <li><a href="#login" onClick={handleLinkClick}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
