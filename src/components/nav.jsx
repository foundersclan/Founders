import "./nav.css"
export const NavBar = ()=>{
    return(
        <nav className=" w-[1456px] h-[44px] flex justify-around items-center  text-white nav-padding">
            <div>
              <h1 className="text-3xl font-extrabold text-yellow-500">Founders</h1>
            </div>
            <ul className="flex gap-6">
                <li>About Us</li>
                <li>How it Works</li>
                <li>FAQ's</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}