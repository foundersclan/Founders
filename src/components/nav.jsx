import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
export const NavBar = () => {
    const Link = [
        {
            name : "Services",
            path : "/services"
        },
        {
            name : "About",
            path : "/about"
        },
        {
            name : "Blog",
            path : "/blog"
        },
        {
            name : "Support",
            path : "/support"
        },
    ]
    return (
        <nav className=" flex justify-between items-center p-4 bg-transparent">
            <div className="flex items-center gap-10">
                <span className="md:text-5xl text-2xl flex items-center gap-2 font-bold  text-yellow-500 ">
                    <img src="public/assets/full logo.jpg" className="md:w-1/4 md:h-1/4 w-8 h-8" alt="" />
                    </span>
                {/* <ul className="flex text-white gap-5 mt-4 ">
                    {
                        Link.map((ele)=>{
                            return (
                                <NavLink to={ele.path}>
                                    <li>
                                        {ele.name}
                                    </li>
                                </NavLink>
                            )
                        })
                    }
                </ul> */}
            </div>

            <div>
                <button className="border-2 border-yellow-500 p-2 w-max rounded-xl text-yellow-500 font-semibold text-xs md:text-xl">
                    Join Community now!
                </button>
            </div>
        </nav>
    )
}