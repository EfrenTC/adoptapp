import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
  <footer className="footer">
  <div className="footer-container">

    <div className="footer-content">
      <div className="footer-links">
        <Link to="/about">Quiénes somos</Link>
        <Link to="/privacy">Política de privacidad</Link>
        <Link to="/terms">Términos y condiciones</Link>
        <Link to="/work-with-us">Trabaja con nosotros</Link>
      </div>
      <div className="message">
        <p>🐾 Gracias por ayudar a darles un hogar a nuestros gatitos 🐱</p>
      </div>
      <div className="copy">
        <p>&copy; {new Date().getFullYear()} Adoptapp · Todos los derechos reservados</p>
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer;
