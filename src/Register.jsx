import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const RegisterData = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(RegisterData),
        });

        const data = await response.json();
    } catch () {

    }

    return (

        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <img
                    className="mb-4"
                    src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                    alt="Bootstrap logo"
                    width="72"
                    height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Registro</h1>
                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Nombre Completo</label>
                </div>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <div className="form-check text-start my-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Recuerdame
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">
                    Registrarse
                </button>
                <br></br>
                <br></br>
                {/* <button className="btn btn-primary w-100 py-2" type="submit">
                    Registrate
                </button> */}
            </form>
        </main>
    );
};

export default Register;