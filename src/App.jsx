import "./index.css"
import { LandingPage } from "./components/pages/page1"
import { NavBar } from "./components/nav"
import { AboutUs } from "./components/pages/page2"
import { Faqs } from "./components/pages/page4"
import { DemoLandingPage } from "./components/pages/demopage"
import { ContactPage } from "./components/pages/page5"
const App = () => {
  return (
    <section className="container">
      <header className="flex justify-center">
        <NavBar />
      </header>
      <main>
        <LandingPage />
        {/* <DemoLandingPage/> */}
        <AboutUs/>
        <Faqs/>
        {/* <ContactPage/> */}
      </main>
    </section>
  )
}
export default App