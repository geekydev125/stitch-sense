import { ReactNode } from "react"
import { ICustomHeights } from "./HeroSection"

interface Props {
    customHeights: ICustomHeights,
    children: ReactNode
}

function BackgroundVideoMask({
    customHeights,
    children
}: Props) {
    return (
        <div className={`
                    w-full 
                    sm:bg-[url('/assets/img/paper-pattern-md.png')] 
                    lg:bg-[url('/assets/img/paper-pattern-lg.png')] 
                    xs:h-[45vh] 
                    sm:h-[50vh] 
                    md:h-[70vh]
                    xl:h-[90vh]
                    bg-no-repeat
                    bg-cover
                    absolute
                    top-0
                    left-0
        `}>

            {children}
        </div>
    )
}

export default BackgroundVideoMask