"use client"
import React, { useState, useEffect } from 'react';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation, Link, useNavigate  } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const ParkDetail = () => {
    const { state } = useLocation();
    const park = state?.park || {}
    const [theme, setTheme] = useState('light');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState('');

    const sendSuccess = (message) => toast.success(message);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Necesita estar logueado para realizar esta acción");
            return; // Detener la ejecución de la función si no hay token
        }

        const RegisterData = {
            parkId : park._id,
            score : rating,
            comment : comment
        };

        try {
            const response = await fetch('https://diambupark-back.vercel.app/api/ratings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token' : token ,
                },
                body: JSON.stringify(RegisterData),
            });

            const data = await response.json();

            if (response.ok) {
                sendSuccess('Comentario Exitoso')
                console.log('Comentario Exitoso', data)
            } else {
                toast.error('Error de Comentario', data.errors[0].msg)
            }

        } catch (error) {
            toast.error('Error de conexión:', error);
        }
    }

    const RegisterData = {
      parkId : park._id,
      score : rating,
      comment : comment
    };

    
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
      <>
        <Toaster
            toastOptions={{
                className: "text-sm",
            }}
         />
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
                <Link to="/login" className="btn btn-outline-secondary ms-3">
                  Login
                </Link>
                <Link to="/registro" className="btn btn-outline-secondary ms-3">
                  Registro
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-secondary ms-3" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            )}
            <Link to="/contactenos" className="btn btn-outline-secondary ms-3">
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
      <div className="container my-5 p-4 rounded-3">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6">
                        <img
                            className="mb-4 img-fluid shadow rounded-3"
                            src={park.images ? park.images[0] : '../src/img/default_park.jpg'}
                            alt=""
                            width="380"
                            height="300"
                        />
                    </div>
                    <div className="col-md-6">
                      <h2 className="font-weight-bold">{park.name || "Parque"}</h2>
                      <p><i className="fas fa-map-marker-alt text-danger"></i> {park.address || "Dirección no disponible"}</p>
                      <p>{park.description || "Descripción no disponible"}</p>
                      <p ><i className="fas fa-globe"></i> Latitud: {park.latitude || "No disponible"}</p>
                      <p><i className="fas fa-globe"></i> Longitud: {park.longitude || "No disponible"}</p>
                      <p><i className="fas fa-city"></i> Localidad: {park.locality?.name || "No disponible"}</p>
                    </div>
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
                                        <img
                                         src={image} className="d-block w-75 mx-auto img-fluid"
                                         style={{ maxWidth: '400px', height: '400px' }}
                                         />
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

                <div className="container my-5">
                  <h4 className="font-weight-bold mb-4 text-center">Comentarios</h4>
                  <form onSubmit={handleSubmit} className="card p-4 shadow-sm bg-opacity-25" style={{ backgroundColor: '#211f1f' }}>
                      <div className="form-group mb-3">
                          <label className="d-block mb-2 text-center font-weight-bold">Calificación</label>
                          <div className="d-flex justify-content-center mb-3">
                              {[...Array(5)].map((star, index) => {
                                  const ratingValue = index + 1;
                                  return (
                                      <label key={index}>
                                          <input
                                              type="radio"
                                              name="rating"
                                              value={ratingValue}
                                              onClick={() => setRating(ratingValue)}
                                              style={{ display: 'none' }}
                                          />
                                          <FaStar
                                              size={30}
                                              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                              className="star"
                                              onMouseEnter={() => setHover(ratingValue)}
                                              onMouseLeave={() => setHover(null)}
                                              style={{ cursor: 'pointer', marginRight: '4px' }}
                                          />
                                      </label>
                                  );
                              })}
                          </div>
                      </div>

                      <div className="form-group mb-3">
                          <textarea
                              className="form-control border border-info shadow-sm rounded-3 p-3"
                              placeholder="Escribe tu comentario aquí..."
                              onChange={(e) => setComment(e.target.value)}
                              required
                          />
                      </div>
                      <button type="submit" className="btn btn-success w-100 py-2 mt-2 fw-semibold">Enviar</button>
                  </form>
              </div>
                <br /><br /><br />
            </div>
            </>
    );
};

export default ParkDetail;