import Image from 'next/image'

import BackgroundVideoMask from './BackgroundVideoMask'
import BackgroundVideo from './BackgroundVideo'

function HeroSection() {

    return (
        <section className='relative'>
            <BackgroundVideoMask>
                <div className='container h-full'>
                    <div className='flex flex-col justify-center items-start h-full'>

                        <div className='flex flex-col items-center w-full md:w-auto'>
                            <h1 className='text-5xl md:text-8xl mb-5 text-light md:text-dark'>StitchSense</h1>
                            <p className='uppercase text-lg md:text-xl font-bold text-center mb-5 text-light md:text-dark'>Where your business production needs are met</p>
                            <Image className='md:hidden' src='/assets/img/logos/stitchSense-logo-white.png' width={65} height={65} alt='Arrow down' />
                            <Image className='hidden md:block' src='/assets/img/logos/stitchSense-logo-black.png' width={150} height={150} alt='Arrow down' />
                        </div>
                        
                    </div>
                </div>

            </BackgroundVideoMask>
            <BackgroundVideo />

        </section>
    )
}

export default HeroSection