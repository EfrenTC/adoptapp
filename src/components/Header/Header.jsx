import React, { useState, useContext } from "react";
import "./Header.css";
import logo1 from "../../assets/logo1.png";
import logo3 from "../../assets/logo3.png";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';
import Toggle from '../ThemeContext/ThemeToggle.jsx';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const logo = theme === "dark" ? logo3 : logo1;

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo Adoptapp" className="header__logo-img" />
        <span className="header__brand"></span>
      </div>

      <button
        className="header__burger"
        onClick={toggleMenu}
        aria-label="Menú"
      >
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>

      <nav className={`header__nav ${menuAbierto ? "header__nav--open" : ""}`}>
        <div className="header__nav-links">
          <Link to="/" className="header__nav-link">Inicio</Link>
          <Link to="/adopcion" className="header__nav-link">Adopta</Link>
          <Link to="/consejos" className="header__nav-link">Consejos</Link>
          <Link to="/historias" className="header__nav-link">Historias</Link>
          <Link
            to="/favoritos"
            className="header__nav-link header__nav-link--icon"
            title="Ver favoritos"
            aria-label="Ver favoritos"
          >
            <span className="header__nav-link-fav">Favoritos</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F87171"
              className="header__icon-heart"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </Link>
          <Link to="/contacto" className="header__nav-link">Contacto</Link>
          <Link to="/donar" className="header__donar-btn">DONAR</Link>
        </div>

        <div className="header__toggle-container">
          <Toggle />
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default Header;