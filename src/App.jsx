import "./index.css"
import { LandingPage } from "./components/pages/heroSection"
import { NavBar } from "./components/nav"
import { AboutUs } from "./components/pages/about"
import { Faqs } from "./components/pages/faqs"
import { DemoLandingPage } from "./components/pages/demopage"
import { ContactPage } from "./components/pages/contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Home } from "./components/pages/home"
import { Errorpage } from "./components/pages/errorPage"

const router = createBrowserRouter ([
  {
    path : "/",
    element : <Applayout/>,
    errorElement : <Errorpage/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <AboutUs/>
      },
      {
        path : "/faqs",
        element : <Faqs/>
      },
      {
        path : "/contact",
        element : <ContactPage/>
      },
    ]
  }
])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}
export default App