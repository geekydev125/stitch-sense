import uniqid from 'uniqid'

import SectionTitle from '@/components/Common/Titles/SectionTitle'

import services from '@/data/services.json'
import FlipCard from '../../../../Cards/FlipCard/FlipCard'

function WhatWeDoSection() {
    return (
        <section className='container'>
            <SectionTitle>What we do</SectionTitle>

            <p className='text-2xl lg:text-3xl xl:text-4xl text-center mb-2'>A complete private label solution for retailers and brand owners.</p>

            <div className='grid grid-cols-12 gap-4'>

                {services.map((service) => (
                    <div key={uniqid()} className='col-span-12 sm:col-span-6 md:col-span-4 rounded-3xl shadow-2xl'>
                        <FlipCard service={service} />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default WhatWeDoSection