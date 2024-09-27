import React from "react";
import GitHub from "../assets/Projects/github.svg"
import Run from "../assets/Projects/run.svg"
interface ProjectData {
    title: string;
    techStack: string[];
    description: string;
    imageSrc: string;
    altText: string;
    demoLink?: string;
    githubLink?: string;

}

const ProjectCard: React.FC<ProjectData> = ({
    title,
    techStack,
    description,
    imageSrc,
    altText,
    demoLink,
    githubLink
}) => {
    return (
        <div className="mb-10 grid gap-8 overflow-hidden rounded-xl border max-lg:border-none border-black/5 bg-gray-100 max-lg:bg-gradient-to-br max-lg:from-gray-300 max-lg:to-gray-50 lg:relative lg:grid-cols-2">
            <div className="pt-8 pr-10 pb-20 pl-8 text-left">
                <p className={"text-2xl font-semibold pb-2"}>{title}</p>
                <p className={"text-sm pb-4 flex gap-2 pr-2 min-[600px]:gap-6"}>
                    <p className={"content-center text-nowrap"}>Made with :</p>
                    <span className={"flex min-[600px]:gap-4 gap-2"}>
                        {techStack.map((tech, index) => (
                            <img key={index} src={tech} alt={`Tech icon ${index}`} className="h-12 w-12"/>
                        ))}
                    </span>
                </p>
                <p className={"text-lg pt-4"}>{description}</p>
                <div className="mt-8 flex space-x-6">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 rounded-xl bg-white px-4 py-4 text-gray-800 transition duration-200 hover:scale-110 hover:invert"
                        >
                            <img src={GitHub} alt={"GitHub"} className={"w-8 h-8 content-center"}></img>
                            <span className={"content-center font-semibold"}>GitHub</span>
                        </a>
                    )}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-2 rounded-xl bg-white px-4 py-4 text-gray-800 transition duration-200 hover:scale-110 hover:invert"
                        >
                            <img src={Run} alt={"Run"} className={"w-8 h-8 content-center"}></img>
                            <span className={"content-center font-semibold"}>Try it</span>
                        </a>
                    )}
                </div>
            </div>
            <span
                className="max-lg:relative flex justify-end rounded-xl bg-gradient-to-l from-gray-400 to-gray-100 px-4">
                <img
                    className="absolute top-5 w-1/2 rounded-xl"
                    src={imageSrc}
                    alt={altText}
                    style={{
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                        maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                    }}
                />
            </span>
        </div>
    );
};

export default ProjectCard;

