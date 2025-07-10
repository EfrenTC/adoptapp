import React, { useState } from "react";
import "./Donation.css";

export default function Donation() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
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
      setFormData({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: "",
      });
    }, 2000);
  };

  return (
    <div className="donation-page">
      <header className="donation-header">
        <h1 className="donation-title">Ayúdanos a salvar gatitos 🐾</h1>
        <p className="donation-subtitle">
          Tu apoyo nos permite alimentar, cuidar y encontrar hogares amorosos para muchos gatos. ¡Gracias!
        </p>
      </header>

      {submitted && (
        <div className="contact-success-container">
          <div className="contact-success-message">
            <div className="contact-success-icon">
              <svg className="contact-success-icon-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="contact-success-text">¡Gracias por tu donación!</p>
          </div>
        </div>
      )}

      <div className="donation-content">
        <div className="donation-card">
          <h2>Donación con tarjeta</h2>
          <form onSubmit={handleSubmit} className="donation-form">
            <input
              type="text"
              name="name"
              placeholder="Nombre del titular"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <div className="donation-flex">
              <input
                type="text"
                name="expiry"
                placeholder="MM/AA"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="number"
              name="amount"
              placeholder="Cantidad (€)"
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className={`contact-submit-button ${loading ? "contact-submit-loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <div className="contact-loading-content">
                  <div className="contact-spinner">
                    <svg className="contact-spinner-svg" viewBox="0 0 50 50">
                      <circle className="contact-spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                      <path className="contact-spinner-path" fill="none" strokeWidth="5" d="M25 5a20 20 0 1 1-14.14 5.86" />
                    </svg>
                  </div>
                  Procesando...
                </div>
              ) : (
                "Donar ahora"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
