"use client"
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

import IService from "@/models/Service"

import FlipCardFront from './FlipCardFront';
import FlipCardBack from './FlipCardBack';

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
            className={`h-[250px] sm:h-280px bg-cover bg-no-repeat rounded-3xl overflow-hidden `}
        >
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' containerClassName={`h-full transition-all duration-700 ${!isFlipped ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(0,0,0,0.85)]'}`}>
                <FlipCardFront service={service} />

                <FlipCardBack service={service} />
            </ReactCardFlip>
        </div>
    )
}

export default FlipCard