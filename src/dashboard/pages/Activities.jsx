import { useEffect, useState } from 'react'

export const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchParks = async () => {
            try {
                const response = await fetch('https://diambupark-back.vercel.app/api/activities?limit=20');
                const data = await response.json();
                if (data.ok) {
                    setActivities(data.activities);
                    console.log(data.activities)
                }
            } catch (error) {
                console.error('Error al obtener parques:', error);
            }
        };
        fetchParks();
    }, []);
    return (
        <div>
            <h1>Actividades</h1>
            <div className="create py-3">
                <button type="button" className="btn btn-primary btn-lg" >
                    Crear
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            {/* <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activities.length > 0 ?
                                activities.map(({name, description, _id}) => (
                                    <tr key={_id}>
                                        <td>{name}</td>
                                        <td>{description}</td>
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
