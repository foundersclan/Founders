import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed"

export const Intro = ({ onFinish }) => {
    const [show,setShow] = useState(false);
    useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000);

    return () => clearTimeout(timer,()=>setShow(true));
  }, [onFinish]);
    return (
        <div className={`bg-black w-full min-h-screen flex justify-center items-center overflow-hidden ${show ? "translate-y-0":""} transition-all relative`}>
            <div className="absolute opacity-15">
                <img src="/assets/logowithoutbg.png" alt="" />
            </div>
            <ReactTyped
                strings={[ "Hold On!","Welcome to Founders!"]}
                typeSpeed={40}
                loop
                backSpeed={10}
                cursorChar="|"
                showCursor={true}
            >
                <h1 className="font-bolder md:text-[110px] text-7xl bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text text-transparent font-diplomata-sc text-center">Founders...</h1>
            </ReactTyped>
        </div>
    )
}