import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo Adoptapp" className="header__logo-img" />
                <span className="header__brand"></span>
            </div>
            <nav className="header__nav">
                <Link to="/" className="header__nav-link">Inicio</Link>
                <Link to="/adopcion" className="header__nav-link">Adopta</Link>
                <Link to="/consejos" className="header__nav-link">Consejos</Link>
                <Link to="/historias" className="header__nav-link">Historias</Link>
                <Link to="/contacto" className="header__nav-link">Contacto</Link>
            </nav>

            <button className="header__donar-btn">DONA</button>
        </div>
    );
};

export default Header; 