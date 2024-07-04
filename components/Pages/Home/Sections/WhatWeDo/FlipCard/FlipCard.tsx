"use client"
import { useState } from 'react'
import IService from "@/models/Service"
import IconRotateLeft from '@/components/Icons/IconRotateLeft';

interface Props {
    service: IService
}

function FlipCard({
    service
}: Props) {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped)
    }
    return (
        <div
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
            style={{ backgroundImage: `url('/assets/img/services/${service.image}')` }}
            className='h-[250px] sm:h-280px bg-cover bg-no-repeat rounded-3xl overflow-hidden'
        >
            {/* Front of card */}
            <div className='bg-[rgba(0,0,0,0.5)] h-full w-full relative flex justify-center items-center'>
                <div className='absolute top-2 right-2'>
                    <IconRotateLeft fillColor='#f1f1f1' width='25px' height='25px' />
                </div>

                <h5 className='text-5xl text-light'>{service.title}</h5>
            </div>
            
        </div>
    )
}

export default FlipCard