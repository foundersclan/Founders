import { motion } from "motion/react"
import { div } from "motion/react-client"

export const Loader = () => {
    return (
        <div className="bg-transparent w-full h-screen flex justify-center items-center">
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="text-yellow-500 text-5xl font-diplomata-sc font-semibold text-center"
        >
            Please Wait...
        </motion.h1>
        </div>
    )
}