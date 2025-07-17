import React from 'react';
import CardTip from '../../components/CardTip/CardTip';
import "./Tips.css";
import '../../components/CardTip/CardTip.css';

// Importar solo los assets utilizados en el array de tips.
import gatoMaleta from '../../assets/img/Gato-maleta.png';
import gatoComida from '../../assets/img/gato-comida.png';
import gatoMuebles from '../../assets/img/gato-muebles.png';
import gatoJuguete from '../../assets/img/gato-juguete.png';

import { useTranslation } from 'react-i18next'; 

// Array de tips con claves de traducción
const tipsData = [
    {
        id: 'viaje', 
        imagen: gatoMaleta,
        tituloKey: "tipsPage.tip1_title",
        textoKey: "tipsPage.tip1_description" 
    },
    {
        id: 'aranazos',
        imagen: gatoMuebles,
        tituloKey: "tipsPage.tip2_title",
        textoKey: "tipsPage.tip2_description"
    },
    {
        id: 'alimentos',
        imagen: gatoComida,
        tituloKey: "tipsPage.tip3_title",
        textoKey: "tipsPage.tip3_description"
    },
    {
        id: 'juguetes',
        imagen: gatoJuguete,
        tituloKey: "tipsPage.tip4_title",
        textoKey: "tipsPage.tip4_description"
    },
];

const Tips = () => {
    const { t, i18n } = useTranslation(); 

    return (
        <main className="tips-pagina">
            <div className="tips-pagina__contenedor-cuerpo">
                {tipsData.map((card) => (
                    <CardTip
                        key={card.id}
                        imagen={card.imagen}
                        titulo={t(card.tituloKey)}
                        texto={t(card.textoKey)}
                        className="tip-card-animacion"
                        style={{ animationDelay: "0.25s"}}
                    />
                ))}
            </div>
        </main>
    
    );
};

export default Tips;
