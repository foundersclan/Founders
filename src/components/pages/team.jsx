import { motion } from "motion/react"
import { section } from "motion/react-client"

export const TeamIntro = ()=>{
    return (
    <section className="bg-black text-white p-4 mt-10 mb-10 overflow-hidden">
      {/* Heading Section */}
      <div className="text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl text-yellow-500 font-bold"
        >
          The Originals Behind the Ordinary
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-6xl font-bold mt-2"
        >
          Made Extraordinary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 text-lg text-gray-300"
        >
          We are a team of creators, thinkers, and doers. Each one of us brings
          unique skills and a shared purpose.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-300"
        >
          Together, we turn bold ideas into real-world impact.
        </motion.p>
      </div>

     
      <div className="flex justify-between gap-10 w-full mt-10">
        
        <motion.img
          src="/assets/groupimg2.jpg"
          alt="team"
          className="w-1/3 h-full object-cover rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 2 , ease: "easeOut" }}
          viewport={{ once: true }}
        />

       
        <motion.img
          src="/assets/groupimg3.DNG"
          alt="team"
          className="w-1/3 h-full object-cover rounded-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            boxShadow: "0 0 25px rgba(255, 215, 0, 0.25)",
            scale: 1.02,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-yellow-500 p-4 rounded-2xl w-1/3"
        >
          <h1 className="text-3xl text-yellow-500 font-semibold">
            Who We Are
          </h1>
          <p className="text-2xl mt-4 text-gray-200">
            We are a passionate team of innovators, creators, and problem
            solvers. At our core, we believe in delivering meaningful solutions
            with impact. With every project, we aim for excellence, integrity,
            and long-term value.
          </p>
        </motion.div>
      </div>
    </section>
    )

}