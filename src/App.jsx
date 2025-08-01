import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Nav />
      <div className="flex flex-col gap-50 max-md:gap-3 py-7">
        <section>
          <Hero />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <WorkExperience />
        </section>
        <div className="bg-pink-500">Hello</div>
        <section className="py-40">
          <div className="flex flex-col gap-2 justify-between">
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
            <div className="text-black">Step 1</div>
          </div>
        </section>
        <section className="py-20 bg-blue-300">My Skills</section>
        <section className="py-20 bg-amber-300">My Experiences</section>
        <section className="py-20 bg-red-300">My Projects</section>
        <section className="py-20 bg-yellow-300">Contact Me</section>
      </div>
    </main>
  );
}

export default App;
