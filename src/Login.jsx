"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-in.css';
import { useNavigate, Link } from 'react-router-dom'; // Para redirigir al MainMenu
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para manejar los mensajes de error
  const navigate = useNavigate();  // Hook para redirigir
  const [theme, setTheme] = useState('light');

  const sendSuccess = (message) => toast.success(message);

  // Función que maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!email || !password) {
      // Validación de campos vacíos
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

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
        sendSuccess("Bienvenido");
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('question', data.user.question);
        localStorage.setItem('answer', data.user.answer);
        console.log(data)
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        toast.error("Usuario o Contraseña Incorrectos");
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setErrorMessage('Error en la conexión. Intente nuevamente más tarde.');
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Alterna entre los temas claro y oscuro
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
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar fija arriba */}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="../src/img/logoSF.webp" alt="Logo" width="65" height="50" />
          </a>
        </div>
        <div className="ms-auto">
          <Link to="/registro" className="btn btn-outline-secondary ms-3">
              Registro
          </Link>
          <Link to="/contactenos" className="btn btn-outline-secondary ms-3">
              Contáctenos
          </Link>
          {/* Botón para alternar el modo claro/oscuro */}
          <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>
      </nav>

      {/* Formulario centrado */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1 bg-success bg-opacity-25">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <center>
              <img
                className="mb-4"
                src="../src/img/logoSF.webp"
                alt="Logo"
                width="200"
                height="150"
              />
            </center>
            <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1>

            {/* Mostrar mensaje de error si lo hay */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="form-floating mb-3">
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
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <button className="btn btn-dark w-100 py-2" type="submit">
              Iniciar Sesión
            </button>

            {/* Botón Olvidé mi contraseña */}
            <Link to="/forgetpassword" className="btn mt-3 w-100">
              Olvidé mi contraseña
            </Link>
          </form>
        </main>
      </div>
    </div>
    </>
  );
};

export default Login;

