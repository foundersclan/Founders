import { AboutUs } from "./about"
import { ContactPage } from "./contact"
import { Faqs } from "./faqs"
import { LandingPage } from "./heroSection"
import { Testimonial } from "./testimonial"
import { Footer } from "./footer"
export const Home = () => {
    return (
        <>
            <main>
                <section className="container">
                    <LandingPage />
                    {/* <DemoLandingPage/> */}
                    <AboutUs />
                    <Testimonial/>
                    <Faqs />
                    <ContactPage/>
                    {/* <Footer /> */}
                </section>
            </main>
        </>
    )
}