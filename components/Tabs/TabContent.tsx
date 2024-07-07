import uniqid from 'uniqid'
import Image from 'next/image'

import IService from "@/models/Service"
import { Fragment } from "react"

interface Props {
    service: IService
}

function TabContent({
    service
}: Props) {
    return (
        <div role="tabpanel" className="tab-content p-10 bg-white">
            <div className='grid grid-cols-12 gap-14 '>
                <div className='col-span-12 md:col-span-7'>
                    {
                        service.content.map((paragraph) => {
                            return (
                                <p key={uniqid()} className='mb-2 text-justify'>{paragraph}</p>
                            )
                        })
                    }
                </div>
                <div className='col-span-12 md:col-span-5 relative h-[373px] w-[373px]'>
                    <Image src={`/assets/img/services/${service.image}`} alt={service.title} fill />
                </div>
            </div>
        </div>
    )
}

export default TabContent