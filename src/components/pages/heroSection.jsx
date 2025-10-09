import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";
import LandingPageData from "../../api/landingPage.json"
import { Header } from "../header";
import { motion } from "motion/react";
export const LandingPage = () => {
    return (
        // <div className=" flex flex-col">
        //     <section className=" content p-5 md:p-[50px] text-white">
        //         <div className="w-[100%] h-auto  flex flex-col md:gap-4 gap-6">
        //             <p className="font-bold text-2xl  text-yellow-500">{LandingPageData[0].subHeading}</p>
        //             <h1 className="md:text-5xl text-3xl font-bold  text-yellow-500">{LandingPageData[0].heading}</h1>
        //             <p className="text-md "><b className="text-yellow-500 underline">Vision:</b>{LandingPageData[0].description}</p>
        //             <p className="text-md"><b className="text-yellow-500 underline">Mission:</b>{LandingPageData[0].description2}</p>
        //         </div>
        //         <a href="#contact"><button className="w-48 h-11 border-2 border-yellow-500 rounded-2xl mt-7 mb-7 md:mt-5 text-yellow-500 cursor-pointer hover:scale-105 transition-[2s] flex justify-center items-center gap-3">Join the Community <FaArrowUpRightFromSquare /></button></a>
        //         <span className=" text-yellow-500 flex md:gap-6 gap-7 text-3xl mt-4">
        //             <a href=""><FaInstagram /></a>
        //             <a href=""><FaYoutube /></a>
        //             <a href=""><FaLinkedinIn /></a>
        //         </span>
        //     </section>
        //     {/* <div className="w-full h-lvh bg-black absolute opacity-60 "></div> */}
        // </div>
        <div className=" w-full min-h-screen flex justify-between items-center p-4">
            <motion.h1
             initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
             className="font-bold text-8xl text-yellow-500 ">Are You a</motion.h1>
            <motion.h1
             initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
             className="font-bold text-8xl text-yellow-500">Founder?</motion.h1>
        </div>
    )
}