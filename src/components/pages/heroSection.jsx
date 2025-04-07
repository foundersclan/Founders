import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";

import "./page.css"
export const LandingPage = () => {
    return (
        <div className="main-div relative">
            <section className="left content text-white">
                <div className="w-[100%] h-auto  flex flex-col gap-4">
                    <p className="font-bold text-2xl text-yellow-500">Big Random Bussiness Club</p>
                    <h1 className="text-5xl font-bold  text-yellow-500">A Special Place Where things go differently.</h1>
                    <p className="text-md ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, doloremque sit. Hic aspernatur natus, atque animi assumenda tempore ipsum porro!</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam, dolor aliquid quasi sit a aperiam, illo iusto vitae ad officiis nisi sunt excepturi deleniti velit dignissimos dolore fuga soluta!</p>
                </div>
                <button className="w-48 h-11 border-2 border-yellow-500 rounded-2xl mt-5 text-yellow-500 cursor-pointer hover:scale-105 transition-[2s] flex justify-center items-center gap-3">Join the Community <FaArrowUpRightFromSquare /></button>
                <span className=" text-yellow-500 flex gap-6 text-3xl mt-4">
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaYoutube /></a>
                    <a href=""><FaLinkedinIn /></a>
                </span>
            </section>
            <div className="w-[100vw] h-[100vh] bg-black absolute opacity-60 "></div>

        </div>
    )
}