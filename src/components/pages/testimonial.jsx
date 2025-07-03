import "../pages/page.css"
import Reviews from "../../api/reviews.json"
import { useEffect,useRef } from "react"
export const Testimonial = ()=>{
    const sideRefs = useRef([]);
     useEffect(() => {
             const observer = new window.IntersectionObserver((entries)=>{
                 entries.forEach((entry)=>{
                     if(entry.isIntersecting){
                         entry.target.classList.add("visible");
                     }
                     else{
                         entry.target.classList.remove("visible");
                     }
                     // entry.target.classList.add("fade-in");
                 })
             },
             {threshold: 0.2}
         );
         sideRefs.current.forEach((ref) => {
             if (ref) {
                 observer.observe(ref);
             }
         });
         return ()=> observer.disconnect();
         }, [])
    return(
        <section className="w-full h-full mt-5" id="testimonial">
            <h1 className="text-4xl font-bold text-yellow-500 underline pt-12 pl-12">
                What Our Members Say?
            </h1>
            <div className="w-full h-full flex justify-center items-center relative side-in" ref={el=>sideRefs.current[0]=el}>
                <h1 className="text-9xl text-yellow-500 font-extrabold opacity-25 shadow-2xl  shadow-yellow-500 absolute">Reviews</h1>
                    <ul  className="w-lvw h-auto grid grid-cols-3 relative justify-center items-center pl-12 mt-5 gap-4">
                        {
                            Reviews.map((review)=>{
                                return(
                                    <li className="w-80 h-[340px] text-white text-2xl hover:border-4  rounded-lg border-yellow-500 p-4 mt-4 hover:scale-110 shadow-2xl shadow-yellow-500 transition-[7s]" id="reviewbox" key={review.id}>
                                        <p>
                                            <i>
                                                {review.experience}
                                            </i>
                                        </p>
                                        <p className="font-bold text-yellow-500 ml-40">
                                            -{review.name}
                                        </p>
                                        {/* <div className="reviewBorder"></div> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* {
                        Reviews.map((review)=>{
                            return(
                                <span className={`w-80 h-[390px] text-white text-2xl border-4 rounded-lg border-yellow-500 p-4 mt-4 absolute  `} style={{ transform:` ${translate}` }} key={review.id}>
                        <p>
                            <i>
                                {review.experience}
                            </i>
                        </p>
                    </span>
                            )
                        })
                    } */}
                
                
            </div>
        </section>
    )
} 