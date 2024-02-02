import Arrow from './Arrow'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import GreenButtonWithLink from './GreenButtonWithLink'

function CallToActionSection() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <Box px={{ xs: 2, md: 10 }} component='section'>
            <Typography variant="body1" component="p" textAlign={{ xs: 'justify', md: 'center' }} color='custom.theme.darkGray'>
                Elevate your fashion brand with StitchSense – revolutionize your designs, streamline your production, and bring your vision to life. Take the next step in crafting excellence, and experience the power of StitchSense for a seamless journey in the world of fashion.
            </Typography>

            <Stack my={5} direction='row' justifyContent={'space-around'} alignItems='center'>
                {!isXs && <Arrow arrowType={1} scaleX={1} rotate={0} height={20} />}
                <GreenButtonWithLink boxShadow variant='contained' size='large' linkTo='contact-us'> LET'S GET STARTED</GreenButtonWithLink>
                <Arrow arrowType={1} height={20} scaleX={-1} rotate={0} />
            </Stack>
        </Box>
    )
}

export default CallToActionSection