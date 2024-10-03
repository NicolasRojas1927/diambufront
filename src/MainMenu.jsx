"use client"
import React, { useState, useEffect } from 'react';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación

const MainMenu = () => {
  const [theme, setTheme] = useState('light');

  // Cambia el tema cuando el valor de theme cambia
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Alterna entre los temas claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../src/img/logoSF.webp" alt="" width="30" height="24" />
          </a>
          {/* Botones alineados a la derecha */}
          <div className="ms-auto">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/registro" className="btn btn-outline-secondary me-2">
              Registro
            </Link>
            <Link to="/contactenos" className="btn btn-outline-info">
              Contáctenos
            </Link>
            {/* Botón para alternar el modo claro/oscuro */}
            <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
              {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
            </button>
          </div>
        </div>
      </nav>

      <br />

      {/* Grid de contenido */}
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <img
              className="mb-4"
              src="../src/img/logoSF.webp"
              alt=""
              width="350"
              height="300"
            />
          </div>
          <div className="col-md-6">
            <h2 className="font-weight-bold">DIAMBUPARK</h2>
            <p>
              Tu Guía en la Nube para Deporte y Ocio al Aire Libre en Bogotá.
              Diambupark es una aplicación en la nube que proporciona información acertada sobre los parques de Bogotá...
            </p>
          </div>
        </div>

        {/* Carrusel */}
        <div className="row">
          <div className="col-12">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="../src/img/Paque93.webp" className="d-block w-100 h-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="../src/img/Paque932.webp" className="d-block w-100 h-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="../src/img/Paque933.webp" className="d-block w-100 h-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <br />

        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="font-weight-bold">Parques</h2>
            <p>Parque de la 93</p>
            <p>Parque Teusaquillo</p>
            <p>Parque Metropolitano Simón Bolívar</p>
            <p>Parque de Usaquén</p>
            <p>Parque de los Novios</p>
            <p>Parque Timiza</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
