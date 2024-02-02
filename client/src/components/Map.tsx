import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import getImageUrl from '../utils/image-util';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

const googleMapsAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const center = {
	lat: 42.647780,
	lng: 23.399793
};

function Map() {
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.down('sm'))
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: googleMapsAPI
	})

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={{
				width: '100%',
				height: isXs ? '300px' : '100%'
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
					icon: getImageUrl('logos', 'stitchSense-google-map-marker.png'),
					title: 'Stitch Sense',

				}}
			/>
		</GoogleMap>
	) : <div>Loading Google Map...</div>
}

export default Map