import React from 'react'
import { AdvancedMarker, APIProvider, Map, Marker, Pin } from '@vis.gl/react-google-maps'

export const Maps = ({ parks = [], userLocation }) => {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const { lat, lng } = userLocation;

    console.log(parks)

    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                style={{ width: '100%', height: '90vh' }}
                defaultCenter={{ lat: 4.624001119222510, lng: -74.07167534580600 }}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <Marker key={lat} position={{ lat: lat, lng: lng }} title={"Mi ubicacion"} />
                {/* <Marker position={{ lat: 4.622649071076564, lng: -74.07147029161901 }} /> */}

                {parks.length > 0 ?
                    parks.map(({ latitude, longitude, _id }) => (<Marker key={_id + "_" + latitude} position={{ lat: latitude, lng: longitude }} />))
                    : null
                }
            </Map>
        </APIProvider>
    )
}