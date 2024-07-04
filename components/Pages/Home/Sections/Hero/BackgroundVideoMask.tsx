import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function BackgroundVideoMask({
    children
}: Props) {
    return (
        <div className={`w-full z-[5] bg-[rgba(0,0,0,0.5)] md:bg-[rgba(0,0,0,0)] md:bg-[url('/assets/img/paper-pattern-md.png')] lg:bg-[url('/assets/img/paper-pattern-lg.png')] h-[45vh] sm:h-[70vh] md:h-[70vh] xl:h-[90vh] bg-no-repeat bg-cover absolute top-0 left-0`}>
            {children}
        </div>
    )
}

export default BackgroundVideoMask