import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Adoptapp" className="header__logo-img" />
                <span className="header__brand"></span>
            </div>
            <nav className="header__nav">
                <a href="#" className="header__nav-link">Inicio</a>
                <a href="#" className="header__nav-link">Adopta</a>
                <a href="#" className="header__nav-link">Consejos</a>
                <a href="#" className="header__nav-link">Historias</a>
                <a href="#" className="header__nav-link">Contacto</a>
            </nav>
            <button className="header__donar-btn">DONA</button>
        </div>            
    );
};

export default Header; 