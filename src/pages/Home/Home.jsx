import React, { useContext } from 'react';
import Slider from '../../components/Slider/Slider';
import './Home.css';
import logo1 from '../../assets/logo1.png';
import logo3 from '../../assets/logo3.png'; 
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext); 
  const logo = theme === 'dark' ? logo3 : logo1;

  return (
    <div className={`home ${theme === 'dark' ? 'home--dark' : ''}`}>
      <img src={logo} alt="logo" className="home__logo" />
      <Slider />

      <div className="home__container">
        <h1>¿Qué hacemos?</h1>
        <p>
          En el corazón de Asturias nace un proyecto lleno de amor, compromiso y esperanza...
        </p>

        <ul className="home__list">
          <li>🐱 Historias reales de adopciones...</li>
          <li>💡 Consejos útiles para el cuidado responsable...</li>
          <li>❤️ Una sección de donaciones...</li>
          <li>📍 Y todo esto desde Asturias...</li>
        </ul>

        <p>
          Cada vez que visitas nuestra web, compartes una publicación...
        </p>
      </div>
    </div>
  );
};

export default Home;
