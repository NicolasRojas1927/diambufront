"use client"
import React, { useState, useEffect } from 'react';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation, Link, useNavigate  } from 'react-router-dom';

const ParkDetail = () => {
    const { state } = useLocation();
    const park = state?.park || {}
    const [theme, setTheme] = useState('light');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
    
      // Alterna entre los temas claro y oscuro
      const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };

      const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirige a la página de login después de cerrar sesión
      };

    return (
        <div className="bg-success bg-opacity-25">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../src/img/logoSF.webp" alt="" width="45" height="30" />
          </a>
          {/* Botones alineados a la derecha */}
          <div className="ms-auto">
          {!token ? (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/registro" className="btn btn-outline-secondary me-2">
                  Registro
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-primary me-2" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            )}
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
                            src={park.images ? park.images[0] : '../src/img/default_park.jpg'}
                            alt=""
                            width="380"
                            height="300"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="font-weight-bold">{park.name || "Parque"}</h2>
                        <h5 className="">{park.address || "Dirección no disponible"}</h5>
                        <br />
                        <p style={{ textAlign: 'left' }}>{park.description || "Descripción no disponible"}</p>
                        <p style={{ textAlign: 'left' }}>Latitud: {park.latitude || "No disponible"}</p>
                        <p style={{ textAlign: 'left' }}>Longitud: {park.longitude || "No disponible"}</p>
                        <p style={{ textAlign: 'left' }}>Localidad: {park.locality?.name || "No disponible"}</p>
                    </div>
                </div>

                <br />

                <div className="row text-center">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold">Actividades</h2>
                        <center>
                            <ul className="list-unstyled mt-2">
                                {park.activities?.map((activity) => (
                                    <li key={activity._id}>{activity.name}</li>
                                )) || <p>No hay actividades disponibles</p>}
                            </ul>
                        </center>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {park.images?.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={image} className="d-block w-100 img-fluid" alt="Imagen del parque" />
                                    </div>
                                ))}
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

                <div className="row">
                    <div className="col-md-12">
                        <h4 className="font-weight-bold mt-5">Comentarios</h4>
                        <form >
                            <div className="form-group">
                                <textarea
                                    className="form-control border border-success shadow-sm rounded-3 p-3 mt-2"
                                    rows="4"
                                    placeholder="Escribe tu comentario aquí..."
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 px-4">Enviar</button>
                        </form>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default ParkDetail;