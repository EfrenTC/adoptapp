import React from "react";
import './CardTip.css';

// MODIFICACIÓN CLAVE AQUÍ: Acepta 'className' y 'style' como props adicionales
const CardTip = ({ imagen, titulo, texto, className, style }) => { 
    return (
        <div className="card-tip">
            <img src={imagen} alt="{titulo}" className="card-tip__img"/>
            <h3 className="card-tip__titulo">{titulo}</h3>
            <p className="card-tip__texto">{texto}</p>
        </div>
    );
};

export default CardTip;
