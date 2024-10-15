import Education from "./sub-sections/Education.tsx";
import Skills from "./sub-sections/Skills.tsx";
import InfoHeader from "./sub-sections/Intro.tsx";
import ParticlesBackground from "./components/ParticlesBackground.tsx";
import Experience from "./sub-sections/Experience.tsx";
import Project from "./sub-sections/Project.tsx";
function App() {

  return (
      <div className="relative bg-gray-200">
          <div className="absolute">
              <ParticlesBackground id={"particles-background"}/>
              <InfoHeader/>
              <Education/>
              <Project/>
              <Skills/>
              <Experience/>
          </div>
      </div>
  )
}

export default App
