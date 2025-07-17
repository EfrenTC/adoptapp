import React, { useEffect, useState } from 'react';
import Card from '../components/CatCard/CatCard';
import './Api.css';
import { useNavigate } from 'react-router-dom'; 

export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_CAT_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {

        const catRes = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1', {
          headers: {
            'x-api-key': apiKey
          }
        });
        const cats = await catRes.json();

        const nameRes = await fetch('https://randomuser.me/api/?results=12');
        const namesJson = await nameRes.json();
        const names = namesJson.results.map((user) => `${user.name.first}`);

        const combined = cats.map((cat, index) => ({
          ...cat,
          name: names[index] || 'Gatito'
        }));

        setData(combined);
      } catch (error) {
        console.error('Error en las llamadas a las APIs.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey]);

  if (loading) {
    return (
      <div className="spinner__container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="nodata__container">
        <p className="nodata__message">No se encontraron gatitos</p>
      </div>
    );
  }

  return (
    <div className="cards__container">
      {data.map((cat, idx) => (
        <Card
          key={idx}
          name={cat.name}
          breed={cat.breeds && cat.breeds[0] ? cat.breeds[0].name : 'Desconocida'}
          imageUrl={cat.url}
          onAdoptClick={() => {
            navigate('/formulario-adopcion');
          }}
        />
      ))}
    </div>
  );
}