import { RefreshCcw, Sparkle, User } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef } from "react"

export const AboutUs = () => {
    const branding = [
        {
            head: "Business essentials",
            body: "Step-by-step guides and expert tips for building a strong brand and growing your business.",
            svg: RefreshCcw
        },
        {
            head: "Growth mindset",
            body: "Sharpen leadership, boost productivity, and develop skills for lasting success.",
            svg: User
        },
        {
            head: "Startup launchpad",
            body: "Connect with mentors, access resources, and turn your ideas into thriving startups.",
            svg: Sparkle
        },

    ]
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <section className="text-white p-4  max-h-screen mb-20 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full mx-auto"
            >
                <h1 className="text-5xl font-extrabold text-yellow-500">
                    Build. Grow. Lead. Succeed.
                </h1>
                <p className="text-2xl md:text-3xl mt-5 text-gray-200">
                    Unlock practical tools and insights for branding, personal growth, and
                    launching your business. Start your journey with expert guidance and
                    proven strategies.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex  justify-start mt-12 gap-8 mx-auto "
            >
                {branding.map((ele, i) => (
                    <motion.span
                        key={i}
                        variants={cardVariant}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0 0 25px rgba(255, 215, 0, 0.3)",
                            y: -10,
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-10 border border-yellow-500 rounded-2xl bg-gradient-to-b from-neutral-900 to-black  hover:border-yellow-400 cursor-pointer"
                    >
                        <motion.div
                            className="flex justify-center mb-6 text-yellow-500"
                            whileHover={{ rotate: 10 }}
                        >
                            <ele.svg className="size-10" />
                        </motion.div>
                        <h1 className="text-2xl font-semibold mb-3 text-yellow-500 text-center">
                            {ele.head}
                        </h1>
                        <p className="text-lg text-gray-300 text-center">{ele.body}</p>
                    </motion.span>
                ))}
            </motion.div>
        </section>


    )
}