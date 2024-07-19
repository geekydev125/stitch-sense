import Image from "next/image"
import Link from "next/link"

import MobileMenuDrawer from "./MobileMenuDrawer"

function MobileMenu() {
    return (
        <div className="md:hidden px-4 flex flex-row justify-between w-full">
            <MobileMenuDrawer />

            <Link href="/">
                <Image src="/assets/img/logos/stitchSense-logo-white.png" alt='Stitch Sense Logo' width={50} height={50} />
            </Link>
        </div>
    )
}

export default MobileMenu