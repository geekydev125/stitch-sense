import { Parallax } from 'react-parallax';

import manufactoringFacilityImage from '/assets/img/manufacturing-facility.png'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function NumbersSection() {

    return (

        <Box mt={5}>
            <Parallax blur={2} bgImage={manufactoringFacilityImage} bgImageAlt="Manufactoring Facility" strength={200}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Container>
                        <Box pb={5} px={2}>
                            <Box py={10} px={3}>
                                <Typography variant='h4' component='h4' textAlign='center' color='white' >
                                    Our manufacturing operations are all handled in-house at our own fully-equipped and technically-advanced manufacturing facility.
                                </Typography>
                            </Box>
                            <Divider variant="middle" color='white' />
                            <Stack p={5} spacing={5}>
                                <Box>
                                    <Typography variant='h2' component='h5' textAlign='left' color='white'><u>50</u> SEAMSTRESSES</Typography>
                                    <Typography variant='h5' component='h5' textAlign='left' color='white'>+50 additional ones when volumes are higher</Typography>
                                </Box>

                                <Box alignSelf='flex-end'>
                                    <Typography variant='h2' component='h5' textAlign='left' color='white'><u>500 - 600</u> ITEMS PER DAY</Typography>
                                    <Typography variant='h5' component='h5' textAlign='left' color='white'>production capacity</Typography>
                                </Box>

                                <Box>
                                    <Typography variant='h2' component='h5' textAlign='left' color='white'><u>6</u> HIGH-QUALITY </Typography>
                                    <Typography variant='h5' component='h5' textAlign='left' color='white'>Japanese printers</Typography>
                                </Box>

                                <Box alignSelf='flex-end'>
                                    <Typography variant='h2' component='h5' textAlign='left' color='white'><u>2</u> STATE-OF-THE-ART</Typography>
                                    <Typography variant='h5' component='h5' textAlign='left' color='white'>cutting lasers</Typography>
                                </Box>

                            </Stack>

                            <Divider variant="middle" color='white' />
                        </Box>
                    </Container>
                </Box>
            </Parallax>
        </Box >
    )
}

export default NumbersSection