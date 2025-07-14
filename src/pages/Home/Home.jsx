
import React from 'react'
import Slider from '../../components/Slider/Slider';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="home__container">
        <h1>¿Qué hacemos?</h1>
        <p>En el corazón  de Asturias nace un proyecto lleno de amor, compromiso y esperanza. Somos una iniciativa dedicada a rescatar, cuidar y buscar un hogar definitivo para gatitos que han sido abandonados, maltratados o que simplemente han tenido un mal comienzo en la vida. <br />

          Nuestro objetivo es sencillo pero poderoso: conectar a estos pequeños felinos con personas que estén dispuestas a darles una segunda oportunidad. Creemos que cada gato merece un hogar cálido, una cama cómoda y alguien que lo quiera para siempre. Y también creemos que cada persona que adopta un gato cambia su vida para mejor. <br />

          En esta página encontrarás mucho más que un listado de gatos en adopción. Aquí compartimos: 

          </p>

          <ul className="home__list"> 

          <li>🐱 Historias reales de adopciones que han sido un antes y un después tanto para los gatos como para las personas que los acogieron.</li>

          <li>💡 Consejos útiles para el cuidado responsable de un gato, desde cómo prepararte para la adopción hasta salud, alimentación y comportamiento.</li>

          <li>❤️ Una sección de donaciones, donde puedes colaborar para que podamos seguir ofreciendo atención veterinaria, alimento, refugio y cariño a todos los gatitos que lo necesiten.</li>
          <li>📍 Y todo esto desde Asturias, trabajando con protectoras, casas de acogida y voluntarios que día a día ponen su tiempo y corazón al servicio de los animales.</li>

          </ul>


          <p>

          Cada vez que visitas nuestra web, compartes una publicación o haces una donación, nos ayudas a salvar vidas. No necesitas adoptar para formar parte del cambio: hay muchas formas de ayudar, y todas cuentan.

          Gracias por creer en lo que hacemos. Gracias por dar voz a quienes no la tienen.
          Juntos, podemos cambiar el destino de muchos gatitos.</p>
      </div>
    </div>
  )
}

export default Home
