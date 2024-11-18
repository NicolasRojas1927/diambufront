
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './sign-in.css';
import { Link } from 'react-router-dom';



function Administrator() {
    const [theme, setTheme] = useState('light');

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
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



    };

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

                        {/* <Link to="/contactenos" className="btn btn-outline-info">
                            Contáctenos
                        </Link> */}
                        {/* Botón para alternar el modo claro/oscuro */}
                        <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
                            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                        </button>
                    </div>
                </div>
            </nav>
            <main className="form-signin  m-5 p-5">
                <h1 className="h3 mb-5 fw-normal text-center fw-bold">Modulos Administrador</h1>
                <form onSubmit={handleSubmit} className="">
                </form>
                <div className="d-flex justify-content-around">

                    <div>
                        <h1 className="h4 mb-3 fw-normal text-center fw-bold">Registro de Parques</h1>
                        <Link to="/admin">
                            <img src="../src/img/park.png" width="200" height="100" className="img-thumbnail" alt="..." />
                        </Link>
                    </div>
                    <div>
                        <h1 className="h4 mb-3 fw-normal text-center fw-bold">Usuarios</h1>
                        <img src="../src/img/park.png" width="200" height="100" className="img-thumbnail" alt="..." />
                    </div>
                    <div>
                        <h1 className="h4 mb-3 fw-normal text-center fw-bold">Registro de Parques</h1>
                        <img src="../src/img/park.png" width="200" height="100" className="img-thumbnail" alt="..." />
                    </div>
                    {/* <br />
                        <button className="btn btn-success w-100 py-2 fw-bold" type="submit">
                            Registrar
                        </button> */}

                </div>
            </main>
        </div>

    );
};


export default Administrator;