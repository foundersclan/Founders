
import { NavBar } from "../nav"
import "./page.css"
export const DemoLandingPage = () => {
    return (
        <div className="main-div">
            <section className="left content text-white relative">
                    <div className="w-[70%] h-auto absolute right-0 flex flex-col gap-4">
                    <p className="font-bold">Big Random Bussiness Club</p>
                    <h1 className="text-4xl font-bold">Largest Union of Enterprenuwes :Join the movement</h1>
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, doloremque sit. Hic aspernatur natus, atque animi assumenda tempore ipsum porro!</p>
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam, dolor aliquid quasi sit a aperiam, illo iusto vitae ad officiis nisi sunt excepturi deleniti velit dignissimos dolore fuga soluta!</p>
                    </div>
            </section>
            {/* <section className="right person">
                <img src="src\assets\manwithnobackground.png" alt="Man" />
            </section> */}

        </div>
    )
}