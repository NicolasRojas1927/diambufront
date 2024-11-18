import { useEffect, useState } from 'react'

export const Contacts = () => {
    const token = localStorage.getItem('token'); 
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchParks = async () => {
            try {

                const response = await fetch('https://diambupark-back.vercel.app/api/contacts?limit=20', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json', 
                        'x-token': token,
                },});

                const data = await response.json();
                if (data.ok) {
                    setContacts(data.contacts);
                    console.log(data.contacts)
                }
            } catch (error) {
                console.error('Error al obtener Mensajes:', error);
            }
        };
        fetchParks();
    }, []);
    return (
        <div>
            <h1>Mensajes de usuarios</h1>
            <div className="create py-3">
                <button type="button" className="btn btn-primary btn-lg" >
                    Crear
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Responder</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Mensaje</th>
                            <th scope="col">Respuesta</th>
                            {/* <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.length > 0 ?
                                contacts.map(({ title, message, _id, response, responseStatus }) => (
                                    <tr key={_id}>
                                        <td><button className={`btn btn-sm ${responseStatus === 'pendiente' ? 'btn-danger' : 'btn-success'}`}>Respuesta</button></td>
                                        <td className={responseStatus == "pendiente" ? "text-danger" : "text-success"}>{responseStatus}</td>
                                        <td>{title}</td>
                                        <td>{message}</td>
                                        <td>{response}</td>
                                    </tr>
                                ))
                                : null
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

