export const Insights = ()=>{
    const insights = [
        {
            head :" Start your business strong",
            body : "Key steps to launch and scale your startup with clarity.",
            image : "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605ecf408940f00ed8d_ecea630f-0511-47ea-ae0e-aa1b49b9cceb.avif"
        },
        {
            head :" Think like an entrepreneur",
            body : "Build resilience and adaptability for business growth.",
            image : "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605fafa92df42137585_b2540603-e387-43e1-b3a5-ccb33202f6b8.avif"
        },
        {
            head :" Lead teams with confidence",
            body : "Actionable guidance for effective team leadership.",
            image : "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605b73c4e5c19b56d15_32aad5b5-dfbe-4234-9c09-de3004b2a964.avif"
        },
        {
            head :"Grow as a founder",
            body : "Practical tips for personal and professional growth.",
            image : "https://cdn.prod.website-files.com/68ce3566df7b04e58e85e3a7/68ce3605da95556b8f997721_22387c8b-e312-4f03-a534-d23b0862e642.avif"
        },
    ]
    return (
        <div className="min-h-screen p-4 w-full">
            <div>
                <h1 className="text-yellow-500 text-5xl font-bold mb-10 mt-10">Insights for Founders, by Founders</h1>
                <div className="grid grid-cols-2 gap-10 p-4 items-center justify-center w-full">
                    {
                        insights.map((ele)=>{
                            return (
                                <div className="text-white" >
                                    <span>
                                        <img src={ele.image} className=""  alt="" />
                                    </span>
                                    <h1 className="text-2xl font-semibold mt-5 mb-3">{ele.head}</h1>
                                    <p className="text-xl ">{ele.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}