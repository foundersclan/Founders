import { useState } from "react"
import "./page.css"
export const Faqs = () => {
    const [answer , setanswer] = useState(false);
    const handleClick = ()=>{
        setanswer(e=> !e)
    }
    return (
        <section className="marginPaddingTop  w-[100%] flex flex-col items-center">
            <div className="text-white w-[70%] h-[100%]">
                <h1 className="font-bold text-3xl marginBottom underline">FAQ's</h1>
                <ul className="flex flex-col gap-4">
                    <li className={`${answer? "h-auto" : "h-14"} w-4xl bg-gray-600 rounded-md`} onClick={handleClick}>
                        <h1>Hello How are You?</h1>
                        <p className={answer ? "block" : "hidden"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate architecto error quam dolorem nemo, ipsam enim, inventore sequi eligendi asperiores debitis aspernatur soluta eos earum impedit officiis veniam. Alias quisquam cumque sunt quis dolorem! Ad et dignissimos molestias perspiciatis beatae dolores autem quas delectus?</p>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                </ul>
            </div>
        </section>
    )
}