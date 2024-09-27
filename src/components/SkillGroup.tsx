import React from "react";
import SkillItem from "./SkillItem";

interface SkillGroupProps {
    title: string;
    imgSrc: string;
    skills: { src: string; alt: string; label: string }[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, imgSrc, skills }) => {
    return (
    <div className="flex flex-col pb-8 min-[1350px]:pb-0">
        <span className="flex items-center justify-center gap-4 overflow-hidden py-2 px-2.5 text-wrap max-[400px]:flex-col">
            <img src={imgSrc} alt={title} width="40" height="40" className={"max-[400px]:w-[60px] max-[400px]:h-[60px]"}/>
            <p className="content-center text-2xl font-medium">{title}</p>
        </span>
        <div className="mt-8 flex flex-wrap justify-evenly gap-6 px-4 pt-2 pb-6 min-[425px]:px-10 min-[1350px]:pb-2">
            {skills.map((skill, index) => (
                <SkillItem
                    key={index}
                    imgSrc={skill.src}
                    altText={skill.alt}
                    skillName={skill.label}
                    index={index}
                />
            ))}
        </div>
    </div>
    );
};

export default SkillGroup;