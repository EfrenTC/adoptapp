import React, { useEffect, useState } from 'react'

export default function Api() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
                const json = await response.json()
                setData(json)

            } catch (error) {
                console.error('Error en la llamada de la API.', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

if (loading) return <p>Cargando...</p>;
if (!data) return <p>No hay datos</p>;
return (
  <div>
    {data.map((cat, idx) => (
      <img key={idx} src={cat.url} alt="Gato" width={200} />
    ))}
  </div>
);
}