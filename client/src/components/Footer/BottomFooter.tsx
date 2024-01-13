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
                position: 'sticky',
                bottom: 0
            }}
        >
            <Container sx={{ height: '100%' }}>
                <Stack justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                    <Typography fontWeight='bold' color='white'>
                        Powered by&nbsp; 
                        <Link href="http://www.arielbehar.com" target="_blank" sx={{textDecoration: 'none'}} style={{ color: 'gray'}}>
                            Ariel Behar
                            <Box component='span' position='relative' bottom='-7px'>
                                <Box sx={{height: '25px'}} mx={1} component='img' src={arielbeharLogo} alt='Ariel Behar Logo' />
                            </Box>
                        </Link>
                    </Typography>
                </Stack>

            </Container>
        </Box>
    )
}

export default BottomFooter