// src/pages/CardsPage.jsx
import React from "react";
import { useNavigate } from 'react-router-dom'; 
import Api from '../services/Api'

export const CardsPage = () => {
    const navigate = useNavigate(); 

    
    const handleAdoptClick = (catName) => {
        console.log(`¡Botón "Adóptame" clicado para: ${catName}! Redirigiendo al formulario...`);
       
        navigate('/adopcion');
    };

    return (
        <div className="cards-page-wrapper"> 
       
            <Api onAdoptClick={handleAdoptClick} />
        </div>
    );
};

export default CardsPage;
