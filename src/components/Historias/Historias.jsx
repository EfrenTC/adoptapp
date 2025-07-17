import React from 'react';
import './Historias.css';
import Angela from '../../assets/angela.jpg';
import Gato from '../../assets/gato.png';

const Historias = () => {
 
    const storiesData = [
        {
            id: 's1',
            title: 'AdoptApp: Pasillos llenos de sonrisas',
            content: 'AdoptApp vivió un día de adopción lleno de esperanza. Cientos de gatos, como el tímido Oliver y la juguetona Menta, esperaban un hogar. Los pasillos se llenaron de personas buscando una conexión especial: una niña adoptó a Oliver y una pareja a Menta. Al final del día, el refugio rebosaba de felicidad, ya que la mayoría de los gatos encontraron nuevos hogares, llenando los pasillos de sonrisas y la promesa de una vida plena.',
            imageUrl: Gato,
        },
        {
            id: 's2',
            title: 'Voluntarios: Héroes anónimos',
            content: ' Angela, una jubilada con una energía inagotable, es un claro ejemplo de estos héroes anónimos. Viene al refugio cinco días a la semana, sin falta. Conoce a cada gato por su nombre y su historia, y es experta en sacar un ronroneo incluso al más arisco. Pasa horas acariciando a los gatos más tímidos para ayudarles a superar su miedo, y se encarga de administrar medicamentos a aquellos que lo necesitan. Su dedicación es inmensurable.Sin voluntarios como Angela, la tarea de cuidar a tantos animales sería imposible',
            imageUrl: Angela,
        },
        {
            id: 's3',
            title: '2024: Un año récord para las adopciones',
            content: 'El 2024 ha traído una ola de esperanza a los albergues de gatos. Refugios como "Esperanza Felina" en Gijón han visto un aumento récord en las adopciones, casi duplicando las cifras del año anterior. Este éxito se debe a campañas de concienciación y un creciente cambio en la mentalidad de la gente, que ahora prefiere adoptar en lugar de comprar. Miles de gatos de todas las edades y personalidades han encontrado un nuevo hogar, transformando sus vidas y llenando de alegría a los voluntarios.',
            imageUrl: 'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2020/06/13035145/Office-Cat.jpg',
        },
        {
            id: 's4',
            title: 'Sobrepoblación : La Esterilización Salva Vidas',
            content: ' Enfrentabamos una crisis de sobrepoblación de gatitos abandonados cada primavera. Sin embargo, este año, una intensa campaña de concienciación sobre la esterilización felina liderada por voluntarios como Diego, cambió la situación Gracias a la campaña, menos camadas de gatitos llegaron al refugio, aliviando la presión sobre sus recursos y aumentando las posibilidades de adopción para los gatos existentes. Historias como la de "Luna", una gata callejera que fue esterilizada tras tener sus crías.',
            imageUrl: 'https://img.nbc.com/files/scet/photos/22/11728/Angelas_cats_03.JPG?impolicy=nbc_com&imwidth=1080&imdensity=1',
        },
    ];

    return (
        <div className="historias-pagina">
            <div className="historias-pagina__contenedor-cuerpo">
                {storiesData.map((story) => (
                    <article
                        key={story.id}
                        className="historia-articulo"
                        style={{ animationDelay: "0.25s"}} 
                    >
                        <img src={story.imageUrl} alt={story.title} className="historia-articulo__imagen" />
                        <h2 className="historia-articulo__titulo">{story.title}</h2>
                        <p className="historia-articulo__texto">{story.content}</p>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Historias;