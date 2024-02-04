import { useEffect, useState } from "react"

import Map from '../Map'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import baseUrl from "../../config/base-url"

function TopFooter() {
    const [mapApiKey, setMapApiKey] = useState<string>('')

    useEffect(() => {
        fetch(`${baseUrl}/google-map`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then(data => {
                setMapApiKey(data.mapApiKey)
            })
            .catch((error) => {
                console.log('An error occurred while fetching Google Map API key: ', error.message);
            })
    }, [])

    return (
        <Box sx={{ backgroundColor: 'black' }} py={3}>
            <Container>
                <Grid container>
                    <Grid item
                        xs={12}
                        sm={mapApiKey ? 6 : 12}
                        md={mapApiKey ? 4 : 12}>
                        <Stack
                            height='100%'
                            spacing={2}
                            py={2}
                            direction={mapApiKey ? 'column' : 'row'}
                            justifyContent='space-around'
                            alignItems={mapApiKey ? 'flex-start' : 'center'}
                        >
                            <Box>
                                <Typography variant='h4' component='h4' color='custom.theme.darkGreen'>LET’S WORK TOGETHER!</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h5' component='h5' color='custom.theme.almostWhite' fontWeight='bold' mb={1}>Contact Details:</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>
                                    Name:&nbsp;
                                    <Box component="span" color='custom.theme.darkGreen'><b>Ganimir Vangelov (COO)</b></Box>
                                </Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>
                                    Phone:&nbsp;
                                    <Box component="span" color='custom.theme.darkGreen'><b>+(359) 888 81 11 32</b></Box>
                                </Typography>
                                <Typography variant='body1' component='p' color='custom.theme.almostWhite'>
                                    Email:&nbsp;
                                    <Box component="span" color='custom.theme.darkGreen'><b>ganimirvangelov@gmail.com</b></Box>
                                </Typography>
                            </Box>
                            <Box alignSelf={mapApiKey ? 'inherit' : 'flex-start'}>
                                <Typography variant='h5' component='h5' color='custom.theme.almostWhite' fontWeight='bold' mb={1}>Location:</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.darkGreen'>280 Tsarigradski Complex,</Typography>
                                <Typography variant='body1' component='p' color='custom.theme.darkGreen'>Sofia, Bulgaria</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        {mapApiKey && <Map mapApiKey={mapApiKey} />}
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
}

export default TopFooter