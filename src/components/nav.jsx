import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { Hamburger, HamIcon, Menu, User2 } from "lucide-react";
export const NavBar = ({ click, handleMenu }) => {
    return (
        <nav className=" flex justify-between items-center p-4 ">
            <div className="flex items-center gap-10">
                <NavLink to="/">
                    <span className="md:text-5xl text-2xl flex items-center gap-2 font-bold  text-yellow-500 ">
                        <img src="assets/full logo.jpg" className="md:w-1/4 md:h-1/4 w-8 h-8" alt="" />
                    </span>
                </NavLink>
            </div>
            <div className="flex items-center gap-10">
                <button className="border-2 border-yellow-500 px-2 py-4 w-max rounded-xl text-yellow-500 font-semibold text-xs md:text-xl">
                    Join Community now!
                </button>
                <div onClick={handleMenu}>
                    <Menu className="size-15 text-yellow-500 cursor-pointer" />
                </div>
            </div>

        </nav>
    )
}