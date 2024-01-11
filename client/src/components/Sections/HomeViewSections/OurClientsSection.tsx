import badinkaLogo from '/assets/img/badinka-logo.png'
import candycatzLogo from '/assets/img/candy-catz-logo.png'
import raveKittiesLogo from '/assets/img/rave-kitties-logo.png'
import super5Logo from '/assets/img/super5-logo.png'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import uniqid from 'uniqid'

const logos = [
    {
        title: 'Badinka',
        imageSrc: badinkaLogo
    },
    {
        title: 'Candy Catz',
        imageSrc: candycatzLogo
    },
    {
        title: 'Rave Kitties',
        imageSrc: raveKittiesLogo
    },
    {
        title: 'Super 5',
        imageSrc: super5Logo
    }
]

function OurClientsSection() {
    return (
        <Box component='section' mt={5}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Stack sx={{ height: '100%' }} justifyContent='center' alignItems='center'>
                            <Typography variant="h3" component="h4">OUR CLIENTS</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h6' component='p' textAlign='center'>We have years of experience in the fashion industry with highly successful clothing brands like <b>CandyCatz</b>, <b>Badinka</b>, <b>RaveKitty</b> and <b>Super 5 Clothing</b> – all dedicated to delivering top-notch quality and style.</Typography>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ backgroundColor: 'black', width: '100%', minHeight: '200px', maxHeight: '300px' }} mt={2}>
                <Container>
                    <Grid container>
                        {
                            logos.map(logo => {
                                return (
                                    <Grid key={uniqid()} item xs={6} md={3} display='flex' justifyContent='center' alignItems='center'>
                                        <Box component='img' src={logo.imageSrc} alt={`${logo.title} Logo`} maxHeight='250px' />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default OurClientsSection