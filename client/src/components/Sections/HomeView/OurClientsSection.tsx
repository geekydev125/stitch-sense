import clients from '../../../data/clients.json'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import uniqid from 'uniqid'
import SectionTitle from '../../SectionTitle'

function OurClientsSection() {
    return (
        <Box component='section'>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Stack sx={{ height: '100%' }} justifyContent='center' alignItems='center'>
                            <SectionTitle title='OUR CLIENTS' p={2} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={1}>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant='body1' component='p' textAlign={{xs: 'justify', md: 'center'}} color='custom.theme.darkGray'>We have years of experience in the fashion industry with highly successful clothing brands like <b>CandyCatz</b>, <b>Badinka</b>, <b>RaveKitty</b> and <b>Super 5 Clothing</b> – all dedicated to delivering top-notch quality and style.</Typography>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ backgroundColor: 'black', width: '100%', minHeight: 'auto', maxHeight: '100%' }} mt={2} py={{md: 3}}>
                <Container>
                    <Grid container >
                        {clients.map(client => {
                            return (
                                <Grid key={uniqid()} item xs={6} md={3} display='flex' justifyContent='center' alignItems='center'>
                                    <Box component='img' src={client.imageSrc} alt={`${client.title} Logo`} maxWidth='100%' />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default OurClientsSection