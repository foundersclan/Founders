export const ContactPage = ()=>{
    return(
        <section className="w-[100%] h-[100%]">
            <div>
                <h1>Connect with us:</h1>
            </div>
            <div className="w-[50%] h-auto text-white flex flex-col gap-5 justify-center">
                <input className="bg-white w-[40%]" type="text" name="username" placeholder="name"/>
                <input className="bg-white  w-[40%]" type="email" name="email" placeholder="email" />
                <button className="text-yellow-500 w-[90%] h-[30%] rounded-2xl border-yellow-500">Join Community!</button>
            </div>
        </section>
    )
}