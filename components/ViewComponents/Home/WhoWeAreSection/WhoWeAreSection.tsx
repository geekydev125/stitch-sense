import SectionTitle from '@/components/Common/Titles/SectionTitle'
import React from 'react'

function WhoWeAreSection() {
    return (
        <section className="container my-5 ">
            <SectionTitle>Who we are</SectionTitle>

            <div className="bg-none rounded-2xl lg:bg-[url('/assets/img/about-background-faded.png')] bg-no-repeat bg-contain grid grid-cols-12">

                <div className='col-span-12 lg:col-start-6 lg:col-span-7 py-8 flex flex-col gap-4 text-justify'>
                    <p>With <span className='uppercase font-bold'>over a decade of expertise in the dynamic realm of fashion</span>, we proudly stand as a seasoned clothing manufacturer. Our commitment to excellence has propelled us into various facets of the industry.</p>

                    <p>Functioning as a premier white-label provider, our clientele spans diverse retail landscapes—from mass and specialty outlets to department stores, off-price retailers, and cutting-edge e-commerce platforms. Our core focus revolves around ensuring rapid market delivery and adopting direct-to-consumer strategies.</p>

                    <p>Based in Europe, we are the creative force behind renowned clothing brands such as <span className='uppercase font-bold'>Badinka, CandyCatz and RaveKitties</span>. For more than 10 years, these brands have curated captivating fashion experiences for our delighted customers, showcasing our unwavering dedication to style and quality.</p>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAreSection