import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enContent from "./lang/en.json";
import esContent from "./lang/es.json";


i18n.use(initReactI18next) // Pasa la instancia de i18n a react-i18next
    .init({
    resources: {
        en: {
        translation: enContent // 'translation' es el namespace por defecto
        },
        es: {
        translation: esContent
        }
    },
    // Idioma por defecto si no se detecta otro o no se especifica
    lng: "es", 
    fallbackLng: "en", // Idioma de respaldo si una clave no se encuentra

    // Configuración de interpolación
    interpolation: {
        escapeValue: false 
    },

    debug: false, 
    });

export default i18n;