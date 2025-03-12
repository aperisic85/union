import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Email: info@sindikatplovputa.hr</p>
          <p>Telefon: +385 1 123 4567</p>
        </div>
        <div className="footer-section social-links">
          <h3>Pratite nas</h3>
          <ul>
            <li>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025. Sindikat zaposlenika Plovputa. Sva prava pridržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
