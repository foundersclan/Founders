// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Star } from "lucide-react";

export const Events = ()=> {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4">
      <div className="relative h-[70vh] flex items-end justify-start bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 p-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-black font-bold text-xl px-4 py-2 rounded-xl shadow-lg">
              SFTW
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
              SF Tech Week
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 flex flex-wrap items-center gap-4 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400" />
              <span>San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-yellow-400" />
              <span>Oct 6 – Oct 12</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-400" />
              <span>Featured in Tech</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-xl"
          >
            Explore events and innovations at SF Tech Week — where technology,
            creativity, and networking come together to shape the future.
          </motion.p>

          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            Subscribe
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-[90%] max-w-md"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Subscribe to SF Tech Week
              </h2>
              <p className="text-gray-300 mb-6">
                Get updates and notifications about the latest events.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-3 rounded-lg transition"
                >
                  Subscribe
                </button>
              </form>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-gray-400 hover:text-yellow-400 text-sm"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
