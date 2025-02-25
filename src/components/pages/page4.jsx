import "./page.css"
export const Faqs = () => {
    return (
        <section className="marginPaddingTop  w-[100%] flex flex-col items-center">
            <div className="text-white w-[70%] h-[100%]">
                <h1 className="font-bold text-3xl marginBottom underline">FAQ's</h1>
                <ul className="flex flex-col gap-4">
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                    <li className="w-4xl h-14 bg-gray-600 rounded-md">
                        <h1>Hello How are You?</h1>
                    </li>
                </ul>
            </div>
        </section>
    )
}