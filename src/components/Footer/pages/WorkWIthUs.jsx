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

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="work-container">
      <h1>Trabaja con nosotros</h1>
      <p>¿Quieres unirte a nuestro equipo y ayudar a los gatitos? Completa el formulario y nos pondremos en contacto contigo.</p>

      {submitted && <p className="success-message">¡Gracias por tu interés! Te contactaremos pronto.</p>}

      <form onSubmit={handleSubmit} className="work-form">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tuemail@ejemplo.com"
          />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </label>

        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Cuéntanos por qué quieres unirte"
            rows="4"
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default WorkWithUs;
