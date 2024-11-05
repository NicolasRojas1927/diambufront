
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './sign-in.css';
import { Link } from 'react-router-dom';


function Admin() {
    const [namepark, setNamePark] = useState('');
    const [history, setHistory] = useState('');
    const [activities, setActivities] = useState('');
    const [images, setImages] = useState('');
    const [theme, setTheme] = useState('light');


    const handleSubmit = async (e) => {
        e.preventDefault();


        const AdminData = {
            namepark: namepark,
            history: history,
            activities: activities,
            images: images,

        };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(AdminData),
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
                <h1 className="h3 mb-4 fw-normal text-center fw-bold">Modulo Administrador</h1>
                <div className="d-flex justify-content-around">
                    <form onSubmit={handleSubmit} className="w-25">

                        <h1 className="h3 mb-3 fw-normal text-center fw-bold">Registro de Parques</h1>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={(e) => setNamePark(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Nombre del Parque</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="name@example.com"
                                onChange={(e) => setHistory(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Historia del parque</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="name@example.com"
                                onChange={(e) => setActivities(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Actividades</label>
                        </div>

                        <div className="Container">
                            <div className="form-group">
                                <label htmlFor="banner" className='mb-2'>Cargar Imagen:</label>
                                <div className="input-group">
                                    <label className="input-group-btn">
                                        <span className="btn-file"><input accept=".jpg,.png,.jpeg,.gif" className="hidden" name="banner" type="file" id="banner" onChange={(e) => setImages(e.target.value)} />
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>


                        <br />
                        <button className="btn btn-success w-100 py-2 fw-bold" type="submit">
                            Registrar
                        </button>
                    </form>
                    <section>
                        <h1 className="h3 mb-3 fw-normal text-center fw-bold">Solicitudes</h1>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="name@example.com"
                                onChange={(e) => setHistory(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Solicitudes Contactenos</label>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    );
};

export default Admin;