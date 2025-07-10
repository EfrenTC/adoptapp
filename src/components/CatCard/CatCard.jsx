// src/components/CatCard/CatCard.jsx
import React from 'react';
import './CatCard.css'; // Importa los estilos CSS de CatCard

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
  return (
    <div className={`cat-card ${className}`}>
      {/* Contenedor de la imagen del gatito */}
      <div className="cat-image-container">
        <img
          src={imageUrl} // La URL de la imagen se pasa como una prop
          alt={`Imagen de ${name || "Gatito"}`} // Texto alternativo para accesibilidad. No se muestra visualmente a menos que la imagen falle.
          className="cat-image"
          onError={(e) => {
            e.target.onerror = null; // Evita bucles infinitos si la imagen no carga
            e.target.src = "https://placehold.co/400x300/E0E0E0/333333?text=Imagen+no+disponible"; // Imagen de reemplazo
          }}
        />
        {/* El icono del corazón se ha omitido para simplificar, como pediste por ahora. */}
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


