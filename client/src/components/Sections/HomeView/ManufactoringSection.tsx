import { Parallax } from 'react-parallax';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import manufactoringFacilityImage from '/assets/img/manufacturing-facility.png'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function ManufactoringSection() {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Parallax blur={0} bgImage={manufactoringFacilityImage} bgImageAlt="Manufactoring Facility" strength={200}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Container>
                        <Box py={{ xs: 5, md: 10 }}>
                            <Divider variant="middle" color='white' />

                            <Box my={{ xs: 3, md: 7 }}>
                                {
                                    isXs
                                        ? <>
                                            <Typography variant="h5" component='p' textAlign='center' color='custom.theme.almostWhite'>
                                                Our services are carefully designed to take care of
                                            </Typography>
                                            <br />
                                            <Typography variant="h5" component='p' textAlign='center' color='custom.theme.almostWhite' fontWeight='bold'>ALL OF YOUR PRODUCTION NEEDS</Typography>
                                            <br />
                                            <Typography variant='h5' component='p' textAlign='center' color='custom.theme.almostWhite'>
                                                Manufacturing operations are all handled in-house at our own fully-equipped and technically-advanced manufacturing facility
                                            </Typography>
                                        </>
                                        : <>
                                            <Typography variant="h4" component='p' textAlign='center' color='custom.theme.almostWhite'>
                                                Our services are carefully designed to take care of
                                            </Typography>
                                            <br />
                                            <Typography variant="h2" component='p' textAlign='center' color='custom.theme.almostWhite' fontWeight='bold'>ALL OF YOUR PRODUCTION NEEDS</Typography>
                                            <br />
                                            <Typography variant='h4' component='p' textAlign='center' color='custom.theme.almostWhite'>
                                                Manufacturing operations are all handled in-house at our own fully-equipped and technically-advanced manufacturing facility
                                            </Typography>
                                        </>
                                }
                            </Box>

                            <Divider variant="middle" color='white' />
                        </Box>
                    </Container>
                </Box>
            </Parallax>
        </Box >
    )
}

export default ManufactoringSection