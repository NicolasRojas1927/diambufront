"use client"
import { useState, useEffect } from 'react';
import './custom.css'; // Importa el archivo de estilos personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'; // Para redirigir al MainMenu
import toast, { Toaster } from 'react-hot-toast';

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [answer, setAnswer] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();  // Hook para redirigir

    const sendSuccess = (message) => toast.success(message);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (password !== confirmpass) {
            toast.error('Las contraseñas no coinciden, verifique nuevamente.');
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
            const response = await fetch('https://diambupark-back.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(RegisterData),
            });

            const data = await response.json();

            if (response.ok) {
                sendSuccess('Registro exitoso')
                console.log('Registro exitoso', data)
                navigate('/login');
            } else {
                toast.error('Error de Registro', data.errors[0].msg)
            }

        } catch (error) {
            toast.error('Error de conexión:', error);
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
        <>
        <Toaster
            toastOptions={{
                className: "text-sm",
            }}
         />
        <div className="bg-success bg-opacity-25">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../src/img/logoSF.webp" alt="" width="45" height="30" />
                </a>
                {/* Botones alineados a la derecha */}
                <div className="ms-auto">
                
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
            <main className="d-flex justify-content-center my-4">
                <form onSubmit={handleSubmit} className="p-5 rounded-3 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
                    <h2 className="h4 mb-4 fw-bold text-center text-success">Crear Cuenta</h2>
                    
                    {/* Datos Personales */}
                    <div className="form-group mb-3">
                        <label htmlFor="floatingInput" className="form-label">Nombre*</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            id="floatingInput"
                            placeholder="Ej. Juan"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="floatingInput1" className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            id="floatingInput1"
                            placeholder="Ej. Pérez"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="floatingInput2" className="form-label">Correo Electrónico*</label>
                        <input
                            type="email"
                            className="form-control shadow-sm"
                            id="floatingInput2"
                            placeholder="ejemplo@correo.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="form-group mb-3">
                        <label htmlFor="floatingPassword" className="form-label">Contraseña*</label>
                        <input
                            type="password"
                            className="form-control shadow-sm"
                            id="floatingPassword"
                            placeholder="********"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group mb-3">
                        <label htmlFor="floatingPassword1" className="form-label">Confirmar Contraseña*</label>
                        <input
                            type="password"
                            className="form-control shadow-sm"
                            id="floatingPassword1"
                            placeholder="********"
                            onChange={(e) => setConfirmPass(e.target.value)}
                            required
                        />
                    </div>

                    {/* Pregunta de Seguridad */}
                    <div className="form-group mb-3">
                        <label htmlFor="securityQuestionSelect" className="form-label">Pregunta de Seguridad*</label>
                        <select 
                            className="form-select shadow-sm" 
                            id="securityQuestionSelect" 
                            onChange={(e) => setSelectedQuestion(e.target.value)} 
                            required
                        >
                            <option value="">Selecciona una pregunta...</option>
                            <option value="¿Cuál es el nombre de tu profesor favorito?">¿Cuál es el nombre de tu profesor favorito?</option>
                            <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
                            <option value="¿Cuál fue el modelo de tu primer automóvil?">¿Cuál fue el modelo de tu primer automóvil?</option>
                            <option value="¿Cuál es el nombre de tu mejor amigo de la infancia?">¿Cuál es el nombre de tu mejor amigo de la infancia?</option>
                            <option value="¿Cuál es el nombre de tu primera mascota?">¿Cuál es el nombre de tu primera mascota?</option>
                        </select>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="floatingInput5" className="form-label">Respuesta a la Pregunta de Seguridad*</label>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            id="floatingInput5"
                            placeholder="Ej. Rex"
                            onChange={(e) => setAnswer(e.target.value)}
                            required
                        />
                    </div>

                    {/* Botón de Registro */}
                    <button className="btn btn-success w-100 py-2 fw-bold" type="submit">Registrarse</button>
                </form>
                <br></br><br></br>
            </main>
            <br></br>
        </div>
    </>
    );
};

export default Register;