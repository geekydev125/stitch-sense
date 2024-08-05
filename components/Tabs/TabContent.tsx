import uniqid from 'uniqid'
import Image from 'next/image'

import IService from "@/models/Service"
import Button from '../Pages/Common/Buttons/Button'

interface Props {
    service: IService
}

function TabContent({
    service
}: Props) {
    return (
        <div role="tabpanel" className=" p-10 pb-4 min-h-[420px] pt-4 md:pt-10 px-0 md:px-4">
            <div className='grid grid-cols-12 gap-y-5 md:gap-10 pb-0'>

                <div className='col-span-12 md:col-span-7 flex flex-col items-center justify-between order-2 md:order-1'>
                    <div>
                        {
                            service.content.map((paragraph) => {
                                return (
                                    <p key={uniqid()} className='mb-2 text-justify'>{paragraph}</p>
                                )
                            })
                        }
                    </div>

                    <Button href='/contact' className="mt-5">Get a Quote</Button>
                </div>
                <div className='col-span-12 md:col-span-5 flex justify-center order-1 md:order-2'>
                    <div className='relative 
                    h-[170px] w-full 
                    sm:h-[170px] sm:w-3/4 
                    md:h-[300px] md:w-[300px]
                    lg:h-[420px] lg:w-[420px]
                    '>
                        <Image src={`/assets/img/services/${service.image}`} alt={service.title} fill className='object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabContent