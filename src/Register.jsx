import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-in.css';

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');

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



    return (
        <div className=" justify-content-center vh-100 bg-success text-dark bg-opacity-25" >
            <div className="p-1 container-fluid d-flex justify-content-center bg-black">
                <img
                    className="align-items-center"
                    src="../src/img/logo.jpeg"
                    alt="Bootstrap logo"
                    width="80"
                    height="70"
                />
                <span className="display-5 fw-bold text-success"
                >DiambuPark</span>
            </div>
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