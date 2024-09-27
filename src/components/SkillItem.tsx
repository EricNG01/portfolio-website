import React, { useRef, useEffect } from "react";
interface SkillItemProps {
    imgSrc: string;
    altText: string;
    skillName: string;
    index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ imgSrc, altText, skillName, index }) => {
    const skillRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("skill-visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, []);
    return (
    <span
        ref={skillRef}
        className="flex flex-col items-center px-2 transition duration-300 skill-pop hover:scale-[120%] min-[1350px]:px-2 min-[660px]:px-6 min-[800px]:px-12"
        style={{
            animationDelay: `${index * 0.2}s`,
        }}
    >
      <img src={imgSrc} alt={altText} width={"100"} height={"100"} className={"max-[360px]:w-[75px] max-[360px]:h-[75px]"}/>
      <p className="text-center text-xl">{skillName}</p>
    </span>
    );
};

export default SkillItem;