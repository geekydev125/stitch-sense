"use client"
import Image from 'next/image'


import BackgroundVideoMask from './BackgroundVideoMask'
import BackgroundVideo from './BackgroundVideo'
import AnimatedIconArrowDown from './AnimatedIconArrowDown'

function HeroSection() {

    return (
        <section className='relative'>
            <BackgroundVideoMask>
                <div className='container h-full'>
                    <div className='flex flex-col justify-center items-start h-full'>
                        <div className='flex flex-col items-center w-full md:w-auto'>
                            <h1 className='text-5xl sm:text-8xl md:text-7xl lg:text-[103px] lg:leading-[100px] mb-4 text-light md:text-dark'>StitchSense</h1>
                            <p className='uppercase px-10 sm:px-0 sm:text-xl md:text-lg lg:text-[23px] text-center mb-6 text-light md:text-dark'>Where your business production needs are met</p>

                            <div className='relative md:hidden w-[65px] h-[65px] sm:w-[95px] sm:h-[95px]' >
                                <Image src='/assets/img/logos/stitchSense-logo-white.png' fill alt='Arrow down' />
                            </div>

                            <div className='relative hidden md:block w-[120px] h-[120px] lg:w-[130px] lg:h-[130px]' >
                                <Image src='/assets/img/logos/stitchSense-logo-black.png' fill alt='Arrow down' />
                            </div>

                        </div>
                    </div>
                </div>
            </BackgroundVideoMask>

            <AnimatedIconArrowDown />

            <BackgroundVideo />



        </section>
    )
}

export default HeroSection