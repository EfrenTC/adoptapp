import React from 'react';
import CardTip from '../../components/CardTip/CardTip';
import "./Tips.css";

const tips = [
    {
        imagen: "",
        título: "",
        texto: ``
    },
    {
        imagen: "",
        título: "",
        texto: ``
    },
    {
        imagen: "",
        título: "",
        texto: ``
    },
];

const Tips = () => {
    return (
        <main className="tips">
            {tips.map((card, i) => (
                <CardTip
                key={i}
                imagen={card.imagen}
                titulo={card.titulo}
                texto={card.texto}
                />
            ))}
        </main>
    );
};

export default Tips