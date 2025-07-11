
import React, { useEffect, useState } from 'react';
import './Slider.css';

const Slider = () => {
   const [cats, setCats] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const result = await response.json();
        setCats(result);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  const next = () => {
    if (startIndex + visibleCount < cats.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCats = cats.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="slider">
      <button onClick={prev} className="slider__button slider__button--prev">←</button>

      <div className="slider__track">
        {visibleCats.map((cat) => (
          <div className="slider__card" key={cat.id}>
            <img className="slider__image" src={cat.url} alt="Cute cat" />
            <div className="slider__content">
            </div>
          </div>
        ))}
      </div>

      <button onClick={next} className="slider__button slider__button--next">→</button>
    </div>
  );
};


export default Slider
