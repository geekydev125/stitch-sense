import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import stitchingVideo from '/assets/video/stitching-hd-black-white.mp4'
import paperPatternTransparent from '/assets/img/paper-pattern-with-transparency.png'
import blackLogo from '/assets/img/stitchSense-black-logo.png'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { IconButton } from '@mui/material';

function HeroSection() {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    const movingAnimation = {
        bottom: ["8%", "6%"], // Keyframes for pulsating effect
        transition: {
            duration: 1.5, // Total duration for one pulsating cycle
            repeat: Infinity, // Infinite animation loop
        },
    };


    return (
        <>

            <Box
                sx={{
                    width: '100%',
                    height: '90vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: `url('${paperPatternTransparent}') no-repeat`,
                    backgroundSize: 'cover',
                    zIndex: 5
                }}
            >
                <Container sx={{ height: '90vh' }}>
                    <Stack height='100%' display='column' justifyContent='center'>
                        <Stack width='50%'>
                            <Typography variant='h1' component='h1'>StitchSense</Typography>
                            <Typography variant='h6' component='h3'>WHERE YOUR BUSINESS PRODUCTION NEEDS ARE MET</Typography>
                            <img style={{ alignSelf: 'center', marginTop: '30px' }} src={blackLogo} width='150px' alt='Black Logo' />
                        </Stack>
                    </Stack>
                </Container>

                <AnimatePresence>
                    <motion.div
                        // initial={{ bottom: '5%',transform: 'translate(-50%, -5%)' }}
                        animate={movingAnimation}
                        // exit={{ bottom: '2%',transform: 'translate(-50%, -2%)' }}
                        style={{
                            position: 'absolute',
                            zIndex: 10,
                            bottom: '8%',
                            left: '50%',
                            transform: 'translate(-50%, -8%)'
                        }}
                    >
                        <IconButton>
                            <ArrowCircleDownIcon sx={{fontSize: 45}} />
                        </IconButton>
                    </motion.div>
                </AnimatePresence>
            </Box>


            <Stack direction='row' justifyContent='flex-end'>
                <Button sx={{ display: 'none', zIndex: 1 }} onClick={handlePlay}>Play Video</Button>

                <video ref={videoRef} style={{ height: '90vh' }} autoPlay muted loop>
                    <source src={stitchingVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Stack>
        </>
    )
}

export default HeroSection