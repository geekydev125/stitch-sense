"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

import { IRoute } from "@/types/types";

interface Props {
    route: IRoute
}

function NavLink({
    route
}: Props) {
    const pathname = usePathname();

    return (
        <li className={`menu-item ${pathname === route.path ? 'border-b-4 border-white' : ""}`}>
            <Link href={route.path} className={`uppercase text-lg md:text-base lg:text-lg pb-1 ${pathname === route.path ? 'font-semibold' : ""}`}>
                {route.title}
            </Link>
        </li>
    )
}

export default NavLink