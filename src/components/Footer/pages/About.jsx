import React from 'react';
import './About.css'; // Asegúrate de crear este archivo si quieres añadir estilos personalizados

const About = () => {
  return (
    <main className="about-container">
      <h1>Quiénes somos</h1>
      <p className="intro">Somos un equipo comprometido con el desarrollo web y el bienestar animal. Conoce a las personas detrás de esta iniciativa:</p>

      <section className="cards-container">

        <article className="team-card">
          <h2>Iván</h2>
          <p>Desarrollador web apasionado por la lógica y la estructura del código. Le encanta trabajar en equipo y proponer soluciones técnicas eficientes. Es quien más se pelea con el Git 😅.</p>
        </article>

      
        <article className="team-card">
          <h2>Vanderlene</h2>
          <p>Creativa y detallista, destaca por su enfoque en el diseño visual y la experiencia de usuario. Siempre aporta calidez al equipo y asegura que todo quede bonito y funcional. 💖</p>
        </article>

       
        <article className="team-card">
          <h2>Milca</h2>
          <p>Muy organizada, siempre pendiente de que el trabajo esté bien repartido. Le encanta darle sentido y coherencia a cada sección del proyecto. Gran compañera y excelente comunicadora. ✨</p>
        </article>

       
        <article className="team-card">
          <h2>Efren</h2>
          <p>Programador tranquilo y resolutivo, siempre aporta ideas útiles y mantiene la calma incluso en los commits más tensos. Se encarga de pulir detalles con buena lógica. 💻</p>
        </article>
      </section>
    </main>
  );
};

export default About;
