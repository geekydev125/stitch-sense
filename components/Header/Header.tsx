import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

function Header() {
    return (
        <header className="navbar sticky top-[-1px] bg-primary text-white z-10"
            style={{
                filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.07)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.09))"
            }}
        >
            <DesktopMenu />

            <MobileMenu />
        </header>
    )
}

export default Header