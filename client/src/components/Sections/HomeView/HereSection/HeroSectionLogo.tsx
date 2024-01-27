import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import blackLogo from '/assets/img/stitchSense-black-logo.png'
import whiteLogo from '/assets/img/stitchSense-logo.png'

import Box from '@mui/material/Box'

function HeroSectionLogo() {
    const theme = useTheme();
    const isXsSm = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Box
            component='img'
            sx={{
                alignSelf: 'center',
                marginTop: {
                    xs: '10px',
                    md: '30px'
                },
                width: {
                    xs: '70px',
                    sm: '100px',
                    md: '150px'
                }
            }}
            src={ isXsSm ? whiteLogo : blackLogo}
            alt='Stitch Sense Logo'
        />
    )
}

export default HeroSectionLogo