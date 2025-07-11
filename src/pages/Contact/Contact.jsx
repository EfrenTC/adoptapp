import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <div className="contact">
            <header className="contact__header">
                <h1 className="contact__title">¡Hablemos de tu nuevo amigo!</h1>
                <p className="contact__subtitle">
                    ¿Tienes preguntas sobre la adopción? ¿Quieres conocer más sobre nuestros gatitos? ¡Estamos aquí para ayudarte a encontrar tu compañero perfecto!
                </p>
            </header>

            {submitted && (
                <div className="contact__success">
                    <div className="contact__success-message">
                        <div className="contact__success-icon">
                            <svg className="contact__success-icon-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="contact__success-text">¡Hemos recibido tu solicitud!</p>
                    </div>
                </div>
            )}

            <div className="contact__content">
                {/* Formulario */}
                <div className="contact__form-wrapper">
                    <div className="contact__card">
                        <div className="contact__card-content">
                            <form onSubmit={handleSubmit} className="contact__form">
                                <div className="contact__field">
                                    <label className="contact__label" htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="contact__input"
                                        placeholder="¿Cómo te llamas?"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact__field">
                                    <label className="contact__label" htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="contact__input"
                                        placeholder="tucorreo@ejemplo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact__field">
                                    <label className="contact__label" htmlFor="message">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="contact__textarea"
                                        placeholder="¿Qué tipo de gatito buscas? ¿Tienes experiencia con gatos? ¿Alguna pregunta específica?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact__submit">
                                    <button
                                        type="submit"
                                        className={`contact__submit-button ${loading ? "contact__submit-button--loading" : ""}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="contact__loading">
                                                <div className="contact__spinner">
                                                    <svg className="contact__spinner-svg" viewBox="0 0 50 50">
                                                        <circle className="contact__spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
                                                        <path className="contact__spinner-path" fill="none" strokeWidth="5" d="M25 5a20 20 0 1 1-14.14 5.86" />
                                                    </svg>
                                                </div>
                                                Enviando...
                                            </div>
                                        ) : (
                                            "Enviar"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Mapa */}
                <div className="contact__map-wrapper">
                    <div className="contact__card">
                        <div className="contact__card-content contact__card-content--map">
                            <div className="contact__map-inner">
                                <h2 className="contact__map-title">
                                    <span className="contact__map-title-wrapper">
                                         ¿Dónde estamos?
                                    </span>
                                </h2>
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.669998321789!2d-5.665505264104734!3d43.52889181263648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c8cfef87ad3%3A0x9869596e93729ac9!2sC.%20Mar%C3%ADa%20Josefa%2C%2027%2C%20Centro%2C%2033209%20Gij%C3%B3n%2C%20Asturias!5e0!3m2!1ses!2ses!4v1752138136882!5m2!1ses!2ses"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
