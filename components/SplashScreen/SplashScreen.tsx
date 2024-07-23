"use client"
import Image from 'next/image'
import BouncingDots from './BouncingDots';

function SplashScreen() {
    return (
        <div className='flex h-screen items-center justify-center bg-primary' >
            <div>
                <Image src="/assets/img/logos/stitchSense-logo-white.png" className='mb-7' alt="Logo" width={100} height={100} />

                <BouncingDots />
            </div>
        </div>
    )
}

export default SplashScreen