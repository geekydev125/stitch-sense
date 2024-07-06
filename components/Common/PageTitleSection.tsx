"use client"
import { usePathname } from "next/navigation"
import Image from "next/image";

import { IRoute } from "@/types/types";

import routes from '@/routes/routes.json'

function PageTitleSection() {
    const pathName = usePathname();
    const pageTitle = (routes as IRoute[]).find(route => route.path === pathName)?.title

    return (
        <section
            style={{
                backgroundImage: `url('/assets/img/page-title-backgrounds/${pathName.slice(1)}.jpg')`
            }}
            className="h-[15vh] sm:h-[20vh] lg:h-[26vh] bg-no-repeat bg-cover bg-center relative mb-5 md:mb-10"
        >
            <div className="bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 z-[1]">
                <div className="container flex flex-row justify-between items-center h-full">

                    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold capitalize">{pageTitle}</h1>

                    <div className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] relative">
                        <Image src="/assets/img/logos/stitchSense-logo-white.png" alt="Stitch Sense Logo" fill />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitleSection