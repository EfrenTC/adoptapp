import React, { useState, useEffect } from 'react';
import './CatCard.css';

const CatCard = ({
  name,
  breed,
  imageUrl,
  onAdoptClick,
  className = '',
  isFavoriteView = false,
  onRemoveFavorite = () => {}
}) => {
  const [color, setColor] = useState('white');
  const [animateHeart, setAnimateHeart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favCats')) || [];
    const isAlreadyFav = favs.some(cat =>
      cat.name === name &&
      cat.breed === breed &&
      cat.imageUrl === imageUrl
    );
    if (isAlreadyFav) setColor('#F87171');
  }, [name, breed, imageUrl]);

  function fav() {
    setColor('#F87171');
    const favs = JSON.parse(localStorage.getItem('favCats')) || [];
    const exists = favs.some(cat =>
      cat.name === name &&
      cat.breed === breed &&
      cat.imageUrl === imageUrl
    );
    if (!exists) {
      favs.push({ name, breed, imageUrl });
      localStorage.setItem('favCats', JSON.stringify(favs));
    }
  }

  function unFav() {
    setColor('white');
    const favs = JSON.parse(localStorage.getItem('favCats')) || [];
    const updated = favs.filter(cat =>
      !(cat.name === name && cat.breed === breed && cat.imageUrl === imageUrl)
    );
    localStorage.setItem('favCats', JSON.stringify(updated));
  }

  function handleHeartClick() {
    setAnimateHeart(true);
    setTimeout(() => setAnimateHeart(false), 300);

    if (isFavoriteView) {
      onRemoveFavorite();
    } else {
      color === 'white' ? fav() : unFav();
    }
  }

  return (
    <div className={`cat-card ${className}`}>
      {showModal && (
        <div className="cat-card__modal-overlay">
          <div className="cat-card__modal">
            <h3>¿Quieres adoptar a {name}?</h3>
            <p>Serás redirigido al formulario de adopción.</p>
            <div className="cat-card__modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancelar</button>
              <button
                onClick={() => {
                  onAdoptClick(name);
                  setShowModal(false);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cat-card__heart-container">
        <svg
          data-testid="heart-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={color}
          className={`cat-card__heart ${animateHeart ? 'cat-card__heart--animate' : ''}`}
          onClick={handleHeartClick}
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>

      <div className="cat-card__image-container">
        <img
          src={imageUrl}
          alt={`Imagen de ${name || "Gatito"}`}
          className="cat-card__image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/E0E0E0/333333?text=Imagen+no+disponible";
          }}
        />
      </div>

      <div className="cat-card__info">
        <h2 className="cat-card__name">{name}</h2>
        <p className="cat-card__breed">{breed}</p>
        <button onClick={() => setShowModal(true)} className="cat-card__button">
          Adóptame
        </button>
      </div>
    </div>
  );
};

export default CatCard;
