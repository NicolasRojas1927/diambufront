import { useEffect, useState } from 'react'

export const Parks = () => {
    const [parks, setParks] = useState([]);
    const [imageId, setImageId] = useState('');
    
    const token = localStorage.getItem('token');

    const handleImageId = (imageId) => {
        setImageId(imageId);
        console.log(imageId)
    }

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

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    const uploadImages = async () => {
        try {
            let images = document.getElementById('inputImages');

            if (!images.files.length) {
                alert('Sin archivos selecionados');
                return;
            }

            let fileImages = [];
            for (let i = 0; i < images.files.length; i++) {
                fileImages.push(images.files[i]);
            }

            fileImages.forEach((file) => {
                // Verifica si el archivo es una imagen
                if (file.type.match('image.*')) {

                } else {
                    alert('Archivo no es una imagen.');
                    return;
                }
            })


            const formData = new FormData();
            for (let i = 0; i < images.files.length; i++) {
                formData.append('file', images.files[i]);
            }


            // const formData = new FormData();
            // formData.append('files', fileImages[0]);

            console.log(fileImages)

            // Realizar la petición POST
            const response = await fetch(`https://diambupark-back.vercel.app/api/uploads/products/${imageId}`, {
                method: 'PUT',
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'x-token': `${token}`
                },
                body: formData
            })

            const resp = await response.json();

            if (!response.ok) {
                alert(`Alerta: ${resp.message}`);
                console.log((resp.message ? resp.message : resp.errors))
                return
            }

            console.log(resp)

            location.reload();
            alert(`Imagenes de producto actualizada con éxito! `)

        } catch (error) {
            console.error('Error al crear el producto:', error);
            throw new Error(`Error al crear el producto:`, error);
        }
    }

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
                                parks.map(({ name, description, _id, rating, images, address }) => (
                                    <tr key={_id}>
                                        <td>
                                            <button type="button" className="btn btn-warning btn-sm ml-2" data-bs-toggle="modal"
                                                data-bs-target="#imagesModal" id="btnCreateImagesModal" onClick={() => handleImageId(_id)}>Imagen</button>
                                        </td>
                                        <td><img src={images[0] || ""} alt="name" width={80} /></td>
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



            <div className="images-park">
                <div className="images-card d-flex justify-content-center align-items-center">
                    <div className="modal fade" id="imagesModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modificar images de producto.
                                    </h5>
                                    <button type="button" id="btnCloseImagesModal" className="btn-close"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="bg-light p-3" id="formImagesProduct" encType="multipart/form-data" onSubmit={handleSubmit}>
                                        <div className="mb-3">

                                            <label htmlFor="inputImages" className="form-label">Imagenes:</label>
                                            <input type="file" className="form-control" id="inputImages"
                                                aria-describedby="ImagesHelp" multiple accept="image/*" required />
                                            <div id="ImagesHelp" className="form-text">
                                                Seleccionar todas las Imagenes del producto a la vez.
                                            </div>

                                        </div>
                                        <div className="imagesList m-3" id="imagesList" style={{ minHeight: "300px" }}>

                                        </div>
                                        <button className="btn btn-warning" id="btnImagesSave" onClick={() => uploadImages()}>
                                            Guardar
                                        </button>
                                        <button className="btn btn-danger" id="btnImagesFormCancel"
                                            data-bs-dismiss="modal">
                                            Cancelar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

