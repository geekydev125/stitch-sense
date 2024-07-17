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
        <div role="tabpanel" className=" p-10 pb-4 min-h-[420px] px-4">
            <div className='grid grid-cols-12 gap-10 pb-0'>
                <div className='col-span-12 md:col-span-7 flex flex-col items-center justify-between'>
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
                <div className='col-span-12 md:col-span-5 relative h-[420px] w-[420px]'>
                    <Image src={`/assets/img/services/${service.image}`} alt={service.title} fill />
                </div>
            </div>
        </div>
    )
}

export default TabContent