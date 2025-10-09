import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import { firedb } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import { motion } from "motion/react";
export const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        number: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric"
            }
        )
    });

    const addUser = async () => {
        if (userDetails.username === "" || userDetails.email === "" || userDetails.number === "") {
            alert("Please fill all the fields");
            setLoading(true)
            navigate("/")
        }
        else {
            try {
                const userRef = collection(firedb, 'users');
                await addDoc(userRef, userDetails);
                alert("User added successfully");
                setLoading(false);
                navigate("/")
            } catch (error) {
                toast.error("Error adding user");
                setLoading(false);
                navigate("/")
            }
        }
    }
    const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

    return (
        <section
            className="w-full min-h-screen p-5 md:mt-5 md:p-5 bg-black"
            id="contact"
        >
            {loading && (
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="text-yellow-500 text-3xl font-semibold text-center"
                >
                    Please Wait...
                </motion.h1>
            )}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-10 justify-center items-center"
            >
                {/* Headings */}
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl font-bold text-yellow-500 text-center"
                >
                    Start your journey. Lead your vision.
                </motion.h1>

                <motion.span
                    variants={item}
                    className="text-2xl w-10/12 text-white text-center"
                >
                    Gain expert advice on branding, entrepreneurship, and personal growth.
                    Access resources, past seminars, and actionable steps to launch your
                    business with confidence.
                </motion.span>

                {/* Contact Form Section */}
                <motion.form
                    variants={container}
                    className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4"
                >
                    {/* Left Info Section */}
                    <motion.div
                        variants={item}
                        className="w-full md:w-1/2 text-center flex flex-col items-center"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-yellow-500 font-semibold text-5xl md:text-6xl"
                        >
                            Get in Touch
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-white mt-8 text-2xl"
                        >
                            Please fill the form and we will be happy to have you.
                        </motion.p>

                        {/* Socials */}
                        <motion.div
                            variants={item}
                            className="text-white mt-10 flex items-center justify-center gap-10"
                        >
                            <h1 className="text-5xl font-semibold">Socials:</h1>
                            <span className="flex items-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.3, rotate: 10, color: "#FFD700" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Instagram className="size-10 cursor-pointer" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.3, rotate: -10, color: "#FFD700" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Twitter className="size-10 cursor-pointer" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.3, rotate: 5, color: "#FFD700" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Youtube className="size-10 cursor-pointer" />
                                </motion.div>
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Form Section */}
                    <motion.div
                        variants={item}
                        className="w-full md:w-1/2 h-auto text-xl text-white flex flex-col gap-8 justify-center bg-gray-950 p-4 rounded-2xl"
                    >
                        <motion.input
                            whileFocus={{
                                borderColor: "#FFD700",
                                boxShadow: "0 0 10px rgba(255,215,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 placeholder:text-xl placeholder:text-gray-300 w-full h-15 rounded-md p-4 focus:outline-0 border border-transparent"
                            type="text"
                            name="username"
                            placeholder="Name"
                            value={userDetails.username}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, username: e.target.value })
                            }
                            required
                        />

                        <motion.input
                            whileFocus={{
                                borderColor: "#FFD700",
                                boxShadow: "0 0 10px rgba(255,215,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 placeholder:text-xl placeholder:text-gray-300 w-full h-15 rounded-md p-4 focus:outline-0 border border-transparent"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={userDetails.email}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, email: e.target.value })
                            }
                            required
                        />

                        <motion.input
                            whileFocus={{
                                borderColor: "#FFD700",
                                boxShadow: "0 0 10px rgba(255,215,0,0.3)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 placeholder:text-xl placeholder:text-gray-300 w-full h-15 rounded-md p-4 focus:outline-0 border border-transparent"
                            type="tel"
                            name="number"
                            placeholder="Phone no."
                            title="Phone Number"
                            value={userDetails.number}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, number: e.target.value })
                            }
                            required
                        />

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#FFD700",
                                color: "#000",
                                boxShadow: "0 0 25px rgba(255,215,0,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            type="button"
                            className="text-yellow-500 w-full p-4 text-2xl font-semibold rounded-2xl border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all"
                            onClick={addUser}
                        >
                            Join Community!
                        </motion.button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </section>
    )
}