import React from "react";
import "./Header.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => setMenuAbierto(!menuAbierto);

    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Adoptapp" className="header__logo-img" />
                <span className="header__brand"></span>
            </div>

            <button className="header__burger"
                onClick={toggleMenu}
                aria-label="Menú">
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
            </button>

            <nav className={`header__nav ${menuAbierto ? "header__nav--open" : ""}`}>
                <Link to="/" className="header__nav-link">Inicio</Link>
                <Link to="/adopcion" className="header__nav-link">Adopta</Link>
                <Link to="/consejos" className="header__nav-link">Consejos</Link>
                <Link to="/historias" className="header__nav-link">Historias</Link>
                <Link to="/contacto" className="header__nav-link">Contacto</Link>
                <Link to="/donar" className="header__donar-btn">DONA</Link>

            </nav>



        </div>
    );
};

export default Header; 