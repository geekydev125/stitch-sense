import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import getImageUrl from '../utils/image-util';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import Box from '@mui/material/Box';


const center = {
	lat: 42.647780,
	lng: 23.399793
};

interface Props {
	mapApiKey: string
}

function Map({
	mapApiKey
}:Props) {
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.only('xs'))
	const isSm = useMediaQuery(theme.breakpoints.only('sm'))
	const isMd = useMediaQuery(theme.breakpoints.only('md'))

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: mapApiKey
	})

	return isLoaded ? (
		<Box
			sx={{
				height: {
					xs: '300px',
					sm: '100%',
				},
				position: 'relative',
				"&::before": {
					content: '""',
					height: '100%',
					width: isMd ? '15.5%' : '12%',
					backgroundImage: {
						xs: 'none',
						md: `url(${getImageUrl(null, 'black-fade.png')})`
					},
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					position: 'absolute',
					zIndex: 1,
				}
			}}
		>
			<GoogleMap
				mapContainerStyle={{
					width: '100%',
					height: isXs ? '300px' : isSm ? '350px' : '100%',
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
						icon: getImageUrl('logos', 'stitchSense-google-map-marker.png'),
						title: 'Stitch Sense',
					}}
				/>
			</GoogleMap>
		</Box >
	) : <div>Loading Google Map...</div>
}

export default Map