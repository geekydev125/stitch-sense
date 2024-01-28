
import stitchSenseLogo from '../assets/img/logos/stitchSense-logo.png'
import Stack from "@mui/material/Stack"
import BouncingDotsLoader from "./BouncingDotsLoader"
import Box from '@mui/material/Box'

function Loader() {


    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            zIndex={10}

            sx={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'custom.theme.lightGreen',
            }}
        >
            <img src={stitchSenseLogo} alt="Stitch Sense Logo" />
            <Box mt={5}>
                <BouncingDotsLoader />
            </Box>
        </Stack>
    )
}

export default Loader