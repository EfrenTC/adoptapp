import React, { useState } from "react";
import "./WorkWithUs.css";

function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="work">

      <div className="work__header">
        <div className="work__icon">
        </div>

        <h1 className="work__title">Trabaja con nosotros</h1>

        <p className="work__subtitle">
          ¿Quieres unirte a nuestro equipo y ayudar a los gatitos? Completa el formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      {submitted && (
        <div className="work__success-container">
          <div className="work__success-message">
            <div className="work__success-icon">
              <svg
                className="work__success-icon-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="work__success-text">
              ¡Gracias por tu interés! Te contactaremos pronto.
            </p>
          </div>
        </div>
      )}

      <div className="work__form-container">
        <div className="work__form-card">
          <div className="work__form-content">
            <form onSubmit={handleSubmit} className="work__form">

              <div className="work__field">
                <label htmlFor="name" className="work__label">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="work__input"
                />
              </div>

              <div className="work__field">
                <label htmlFor="email" className="work__label">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tuemail@ejemplo.com"
                  className="work__input"
                />
              </div>

              <div className="work__field">
                <label htmlFor="phone" className="work__label">
                  Teléfono <span className="work__optional"></span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 XXX XXX XXX"
                  className="work__input"
                />
              </div>

              <div className="work__field">
                <label htmlFor="message" className="work__label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos por qué quieres unirte a nuestro equipo y qué puedes aportar..."
                  rows="5"
                  className="work__textarea"
                />
              </div>

              <div className="work__submit-container">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`work__submit-button ${
                    isLoading ? "work__submit-button--loading" : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="work__loading-content">
                      <div className="work__spinner">
                        <svg
                          className="work__spinner-svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="work__spinner-circle"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="work__spinner-path"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    "Enviar solicitud"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="work__footer">
          <p className="work__footer-text">¡Gracias por tu interés!</p>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
