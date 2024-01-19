import { useRef } from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import stitchingVideo from '../../../../assets/video/stitching-hd-black-white.mp4'
import Stack from '@mui/material/Stack';
import { ICustomHeights } from './HeroSection';

function BackgroundVideo(customHeights: ICustomHeights) {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    return (
        <Stack direction='row' justifyContent='flex-end'>
            <Button sx={{ display: 'none', zIndex: 1 }} onClick={handlePlay}>Play Video</Button>

            <Box
                component="video"
                ref={videoRef}
                sx={{
                    height: { ...customHeights },
                    objectFit: {
                        xs: 'cover',
                        sm: 'cover',
                        md: 'contain',
                    },
                    marginLeft: 'auto',
                    pointerEvents: 'none'
                }}
                autoPlay
                muted
                loop
            >
                <source src={stitchingVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </Box>
        </Stack>
    )
}

export default BackgroundVideo