import profile from "../assets/profile.jpg"
import LinkedIn from "../assets/linkedin.svg"
import GitHub from "../assets/Projects/github.svg";
import React from "react";
const LinkedInLink = "https://www.linkedin.com/in/enhm29"

const InfoHeader = () => {
    return (
        <>
            <div className="mx-10 mt-4 mb-20 flex flex-row items-center justify-center gap-10 p-5">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold">Hello! I'm Eric.</h1>
                    <h2 className="mt-2 text-2xl mb-4">A Passionate Engineering Graduate Ready to Innovate.</h2>
                    <div className={"flex items-center content-start mt-4"}>
                        <a
                            href={LinkedInLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 rounded-xl bg-gray-200 px-4 py-4 text-gray-800 transition duration-200 hover:scale-110 hover:invert"
                        >
                            <img src={LinkedIn} alt={"LinkedInLink"} className={"w-8 h-8 content-center"}></img>
                            <span className={"content-center font-semibold"}>LinkedIn</span>
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