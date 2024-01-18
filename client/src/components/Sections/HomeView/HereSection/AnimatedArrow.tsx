import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

interface Props {
    scrollTo: () => void
}
function AnimatedArrow({scrollTo}:Props) {
    const movingAnimation = {
        bottom: ["8%", "6%"], // Keyframes for pulsating effect
        transition: {
            duration: 1.5, // Total duration for one pulsating cycle
            repeat: Infinity, // Infinite animation loop
        },
    };
    
    return (
        <AnimatePresence>
            <motion.div
                animate={movingAnimation}
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    bottom: '8%',
                    left: '50%',
                    transform: 'translate(-50%, -8%)'
                }}
            >
                <IconButton onClick={scrollTo}>
                    <ArrowCircleDownIcon sx={{ fontSize: 45 }} />
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedArrow