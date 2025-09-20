import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
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
    <header className={`site-header ${visible ? "visible" : "hidden"}`}>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
          </Link>
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
