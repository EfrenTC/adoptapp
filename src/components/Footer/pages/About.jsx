import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about">
      <div className="about__content">
        <h1 className="about__title">Quiénes somos</h1>
        <p className="about__intro">
          Somos un equipo multidisciplinar que combina pasión por el desarrollo web y el amor por los animales.
        </p>
      </div>

      <section className="about__cards-grid">
        <article className="team-card">
          <img src="/src/assets/ivan.jpg" alt="Iván" className="team-card__profile-pic" />
          <h2 className="team-card__name">Iván</h2>
          <p className="team-card__description">
            Fullstack especialista en backend con Laravel, Node.js y MySQL. Le encanta automatizar procesos y asegurar una buena arquitectura de código.
          </p>
        </article>

        <article className="team-card">
          <img src="src/assets/Vanderlene.jpg" alt="Vanderlene" className="team-card__profile-pic" />
          <h2 className="team-card__name">Vanderlene</h2>
          <p className="team-card__description">
            Diseñadora UI/UX y desarrolladora front-end con experiencia en Figma, TailwindCSS y React. Siempre centrada en la experiencia del usuario.
          </p>
        </article>

        <article className="team-card">
          <img src="src/assets/Milca.jpg" alt="Milca" className="team-card__profile-pic" />
          <h2 className="team-card__name">Milca</h2>
          <p className="team-card__description">
            Gestora de proyectos y QA. Se asegura de que todo funcione con metodologías ágiles, testeo manual y automatizado. Usa Jira, Trello y Postman.
          </p>
        </article>

        <article className="team-card">
          <img src="src/assets/Efren.jpg" alt="Efren" className="team-card__profile-pic" />
          <h2 className="team-card__name">Efren</h2>
          <p className="team-card__description">
            Fullstack con experiencia en Angular, Spring Boot y PostgreSQL. Tranquilo y resolutivo, experto en depurar y optimizar código.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
