import React from 'react'
import { AdvancedMarker, APIProvider, Map, Marker, Pin } from '@vis.gl/react-google-maps'

export const Maps = ({userLocation}) => {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const {lat, lng} = userLocation;

    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                style={{ width: '100%', height: '90vh' }}
                defaultCenter={{ lat: 4.624001119222510, lng: -74.07167534580600 }}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <Marker position={{ lat: lat, lng: lng }} />
                {/* <Marker position={{ lat: 4.622649071076564, lng: -74.07147029161901 }} /> */}

                
            </Map>
        </APIProvider>
    )
}