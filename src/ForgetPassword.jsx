"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-in.css';

const ForgetPassword = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

    // Alterna entre los temas claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div 
      className="justify-content-center vh-100 bg-success bg-opacity-25"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar fija arriba */}
      <nav className="navbar navbar-light bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../src/img/logoSF.webp" alt="Logo" width="65" height="50" />
          </a>
        </div>
        <div className="ms-auto">
          <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>
      </nav>

      <main className="form-signin d-flex justify-content-center m-5 p-5">
                <form className="w-25">

                <h1 className="h3 mb-3 fw-normal mt-5 text-center fw-bold">Reestablece tu contraseña</h1>
                    <div className="form-floating mb-3">
                        <select
                            className="form-control"
                            id="floatingInput"
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                        >
                            <option value="">Escoge la pregunta de seguridad</option>
                            <option value="mother's-maiden-name">¿Cuál es el apellido de soltera de tu madre?</option>
                            <option value="first-pet-name">¿Cuál fue el nombre de tu primera mascota?</option>
                            <option value="first-school-name">¿Cuál fue el nombre de tu primera escuela?</option>
                        </select>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Respuesta de la Pregunta de Seguridad"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Respuesta de la pregunta</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="Nueva Contraseña"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput3">Nueva Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Confirmar Contraseña</label>
                    </div>

                    <button className="btn btn-success w-100 py-2" type="submit">
                        Enviar
                    </button>
                    <br></br>
                    <br></br>
                    {/* <button className="btn btn-primary w-100 py-2" type="submit">
                    Registrate
                </button> */}
                </form>
            </main>
      
    </div>
  );

};

export default ForgetPassword;