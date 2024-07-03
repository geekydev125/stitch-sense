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

            <button className='btn btn-sm border-none bg-primary uppercase'>Learn More</button>
        </div>
    )
}

export default FlipCardBack