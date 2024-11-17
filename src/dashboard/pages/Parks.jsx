import { useEffect, useState } from 'react'

export const Parks = () => {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        const fetchParks = async () => {
            try {
                const response = await fetch('https://diambupark-back.vercel.app/api/parks?limit=20');
                const data = await response.json();
                if (data.ok) {
                    setParks(data.parks);
                    console.log(data.parks)
                }
            } catch (error) {
                console.error('Error al obtener parques:', error);
            }
        };
        fetchParks();
    }, []);
    return (
        <div>
            <h1>Parques</h1>
            <div className="create py-3">
                <button type="button" className="btn btn-primary btn-lg" >
                    Crear
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mod Imagen</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valoración</th>
                            <th scope="col">Dirección</th>
                            {/* <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parks.length > 0 ?
                                parks.map(({name, description, _id, rating, images, address}) => (
                                    <tr key={_id}>
                                        <td><button className='btn btn-sm btn-warning'>Imagen</button></td>
                                        <td><img src={images[0] || ""} alt="name" width={80}/></td>
                                        <td>{name}</td>
                                        <td>{description}</td>
                                        <td>{rating}</td>
                                        <td>{address}</td>
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

