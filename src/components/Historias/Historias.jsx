// src/components/Historias/Historias.jsx (Actualizado con clases BEM)
import React from 'react';
import { Link } from 'react-router-dom';
import './Historias.css'; // Asegúrate de que este archivo CSS existe y está correcto

const Historias = () => {
  const storiesData = [
    // ... tus datos storiesData permanecen igual ...
    {
      id: 's1',
      title: 'Pasillos llenos de sonrisas:',
      content: 'AdoptApp vivió un día de adopción lleno de esperanza. Cientos de gatos, como el tímido Oliver y la juguetona Menta, esperaban un hogar. Los pasillos se llenaron de personas buscando una conexión especial: una niña adoptó a Oliver y una pareja a Menta. Al final del día, el refugio rebosaba de felicidad, ya que la mayoría de los gatos encontraron nuevos hogares, llenando los pasillos de sonrisas y la promesa de una vida plena.',
      imageUrl: 'https://bestfriends.org/sites/default/files/styles/40_desktop/public/2023-04/ToastTacoMarcelaRamos0407LF.jpg?h=adc48829&itok=z3ViilMM',
      link: '/historias/evento-adopcion'
    },
    {
      id: 's2',
      title: 'El impacto de los voluntarios: Héroes anónimos',
      content: '',
      imageUrl: 'https://estaticos-cdn.prensaiberica.es/clip/f485e018-9948-4cae-8202-818c3bd4fab8_alta-libre-aspect-ratio_default_0_x1259y460.jpg',
      link: '/historias/incendios-forestales'
    },
    {
      id: 's3',
      title: '2024: Un año récord para las adopciones de gatos',
      content: 'El 2024 ha traído una ola de esperanza a los albergues de gatos. Refugios como "Esperanza Felina" en Gijón han visto un aumento récord en las adopciones, casi duplicando las cifras del año anterior. Este éxito se debe a campañas de concienciación y un creciente cambio en la mentalidad de la gente, que ahora prefiere adoptar en lugar de comprar. Miles de gatos de todas las edades y personalidades han encontrado un nuevo hogar, transformando sus vidas y llenando de alegría a los voluntarios. Es un año de celebración para la comunidad felina, demostrando el poder de la compasión.',
      imageUrl: 'https://www.folhadelondrina.com.br/img/Artigo-Destaque/3260000/400x0/Cafe-promove-adocao-de-gatos-em-Londrina0326448500202409041834-14.webp?fallback=https%3A%2F%2Fwww.folhadelondrina.com.br%2Fimg%2FArtigo-Destaque%2F3260000%2FCafe-promove-adocao-de-gatos-em-Londrina0326448500202409041834.jpg%3Fxid%3D6116669&xid=6116669',
      link: '/historias/adopciones-2024'
    },
    {
      id: 's4',
      title: 'El impacto de los voluntarios: Héroes anónimos',
      content: 'Los voluntarios son el corazón de nuestra misión...',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/333333?text=Voluntarios',
      link: '/historias/voluntarios'
    },
    {
      id: 's5',
      title: 'Consejos para la integración de una nueva mascota',
      content: 'Adoptar una mascota es solo el primer paso...',
      imageUrl: 'https://placehold.co/400x250/FFECB3/8D6E63?text=Integracion+Mascota',
      link: '/historias/consejos-integracion'
    },
    {
      id: 's6',
      title: 'Beneficios de adoptar un animal mayor',
      content: 'Los animales mayores a menudo son pasados por alto...',
      imageUrl: 'https://placehold.co/400x250/D1C4E9/512DA8?text=Adopcion+Mayor',
      link: '/historias/animal-mayor'
    }
  ];

  return (
    <div className="historias-pagina"> {/* BLOQUE: Renombrado a historias-pagina */}
      <h1 className="historias-pagina__titulo">Historias</h1> {/* ELEMENTO: historias-pagina__titulo */}
      {/* Contenido de las historias organizado en una cuadrícula */}
      <div className="historias-pagina__contenedor-cuerpo"> {/* ELEMENTO: historias-pagina__contenedor-cuerpo */}
        {storiesData.map(story => (
          <article key={story.id} className="historia-articulo"> {/* BLOQUE ANIDADO: historia-articulo */}
            <img src={story.imageUrl} alt={story.title} className="historia-articulo__imagen" /> {/* ELEMENTO: historia-articulo__imagen */}
            <h2 className="historia-articulo__titulo">{story.title}</h2> {/* ELEMENTO: historia-articulo__titulo */}
            <p className="historia-articulo__texto">{story.content}</p> {/* ELEMENTO: historia-articulo__texto */}
           
          </article>
        ))}
      </div>
    </div>
  );
};

export default Historias;