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
    const [answer, setAnswer] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [theme, setTheme] = useState('light');

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (password !== confirmpass) {
            alert('Las contraseñas no coinciden, verifique nuevamente.');
            return;
        }

        const RegisterData = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            confirmpass: confirmpass,
            question: selectedQuestion,
            answer: answer
        };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
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

                    <h1 className="h3 mb-3 fw-normal text-center fw-bold">Registro</h1>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Nombre*</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="name@example.com"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput3">Email*</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Contraseña*</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword1"
                            placeholder="Password"
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Confirmar Contraseña*</label>
                    </div>
                    <div className="form-floating mb-2">
                        <select className="form-control" id="securityQuestionSelect" onChange={(e) => setSelectedQuestion(e.target.value)} required>
                            <option value="¿Cuál es el nombre de tu profesor favorito?">¿Cuál es el nombre de tu profesor favorito?</option>
                            <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
                            <option value="¿Cuál fue el modelo de tu primer automóvil?">¿Cuál fue el modelo de tu primer automóvil?</option>
                            <option value="¿Cuál es el nombre de tu mejor amigo de la infancia?">¿Cuál es el nombre de tu mejor amigo de la infancia?</option>
                            <option value="¿Cuál es el nombre de tu primera mascota?">¿Cuál es el nombre de tu primera mascota?</option>
                        </select>
                        <label htmlFor="securityQuestionSelect">Pregunta de Seguridad*</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput5"
                            placeholder=""
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Respuesta de la pregunta de seguridad</label>
                    </div>
                    <br />
                    <button className="btn btn-success w-100 py-2 fw-bold" type="submit">
                        Registrarse
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;