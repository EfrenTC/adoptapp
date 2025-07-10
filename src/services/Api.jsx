import React, { useEffect, useState } from 'react';
import Card from '../components/CatCard/CatCard'

export default function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  Obtención de las imágenes de los gatos con la llamada la api
        const catRes = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const cats = await catRes.json();

        // Obtención de nombres aleatorios para asociarlos a los gatos
        const nameRes = await fetch('https://randomuser.me/api/?results=10');
        const namesJson = await nameRes.json();
        const names = namesJson.results.map((user) => user.name.first);

        // Combinación de los arrays
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
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!data) return <p>No hay datos</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
    {data.map((cat, idx) => (
      <Card
        key={idx}
        name={cat.name}
        breed={cat.breeds && cat.breeds[0] ? cat.breeds[0].name : 'Desconocida'}
        imageUrl={cat.url}
        onAdoptClick={() => alert(`¡Has adoptado a ${cat.name}!`)}
      />
    ))}
  </div>
  );
}