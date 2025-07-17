import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; 

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

  // Función para alternar el idioma
    const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    };

    const buttonText = i18n.language === 'es' ? t('common.spanish') : t('common.english');

    return (
        <button 
        className="language-switcher-button" 
        onClick={toggleLanguage}
    >
        {buttonText}
        </button>
    );
};

export default LanguageSwitcher;