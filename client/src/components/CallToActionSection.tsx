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

        <Box px={{ xs: 2, md: 10 }}>
            <Typography variant="body1" component="p" textAlign={{ xs: 'justify', md: 'center'}} color='custom.theme.darkGray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </Typography>

            <Stack my={5} direction='row' justifyContent={'space-around'} alignItems='center'>
               {!isXs && <Arrow arrowType={1} scaleX={1} rotate={0} height={20} />} 
                <GreenButtonWithLink boxShadow variant='contained' size='large' linkTo='contact-us'> LET'S GET STARTED</GreenButtonWithLink>
                <Arrow arrowType={1} height={20} scaleX={-1} rotate={0}/>
            </Stack>
        </Box>
    )
}

export default CallToActionSection