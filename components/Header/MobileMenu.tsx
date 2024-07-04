import Image from "next/image"
import Link from "next/link"

import IconHamburger from "../Icons/IconHamburger"

function MobileMenu() {
    return (
        <div className="md:hidden px-4 flex flex-row justify-between w-full">
            <IconHamburger sizeClassName="size-7" />

            <Link href="/">
                <Image src="/assets/img/logos/stitchSense-logo-white.png" alt='Stitch Sense Logo' width={50} height={50} />
            </Link>
        </div>
    )
}

export default MobileMenu