import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <main className="privacy">
      <section className="privacy__content">
        <h1 className="privacy__title">Política de Privacidad</h1>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">1. Información que recopilamos</h2>
          <p className="privacy__text">
            Actualmente, nuestro sitio no recopila información personal directamente. No obstante, en futuras versiones podríamos incluir formularios de contacto o adopción. En ese caso, siempre te informaremos previamente y solicitaremos tu consentimiento.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">2. Uso de la información</h2>
          <p className="privacy__text">
            Si en el futuro recopilamos tus datos, será únicamente con fines relacionados con el proceso de adopción, contacto y mejora de la experiencia del usuario. Nunca compartiremos tu información con terceros sin tu permiso.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">3. Cookies</h2>
          <p className="privacy__text">
            Actualmente no utilizamos cookies, pero podríamos implementarlas para mejorar la experiencia de navegación. Si lo hacemos, se notificará mediante un banner y se solicitará tu consentimiento.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">4. Seguridad</h2>
          <p className="privacy__text">
            Nos comprometemos a proteger tu información personal. Aplicaremos medidas técnicas y organizativas adecuadas para prevenir accesos no autorizados.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">5. Enlaces externos</h2>
          <p className="privacy__text">
            Nuestra web puede contener enlaces a otros sitios. No nos responsabilizamos por las prácticas de privacidad de esos sitios externos. Te recomendamos leer sus propias políticas de privacidad.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">6. Cambios en esta política</h2>
          <p className="privacy__text">
            Nos reservamos el derecho a modificar esta política para adaptarla a nuevas legislaciones o funcionalidades del sitio. Las actualizaciones se publicarán en esta misma página.
          </p>
        </article>

        <article className="privacy__section">
          <h2 className="privacy__subtitle">7. Contacto</h2>
          <p className="privacy__text">
            Si tienes dudas sobre esta política o quieres ejercer tus derechos relacionados con la protección de datos, puedes contactarnos a través del formulario de contacto.
          </p>
        </article>

        <em className="privacy__date">Última actualización: julio 2025</em>
      </section>
    </main>
  );
};

export default Privacy;
