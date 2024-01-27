import styled from '@mui/material/styles/styled'

import stitchSenseLogo from '/assets/img/logos/stitchSense-logo.png'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/system/useTheme'

const BackgroundBox = styled(Box)`
    
    background-repeat: no-repeat;
    background-attachment: fixed; 

    position: relative;
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        background-color: rgba(0,0,0,0.5);
    }

    .logo {
        width: auto;
        max-height: 150px;
    }
`

interface Props {
    viewTitle: string,
    imageSrcSmallScreen: string,
    imageSrcLargeScreen: string
}

function ViewTopTitleSection({
    viewTitle,
    imageSrcSmallScreen,
    imageSrcLargeScreen,
}: Props) {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BackgroundBox
            sx={{
                backgroundImage: {
                    xs: `url(${imageSrcSmallScreen})`,
                    lg: `url(${imageSrcLargeScreen})`,
                },
                backgroundSize: 'contain',
                minHeight: {
                    xs: '15vh',
                    sm: '20vh',
                    md: '20vh',
                    lg: '30vh'
                }
            }}
        >
            <Box className="overlay" height='100%'>
                <Container sx={{ height: '100%' }} >
                    <Stack pl={{ md: 10 }} height='100%' direction='row' justifyContent='space-between' alignItems='center'>
                        {
                            isXs
                                ? <Typography variant='h2' component='h2' color='custom.theme.almostWhite'>{viewTitle}</Typography>
                                : <Typography variant='h3' component='h2' color='custom.theme.almostWhite'>{viewTitle}</Typography>
                        }

                        <Box
                            component='img'
                            className='logo'
                            alt="Stitch Sense Logo"
                            src={stitchSenseLogo}
                            height={{ xs: 70, md: 100 }}
                        />
                    </Stack>
                </Container>
            </Box>
        </BackgroundBox>
    )
}

export default ViewTopTitleSection