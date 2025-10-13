import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./pages/footer"
import { motion } from "motion/react"

export const Applayout = () => {
    const location = useLocation();

    const hideRoutes = [
        '/events',
        '/login',
        '/register'
    ]
    const shouldHideUi = hideRoutes.includes(location.pathname);
    return (
        <div className="bg-black w-full overflow-hidden">
            {
                !shouldHideUi &&
                <div className="w-full max-h-screen absolute">
                    <motion.img src="/assets/manwithnobackground.png" className="w-full h-screen object-contain" alt=""
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotateY: 5 }} />
                </div>
            }
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}