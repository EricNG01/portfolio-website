import ProjectCard from "../components/ProjectCard.tsx";
import portfolioProject from "../assets/Projects/portfolio.jpg";
import movieApp from "../assets/Projects/movieApp.jpg";
import marvelSoccer from "../assets/Projects/marvel-soccer-team.jpg";
import ReactJS from "../assets/Skills/reactJS.svg"
import JavaScript from "../assets/Skills/js.svg"
import TypeScript from "../assets/Skills/ts.svg"
import TailwindCss from "../assets/Skills/tailwindcss.svg"
import AWS from "../assets/Projects/aws.svg"
import Docker from "../assets/Projects/docker.svg"
import Express from "../assets/Skills/express.svg"
import Azure from "../assets/Projects/azure.svg"



const projects = [
    {
        title: "Portfolio",
        techStack: [Azure, ReactJS, TypeScript, TailwindCss],
        description:
            "\n" +
            "This project is a portfolio website designed to display personal projects and professional experience. It features sections that highlight completed work, technical skills, and an overview of the developer's journey. The website is responsive and interactive, offering visitors an organized and clear presentation of the developer's capabilities and growth.",
        imageSrc: portfolioProject,
        altText: "portfolioProject",
        demoLink: "https://jolly-sand-035912100.5.azurestaticapps.net",
        githubLink: "https://github.com/EricNG01/portfolio-website",
    },
    {
        title: "Movie Info Application",
        techStack: [AWS, Docker, ReactJS, Express, JavaScript],
        description:
            "A full-stack web application built with React.js and Express.js, utilizing RESTful APIs such as OMDb, YouTube, and the New York Times to deliver detailed movie information, including reviews and trailers. It features a dynamic movie search function, is containerized with Docker for scalable deployment on Amazon AWS, and employs Amazon S3 and Redis for real-time visitor tracking.",
        imageSrc: movieApp,
        altText: "movieApp",
        githubLink: "https://github.com/EricNG01/movieapp",
    },
    {
        title: "Marvel Soccer Team",
        techStack: [ReactJS, JavaScript],
        description:
            "A dynamic single-page application that allows users to explore the Marvel universe through its open API. Users can browse a comprehensive list of Marvel characters, view detailed information, and select them to form a 6-aside soccer team. The app ensures the team includes at least one goalkeeper, one striker, one midfielder, and one defender, while also allowing for an additional outfield player.",
        imageSrc: marvelSoccer,
        altText: "marvelSoccer",
        githubLink: "https://github.com/EricNG01/marvel-soccer-team",
    },
];

const Project = () => {
    return (
        <section className={"flex flex-col mb-20"}>
            <p className="mb-8 flex justify-center text-3xl font-semibold">Projects</p>
            <div className="mx-10 mt-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        techStack={project.techStack}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        altText={project.altText}
                        demoLink={project.demoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;


