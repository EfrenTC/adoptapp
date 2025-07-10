import React from "react";
import "./Header.css";
import { useState } from "react"; 
import logo from "../../assets/logo.png";

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
                <a href="#" className="header__nav-link">Inicio</a>
                <a href="#" className="header__nav-link">Adopta</a>
                <a href="#" className="header__nav-link">Consejos</a>
                <a href="#" className="header__nav-link">Historias</a>
                <a href="#" className="header__nav-link">Contacto</a>
            <button className="header__donar-btn">DONA</button>
            </nav>

            
        </div>            
    );
};

export default Header; 