import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Nav />

      <section className="py-20 bg-purple-300">Hero</section>
      <section className="py-40 bg-black">
        <div className="flex flex-col gap-2 justify-between">
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
          <div className="text-white">Step 1</div>
        </div>
      </section>
      <section className="py-20 bg-blue-300">My Skills</section>
      <section className="py-20 bg-amber-300">My Experiences</section>
      <section className="py-20 bg-red-300">My Projects</section>
      <section className="py-20 bg-yellow-300">Contact Me</section>
    </main>
  );
}

export default App;
