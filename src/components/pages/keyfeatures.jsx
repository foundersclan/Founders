import { CheckCircle, Heart, MessageCircle, RefreshCcw, Users } from "lucide-react"
import { motion } from "motion/react"
import { div, head } from "motion/react-client"

export const Features = () => {
    const features = [
        {
            head: "Startup essentials",
            body: "Learn the basics to launch and grow your business with confidence.",
            svg: RefreshCcw
        },
        {
            head: "Personal development",
            body: "Build the skills and mindset needed to adapt and excel.",
            svg: MessageCircle
        },
        {
            head: "Effective leadership",
            body: "Gain practical leadership tools for every business stage.",
            svg: CheckCircle
        },
        {
            head: "Networking strategies",
            body: "Expand your connections with proven networking approaches.",
            svg: Heart
        },
        {
            head: "Seminar insights",
            body: "Get highlights and takeaways from our latest business seminars.",
            svg: Users
        },
        {
            head: "Team success",
            body: "Find out how to create and manage a strong, motivated team.",
            svg: Users
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <section className="bg-black text-white p-4">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center p-4"
            >
                <h2 className="font-semibold text-white tracking-wide">
                    KEY FEATURES FOR FOUNDERS
                </h2>
                <h1 className="text-7xl text-yellow-500 font-bold">
                    Start. Grow. Lead. Succeed.
                </h1>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 mt-10 gap-10"
            >
                {features.map((ele, i) => (
                    <motion.span
                        key={i}
                        variants={item}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(255, 215, 0, 0.25)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="p-10 rounded-2xl text-center flex flex-col items-center transition-all duration-300"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-4"
                        >
                            <ele.svg className="size-15 text-yellow-500 p-2 rounded-md" />
                        </motion.div>
                        <h1 className="text-2xl mt-6 mb-4 font-semibold">{ele.head}</h1>
                        <p className="text-xl">{ele.body}</p>
                    </motion.span>
                ))}
            </motion.div>
        </section>
    )
}