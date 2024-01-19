import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroSectionBackground from './HeroSectionBackground';
import AnimatedArrow from './AnimatedArrow';
import BackgroundVideo from './BackgroundVideo';
import HeroSectionLogo from './HeroSectionLogo';

import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export interface ICustomHeights {
    xs: string,
    sm: string,
    md: string,
    lg: string
}

function HeroSection() {
    const theme = useTheme();
    const isXsSm = useMediaQuery(theme.breakpoints.down('md'));

    const customHeights: ICustomHeights = {
        xs: '50vh',
        sm: '70vh',
        md: '80vh',
        lg: '90vh'
    }

    return (
        <Box position='relative'>
            <HeroSectionBackground customHeights={customHeights}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={8} lg={6}>
                            <Stack height='100%' display='column' justifyContent='center' alignItems='center' sx={{ height: { ...customHeights } }}>
                                <Typography variant='h1' component='h1' color={isXsSm ? 'custom.theme.almostWhite' : 'custom.theme.darkGray'} textAlign='center' >StitchSense</Typography>
                                <Typography variant='h6' component='h3' color={isXsSm ? 'custom.theme.almostWhite' : 'custom.theme.darkGray'} textAlign='center'>WHERE YOUR BUSINESS PRODUCTION NEEDS ARE MET</Typography>

                                <HeroSectionLogo />
                            </Stack>
                        </Grid>
                    </Grid>

                </Container>

                <Box display={{ xs: 'none', md: 'block' }}>
                    <AnimatedArrow />
                </Box>
            </HeroSectionBackground>

            <BackgroundVideo {...customHeights} />
        </Box>
    )
}

export default HeroSection