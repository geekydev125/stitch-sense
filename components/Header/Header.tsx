import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

function Header() {
    return (
        <header className="navbar sticky top-0 bg-primary text-white shadow-xl z-10">
            <DesktopMenu />

            <MobileMenu />
        </header>
    )
}

export default Header