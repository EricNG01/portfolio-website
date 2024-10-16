import profile from "../assets/profile.jpg"
import LinkedIn from "../assets/linkedin.svg"
import GitHub from "../assets/Projects/github.svg";
const LinkedInLink = "https://www.linkedin.com/in/enhm29"
const GithubLink = "https://github.com/EricNG01"

const InfoHeader = () => {
    return (
        <>
            <div className="mx-10 mt-4 mb-20 flex flex-row items-center justify-center gap-10 p-5">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">Hello! I'm</h1>
                    <h1 className="text-3xl font-bold"><em className={"text-6xl not-italic"}>Eric</em> from Hong Kong.</h1>
                    <h2 className="mt-2 mb-4 text-2xl">A Passionate Engineering Graduate Ready to Innovate.</h2>
                    <div className={"flex items-center content-start mt-4 space-x-8"}>
                        <a
                            href={LinkedInLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 rounded-xl bg-gray-200 px-4 py-4 text-gray-800 transition duration-200 hover:scale-110 hover:invert"
                        >
                            <img src={LinkedIn} alt={"LinkedInLink"} className={"w-8 h-8 content-center"}></img>
                            <span className={"content-center font-semibold max-[700px]:hidden"}>LinkedIn</span>
                        </a>

                        <a
                            href={GithubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 rounded-xl bg-gray-200 px-4 py-4 text-gray-800 transition duration-200 hover:scale-110 hover:invert"
                        >
                            <img src={GitHub} alt={"GitHub"} className={"w-8 h-8 content-center"}></img>
                            <span className={"content-center font-semibold max-[700px]:hidden"}>GitHub</span>
                        </a>
                    </div>
                </div>
                <span>
                    <img className={"rounded-full w-auto h-auto max-w-[200px] max-h-[200px]"} src={profile}
                         alt={"profile"}
                         style={{
                             maskImage: "radial-gradient(circle, white 60%, transparent 80%)",
                             WebkitMaskImage: "radial-gradient(circle, white 60%, transparent 80%)"
                         }}
                    />
                </span>
            </div>
        </>
    )
}

export default InfoHeader