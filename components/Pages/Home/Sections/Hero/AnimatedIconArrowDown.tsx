"use client"
import { motion } from 'framer-motion'

import IconArrowDown from '@/components/Icons/IconArrowDown'

function AnimatedIconArrowDown() {
    return (
        <motion.div
            className='absolute bottom-20 left-[50%] z-10  hidden md:block'
            initial={{ y: 0 }}
            animate={{ y: 25 }}
            transition={{ ease: "easeInOut", duration: 0.9, damping: true, repeat: Infinity, repeatType: "reverse" }}
        >
            <IconArrowDown sizeClassName='size-12' strokeColor='#3d3d3d' />
        </motion.div>
    )
}

export default AnimatedIconArrowDown