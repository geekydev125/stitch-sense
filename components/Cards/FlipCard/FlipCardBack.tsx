import Button from "@/components/Pages/Common/Buttons/Button"
import IService from "@/models/Service"

interface Props {
    service: IService
}
function FlipCardBack({
    service
}:Props) {
    return (
        <div className='text-white p-4 flex flex-col items-center h-full justify-between'>
            <p>{service.contentFlipCard}</p>

            <Button href={`/services?tab=${service.title.toLowerCase()}`} className='btn-sm'>Learn More</Button>
        </div>
    )
}

export default FlipCardBack