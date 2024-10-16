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
import Java from "../assets/Skills/java.svg"
import Maze from "../assets/Projects/Maze.jpg"
import MazeDemo from "../assets/Projects/MazeDemo.jpg"

const keywordClass = " font-bold not-italic text-black text-xl bg-gradient-to-r from-black to-black bg-no-repeat bg-keyword-background-no-underline bg-right-bottom transition-[background-size] duration-500 hover:bg-left-bottom hover:bg-keyword-background-underline"

const projects = [
    {
        title: "Portfolio",
        techStack: [Azure, ReactJS, TypeScript, TailwindCss],
        description:
            <span className={"text-lg pt-4 text-gray-900"}>This project is a portfolio website designed to display personal projects and professional experience. It features sections that highlight completed work, technical skills, and an overview of the developer's journey. The website is responsive and interactive, offering visitors an organized and clear presentation of the developer's capabilities and growth.</span>,
        imageSrc: portfolioProject,
        altText: "portfolioProject",
        // demoLink: "https://jolly-sand-035912100.5.azurestaticapps.net",
        githubLink: "https://github.com/EricNG01/portfolio-website",
    },
    {
        title: "Movie Info Application",
        techStack: [AWS, Docker, ReactJS, Express, JavaScript],
        description:
            <span className={"text-lg pt-4 text-gray-900"} >A full-stack web application built with <em className={keywordClass}>React.js</em> and <em className={keywordClass}>Express.js</em>, utilizing <em className={keywordClass}>RESTful</em> APIs such as OMDb, YouTube, and the New York Times to deliver detailed movie information, including reviews and trailers. It features a dynamic movie search function, is containerized with <em className={keywordClass}>Docker</em> for scalable deployment on <em className={keywordClass}>Amazon AWS</em>, and employs <em className={keywordClass}>Amazon S3</em> and <em className={keywordClass}>Redis</em> for real-time visitor tracking.</span>,
        imageSrc: movieApp,
        altText: "movieApp",
        githubLink: "https://github.com/EricNG01/movieapp",
    },
    {
        title: "Marvel Soccer Team",
        techStack: [ReactJS, JavaScript],
        description:
            <span className={"text-lg pt-4"}>A dynamic single-page application that allows users to explore the Marvel universe through its open API. Users can browse a comprehensive list of Marvel characters, view detailed information, and select them to form a 6-aside soccer team. The app ensures the team includes at least one goalkeeper, one striker, one midfielder, and one defender, while also allowing for an additional outfield player.</span>,
        imageSrc: marvelSoccer,
        altText: "marvelSoccer",
        githubLink: "https://github.com/EricNG01/marvel-soccer-team",
    },
    {
        title: "Maze Creation and Editing Software",
        techStack: [Java],
        description:
            <span className={"text-lg pt-4"}>In the Maze Creation and Editing Software group project, I took key responsibilities, including implementing the maze <em className={keywordClass}>auto-generation algorithm</em>, which allows users to create random mazes based on specified dimensions, and developing the <em className={keywordClass}>optimal path-finding algorithm</em> to find solution paths within the maze. I designed the Graphical User Interface (GUI) using <em className={keywordClass}>Java Swing</em>, providing an intuitive experience for maze creation, editing, and saving. Additionally, I created the <em className={keywordClass}>data model</em> for storing mazes, enabling users to save and retrieve mazes from a database for future editing. Throughout the project, I actively contributed to the <em className={keywordClass}>Agile development</em> process, participating in sprint meetings, collaborative planning, and continuous feature enhancement.</span>,
        imageSrc: Maze,
        altText: "Maze",
        githubLink: "https://github.com/Tetley1173/team36-amazing-app",
    },
    {
        title: "Light-weight demo of the Maze Creation and Editing Software",
        techStack: [Java],
        description:
            <span className={"text-lg pt-4"}>This individual project is <em className={keywordClass}>a lightweight demo version</em> of the Maze Creation and Editing Software, showcasing key functionalities such as the <em className={keywordClass}>maze auto-generation algorithm</em> and <em className={keywordClass}>optimal path-finding algorithm</em>. The application features a streamlined Graphical User Interface (GUI) developed with <em className={keywordClass}>Java Swing</em>, providing an interactive environment for demonstrating the core capabilities of the original software.</span>,
        imageSrc: MazeDemo,
        altText: "MazeDemo",
        githubLink: "https://github.com/EricNG01/Maze",
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
                        // demoLink={project.demoLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;


