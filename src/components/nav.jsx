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
        <div className="flex justify-between items-center p-4 bg-transparent">
            <div className="flex items-center gap-10">
                <span className="text-5xl flex items-center gap-2 font-bold  text-yellow-500">
                    <img src="public/assets/logo.jpg" className="w-15 h-15" alt="" />
                    Founders
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
                <button className="border-2 border-yellow-500 p-2 w-full rounded-xl text-yellow-500 font-semibold">
                    Join Community now!
                </button>
            </div>
        </div>
    )
}