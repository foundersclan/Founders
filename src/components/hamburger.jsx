import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Hamburger = () => {
    const [click, setClick] = useState(false);
    if (click) {
        return (
            <div className={`fixed z-10 w-3xs h-lvh md:h-full right-0 bg-black flex flex-col p-5 gap-5 text-white`} onClick={()=> setClick(e => !e)} >
                <RxCross2 className='text-yellow-500 text-3xl'/>
                <button className='flex gap-5 text-xl border-2 border-yellow-500 p-3 rounded-2xl'>
                    <FaUserAlt className='text-yellow-500 text-3xl' />Admin login
                </button>
                <ul className=" flex flex-col text-xl mt-1 gap-5 text-white" >
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
            </div>

        )
    }
    else{
         return (
            <div className='w-auto h-full flex items-center justify-center p-8 md:p-12'>
                <GiHamburgerMenu onClick={()=> setClick(e => !e)} className="text-4xl text-yellow-500"/>
            </div>
          )
    }

}

export default Hamburger