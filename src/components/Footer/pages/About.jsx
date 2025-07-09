import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-container">
      <div className="about-content">
        <h1>Quiénes somos</h1>
        <p className="intro">
          Somos un equipo multidisciplinar que combina pasión por el desarrollo web y el amor por los animales.
        </p>

        <section className="cards-grid">
          <article className="team-card">
            <img src="/img/ivan.jpg" alt="Iván" className="profile-pic" />
            <h2>Iván</h2>
            <p>Especialista en backend con Laravel, Node.js y MySQL. Le encanta automatizar procesos y asegurar una buena arquitectura de código.</p>
          </article>

          <article className="team-card">
            <img src="/img/vanderlene.jpg" alt="Vanderlene" className="profile-pic" />
            <h2>Vanderlene</h2>
            <p>Diseñadora UI/UX y desarrolladora front-end con experiencia en Figma, TailwindCSS y React. Siempre centrada en la experiencia del usuario.</p>
          </article>

          <article className="team-card">
            <img src="src\assets\Milca.jpg" alt="Milca" className="profile-pic" />
            <h2>Milca</h2>
            <p>Gestora de proyectos y QA. Se asegura de que todo funcione con metodologías ágiles, testeo manual y automatizado. Usa Jira, Trello y Postman.</p>
          </article>

          <article className="team-card">
            <img src="src\assets\Efren.jpg" alt="Efren" className="profile-pic" />
            <h2>Efren</h2>
            <p>Fullstack con experiencia en Angular, Spring Boot y PostgreSQL. Tranquilo y resolutivo, experto en depurar y optimizar código.</p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default About;
