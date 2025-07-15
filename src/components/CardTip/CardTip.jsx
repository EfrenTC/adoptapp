import React from "react";
import './CardTip.css';

const CardTip = ({imagen, titulo, texto}) => {
    return (
        <div className="card-tip">
            <img src={imagen} alt="Consejo felino" className="card-tip__img"/>
            <h3 className="card-tip__titulo">{titulo}</h3>
            <p className="card-tip__texto">{texto}</p>
        </div>
    );
};

export default CardTip;
