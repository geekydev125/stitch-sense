import Image from "next/image"

interface Props {
    className?: string
}

function Divider({
    className
}: Props) {
    return (
        <div className={`flex justify-center ${className}`}>
            <Image
                className="transform scale-50 md:scale-100"
                src="/assets/img/arrows-divider/divider.png"
                alt="Divider"
                width={135}
                height={30}
            />
        </div>
    )
}

export default Divider