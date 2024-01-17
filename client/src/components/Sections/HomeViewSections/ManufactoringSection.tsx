import { Parallax } from 'react-parallax';

import manufactoringFacilityImage from '../../../assets/img/manufacturing-facility.png'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ManufactoringSection() {

    return (
        <Box>
            <Parallax blur={1} bgImage={manufactoringFacilityImage} bgImageAlt="Manufactoring Facility" strength={200}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Container>
                        <Box py={10}>
                            <Divider variant="middle" color='white'  />

                            <Box my={7}>
                                <Typography variant="h3" component='p' textAlign='center' color='custom.theme.almostWhite'>
                                    Our services are carefully designed to take care of <b><br />ALL OF YOUR PRODUCTION NEEDS</b>.
                                </Typography>
                                
                                <Typography mt={5} variant='h4' component='p' textAlign='center' color='custom.theme.almostWhite'>
                                    Manufacturing operations are all handled in-house at our own fully-equipped and technically-advanced manufacturing facility.
                                </Typography>
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