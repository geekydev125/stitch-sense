import { Parallax } from 'react-parallax';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import manufactoringFacilityImage from '../../../assets/img/manufacturing-facility.png'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function WhyChooseUsSection() {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component='section'>
            <Parallax blur={0} bgImage={manufactoringFacilityImage} bgImageAlt="Manufactoring Facility" strength={200}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Container>
                        <Box py={{ xs: 5, md: 10 }}>
                            <Divider variant="middle" color='white' />

                            <Box my={{ xs: 3, md: 7 }}>
                                {
                                    isXs
                                        ? <>
                                            <Typography variant="h3" component='p' textAlign='center' color='custom.theme.almostWhite' fontWeight='bold'>WHY CHOOSE US</Typography>
                                            <br />
                                            <Typography variant="body1" component='p' textAlign='center' color='custom.theme.almostWhite'>
                                                <Box component='span' fontWeight='bold' textTransform="uppercase"> Our mission</Box> is to foster the growth of your business. By seamlessly managing all manufacturing processes, we free up your time to nurture and promote your brand. Your success is our utmost priority, and we are dedicated to meeting your needs by delivering products of the highest quality, always on time.
                                            </Typography>
                                        </>
                                        : <>
                                            <Typography variant="h2" component='p' textAlign='center' color='custom.theme.almostWhite' fontWeight='bold'>WHY CHOOSE US</Typography>
                                            <br />
                                            <Typography variant="h5" component='p' textAlign='center' color='custom.theme.almostWhite'>
                                            <Box component='span' fontWeight='bold' textTransform="uppercase">Our mission</Box> is to foster the growth of your business. By seamlessly managing all manufacturing processes, we free up your time to nurture and promote your brand. Your success is our utmost priority, and we are dedicated to meeting your needs by delivering products of the highest quality, always on time.
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

export default WhyChooseUsSection