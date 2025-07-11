import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <main className="terms">
      <section className="terms__content">
        <h1 className="terms__title">Términos y Condiciones</h1>

        <p className="terms__text">
          Bienvenido a <strong>Adoptapp</strong>. Al utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos con atención.
        </p>

        <article className="terms__section">
          <h2 className="terms__subtitle">1. Uso del sitio</h2>
          <p className="terms__text">
            Este sitio tiene como objetivo promover la adopción responsable de gatitos y ofrecer información útil sobre el proceso. El uso de la web debe ser siempre con fines personales, educativos o informativos.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">2. Contenido</h2>
          <p className="terms__text">
            Las imágenes y descripciones de los gatitos provienen de fuentes externas y se utilizan con fines demostrativos. No garantizamos la disponibilidad real de los gatitos mostrados.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">3. Propiedad intelectual</h2>
          <p className="terms__text">
            Todo el contenido generado por el equipo de <strong>Adoptapp</strong> (textos, diseño, código) está protegido por derechos de autor. No está permitida su reproducción sin autorización previa.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">4. Modificaciones</h2>
          <p className="terms__text">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones se publicarán en esta misma página.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">5. Limitación de responsabilidad</h2>
          <p className="terms__text">
            Este sitio se proporciona “tal cual”. No nos hacemos responsables por errores, interrupciones del servicio o consecuencias derivadas del uso del sitio.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">6. Enlaces externos</h2>
          <p className="terms__text">
            Podemos incluir enlaces a sitios de terceros. No tenemos control sobre su contenido ni políticas, por lo que recomendamos leer sus propios términos y condiciones.
          </p>
        </article>

        <article className="terms__section">
          <h2 className="terms__subtitle">7. Contacto</h2>
          <p className="terms__text">
            Si tienes dudas sobre estos términos, puedes escribirnos a través del formulario de contacto (próximamente disponible).
          </p>
        </article>

        <em className="terms__date">Última actualización: julio 2025</em>
      </section>
    </main>
  );
};

export default Terms;
