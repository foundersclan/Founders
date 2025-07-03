import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";
import LandingPageData from "../../api/landingPage.json"
import "./page.css"
import { Header } from "../header";
export const LandingPage = () => {
    return (
        <div className="main-div flex flex-col relative">
            <Header />
            <section className="left content text-white">
                <div className="w-[100%] h-auto  flex flex-col gap-4">
                    <p className="font-bold text-2xl text-yellow-500">{LandingPageData[0].subHeading}</p>
                    <h1 className="text-5xl font-bold  text-yellow-500">{LandingPageData[0].heading}</h1>
                    <p className="text-md "><b className="text-yellow-500 underline">Vision:</b>{LandingPageData[0].description}</p>
                    <p className="text-md"><b className="text-yellow-500 underline">Mission:</b>{LandingPageData[0].description2}</p>
                </div>
                <a href="#contact"><button className="w-48 h-11 border-2 border-yellow-500 rounded-2xl mt-5 text-yellow-500 cursor-pointer hover:scale-105 transition-[2s] flex justify-center items-center gap-3">Join the Community <FaArrowUpRightFromSquare /></button></a>
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