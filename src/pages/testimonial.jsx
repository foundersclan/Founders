import { ArrowBigLeft, ArrowBigRight, ArrowLeft, ArrowRight, QuoteIcon } from "lucide-react"
import Reviews from "../api/reviews.json"
import { useEffect, useRef,useState } from "react"
import { ReviewChanger } from "../components/review-changer"
import { motion } from "motion/react"
export const Testimonial = () => {
    const [currentReviewIndex, setreviewIndex] = useState(0);
    
    const handlenext = ()=>{
        setreviewIndex(prev => prev == Reviews.length-1 ? 0 : prev + 1 );
    }
    const handlePrevious = ()=>{
        setreviewIndex(prev => prev == 0 ? Reviews.length-1 : prev-1 );
    }
    useEffect(()=>{
        setTimeout(()=>{
            setreviewIndex(prev => prev == Reviews.length-1 ? 0 : prev + 1 );
        },4000)
    })
    console.log(currentReviewIndex);
    
    return (
        <section className="w-full p-4 flex flex-col justify-center gap-5 min-h-screen text-white bg-zinc-950">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
             className="flex justify-between">
                <div className="w-1/2">
                    <h1 className="text-7xl text-yellow-500 ">From our <b>Community.</b></h1>
                    <p className="text-2xl mt-5 font-light">
                        Here's what our members say, about the club.
                    </p>
                    <div className="flex mt-5 gap-8 w-full">
                        <span onClick={handlePrevious} className="w-max rounded-full p-2 border-2 border-zinc-500">
                            <ArrowLeft className="size-10 text-yellow-500" />
                        </span>
                        <span onClick={handlenext} className="w-max rounded-full p-2 border-2 border-zinc-500">
                            <ArrowRight className="size-10 text-yellow-500" />
                        </span>

                    </div>
                </div>
                <ReviewChanger currentReviewIndex={currentReviewIndex} />
            </motion.div>
        </section>
    )
} 