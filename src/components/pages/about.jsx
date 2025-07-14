import { useEffect,useRef } from "react"
import "./page.css"
export const AboutUs = () => {

    const fadeRefs = useRef([]);
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
    fadeRefs.current.forEach((ref) => {
        if (ref) {
            observer.observe(ref);
        }
    });
    return ()=> observer.disconnect();
    }, [])
    return (
        <section className="w-[100%] h-[100%] flex flex-col justify-center  bg-blend-lighten " id="about">
            <div className=" w-full h-full aboutbg  ">
                <h1 className="text-4xl font-bold  text-yellow-500 underline p-5 md:pt-12 md:pl-12 fade-in" ref={el=>fadeRefs.current[0]=el}>About Us</h1>
                <div className="text-white w-full about flex justify-center mt-5 md:mt-8 gap-2 p-5 md:p-12 fade-in" ref={el=>fadeRefs.current[1]=el}>
                    <span className="w-full h-[100%]">
                        <p className="md:text-3xl text-2xl font-bold ml-1 md:ml-2">
                            <i>
                                " Welcome to <b className="text-yellow-500">Founders</b>, a community of like-minded individuals dedicated to personal growth and development. Our club is a supportive family that fosters a growth mindset, helping members achieve their full potential in various aspects of life. We believe in empowering each other to pursue their dreams, overcome challenges, and live a fulfilling life. Through interactive sessions, expert insights, and collaborative learning, we strive to create a nurturing environment that promotes holistic growth."
                            </i>
                        </p>
                    </span>
                </div>
                <div className="fade-in " ref={el=>fadeRefs.current[2]=el}>
                    <h1 className="md:text-4xl text-2xl font-bold text-yellow-500 underline p-5 md:pt-12 md:pl-12">What makes us different?</h1>
                    <p className="md:text-3xl text-xl text-white p-5 md:p-12"><b>Unlike traditional communities, ours is built on the foundation of mutual support, growth, and development. Here are a few things that set us apart:</b>
                        <ul className="list-disc mt-3">
                            <li className="mt-3 mb-3">
                              <b className="text-yellow-500">Growth-oriented mindset:</b> We focus on cultivating a mindset that embraces challenges, learns from failures, and strives for continuous improvement. 
                            </li>
                            <li className="mt-3 mb-3">
                              <b className="text-yellow-500">Expert insights:</b> We invite experts from various fields to share their knowledge and experiences, providing valuable insights and practical advice.
                            </li>
                            <li className="mt-3 mb-3">
                                 <b className="text-yellow-500">Collaborative learning:</b> Our community encourages members to share their experiences, knowledge, and skills, fostering a culture of collaboration and mutual support.
                            </li>
                            <li className="mt-3 mb-3">
                                <b className="text-yellow-500">Interactive sessions:</b> Our weekend sessions are designed to foster engagement, discussion, and collaboration among members.
                            </li>
                            <li className="mt-3 mb-3">
                                <b className="text-yellow-500">Personal growth focus:</b> We prioritize personal growth and development, helping members set and achieve their goals, whether they are related to career, relationships, health, or personal interests.
                            </li>
                            <li className="mt-3 mb-3">
                                <b className="text-yellow-500">Holistic approach:</b> We recognize that personal growth encompasses various aspects of life, including physical, emotional, mental, and spiritual well-being. Our community supports members in achieving balance and harmony in all areas of life.

                            </li>
                            <li className="mt-3 mb-3">
                                 <b className="text-yellow-500">Accountability and support:</b> We're a community that holds each other accountable and provides support every step of the way, helping members stay committed to their goals and aspirations.
                            </li>
                        </ul>
                        
                       
                    </p>
                </div>
                <div className="w-full h-full">
                    <div className="w-full h-full mt-10 relative ">
                        <span className="md:ml-2 w-[99%] h-auto block absolute z-10 top-1/4 md:top-1/2 fade-in"ref={el=>fadeRefs.current[3]=el}>
                            <h1 className="md:text-3xl text-md font-bold mt-4 text-yellow-500">Our Team</h1>
                            <p className="md:text-2xl text-xs  text-white font-bold">
                                Our team is comprised of passionate individuals who share a common vision of personal growth and development. We're driven by a desire to help others unlock their potential and achieve their goals. With diverse backgrounds and expertise, our team brings a wealth of knowledge and experience to the table. We're committed to creating a supportive community that inspires and motivates members to strive for excellence.
                            </p>
                        </span>
                        <div className="w-full h-full absolute bg-black opacity-55"></div>
                        <img className="w-full h-full object-cover rounded-2xl" src="/assets/groupimg2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}