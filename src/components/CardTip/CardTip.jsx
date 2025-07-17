import React from "react";
import './CardTip.css';

const CardTip = ({imagen, titulo, texto}) => {
    return (
        <div className="card-tip">
<<<<<<< HEAD
            <img src={imagen} alt="{titulo}" className="card-tip__img"/>
            <h3 className="card-tip__titulo">{titulo}</h3>
=======
            <img src={imagen} alt="Consejo felino" className="card-tip__img"/>
            <h2 className="card-tip__titulo">{titulo}</h2>
>>>>>>> dev
            <p className="card-tip__texto">{texto}</p>
        </div>
    );
};

export default CardTip;
