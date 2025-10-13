import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";
import LandingPageData from "../../api/landingPage.json"
import { Header } from "../header";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
export const LandingPage = () => {
    const scrollRef = useRef();
    const {scrollYProgress} = useScroll()
    const headText = useTransform(
        scrollYProgress,
        [1, 1, 0.5],
        ["Founder","Enterpreneur","Student"]
    )
    return (
        <div className=" w-full min-h-screen flex justify-between items-center p-4"     >
            <motion.h1
             initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
             className="font-bold md:text-8xl text-7xl text-yellow-500 ">Are You a</motion.h1>
            <motion.h1
            // ref={scrollRef}
             initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
             className="font-bold md:text-8xl text-7xl text-yellow-500">Founder?</motion.h1>
        </div>
    )
}