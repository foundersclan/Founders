import { NavBar } from "../nav"
import "./page.css"
export const LandingPage = () => {
    return (
        <div className="main-div relative">
            <section className="left content text-white">
                    <div className="w-[100%] h-auto  flex flex-col gap-4">
                    <p className="font-bold text-2xl text-yellow-500">Big Random Bussiness Club</p>
                    <h1 className="text-5xl font-bold  text-yellow-500">Largest Union of Enterprenuers :Join the movement</h1>
                    <p className="text-md ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, doloremque sit. Hic aspernatur natus, atque animi assumenda tempore ipsum porro!</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam, dolor aliquid quasi sit a aperiam, illo iusto vitae ad officiis nisi sunt excepturi deleniti velit dignissimos dolore fuga soluta!</p>
                    </div>
                    
            </section>
            <div className="w-[100vw] h-[100vh] bg-black absolute opacity-60 "></div>

        </div>
    )
}