import { NavLink } from "react-router-dom"
import "./nav.css"
export const NavBar = () => {
    return (
        <nav className=" w-[1456px] h-[44px] flex justify-around items-center bg-black  text-white nav-padding">
            <div>
                <h1 className="text-3xl font-extrabold text-yellow-500"><NavLink to="/">Founders</NavLink></h1>
            </div>
            <ul className="flex gap-6">
                <li>
                    <NavLink to="/about">
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        How it Works?
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/faqs">
                        FAQ's
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact us
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}