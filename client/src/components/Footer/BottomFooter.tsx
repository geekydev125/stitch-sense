import arielbeharLogo from '../../assets/img/arielbehar-logo.png'

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

function BottomFooter() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '70px',
                backgroundColor: 'custom.theme.lightGreen',
                bottom: 0
            }}
        >
            <Container sx={{ height: '100%' }}>
                <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                    <Typography color='white' component='p' variant='body2'>
                        Powered by&nbsp;
                        <Link
                            href="http://www.arielbehar.com"
                            target="_blank"
                            sx={{ 
                                textDecoration: 'none',
                                color: 'custom.theme.darkGray',
                                '&:hover':{
                                    color: 'custom.theme.almostWhite',
                                    textDecoration: 'underline'
                                }
                         }}
                        >
                            Ariel Behar
                            <Box component='span' position='relative' bottom='-5px'>
                                <Box sx={{ height: '25px', zIndex: 1 }} mx={1} component='img' src={arielbeharLogo} alt='Ariel Behar Logo' />
                            </Box>
                        </Link>
                    </Typography>
                </Stack>

            </Container>
        </Box>
    )
}

export default BottomFooter