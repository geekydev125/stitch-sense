import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function SectionTitle({
    children
}: Props) {
    return (
        <div className="flex mb-8">
            <h3 className="bg-light text-3xl md:text-5xl uppercase rounded-3xl mx-auto px-9 py-2">{children}</h3>
        </div>
    )
}

export default SectionTitle