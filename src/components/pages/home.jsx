import { AboutUs } from "./about"
import { ContactPage } from "./contact"
import { Faqs } from "./faqs"
import { LandingPage } from "./heroSection"
import { Testimonial } from "./testimonial"
import { Footer } from "./footer"
import { Features } from "./keyfeatures"
import { Insights } from "./insights"
import { TeamIntro } from "./team"
export const Home = () => {
    return (
        <>
            <main>
                <section className="">
                    <LandingPage />
                    <AboutUs />
                    <Features/>
                    <TeamIntro/>
                    <Insights/>
                    {/* <Testimonial/> */}
                    <Faqs />
                    <ContactPage/>

                </section>
            </main>
        </>
    )
}