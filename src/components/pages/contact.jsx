import "./page.css"
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";
export const ContactPage = () => {
    return (
        <section className="w-[100%] h-[100%] mt-5 marginPaddingTop">
            <div className="flex space-between w-[70%] ml-49 ">
            <div className="w-[40%]">
            <h1 className="text-white font-bold text-4xl">Social Media</h1>
            <span className="text-white flex gap-6 text-3xl mt-4">
                <a href=""><FaInstagram/></a>
                <a href=""><FaYoutube /></a>
                <a href=""><FaLinkedinIn /></a>
            </span>
            </div>
            <form action="" className="w-[60%] flex flex-col gap-4">
            <div>
                <h1 className="text-white font-bold text-4xl">Connect with us:</h1>
            </div>
            <div className="w-[100%] h-auto text-white flex flex-col gap-8 justify-center">
                <input className="bg-gray-600 w-[100%] h-11 rounded-md" type="text" name="username" placeholder="name" required />
                <input className="bg-gray-600  w-[100%] h-11 rounded-md" type="email" name="email" placeholder="email" required/>
                <button type="submit" className="text-yellow-500 w-[100%] h-10 rounded-2xl border-2 border-yellow-500">Join Community!</button>
            </div>
            </form>
            </div>
        </section>
    )    
}