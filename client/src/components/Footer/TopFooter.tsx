import googleMapPlaceHolder from '../../assets/img/google-map.png'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

function TopFooter() {
    return (
        <Box sx={{ backgroundColor: 'black' }} py={3}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Stack height='100%' spacing={2} py={2} flexDirection='column' justifyContent='space-around'>
                            <Box>
                                <Typography variant='h4' component='h5' color='custom.theme.lightGreen'>LET’S WORK TOGETHER!</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h5' component='h5' color='custom.theme.almostWhite' fontWeight='bold' mb={1}>Contact Details:</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>Name: <b>Ganimir Vangelov (COO)</b></Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>Phone: <b>+(359) 888 81 11 32</b></Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>Email: <b>ganimirvangelov@gmail.com</b></Typography>
                            </Box>
                            <Box>
                                <Typography variant='h5' component='h5' color='custom.theme.almostWhite' fontWeight='bold'  mb={1}>Location:</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>280 Tsarigradski Complex,</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>Sofia, Bulgaria</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Stack flexDirection='column' justifyContent='center' p={1} height='100%'>
                            <img src={googleMapPlaceHolder} alt='Google Map Placeholder' />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
}

export default TopFooter