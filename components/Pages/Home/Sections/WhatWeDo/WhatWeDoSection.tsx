import uniqid from 'uniqid'

import SectionTitle from '@/components/Common/Titles/SectionTitle'

import services from '@/data/services.json'
import FlipCard from './FlipCard/FlipCard'

function WhatWeDoSection() {
    return (
        <section className='container'>
            <SectionTitle>What we do</SectionTitle>

            <p className='text-2xl md:text-4xl text-center'>A complete private label solution for retailers and brand owners.</p>

            <div className='grid grid-cols-12 gap-4'>

                {services.map((service) => (
                    <div key={uniqid()} className='col-span-12 md:col-span-4 rounded-3xl shadow-xl'>
                        <FlipCard service={service} />
                    </div>
                ))
                }

            </div>
        </section>
    )
}

export default WhatWeDoSection