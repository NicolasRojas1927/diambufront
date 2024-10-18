"use client";

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-in.css';
import { useNavigate, Link } from 'react-router-dom'; // Para redirigir al MainMenu

const Contact = () => {
    const [theme, setTheme] = useState('light');
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    };

return (
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

            <br />
            <br />
            <br />
            <br />

            <div className="container">
                <div className="row text-center">
                <div className="col-md-6">
                    <h2 className="font-weight-bold">DIAMBUPARK</h2>
                    <p style={{ textAlign: 'left' }}>
                        Diambupark es una aplicación en la nube que proporciona información acertada sobre los parques de Bogotá, facilitando la búsqueda de espacios para actividades al aire libre. La plataforma ofrece detalles sobre cada parque, incluyendo horarios, y eventos disponibles, ayudando a los usuarios a encontrar opciones recreativas que se ajusten a sus preferencias. Con mapas interactivos, seguridad y recomendaciones basadas en la ubicación, Diambupark asegura que los visitantes siempre tengan a mano la mejor opción para disfrutar de los parques de la ciudad.
                    </p>
                </div>
                <div className="col-md-6">
                <main className="form-signin">
                    <form >
                        <h1 className="h3 mb-3 fw-normal">Contactenos</h1>

                       {/* Mostrar mensaje de error si lo hay 
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}*/}

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                disabled
                            />
                            <label htmlFor="floatingInput">Usuario</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingTitulo"
                                placeholder="Título de la petición"
                                
                            />
                            <label htmlFor="floatingPassword">Título</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                id="floatingDescripcion"
                                placeholder="Descripción"
                                rows="8" // Tamaño del textarea
                            />
                            <label htmlFor="floatingPassword">Descripción</label>
                        </div>

                        <button className="btn btn-dark w-100 py-2" type="submit">
                            Enviar
                        </button>

                    </form>
                    </main>
                </div>
                </div>

                <br />

            </div>
        </div>

        
    );
};

export default Contact;