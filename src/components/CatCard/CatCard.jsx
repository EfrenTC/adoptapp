// src/components/CatCard/CatCard.jsx
import React, { useState } from 'react';
import './CatCard.css'; 

/**
 * Componente de tarjeta de gatito.
 * Muestra la información de un gatito con nombre, raza, imagen y color de fondo personalizables.
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.name - El nombre del gatito.
 * @param {string} props.breed - La raza del gatito.
 * @param {string} props.imageUrl - La URL de la imagen del gatito.
 * @param {string} [props.backgroundColor='#e0f2fe'] - Color de fondo para la sección de información.
 * @param {function} props.onAdoptClick - Función a ejecutar cuando se hace clic en el botón "Adóptame".
 * @param {string} [props.className=''] - Clases CSS adicionales para personalizar el estilo de la tarjeta.
 */
const CatCard = ({ name, breed, imageUrl, backgroundColor = '#e0f2fe', onAdoptClick, className = '' }) => {
 const [color, setColor] = useState('white')

 function fav () {
 setColor('#F87171')
 }

 function unFav() {
  setColor('white')
 }

  return (
<div className={`cat-card ${className}`}>
  {/* Contenedor del corazón en la esquina */}
  <div className="heart-container">
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="card-heart" onClick={ color==='white' ? fav : unFav }>
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  </div>
  {/* Contenedor de la imagen del gatito */}
  <div className="cat-image-container">
    <img
      src={imageUrl}
      alt={`Imagen de ${name || "Gatito"}`}
      className="cat-image"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/400x300/E0E0E0/333333?text=Imagen+no+disponible";
      }}
    />
  </div>
      {/* Sección de información del gatito */}
      {/* ¡IMPORTANTE! Aquí se aplica el color de fondo dinámicamente */}
      <div className="cat-info" style={{ backgroundColor: backgroundColor }}>
        <h2 className="cat-name">{name}</h2> {/* El nombre del gatito se pasa como una prop */}
        <p className="cat-breed">{breed}</p> {/* La raza del gatito se pasa como una prop */}
        <button
          onClick={onAdoptClick} // La función de clic para el botón se pasa como una prop
          className="adopt-btn" // Clase específica para el botón de adopción (definida en CatCard.css)
        >
          Adóptame
        </button>
      </div>
    </div>
  );
};

export default CatCard;


