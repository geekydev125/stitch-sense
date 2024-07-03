"use client"

import { useRef } from "react";
import { ICustomHeights } from "./HeroSection";

interface Props {
    customHeights: ICustomHeights
}

function BackgroundVideo({
    customHeights
}: Props) {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };
    return (
        <div className="flex justify-end">
            <button className="hidden" onClick={handlePlay}>Play Video</button>
            <video
                poster="/assets/video/video-poster.jpg"
                className={`
                    xs:h-[45vh] 
                    sm:h-[50vh] 
                    md:h-[70vh]
                    xl:h-[90vh]
                    object-cover
                    pointer-events-none
                    `}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/video/stitching-hd-black-white.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo