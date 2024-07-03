import React from 'react'
import BackgroundVideoMask from './BackgroundVideoMask'
import BackgroundVideo from './BackgroundVideo'


export interface ICustomHeights {
    xs: string,
    sm: string,
    md: string,
    lg: string
}

function HeroSection() {

    const customHeights: ICustomHeights = {
        xs: '45vh',
        sm: '70vh',
        md: '90vh',
        lg: '90vh'
    }
    return (
        <section className='relative'>
            <BackgroundVideoMask customHeights={customHeights}>
                <div className='grid'>

                </div>

            </BackgroundVideoMask>
            <BackgroundVideo customHeights={customHeights} />

        </section>
    )
}

export default HeroSection