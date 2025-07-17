import React from 'react';
import CardTip from '../../components/CardTip/CardTip';
import "./Tips.css";
// Importar solo los assets utilizados en el array de tips.
import gatoMaleta from '../../assets/img/Gato-maleta.png';
import gatoComida from '../../assets/img/gato-comida.png';
import gatoMuebles from '../../assets/img/gato-muebles.png';
import gatoJuguete from '../../assets/img/gato-juguete.png';


const tips = [
    {
        // NO HAY 'id' AQUÍ, como lo tenías originalmente
        imagen: gatoMaleta,
        titulo: "¿Qué debes tener en cuenta si vas a viajar con tu gato?",
        texto: `Salud y papeles: Asegúrate de que esté sano y con todas sus vacunas y documentos al día.
Destino: Infórmate de los requisitos si viajas al extranjero y verifica si tu alojamiento acepta mascotas.
Durante el viaje: Lleva un transportín, minimiza el tiempo que esté solo y mantenlo siempre bajo control.Salud y papeles: Asegúrate de que esté sano y con todas sus vacunas y documentos al día.
Destino: Infórmate de los requisitos si viajas al extranjero y verifica si tu alojamiento acepta mascotas.
Durante el viaje: Lleva un transportín, minimiza el tiempo que esté solo y mantenlo siempre bajo control.`
    },
    {
        imagen: gatoMuebles,
        titulo: "Mi gato araña el sofá. ¿Cómo evitarlo?",
        texto: `Los gatos arañan por varias razones. Se rascan para quitar la capa exterior vieja y muerta de sus garras. También rascan para marcar su territorio y como forma de comunicación.
        Hay muchos productos en el mercado para ayudar a como evitar que un gato arañe los muebles. Un producto popular que son como un producto que hace como unas tapas de plástico, que cubren las garras de un gato, que puedes pedirle a tu veterinario que se lo aplique.
        Otra opción es usar un poste o un árbol para rascar para redirigir su atención lejos de sus muebles y hacia algo que puedan rascar en su lugar. Algunos gatos rascarán sus postes y árboles más que otros, dependiendo de cuánto les guste y de la frecuencia con la que los reemplaces con nuevos postes o árboles.`
    },
    {
        imagen: gatoComida,
        titulo: "10 alimentos prohibidos para gatos",
        texto: `A diferencia de los humanos, los gatos son carnívoros estrictos. Esto significa que su metabolismo está diseñado para obtener los nutrientes esenciales exclusivamente de la proteína animal. 
        Por tanto, deberías evitar:
        Cafeína (café, té, bebidas energéticas): Puede causar hiperactividad, problemas cardíacos, temblores y convulsiones.
        Chocolate: Contiene sustancias tóxicas que provocan vómitos, diarrea, temblores y hasta fallo cardíaco.
        Cebolla y ajo: Dañan los glóbulos rojos, lo que puede causar anemia y problemas respiratorios.
        Uvas y pasas: Son tóxicas en cualquier cantidad y pueden llevar a un fallo renal agudo.
        Alcohol: Es extremadamente peligroso y puede causar coma y la muerte.
        Huesos cocidos: Se rompen fácilmente y pueden provocar asfixia o perforaciones internas.
        Comida para perros: No tiene los nutrientes esenciales que tu gato necesita, lo que puede llevar a problemas de salud a largo plazo.
        Atún enlatado (en exceso): No es nutricionalmente completo para gatos y puede causar deficiencias.
        Carnes procesadas (embutidos): Su alto contenido en grasas, sal y aditivos es perjudicial y puede causar problemas digestivos o hepáticos.
        Xilitol (edulcorante): Este ingrediente común en productos dulces puede causar una bajada grave de azúcar en la sangre, provocando temblores y convulsiones.`
    },
    {
        imagen: gatoJuguete,
        titulo: "Los mejores juguetes para gatos",
        texto: 'Nuestra mascota es única y esto se vuelve aún más cierto con los felinos. Por esa razón, siempre queremos comprar los mejores juguetes para gatos, siempre pensando en su diversión y en lo feliz que se sentirán una vez los descubra. Recuerda que cada gato es diferente y cuenta con su personalidad propia, por cual a la hora de elegir los mejores juguetes para gatos debes tener en cuenta lo que le gusta o con las cosas que más le entretiene.          Ratones de juguetes: Suelen estar fabricados de múltiples materiales entre ellos tela, plástico e incluso madera. No obstante, esta es una opción que no entretiene mucho a los felinos. Paz suave: Los peces suaves con diseños realistas siempre serán una buena opción de juguetes para tu gato, sobre todo porque son interactivos y algunos de ellos cuentan con sensores táctiles incorporados.          Juguetes con plumas: Todos estos juguetes han sido fabricados libres de todo elemento tóxico, por lo cual son muy seguros para tu gato. Además, son muy resistentes, duraderos y cualquier persona los puede manejar.'
    },
];

const Tips = () => {
    return (
        <main className="tips-pagina">
            <div className="tips-pagina__contenedor-cuerpo">
                {tips.map((card, index) => ( // Seguimos usando 'index' aquí
                    <CardTip
                        key={index} 
                        imagen={card.imagen}
                        titulo={card.titulo}
                        texto={card.texto}
                        className="tip-card-animacion"
                         style={{ animationDelay: "0.25s"}} 
                    />
                ))}
            </div>
        </main>
    );
};

export default Tips;