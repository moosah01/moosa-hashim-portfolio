import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <section>
        <Nav />
      </section>
      <section>Hero</section>
      <section>About Me</section>
      <section>My Skills</section>
      <section>My Experiences</section>
      <section>My Projects</section>
      <section>Contact Me</section>
    </main>
  );
}

export default App;
