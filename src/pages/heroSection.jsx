import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ReactTyped } from "react-typed";
export const LandingPage = () => {
    return (
        <div className=" w-full min-h-screen flex justify-between items-center p-4"     >
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="font-bolder md:text-[110px] text-7xl bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text text-transparent font-diplomata-sc">Are You a</motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-bolder md:text-[110px] text-7xl bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text text-transparent font-diplomata-sc text-center"
            >
                <ReactTyped
                    strings={["Founder ?", "Developer ?", "Student ?"]}
                    typeSpeed={100}
                    loop
                    backSpeed={30}
                    cursorChar="|"
                    showCursor={true}
                />
            </motion.h1>
        </div>
    )
}