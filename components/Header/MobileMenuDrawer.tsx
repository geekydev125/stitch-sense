"use client"
import { useRef } from 'react'
import uniqid from 'uniqid'
import Image from 'next/image'

import { IRoute } from '@/types/types'

import routes from '@/routes/routes.json'

import IconHamburger from '../Icons/IconHamburger'
import NavLink from './NavLink'

function MobileMenuDrawer() {
    const closeButtonRef = useRef<HTMLLabelElement>(null)

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />

            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                    <IconHamburger sizeClassName="size-8" />
                </label>
            </div>

            <div className="drawer-side ">
                <label ref={closeButtonRef} htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>

                <div className=" p-2 bg-primary text-white min-h-full w-60 sm:w-80">

                    <div className='border-b-[1px] border-darkGreen pb-2 '>
                        <Image src="/assets/img/logos/stitchSense-logo-with-title.png" alt="Stitch Sense Logo" width={240} height={137} className='p-0 mx-auto' />
                    </div>

                    {/* Sidebar content here */}
                    <ul className='menu menu-vertical items-center text-xl gap-y-4 pt-5 '>
                        {
                            (routes as IRoute[]).map((route) => (
                                <span onClick={() => closeButtonRef.current?.click()}>
                                    <NavLink key={uniqid()} route={route} />
                                </span>
                            ))

                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MobileMenuDrawer