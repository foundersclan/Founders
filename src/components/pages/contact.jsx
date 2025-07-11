import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./page.css"
import { useState } from "react";
import { FaInstagram ,FaYoutube ,FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import { firedb } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
export const ContactPage = () => {
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        number: "",
        time : Timestamp.now(),
        date : new Date().toLocaleString(
            "en-US",
            {
                month : "short",
                day : "2-digit",
                year : "numeric"
            }
        )
    });
    
    const addUser = async()=>{
        if (userDetails.username === "" || userDetails.email === "" || userDetails.number === "") {
            alert("Please fill all the fields");
            setLoading(true)
            navigate("/")
        }
        else {
        try{
            const userRef = collection(firedb,'users');
            await addDoc(userRef, userDetails);
            alert("User added successfully");
            setLoading(false);
            navigate("/")
        }catch(error){
            toast.error("Error adding user");
            setLoading(false);
            navigate("/")
        }
    }
    }
    return (
        <section className="w-[100%] h-[100%] mt-5 marginPaddingTop" id="contact">
            {loading && <h1>Please Wait</h1>}
            <div className="flex space-between w-[70%] ml-49 ">
            <div className="w-[40%]">
            <h1 className="text-white font-bold text-4xl">Social Media</h1>
            <span className="text-white flex gap-6 text-3xl mt-4">
                <a href=""><FaInstagram/></a>
                <a href=""><FaYoutube /></a>
                <a href=""><FaLinkedinIn /></a>
            </span>
            <span className="text-white text-md font-bold">
                <h1 className="text-4xl mt-7">Links:</h1>
                <ul className="mt-4">
                    <li className="hover:underline">
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#testimonial">Testimonial</a>
                    </li>
                </ul>
            </span>
            </div>
            <form action="" className="w-[60%] flex flex-col gap-4">
            <div>
                <h1 className="text-white font-bold text-4xl">Connect with us:</h1>
            </div>
            <div className="w-[100%] h-auto text-white flex flex-col gap-8 justify-center">
                <input className="bg-gray-600 w-[100%] h-11 rounded-md p-1" type="text" name="username" placeholder="Name"
                value={userDetails.username}
                onChange={(e)=>{
                    setUserDetails({
                        ...userDetails,
                        username: e.target.value
                    })
                }}
                 required />
                <input className="bg-gray-600  w-[100%] h-11 rounded-md p-1" type="email" name="email" placeholder="Email"
                value={userDetails.email}
                onChange={(e)=>{
                    setUserDetails({
                        ...userDetails,
                        email: e.target.value
                    })
                }}
                 required />
                <input className="bg-gray-600  w-[100%] h-11 rounded-md p-1" type="tel" name="number" placeholder="Phone no."
                value={userDetails.number}
                onChange={(e)=>{
                    setUserDetails({
                        ...userDetails,
                        number: e.target.value
                    })
                }}
                 required />
                <button type="button" className="text-yellow-500 w-[100%] h-10 rounded-2xl border-2 border-yellow-500" onClick={addUser}>Join Community!</button>
            </div>
            </form>
            </div>
        </section>
    )    
}