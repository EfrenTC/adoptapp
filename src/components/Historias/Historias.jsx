import React from 'react';
import { Link } from 'react-router-dom';
import './Historias.css';

const Historias = () => {
    const storiesData = [
        {
            id: 's1',
            title: 'AdoptApp: Pasillos llenos de sonrisas',
            content: 'AdoptApp vivió un día de adopción lleno de esperanza. Cientos de gatos, como el tímido Oliver y la juguetona Menta, esperaban un hogar. Los pasillos se llenaron de personas buscando una conexión especial: una niña adoptó a Oliver y una pareja a Menta. Al final del día, el refugio rebosaba de felicidad, ya que la mayoría de los gatos encontraron nuevos hogares, llenando los pasillos de sonrisas y la promesa de una vida plena.',
            imageUrl: 'https://bestfriends.org/sites/default/files/styles/40_desktop/public/2023-04/ToastTacoMarcelaRamos0407LF.jpg?h=adc48829&itok=z3ViilMM',
        },
        {
            id: 's2',
            title: 'Voluntarios: Héroes anónimos',
            content: ' Ana, una jubilada con una energía inagotable, es un claro ejemplo de estos héroes anónimos. Viene al refugio cinco días a la semana, sin falta. Conoce a cada gato por su nombre y su historia, y es experta en sacar un ronroneo incluso al más arisco. Pasa horas acariciando a los gatos más tímidos para ayudarles a superar su miedo, y se encarga de administrar medicamentos a aquellos que lo necesitan. Su dedicación es inmensurable.Sin voluntarios como Ana, la tarea de cuidar a tantos animales sería imposible',
            imageUrl: 'https://estaticos-cdn.prensaiberica.es/clip/f485e018-9948-4cae-8202-818c3bd4fab8_alta-libre-aspect-ratio_default_0_x1259y460.jpg',
        },
        {
            id: 's3',
            title: '2024: Un año récord para las adopciones',
            content: 'El 2024 ha traído una ola de esperanza a los albergues de gatos. Refugios como "Esperanza Felina" en Gijón han visto un aumento récord en las adopciones, casi duplicando las cifras del año anterior. Este éxito se debe a campañas de concienciación y un creciente cambio en la mentalidad de la gente, que ahora prefiere adoptar en lugar de comprar. Miles de gatos de todas las edades y personalidades han encontrado un nuevo hogar, transformando sus vidas y llenando de alegría a los voluntarios.',
            imageUrl: 'https://www.folhadelondrina.com.br/img/Artigo-Destaque/3260000/400x0/Cafe-promove-adocao-de-gatos-em-Londrina0326448500202409041834-14.webp?fallback=https%3A%2F%2Fwww.folhadelondrina.com.br%2Fimg%2FArtigo-Destaque%2F3260000%2FCafe-promove-adocao-de-gatos-em-Londrina0326448500202409041834.jpg%3Fxid%3D6116669&xid=6116669',
        },
        {
            id: 's4',
            title: 'Sobrepoblación : La Esterilización Salva Vidas',
            content: ' Enfrentabamos una crisis de sobrepoblación de gatitos abandonados cada primavera. Sin embargo, este año, una intensa campaña de concienciación sobre la esterilización felina liderada por voluntarios como Ana, cambió la situación Gracias a la campaña, menos camadas de gatitos llegaron al refugio, aliviando la presión sobre sus recursos y aumentando las posibilidades de adopción para los gatos existentes. Historias como la de "Luna", una gata callejera que fue esterilizada tras tener sus crías.',
            imageUrl: 'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/las-gatas-entienden-mejor-que-los-gatos-el-llanto-de-sus-crias/5763989-6-esl-MX/Las-gatas-entienden-mejor-que-los-gatos-el-llanto-de-sus-crias.jpg',
        },
    ];
    return (
        <div className="historias-pagina">
            <div className="historias-pagina__contenedor-cuerpo">
                {storiesData.map(story => (
                    <article key={story.id} className="historia-articulo">
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