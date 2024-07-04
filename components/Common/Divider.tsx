import Image from "next/image"

function Divider() {
    return (
        <div className="flex justify-center my-3 md:my-10">
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