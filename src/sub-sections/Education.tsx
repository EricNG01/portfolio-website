import QUT_Logo from "../assets/qut-Logo.webp"

const Education = () => {
    return (
        <section className="mt-4 mb-20 flex flex-col items-center justify-center" id={"education"}>
            <h2 className="mb-8 text-center text-3xl font-medium capitalize">Education</h2>
            <div className="mx-10 mt-4 rounded-xl border border-black/5 bg-gray-100 px-5 pt-4 pb-7 w-[stretch] gap-6 lg:grid lg:grid-cols-3">

                <div className={"flex justify-center"}>
                    <img src={QUT_Logo} alt={"QUT Logo"} loading={"lazy"} className={"max-w-[1000px]"}/>
                </div>

                <div className={"col-span-2"}>
                    <p className={"text-2xl"}>Queensland University of Technology</p>
                    <p className={"text-xl font-medium"}>Bachelor of Engineering (honours)</p>
                    <ul  className="pl-6 text-lg indent-2 list-none">
                        <li className={"my-1 leading-5 align-top"}>Major in <em className={"font-medium not-italic"}>Computer
                            and Software Systems</em></li>
                        <li className={"my-1 leading-5 align-top"}>Minor in <em className={"font-medium not-italic"}>Software
                            Engineering</em></li>
                        <li className={"my-1 leading-5 align-top"}>Minor in <em className={"font-medium not-italic"}>Robotics</em>
                        </li>
                    </ul>
                    <p className={"mt-1"}>Graduated in 2024 - <em className={"font-bold not-italic text-xl"}>GPA 6.12/7</em></p>
                    <p className={"my-1 text-xl"}>Dean List Awards:</p>
                    <ul className="list-disc pl-6 text-lg indent-2">
                        <li className={"leading-5 align-top"}>2020 semester 1 & 2</li>
                        <li className={"leading-5 align-top"}>2021 semester 1</li>
                        <li className={"leading-5 align-top"}>2023 semester 2</li>
                        <li className={"leading-5 align-top"}>2024 semester 1</li>
                        {/*<li>Dean List Awards - <span className={"text-[0.75rem] leading-5 align-top"}>2020, 2021 sem 1, 2023 sem 2, 2024 sem 1</span>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Education