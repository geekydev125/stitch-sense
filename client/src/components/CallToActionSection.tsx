import Arrow from './Arrow'
import GreenButton from './GreenButton'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function CallToActionSection() {
    return (

        <Box px={{ xs: 2, md: 10 }}>
            <Typography variant="body1" component="p" textAlign='center' color='custom.theme.darkGray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
            </Typography>

            <Stack my={5} direction='row' justifyContent={'space-around'} alignItems='center'>
                <Arrow arrowType={1} scaleX={-1} rotate={0} />
                <GreenButton boxShadow variant='contained' size='large'> LET'S GET STARTED</GreenButton>
                <Arrow arrowType={1} />
            </Stack>
        </Box>
    )
}

export default CallToActionSection