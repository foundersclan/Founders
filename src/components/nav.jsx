import { NavLink } from "react-router-dom"
import "./nav.css"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
export const NavBar = () => {
    //  const word = 'Founders'
    // useEffect(()=>{
    //     word.split('').forEach(letter => {
            
    //     })
    // })   
    return (
        <nav className=" w-auto h-auto flex  items-center bg-none text-white pl-5  md:pl-12 md:pt-12 scroll-smooth">
            <div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-500"><NavLink to="/">Founders</NavLink></h1>
            </div>
        </nav>
    )
}