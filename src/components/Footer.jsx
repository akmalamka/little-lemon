import "./Footer.css";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-column">
          <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
          <p>Fresh Mediterranean flavors, crafted with love.</p>
        </div>

        {/* Sitemap */}
        <div className="footer-column">
          <h3>Sitemap</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>123 Lemon Street</p>
          <p>Springfield, USA</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: contact@littlelemon.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://instagram.com/fake" target="_blank">Instagram</a></li>
            <li><a href="https://x.com/fake" target="_blank">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
