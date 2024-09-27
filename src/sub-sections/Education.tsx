import QUT_Logo from "../assets/qut-Logo.webp"

const Education = () => {
    return (
        <section className="mt-4 mb-20 flex flex-col items-center justify-center" id={"education"}>
            <h2 className="mb-8 text-center text-3xl font-medium capitalize">Education</h2>
            <div className="mx-10 mt-4 flex flex-col gap-6 rounded-xl border border-black/5 bg-gray-100 px-5 pt-4 pb-7 min-[750px]:w-[660px] min-[750px]:grid min-[750px]:grid-cols-3">

                <div className={"flex items-center justify-center"}>
                    <img src={QUT_Logo} alt={"QUT Logo"} loading={"lazy"} width="150" height="150"/>
                </div>

                <div className={"col-span-2"}>
                    <p className={"text-lg font-medium"}>Bachelor of Engineering (honours)</p>
                    <p className={""}>Queensland University of Technology</p>
                    <p className={"mt-1"}>Graduated in 2024</p>
                    <p className={"my-1"}>GPA 6.12/7</p>
                    <ul className="list-disc pl-6 text-sm">
                        <li>Major in Computer and Software Systems</li>
                        <li>Minor in Software Engineering</li>
                        <li>Minor in Robotics</li>
                        <li>Dean List Awards - <span className={"text-[0.75rem] leading-5 align-top"}>2020, 2021 sem 1, 2023 sem 2, 2024 sem 1</span></li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Education