import { Link, useNavigate } from 'react-router-dom';
import './MenuDashboard.css'

export const MenuDashboard = () => {

    const navigate = useNavigate();

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirige a la página de login después de cerrar sesión
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Diambupark</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse h-navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="inicio" className="nav-link active">
                                Inicio
                            </Link>
                        </li>
                        {role === "ADMIN_ROLE" ? (
                            <>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Parques
                                    </a>
                                    <ul className="dropdown-menu bg-dark text-white" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to="actividades" className="dropdown-item text-white">
                                                Actividades
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider  text-white" /></li>
                                        <li>
                                            <Link to="localidades" className="dropdown-item text-white">
                                                Localidades
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider text-white" /></li>
                                        <li>
                                            <Link to="parques" className="dropdown-item text-white">
                                                Parques
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to="usuarios" className="nav-link active">
                                        Usuarios
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="calificaciones" className="nav-link active">
                                        Calificaciones
                                    </Link>
                                </li>
                            </>)
                            : null
                        }
                        <li className="nav-item">
                            <Link to="mensajes" className="nav-link active">
                                Mensajes
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark " style={{ paddingRight: "80px" }}>
                            <li className="nav-item dropdown mx-auto">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {name || "Usuario"}
                                </a>
                                <ul className="dropdown-menu text-center bg-dark" aria-labelledby="navbarDropdown" style={{ margin: "0" }}>
                                    <li><a className="dropdown-item text-white">{email || ""}</a></li>
                                    <li><a className="dropdown-item text-white">{role == "ADMIN_ROLE" ? "Administrador" : "Usuario"}</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item text-white" onClick={handleLogout}>Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
