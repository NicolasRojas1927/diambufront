import { useEffect, useState } from 'react'

export const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchParks = async () => {
            try {
                const response = await fetch('https://diambupark-back.vercel.app/api/locations?limit=20');
                const data = await response.json();
                if (data.ok) {
                    setLocations(data.locations);
                    console.log(data.locations)
                }
            } catch (error) {
                console.error('Error al obtener Localidades:', error);
            }
        };
        fetchParks();
    }, []);
    return (
        <div>
            <h1>Localidades</h1>
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
                            {/* <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            locations.length > 0 ?
                                locations.map(({name, _id}) => (
                                    <tr key={_id}>
                                        <td>{name}</td>
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
