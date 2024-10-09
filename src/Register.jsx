import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');

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
            confirmpass: confirmpass
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
                console.log('Registro exitoso', data)
            } else {
                console.log('Error de Registro', data.errors[0].msg)
                alert(`${data.errors[0].msg}`);
            }

        } catch (error) {
            console.error('Error de conexión:', error);
        }
    }

    return (
        <div>
            <div className="d-flex container-fluid justify-content-center bg-black">
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
            <div className="d-flex justify-content-center align-items-center vh-100 bg-success text-dark bg-opacity-25" >
                <main className="form-signin d-flex justify-content-center  w-25">
                    <form onSubmit={handleSubmit} className="w-100">

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
                        <button className="btn btn-success w-100 py-2 fw-bold" type="submit">
                            Registrarse
                        </button>
                        <div className="text-center mt-1">
                            <button className="btn btn-dark btn-sm p-2">
                                <Link to="/" className="text-decoration-none fw-bold text-white">
                                    Volver al Inicio</Link>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>

    );
};

export default Register;