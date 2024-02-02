import AppBar from "@mui/material/AppBar";

import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface IRoute {
    route: string;
    path: string;
}

const routes: IRoute[] = [
    {
        route: "HOME",
        path: "/"
    },
    {
        route: "SERVICES",
        path: "/services"
    },
    // {
    //     route: "OUR PROCESS",
    //     path: "/our-process"
    // },
    {
        route: "PORTFOLIO",
        path: "/portfolio"
    },
    {
        route: "ABOUT US",
        path: "/about-us"
    },
    {
        route: "CONTACT US",
        path: "/contact-us"
    },
];

function Header() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("md"));

    return (
            <AppBar position="sticky" sx={{ backgroundColor: "custom.theme.lightGreen", zIndex: 9}} component='header' elevation={10}>
                {/* Desktop Menu */}
                { !isXs && <DesktopNavMenu routes={routes as IRoute[]} /> }

                {/* Mobile menu */}
                {isXs && <MobileNavMenu routes={routes as IRoute[]} /> }
            </AppBar>
    );
}

export default Header;
