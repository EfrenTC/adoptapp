import React from "react";
import './CardTip.css';

// MODIFICACIÓN CLAVE AQUÍ: Acepta 'className' y 'style' como props adicionales
const CardTip = ({ imagen, titulo, texto, className, style }) => { 
    return (
        // MODIFICACIÓN CLAVE AQUÍ: Aplica las props 'className' y 'style' al div raíz
        <div className={`card-tip ${className || ''}`} style={style}>
            <img src={imagen} alt="Consejo felino" className="card-tip__img"/>
            <h3 className="card-tip__titulo">{titulo}</h3>
            <p className="card-tip__texto">{texto}</p>
        </div>
    );
};

export default CardTip;
