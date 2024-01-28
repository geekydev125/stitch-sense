import uniqid from 'uniqid'

import getImageUrl from '../../../utils/image-util'

import clients from '../../../data/clients.json'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider'

function OurClientsSection() {
    return (
        <Box component='section' sx={{ backgroundColor: 'black', width: '100%', minHeight: 'auto', maxHeight: '100%' }} mt={2} py={{ md: 3 }}>
            <Container>
                <Box pt={1} pb={5}>
                    <Typography my={1} mb={3} variant="h3" component='p' textAlign='center' color='custom.theme.almostWhite' fontWeight='bold'>OUR CLIENTS</Typography>

                    <Divider variant="middle" color='white' />

                    <Grid container >
                        {clients.map(client => {
                            return (
                                <Grid key={uniqid()} item xs={6} md={3} display='flex' justifyContent='center' alignItems='center'>
                                    <Box component='img' src={getImageUrl('logos', client.imageSrc)} alt={`${client.title} Logo`} maxWidth='100%' />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Divider variant="middle" color='white' />
                </Box>
            </Container>
        </Box>
    )
}

export default OurClientsSection