import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <Header className="header">
            <div className="logo-section">
                <img src={logo} alt="Logo Adoptapp" className="logo" />
                <span className="brand">Adoptapp</span>
            </div>
            <nav className="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Adopta</a>
                <a href="#">Consejos</a>
                <a href="#">Historias</a>
                <a href="#">Contacto</a>
            </nav>
            <button className="donar-btn">DONÁ</button>
        </Header>            
    );
};

export default Header; 