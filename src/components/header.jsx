import Hamburger from "./hamburger"
import { NavBar } from "./nav"
import "./pages/page.css"
import Hamburgericon from "./hamburgericon";

export const Header = () => {
    return <header className="flex w-full z-10 justify-between">
        <NavBar />
        {/* <GiHamburgerMenu className="text-2xl text-yellow-500"/>` */}
        {/* <Hamburgericon/> */}
        <Hamburger/>
    </header>
}