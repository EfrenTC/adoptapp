import React, { useEffect, useState } from 'react';
import CatCard from '../CatCard/CatCard';
import './Favoritos.css';

const Favoritos = () => {
  const [favCats, setFavCats] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favCats')) || [];
    setFavCats(stored);
  }, []);

  const removeFromFavorites = (catToRemove) => {
    const updated = favCats.filter(
      cat =>
        !(
          cat.name === catToRemove.name &&
          cat.breed === catToRemove.breed &&
          cat.imageUrl === catToRemove.imageUrl
        )
    );
    setFavCats(updated);
    localStorage.setItem('favCats', JSON.stringify(updated));
  };

  if (favCats.length === 0) {
    return <p className="favoritos__no-favs-msg">Aún no has marcado ningún gato como favorito :(
    </p>;
  }

  return (
    <div className="favoritos">
      <div className="favoritos__grid">
        {favCats.map((cat, index) => (
          <CatCard
            key={`${cat.name}-${index}`}
            name={cat.name}
            breed={cat.breed}
            imageUrl={cat.imageUrl}
            backgroundColor={cat.backgroundColor}
            onAdoptClick={() => alert(`¡Has adoptado a ${cat.name}!`)}
            isFavoriteView={true}
            onRemoveFavorite={() => removeFromFavorites(cat)}
            className="favoritos__item"
          />
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
