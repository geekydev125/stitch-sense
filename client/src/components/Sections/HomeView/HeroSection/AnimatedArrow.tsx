import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';

import { HashLink } from 'react-router-hash-link';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
function AnimatedArrow() {
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
                <HashLink to="/#about-section">
                    <IconButton>
                        <ArrowCircleDownIcon sx={{ fontSize: 45 }} />
                    </IconButton>
                </HashLink>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedArrow