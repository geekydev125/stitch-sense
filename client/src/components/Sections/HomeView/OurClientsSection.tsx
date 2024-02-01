import uniqid from 'uniqid'

import getImageUrl from '../../../utils/image-util'

import clients from '../../../data/clients.json'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider'
import ProgressiveImage from 'react-progressive-image-loading'

function OurClientsSection() {
    return (
        <Box component='section' sx={{ backgroundColor: 'black', width: '100%', minHeight: 'auto', maxHeight: '100%' }} mt={2} py={{ md: 3 }}>
            <Container>
                <Box pt={1} pb={5}>
                    <Typography my={1} mb={{ xs: 2, sm: 3 }} variant="h3" component='p' textAlign='center' color='custom.theme.almostWhite' >OUR CLIENTS</Typography>

                    <Divider variant="middle" color='white' />

                    <Grid container spacing={{ xs: 1, sm: 0 }} my={{ xs: 1, sm: 0 }} >
                        {clients.map(client => {
                            return (
                                <Grid key={uniqid()} item xs={3} display='flex' justifyContent='center' alignItems='center'>
                                    <ProgressiveImage
                                        preview={getImageUrl('logos', client.imageSrcSmall)}
                                        src={getImageUrl('logos', client.imageSrc)}
                                        initialBlur={5}
                                        render={(src) =>
                                        <Box
                                            component='img'
                                            maxWidth='100%'
                                            src={src}
                                            alt={`${client.title} Logo`}
                                            loading="lazy"
                                            />
                                        }

                                    />
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