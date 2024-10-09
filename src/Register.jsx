"use client"
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './sign-in.css';
import { Link } from 'react-router-dom'; // Para redirigir al MainMenu

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [theme, setTheme] = useState('light');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://diambupark-back.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(RegisterData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registro exitoso', data)
            } else {
                console.log('Error de Registro', data.errors[0].msg)
                alert(`${data.errors[0].msg}`);
            }

        } catch (error) {
            console.error('Error de conexión:', error);
        }
    }

    const RegisterData = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        confirmpass: confirmpass
    };

    // Cambia el tema cuando el valor de theme cambia
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Alterna entre los temas claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };



    return (
        <div className=" justify-content-center vh-100 bg-success bg-opacity-25" 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../src/img/logoSF.webp" alt="" width="45" height="30" />
                </a>
                {/* Botones alineados a la derecha */}
                <div className="ms-auto">
                
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
            <main className="form-signin d-flex justify-content-center m-5 p-5">
                <form onSubmit={handleSubmit} className="w-25">

                    <h1 className="h3 mb-3 fw-normal mt-5 text-center fw-bold">Registro</h1>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="name@example.com"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput3">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword1"
                            placeholder="Password"
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Confirmar Contraseña</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="remember-me"
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault" aria-required>
                            Acepto Terminos y Condiciones
                        </label>
                    </div>
                    <button className="btn btn-success w-100 py-2" type="submit">
                        Registrarse
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

export default Register;