import { AboutUs } from "./about"
import { ContactPage } from "./contact"
import { Faqs } from "./faqs"
import { LandingPage } from "./heroSection"
export const Home = () => {
    return (
        <>
            <main>
                <section className="container">
                    <LandingPage />
                    {/* <DemoLandingPage/> */}
                    <AboutUs />
                    <Faqs />
                    <ContactPage/>
                </section>
            </main>
        </>
    )
}