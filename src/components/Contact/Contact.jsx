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

        // Simulación de envío
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <div className="work-page">
            <header className="work-header">
                <h1 className="work-title">Contáctanos</h1>
                <p className="work-subtitle">
                    ¿Tienes alguna duda o sugerencia? ¡Nos encantará saber de ti!
                </p>
            </header>

            {submitted && (
                <div className="work-success-container">
                    <div className="work-success-message">
                        <div className="work-success-icon">
                            <svg className="work-success-icon-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="work-success-text">¡Formulario enviado con éxito!</p>
                    </div>
                </div>
            )}

            <div className="work-form-container">
                <div className="work-form-card">
                    <div className="work-form-content">
                        <form onSubmit={handleSubmit} className="work-form">
                            <div className="work-field">
                                <label className="work-label" htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="work-input"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="work-field">
                                <label className="work-label" htmlFor="email">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="work-input"
                                    placeholder="tucorreo@ejemplo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="work-field">
                                <label className="work-label" htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="work-textarea"
                                    placeholder="Escribe tu mensaje aquí..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="work-submit-container">
                                <button
                                    type="submit"
                                    className={`work-submit-button ${loading ? "work-submit-loading" : ""}`}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="work-loading-content">
                                            <div className="work-spinner">
                                                <svg className="work-spinner-svg" viewBox="0 0 50 50">
                                                    <circle className="work-spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                                    <path className="work-spinner-path" fill="none" strokeWidth="5" d="M25 5a20 20 0 1 1-14.14 5.86"></path>
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

            <div className="work-form-container" style={{ marginTop: "3rem" }}>
                <div className="work-form-card">
                    <div className="work-form-content">
                        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "600" }}>
                            ¿Dónde estamos?
                        </h2>
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.669998321789!2d-5.665505264104734!3d43.52889181263648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c8cfef87ad3%3A0x9869596e93729ac9!2sC.%20Mar%C3%ADa%20Josefa%2C%2027%2C%20Centro%2C%2033209%20Gij%C3%B3n%2C%20Asturias!5e0!3m2!1ses!2ses!4v1752138136882!5m2!1ses!2ses"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: "0.75rem" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
