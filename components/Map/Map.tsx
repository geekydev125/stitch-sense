"use client"
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LoadingMap from './LoadingMap';
import { useEffect } from 'react';

const center = {
    lat: 42.647780,
    lng: 23.399793
};


function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })

    useEffect(() => {
        
    }, [isLoaded])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
            center={center}
            zoom={15}
            options={{
                controlSize: 24,
                disableDefaultUI: true,
                maxZoom: 20,
                minZoom: 10,
                scrollwheel: true

            }}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <MarkerF
                position={center}
                options={{
                    icon: "/assets/img/logos/stitchSense-google-map-marker.png",
                    title: 'Stitch Sense',
                }}
            />
        </GoogleMap>
    ) : <LoadingMap />
}

export default Map