"use client"
import React, { useState, useEffect } from 'react';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom'; // Importa el componente Link para la navegación
import { Maps } from './public/components/maps/Maps';

const MainMenu = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [parks, setParks] = useState([]);
  const [theme, setTheme] = useState('light');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/parks?limit=20');
        const data = await response.json();
        if (data.ok) {
          setParks(data.parks); // Almacenar los parques en el estado
        }
      } catch (error) {
        console.error('Error al obtener parques:', error);
      }
    };
    fetchParks();


    // Comprobar si el navegador soporta la API de Geolocalización
    if (navigator.geolocation) {
      // Solicitar la ubicación del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no es soportada por este navegador.");
    }
    console.log({ userLocation })
  }, []);

  // Cambia el tema cuando el valor de theme cambia
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

  const handleParkClick = (park) => {
    navigate('/parque', { state: { park } }); // Navegar a ParkDetail con los datos del parque seleccionado
  };


  return (
    <div className="bg-success bg-opacity-25">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
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
      <div className="container">
        {userLocation ? <Maps userLocation={userLocation} /> : "Cargando ubicación..."}
      </div>

      {/* Grid de contenido */}
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <img
              className="mb-4"
              src="../src/img/logoSF.webp"
              alt=""
              width="380"
              height="300"
            />
          </div>
          <div className="col-md-6">
            <h2 className="font-weight-bold">Diabupark</h2>
            <p style={{ textAlign: 'left' }}>
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
                  <img src="https://i.ibb.co/rZS9pcS/ptimiza.webp" className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://i.ibb.co/JrzkR1K/PTimiza2.webp" className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://i.ibb.co/nr7Tn6R/PTimiza3.webp" className="d-block w-100 img-fluid" alt="..." />
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

        <div className="col-md-10 text-center">
          <h2 className="font-weight-bold mb-4">Parques de Bogotá</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {parks.map((park) => (
              <div
                key={park._id}
                className="card shadow-sm p-3 m-2 border-0 text-dark font-weight-bold text-center"
                style={{ width: "14rem", borderRadius: "12px" }}
                onClick={() => handleParkClick(park)} // Pasar el parque seleccionado al hacer clic
              >
                <div className="card-body">
                  <p className="card-text text-dark font-weight-bold">{park.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /><br /><br /><br />

      </div>
    </div>
  );
};

export default MainMenu;
