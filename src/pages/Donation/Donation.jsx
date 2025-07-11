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
    <div className="donation">
      <header className="donation__header">
        <h1 className="donation__title">Ayúdanos a salvar gatitos</h1>
        <p className="donation__subtitle">
          Tu apoyo nos permite alimentar, cuidar y encontrar hogares amorosos para muchos gatos. ¡Gracias!
        </p>
      </header>

      {submitted && (
        <div className="donation__success">
          <div className="donation__success-message">
            <div className="donation__success-icon">
              <svg className="donation__success-icon-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="donation__success-text">¡Gracias por tu donación!</p>
          </div>
        </div>
      )}

      <div className="donation__content">
        <div className="donation__card">
          <h2 className="donation__card-title">Donación con tarjeta</h2>
          <form onSubmit={handleSubmit} className="donation__form">
            <input
              type="text"
              name="name"
              placeholder="Nombre del titular"
              value={formData.name}
              onChange={handleChange}
              required
              className="donation__input"
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="donation__input"
            />
            <div className="donation__row">
              <input
                type="text"
                name="expiry"
                placeholder="MM/AA"
                value={formData.expiry}
                onChange={handleChange}
                required
                className="donation__input"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="donation__input"
              />
            </div>
            <input
              type="number"
              name="amount"
              placeholder="Cantidad (€)"
              value={formData.amount}
              onChange={handleChange}
              required
              className="donation__input"
            />
            <button
              type="submit"
              className={`donation__submit ${loading ? "donation__submit--loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <div className="donation__loading">
                  <div className="donation__spinner">
                    <svg className="donation__spinner-svg" viewBox="0 0 50 50">
                      <circle className="donation__spinner-circle" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                      <path className="donation__spinner-path" fill="none" strokeWidth="5" d="M25 5a20 20 0 1 1-14.14 5.86" />
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
