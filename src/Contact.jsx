"use client";

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-in.css';
import { useNavigate, Link } from 'react-router-dom'; // Para redirigir al MainMenu
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [theme, setTheme] = useState('light');
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const [descripción, setDescripción] = useState('');
    const [titulo, settitulo] = useState('');

    const sendSuccess = (message) => toast.success(message);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Necesita estar logueado para realizar esta acción");
            return; // Detener la ejecución de la función si no hay token
        }

        const RegisterData = {
            message : descripción,
            title : titulo
        };

        try {
            const response = await fetch('https://diambupark-back.vercel.app/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token' : token ,
                },
                body: JSON.stringify(RegisterData),
            });

            const data = await response.json();

            if (response.ok) {
                sendSuccess('Registro exitoso')
                console.log('Registro exitoso', data)
            } else {
                toast.error('Error de Registro', data.errors[0].msg)
            }

        } catch (error) {
            toast.error('Error de conexión:', error);
        }
    }

    const RegisterData = {
        descripción : descripción,
        titulo : titulo
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        };

return (
    <>
        <Toaster
            toastOptions={{
                className: "text-sm",
            }}
         />
        <div 
            className="d-flex flex-column min-vh-100 bg-success bg-opacity-25"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            {/* Navbar fija arriba */}
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../src/img/logoSF.webp" alt="" width="45" height="30" />
                </a>
                </div>
                <div className="ms-auto">
                <Link to="/registro" className="btn btn-outline-secondary me-2">
                    Registro
                </Link>
                {/* Botón para alternar el modo claro/oscuro */}
                <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
                    {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                </button>
                </div>
            </nav>

            <div className="pt-5 mt-4"></div>
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center text-center">
                    {/* Sección de información */}
                    <div className="col-md-5 text-start">
                        <h2 className="font-weight-bold mb-4">DIAMBUPARK</h2>
                        <p className="lead">
                        Diambupark es una aplicación en la nube que facilita la búsqueda de espacios para actividades al aire libre en Bogotá. Con detalles sobre cada parque, horarios y eventos, ofrece una experiencia completa para quienes buscan opciones recreativas en la ciudad. Los mapas interactivos y recomendaciones de seguridad aseguran que encuentres la mejor opción para disfrutar de los parques.
                        </p>
                    </div>
                    
                    {/* Formulario de contacto */}
                    <div className="col-md-6">
                        <main className="form-signin shadow-lg p-4 rounded-3" style={{ backgroundColor: '#e6e7e0' }}>
                        <form onSubmit={handleSubmit}>
                            <h1 className="h4 mb-4 fw-bold text-dark">Contáctenos</h1>
                            
                            {/* Mensaje de error */}
                            {errorMessage && (
                            <div className="alert alert-danger text-start p-2 mb-3">
                                {errorMessage}
                            </div>
                            )}
                            
                            {/* Campo de usuario */}
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                disabled
                            />
                            <label htmlFor="floatingInput">Usuario</label>
                            </div>
                            
                            {/* Campo de título */}
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control shadow-sm"
                                id="floatingTitulo"
                                required
                                placeholder="Título de la petición"
                                onChange={(e) => settitulo(e.target.value)}
                            />
                            <label htmlFor="floatingTitulo">Título</label>
                            </div>
                            
                            {/* Campo de descripción */}
                            <div className="form-floating mb-3">
                            <textarea
                                className="form-control shadow-sm"
                                id="floatingDescripcion"
                                placeholder="Descripción"
                                rows="5"
                                required
                                onChange={(e) => setDescripción(e.target.value)}
                            />
                            <label htmlFor="floatingDescripcion">Descripción</label>
                            </div>
                            
                            {/* Botón de envío */}
                            <button className="btn btn-success w-100 py-2 mt-2 fw-semibold" type="submit">
                            Enviar
                            </button>
                        </form>
                        </main>
                    </div>
                    </div>
                </div>
        </div>

        </>
    );
};

export default Contact;