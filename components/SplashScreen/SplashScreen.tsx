"use client"
import Image from 'next/image'
import BouncingDots from './BouncingDots';

function SplashScreen() {
    return (
        <div className='flex h-screen items-center justify-center bg-primary' >
            <div>
                <div className='w-[100px] h-[100px] relative mb-7'>
                    <Image id="logo" src="/assets/img/logos/stitchSense-logo-white.png" fill alt="Logo" />
                </div>
                <BouncingDots />
            </div>
        </div>
    )
}

export default SplashScreen