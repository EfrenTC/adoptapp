
import React, { useState } from 'react';
import './Adopt.css';

const Adopt = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    });


    const [errors, setErrors] = useState({});
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const regex = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^\d{9}$/,
        mensaje: /^.{20,}$/,
    };

    const errorMessages = {
        nombre: 'El nombre solo puede contener letras y espacios.',
        email: 'Ingresa un correo electrónico válido.',
        telefono: 'Ingresa un número de teléfono válido (9 dígitos).',
        mensaje: 'El mensaje debe tener al menos 20 caracteres.',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        setConfirmationMessage('');
    };
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;


        for (const field in formData) {
            const value = formData[field].trim();
            if (!value) {
                newErrors[field] = 'Este campo es obligatorio.';
                isValid = false;
            } else if (regex[field] && !regex[field].test(value)) {
                newErrors[field] = errorMessages[field];
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Datos del formulario enviados:', formData);
            setConfirmationMessage('¡Tu solicitud de adopción ha sido enviada con éxito! Nos pondremos en contacto contigo pronto. 🐾');


            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                mensaje: '',
            });
            setErrors({});
        } else {
            console.log('El formulario contiene errores. Por favor, revisa los campos marcados.');
        }
    };

    return (
        <div className="container">
            <h1>Formulario de Adopción</h1>
            {confirmationMessage && (
                <div className="confirmation-message">
                    {confirmationMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={() => validateForm()} // Valida todo el formulario al salir de cualquier campo
                    />
                    {errors.nombre && <div className="error-message">{errors.nombre}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => validateForm()}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={() => validateForm()}
                    />
                    {errors.telefono && <div className="error-message">{errors.telefono}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">¿Por qué quieres adoptar un gato?</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        onBlur={() => validateForm()}
                    ></textarea>
                    {errors.mensaje && <div className="error-message">{errors.mensaje}</div>}
                </div>

                <button type="submit">Enviar Solicitud</button>
            </form>
        </div>
    );
};

export default Adopt;
