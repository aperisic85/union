import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Adresa</h3>
          <p>Ulica Plovputa 1, Split</p>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Telefon: +385 21 123456</p>
          <p>Email: <a href="mailto:kontakt@plovputsindikat.hr">kontakt@plovputsindikat.hr</a></p>
        </div>
        <div className="footer-section social-links">
          <h3>Pratite nas</h3>
          <ul>
            <li><a href="https://www.facebook.com/plovputsindikat" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/plovputsindikat" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>2025 Sindikat zaposlenika Plovput. Sva prava pridržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
