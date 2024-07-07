import Link from "next/link";

interface Props {
    href: string,
    className?: string
    children: React.ReactNode,
}

function Button({
    href,
    className,
    children
}:Props) {
    return (
        <Link href={href}>
            <button className={`btn btn-primary text-white rounded-lg px-8 drop-shadow-md uppercase ${className}`}>{children}</button>
        </Link>
    )
}

export default Button