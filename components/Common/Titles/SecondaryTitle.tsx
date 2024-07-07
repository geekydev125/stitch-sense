import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function SecondaryTitle({
    children
}: Props) {
    return (
        <div className="container flex justify-center sm:justify-start mb-4">
            <h3 className="bg-light text-xl md:text-3xl uppercase rounded-2xl px-7 py-1">{children}</h3>
        </div>
    )
}

export default SecondaryTitle