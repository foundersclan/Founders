import { useState } from "react"
import faqs from "../../api/faq's.json"
import { motion } from "motion/react";

export const Faqs = () => {
    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (id) => {
        setActiveItem(activeItem === id ? null : id);
    }
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // delay between each FAQ item
            },
        },
    };

    // Individual FAQ animation
    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    return (
        <section
            className="w-full p-4 flex flex-col justify-center gap-5 min-h-screen bg-black"
            id="faqs"
        >
            <motion.div
                className="text-white mt-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className="font-bold md:text-5xl text-2xl text-yellow-500">
                    Frequently Asked Questions
                </h1>
            </motion.div>

            {/* FAQ List with Ladder Animation */}
            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mt-8 "
            >
                {faqs.map((faq) => (
                    <motion.li
                        key={faq.id}
                        variants={item}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 0 20px rgba(255, 215, 0, 0.15)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="border-b border-yellow-500 p-4 rounded-lg transition-all duration-300"
                    >
                        <h1 className="mt-3 ml-2 text-xl font-bold text-yellow-500">
                            {faq.question}
                        </h1>
                        <p className="mt-3 ml-2 text-lg text-gray-200">{faq.answer}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}