import "./Footer.css";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-column">
          <img src={Logo} alt="Little Lemon Logo" className="logo-img" />
          <p>Fresh Mediterranean flavors, crafted with love.</p>
        </div>

        {/* Sitemap */}
        <nav className="footer-column" aria-label="Sitemap">
          <h3>Sitemap</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer-column" aria-label="Contact Information">
          <h3>Contact</h3>
          <address>
            123 Lemon Street<br/>
            Springfield, USA<br/>
            Phone: <a href="tel:+15551234567">(555) 123-4567</a><br/>
            Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
          </address>
        </section>

        {/* Social Media */}
        <nav className="footer-column" aria-label="Social Media Links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://instagram.com/fake" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://x.com/fake" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
