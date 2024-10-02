"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Para los componentes de Bootstrap
import { Link, useNavigate } from 'react-router-dom'; 

const MainMenu = () => {
  const token = localStorage.getItem('token'); // Verificar si hay un token
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirige a la página de login después de cerrar sesión
  };

  return (
    <div
      style={{
        backgroundImage: `url('../src/img/Background.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Para que cubra toda la pantalla
      }}
    >
      {/* Navbar */}
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../src/img/logoSF.webp" alt="" width="65" height="50" />
          </a>
          {/* Botones alineados a la derecha */}
          <div className="ms-auto">
            {!token ? (
              <>
                <Link to="/login" className="btn btn-outline-dark me-2">
                  Login
                </Link>
                <Link to="/registro" className="btn btn-outline-dark me-2">
                  Registro
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-dark me-2" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            )}
            <Link to="/contactenos" className="btn btn-outline-dark me-2">
              Contáctenos
            </Link>
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
              Tu Guía en la Nube para Deporte y Ocio al Aire Libre en Bogotá
              Diambupark es una aplicación en la nube que proporciona información acertada sobre los parques de Bogotá, facilitando la búsqueda de espacios para actividades al aire libre. La plataforma ofrece detalles sobre cada parque, incluyendo horarios, y eventos disponibles, ayudando a los usuarios a encontrar opciones recreativas que se ajusten a sus preferencias. Con mapas interactivos, seguridad y recomendaciones basadas en la ubicación, Diambupark asegura que los visitantes siempre tengan a mano la mejor opción para disfrutar de los parques de la ciudad.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
