import IService from '@/models/Service'

import IconRotateLeft from '@/components/Icons/IconRotateLeft'

interface Props {
    service: IService
}

function FlipCardFront({
    service
}: Props) {
    return (
        <div className='h-full w-full relative flex justify-center items-center'>
            <div className='absolute top-2 right-2'>
                <IconRotateLeft fillColor='#f1f1f1' width='25px' height='25px' />
            </div>

            <h5 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl text-light'>{service.title}</h5>
        </div>
    )
}

export default FlipCardFront