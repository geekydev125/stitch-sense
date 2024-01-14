import styled from '@mui/material/styles/styled'

import stitchSenseLogo from '../assets/img/stitchSense-logo.png'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const BackgroundBox = styled(Box)`
    min-height: 30vh;
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
    imageSrc: string,
    backgroundPosition: string,
    backgroundSize?: string
}

function ViewTopTitleSection({
    viewTitle,
    imageSrc,
    backgroundPosition,
    backgroundSize = 'cover'
}: Props) {
    return (
        <BackgroundBox
            sx={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize
            }}
        >
            <Box className="overlay" height='100%'>
                <Container sx={{ height: '100%' }} >
                    <Stack pl={{ md: 10 }} height='100%' direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h2' component='h2' color='white'>{viewTitle}</Typography>
                        <img className='logo' alt="Stitch Sense Logo" src={stitchSenseLogo} height={100} />
                    </Stack>
                </Container>
            </Box>
        </BackgroundBox>
    )
}

export default ViewTopTitleSection