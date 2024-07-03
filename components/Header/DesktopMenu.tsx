import Image from 'next/image'
import Link from 'next/link'
import uniqid from 'uniqid'

import routes from '@/routes/routes.json'

import { Route } from '@/types/types'

import NavLink from './NavLink'

function DesktopMenu() {
    return (
        <div className='container px-2 mx-auto max-w-[1152px]'>
            <div className="flex-1">
                <Link href="/">
                    <Image src="/assets/img/logos/stitchSense-logo-white.png" alt='Stitch Sense Logo' width={75} height={75} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        (routes as Route[]).map((route) => (
                            <NavLink key={uniqid()} route={route} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default DesktopMenu