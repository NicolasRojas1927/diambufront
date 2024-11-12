
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './sign-in.css';
// import { Link } from 'react-router-dom';


function Admin() {
    // const [namepark, setNamePark] = useState('');
    // const [descriptor, setDescriptor] = useState('');
    // const [address, setAddress] = useState('');
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    const [locations, setLocations] = useState([]);
    const [activities, setActivities] = useState([]);
    // const [theme, setTheme] = useState('light');
    // const [images, setImages] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                const [locationsRes, activitiesRes] = await Promise.all([fetch("https://diambupark-back.vercel.app/api/locations"),
                fetch("https://diambupark-back.vercel.app/api/activities")
                ]);

                if (!locationsRes.ok || !activitiesRes.ok) {
                    console.log("Error en una de las peticiones");
                    return;
                }
                const locationsData = await locationsRes.json();
                const activitiesData = await activitiesRes.json();

                console.log('Locations data:', locationsData);  // Verificar los datos
                console.log('Activities data:', activitiesData);  // Verificar los datos

                if (Array.isArray(locationsData) && locationsData.length > 0) {
                    setLocations(locationsData);
                } else {
                    setLocations([]);  // Si no es un array o está vacío, establecer un array vacío
                }

                if (Array.isArray(activitiesData) && activitiesData.length > 0) {
                    setActivities(activitiesData);
                } else {
                    setActivities([]);
                }



            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }; fetchData();
    }, []);


    //Cambia el tema cuando el valor de theme cambia
    // useEffect(() => {
    //     document.documentElement.setAttribute('data-theme', theme);
    // }, [theme]);

    // // Alterna entre los temas claro y oscuro
    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // };

    return (
        // <div className=" justify-content-center vh-100 bg-success bg-opacity-25"
        //     style={{
        //         backgroundSize: 'cover',
        //         backgroundPosition: 'center',
        //     }}>
        //     <nav className="navbar navbar-expand-lg bg-dark">
        //         <div className="container">
        //             <a className="navbar-brand" href="/">
        //                 <img src="../src/img/logoSF.webp" alt="" width="45" height="30" />
        //             </a>
        //             {/* Botones alineados a la derecha */}
        //             <div className="ms-auto">

        //                 {/* <Link to="/contactenos" className="btn btn-outline-info">
        //                     Contáctenos
        //                 </Link> */}
        //                 {/* Botón para alternar el modo claro/oscuro */}
        //                 <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
        //                     {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        //                 </button>
        //             </div>
        //         </div>
        //     </nav>
        //     <main className="form-signin  m-5 p-5">
        //         <h1 className="h3 mb-4 fw-normal text-center fw-bold">Modulo Administrador</h1>
        //         <div className="d-flex justify-content-around">
        //             <form className="w-25">

        //                 <h1 className="h4 mb-3 fw-normal text-center fw-bold">Registro de Parques</h1>
        //                 <div className="form-floating mb-2">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="floatingInput"
        //                         placeholder="name@example.com"
        //                         onChange={(e) => setNamePark(e.target.value)}
        //                     />
        //                     <label htmlFor="floatingInput">Nombre del Parque</label>
        //                 </div>
        //                 <div className="form-floating mb-2">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="floatingInput1"
        //                         placeholder="name@example.com"
        //                         onChange={(e) => setDescriptor(e.target.value)}
        //                     />
        //                     <label htmlFor="floatingInput">Descripción</label>
        //                 </div>
        //                 <div className="form-floating mb-2">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="floatingInput2"
        //                         placeholder="name@example.com"
        //                         onChange={(e) => setAddress(e.target.value)}
        //                     />
        //                     <label htmlFor="floatingInput">Dirección</label>
        //                 </div>
        //                 <div className="d-flex justify-content-around form-floating mb-2">
        //                     <div className="form-floating">
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="floatingInput3"
        //                             placeholder="name@example.com"
        //                             onChange={(e) => setLatitude(e.target.value)}
        //                         />
        //                         <label htmlFor="floatingInput">Latitud</label>
        //                     </div>
        //                     <div className="form-floating">
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             id="floatingInput4"
        //                             placeholder="name@example.com"
        //                             onChange={(e) => setLongitude(e.target.value)}
        //                         />
        //                         <label htmlFor="floatingInput">Longitud</label>
        //                     </div>
        //                 </div>
        //                 <div className="form-floating mb-2">
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         id="floatingInput5"
        //                         placeholder="name@example.com"
        //                         onChange={(e) => setLocations(e.target.value)}
        //                     />
        //                     <label htmlFor="floatingInput">Localidades</label>
        //                 </div>

        <div>
            <h1>locations</h1>
            {locations.length > 0 ? (
                <select>
                    {locations.map((locations, index) => (
                        <option key={index} value={locations.id}>
                            {locations.name}
                        </option>
                    ))}
                </select>

            ) : (
                <p>No locations available</p>
            )}

            <h1>Actividades</h1>
            {activities.length > 0 ? (
                <select>
                    {activities.map((activity, index) => (
                        <option key={index} value={activity.id}>
                            {activity.name}
                        </option>
                    ))}
                </select>
            ) : (
                <p>No activities available</p>
            )}

        </div>


        //  <div className="form-floating mb-2">
        //     <input
        //         type="text"
        //         className="form-control"
        //         id="floatingInput6"
        //         placeholder="name@example.com"
        //         onChange={(e) => setActivities(e.target.value)}
        //     />
        //  <option value="">Selecciona una actividad</option>
        //     {activities.map((activity) => (
        //         <option key={activity.id} value={activity.name}>
        //             {activity.name}
        //         </option>
        //     ))} */}
        //  <label htmlFor="floatingInput">Actividades</label>
        // </div> 

        //  <div className="Container">
        //     <div className="form-group">
        //         <label htmlFor="banner" className='mb-2'>Cargar Imagen:</label>
        //         <div className="input-group">
        //             <label className="input-group-btn">
        //                 <span className="btn-file"><input accept=".jpg,.png,.jpeg,.gif" className="hidden" name="banner" type="file" id="banner" onChange={(e) => setImages(e.target.value)} />
        //                 </span>
        //             </label>
        //         </div>
        //     </div>
        // </div> 


        //     <br />
        //     <button className="btn btn-success w-100 py-2 fw-bold" type="submit">
        //         Registrar
        //     </button>
        // </form>
        // <section>
        //     <h1 className="h3 mb-3 fw-normal text-center fw-bold">Solicitudes</h1>
        //     <div className="form-floating mb-2">
        //         <input
        //             type="text"
        //             className="form-control"
        //             id="floatingInput1"
        //             placeholder="name@example.com"
        //             onChange={(e) => setHistory(e.target.value)}
        //         />
        //         <label htmlFor="floatingInput">Solicitudes Contactenos</label>
        //     </div>
        // </section> 
        //         </div>
        //     </main>
        // </div>

    );
};

export default Admin;