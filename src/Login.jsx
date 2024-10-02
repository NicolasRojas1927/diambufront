"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-in.css';
import { useNavigate } from 'react-router-dom'; // Para redirigir al MainMenu

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook para redirigir

  // Función que maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const loginData = {
      email: email,
      password: password,
    };

    try {
      // Realiza la petición POST a la API
      const response = await fetch('https://diambupark-back.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Guarda el token en el localStorage
        localStorage.setItem('token', data.token);
        // Redirige al MainMenu
        navigate('/');
      } else {
        console.error('Error en el inicio de sesión:', data.message);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('../src/img/Background.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../src/img/logoSF.webp" alt="" width="65" height="50" />
          </a>
        </div>
      </nav>
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <center>
          <img
            className="mb-4"
            src="../src/img/logoSF.webp"
            alt=""
            width="105"
            height="90"
          />
          </center>
          <h1 className="h3 mb-3 fw-normal">Inicio de Sesion</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <br />
          <button className="btn btn-dark w-100 py-2" type="submit">
            Iniciar Sesion
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
