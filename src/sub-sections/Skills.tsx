import React from "react";
import SkillGroup from "../components/SkillGroup";

import WebDev from "../assets/Skills/web-development.svg";
import ReactJS from "../assets/Skills/reactJS.svg";
import ExpressJS from "../assets/Skills/express.svg"
import HTML5 from "../assets/Skills/html5.svg";
import CSS from "../assets/Skills/css.svg";
import TailwindCSS from "../assets/Skills/tailwindcss.svg";
import NodeJS from "../assets/Skills/nodejs.svg";
import JS from "../assets/Skills/js.svg";
import TS from "../assets/Skills/ts.svg";

import Languages from "../assets/Skills/coding.svg";
import Java from "../assets/Skills/java.svg";
import Csharp from "../assets/Skills/csharp.svg";
import Python from "../assets/Skills/python.svg";
import C from "../assets/Skills/c.svg";

import otherSkills from "../assets/Skills/other.svg";
import Git from "../assets/Skills/git.svg";
import MySQL from "../assets/Skills/mysql.svg";
import FSharp from "../assets/Skills/fsharp.svg";
import EmbeddedC from "../assets/Skills/embeddedc.svg";

const SkillsSection: React.FC = () => {
    return (
        <section className={"flex flex-col justify-center items-center mb-20 mt-4"} id="skills">
            <p className="mb-8 text-center text-3xl font-medium capitalize">Skills</p>
            <div className="mx-10 mt-4 grid grid-cols-1 rounded-xl border border-black/5 bg-gray-100 pt-4 pb-10 min-[1350px]:grid-cols-3">
                <SkillGroup
                    title="Web Development"
                    imgSrc={WebDev}
                    skills={[
                        { src: ReactJS, alt: "ReactJS", label: "React" },
                        { src: HTML5, alt: "HTML5", label: "HTML" },
                        { src: CSS, alt: "CSS", label: "CSS" },
                        { src: TailwindCSS, alt: "TailwindCSS", label: "TailwindCSS" },
                        { src: NodeJS, alt: "NodeJS", label: "NodeJS" },
                        { src: JS, alt: "JS", label: "JS" },
                        { src: TS, alt: "TS", label: "TS" },
                        { src: ExpressJS, alt: "Express", label: "Express" },
                    ]}
                />
                <SkillGroup
                    title="Programming Languages"
                    imgSrc={Languages}
                    skills={[
                        { src: Java, alt: "Java", label: "Java" },
                        { src: Python, alt: "Python", label: "Python" },
                        { src: Csharp, alt: "Csharp", label: "C#" },
                        { src: C, alt: "C", label: "C Programming" },
                    ]}
                />
                <SkillGroup
                    title="Other Skills"
                    imgSrc={otherSkills}
                    skills={[
                        { src: Git, alt: "Git", label: "Git" },
                        { src: MySQL, alt: "MySQL", label: "MySQL" },
                        { src: FSharp, alt: "FSharp", label: "F#" },
                        { src: EmbeddedC, alt: "EmbeddedC", label: "Embedded C/RTOS" },
                    ]}
                />
            </div>
        </section>
    );
};

export default SkillsSection;