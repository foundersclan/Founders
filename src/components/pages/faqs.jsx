import { useState } from "react"
import "./page.css"
import faqs from "../../api/faq's.json"
export const Faqs = () => {
    const [activeItem , setActiveItem] = useState(null);
    const handleClick = (id)=>{
        setActiveItem(activeItem === id ? null : id);
    }
    return (
        <section className="w-full p-5 md:mt-[40px] md:p-5 flex flex-col justify-center items-center " id="faqs">
            <div className="text-white w-full md:w-[70%] h-full">
                <p className="underline font-bold">FAQ's</p>
                <h1 className="font-bold md:text-4xl text-2xl marginBottom underline text-yellow-500">Frequently Asked Questions</h1>
                <ul className="flex flex-col gap-4">
                  {  faqs.map((faq) => {
                        return (
                            <li key={faq.id} className={`${activeItem === faq.id ? "h-auto" : "h-15"} w-full md:w-4xl bg-gray-600 rounded-md text-[15px] md:text-xl hover:scale-105 transition-[4s]`} onClick={() => handleClick(faq.id)}>
                                <h1 className="mt-3 ml-2 font-bold">{faq.question}</h1>
                                <p className={`${activeItem === faq.id ? "block" : "hidden"} mt-3 ml-2`}>{faq.answer}</p>
                            </li>
                        )
                    })}
                    {/* <li className={`${answer? "h-auto" : "h-14"} w-4xl bg-gray-600 rounded-md`} onClick={handleClick}>
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
                    </li> */}
                </ul>
            </div>
        </section>
    )
}