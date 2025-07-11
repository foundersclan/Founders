import { NavLink } from "react-router-dom"
import "./nav.css"
import { useEffect, useState } from "react"
export const NavBar = () => {
     const [nameText , setNameText] = useState('Founders')
    useEffect(()=>{
        // setNameText( e => e.split(''))
    })   
    return (
        <nav className=" w-full h-20 flex justify-between items-center bg-none text-white nav-padding scroll-smooth">
            <div>
                <h1 className="text-4xl font-extrabold text-yellow-500"><NavLink to="/">Founders</NavLink></h1>
            </div>
            <ul className="flex text-xl mt-1 gap-6">
                <li>
                    <a href="#about">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#testimonial">
                        Testimonials
                    </a>
                </li>
                <li>
                    <a href="#faqs">
                        FAQ's
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact us
                    </a>
                </li>
            </ul>
        </nav>
    )
}