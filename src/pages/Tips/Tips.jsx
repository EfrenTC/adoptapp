import React from 'react';
import CardTip from '../../components/CardTip/CardTip';
import "./Tips.css";
import '../../components/CardTip/CardTip.css';

import gatoMaleta from '../../assets/img/Gato-maleta.png';
import gatoComida from '../../assets/img/gato-comida.png';
import gatoMuebles from '../../assets/img/gato-muebles.png';
import gatoJuguete from '../../assets/img/gato-juguete.png';

import { useTranslation } from 'react-i18next';


//Array de tips con claves de traducción
const tipsData = [
    {
        id: 'viaje', // ID único para la key de React
        imagen: gatoMaleta,
        tituloKey: "tipsPage.tip1_title", // Clave de traducción 
        textoKey: "tipsPage.tip1_description" // Clave de traducción 
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
    // Usa el hook useTranslation para acceder a la función 't' y a la instancia 'i18n'
    const { t, i18n } = useTranslation();

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="tips-page-container"> {/* Contenedor general de la página de tips */}
            {/* Selector de idioma */}
            <div className="language-selector">
                <span className="language-selector__label">{t('tipsPage.language_selector')}</span>
                <button 
                    className={`language-selector__button ${i18n.language === 'en' ? 'language-selector__button--active' : ''}`} 
                    onClick={() => changeLanguage('en')}
                >
                    {t('common.english')}
                </button>
                <button 
                    className={`language-selector__button ${i18n.language === 'es' ? 'language-selector__button--active' : ''}`} 
                    onClick={() => changeLanguage('es')}
                >
                    {t('common.spanish')}
                </button>
            </div>

            {/* El contenedor principal de los tips */}
            <main className="tips"> {/* Usamos <main> semánticamente */}
                {tipsData.map((card) => ( // Usamos tipsData
                    <CardTip
                        key={card.id} // Usamos el ID único como key
                        imagen={card.imagen}
                        // Pasamos las props 'titulo' y 'texto' ya traducidas usando t()
                        titulo={t(card.tituloKey)} 
                        texto={t(card.textoKey)}
                    />
                ))}
            </main>
        </div>
    );
};

export default Tips;
