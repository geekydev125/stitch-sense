"use client"
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import LoadingMap from './LoadingMap';

const center = {
    lat: 42.647780,
    lng: 23.399793
};

interface Props {
    handleMapLoad: (isLoaded: boolean) => void
}

function Map({
    handleMapLoad
}: Props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    })

    return (
        <div className="h-[300px] md:h-[340px] overflow-hidden w-full relative before:bg-no-repeat before:h-full before:md:bg-[url('/assets/img/black-fade.png')] before:bg-contain before:md:w-[22%] before:absolute before:z-[1]">
            {
                isLoaded ? (
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
                        onLoad={() => handleMapLoad(true)}
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
        </div>
    )
}

export default Map