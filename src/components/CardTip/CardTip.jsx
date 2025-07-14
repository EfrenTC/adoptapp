import React from "react";
import "./CardTip.css";

const CardTip = ({imagen, titulo, texto}) => {
    return (
        <div className="carg-tip">
            <img src="{imagen}" alt="Consejo felino" className="card-gato__img"/>
            <h3 className="card-gato__titulo">{titulo}</h3>
            <p className="card-gato__texto">{texto}</p>
        </div>
    );
};

export default CardTip;
