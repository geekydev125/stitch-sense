export interface IRoute {
    title: string, 
    path: string
}

export interface IIconProps {
    sizeClassName?: "size-1" | "size-2" | "size-3" | "size-4" | "size-5" | "size-6" | "size-7" | "size-8" | "size-9" | "size-10" | "size-11" | "size-12",
    strokeColor?: string,
    strokeWidth?: number
}

export interface IImpact {
    title: string,
    content: string,
}

export interface IClientImpact extends IImpact {
    icon: string,
    alt: string,
}

export interface IClient {
    name: string,
    logo: string,
}

export interface IPortfolioItem {
    title: string,
    image: string
}

export interface ITeamMember {
    firstName: string,
    lastName: string,
    position: string,
    image: string
}
