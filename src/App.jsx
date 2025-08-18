import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import ProjectCardCarousel from "./sections/ProjectCarousel";
import Contact from "./sections/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Nav />
      <div className="flex flex-col gap-50 max-md:gap-25 py-7">
        <section id="about" className="scroll-mt-4 lg:scroll-mt-32">
          <Hero />
        </section>

        <section id="skills" className="scroll-mt-4 lg:scroll-mt-32">
          <Services />
        </section>

        <section id="qualifications" className="scroll-mt-4 lg:scroll-mt-32">
          <Education />
        </section>

        <section id="experience" className="scroll-mt-4 lg:scroll-mt-32">
          <WorkExperience />
        </section>

        <section id="projects" className="scroll-mt-4 lg:scroll-mt-32">
          <ProjectCardCarousel />
        </section>

        <section id="connect" className="scroll-mt-4 lg:scroll-mt-32">
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default App;
