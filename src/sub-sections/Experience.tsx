import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '../components/WorkIcon';
import StartIcon from "../components/StartIcon.tsx";

interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Software Engineer Intern - Remote",
        company: "Aubot - Brisbane",
        duration: "May 2024 - Aug 2024",
        description: "Contributed to the development of an online programming language learning platform for students ranging from Year 1 to college level. Focused on the Java and advanced Python sections, performing user testing and bug verification on lesson content. Ensured accuracy and functionality of code exercises, resolving bugs and errors in lesson materials. Collaborated with the development team to enhance platform usability and educational value, contributing to project improvements.",
    },
    {
        title: "Kitchen hand - Part-time",
        company: "KU-O Restaurant - Brisbane",
        duration: "Dec 2021 - Jan 2023",
        description: "Assisted in preparing traditional Japanese dishes, such as sashimi and tempura, while gaining hands-on experience under the guidance of experienced chefs. Maintained high standards of kitchen hygiene and cleanliness, ensuring a safe and efficient working environment. Collaborated with the front-of-house team to promptly address customer inquiries and dietary concerns, contributing to a positive dining experience.",
    },
    {
        title: "Tutor - Part-time",
        company: "Surpass Elite Education Centre - Hong Kong",
        duration: "Aug 2019 - Nov 2019",
        description: "Delivered individual and group tutoring sessions in Mathematics, English, and Science to elementary students, fostering academic growth and confidence. Assisted students with homework, assignments, and exam preparation, ensuring thorough understanding of key concepts. Developed and implemented customized learning strategies tailored to each student's needs, enhancing comprehension of challenging topics. Maintained regular communication with parents and teachers to discuss student progress and address concerns, promoting a collaborative approach to education.",
    },
];

const Experience: React.FC = () => {
    return (
        <section className="mt-4 mb-20">
            <h2 className="mb-8 text-center text-3xl font-medium capitalize">Experience</h2>
            <div className="mx-10 mt-4 rounded-xl border border-black/5 bg-gray-100 pt-4">
                <VerticalTimeline lineColor={"rgb(0, 128, 128)"}>
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'rgb(235, 238, 240)',
                                color: 'rgb(47, 79, 79)',
                                borderRadius: "12px",
                                boxShadow: "none",
                                borderTop: "solid",
                                borderTopWidth: "4px",
                                borderColor: "rgb(47, 79, 79)",
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid rgb(70, 130, 180)'
                            }}
                            date={experience.duration}
                            iconStyle={{
                                background: 'rgb(1,174,174)',
                                borderColor: 'rgb(0, 128, 128)',
                                color: '#fff'
                            }}
                            icon={<WorkIcon/>}
                        >
                            <h2 className="font-semibold vertical-timeline-element-title"
                                style={{color: 'rgb(70, 130, 180)'}}>
                                {experience.title}
                            </h2>
                            <h4 className="vertical-timeline-element-subtitle"
                                style={{color: 'rgb(112, 128, 144)'}}>
                                {experience.company}
                            </h4>
                            <p>
                                {experience.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'rgb(1,174,174)',
                            color: '#fff'
                        }}
                        icon={<StartIcon/>}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};


export default Experience;
