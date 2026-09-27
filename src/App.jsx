import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Starfield from "./components/Starfield";
import CommandPalette from "./components/CommandPalette";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Beyond from "./sections/Beyond";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { initSmoothScroll, scrollToId } from "./lib/smoothScroll";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const cleanup = initSmoothScroll();
    // Deep links (e.g. /#projects) — sections only exist after first render.
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) requestAnimationFrame(() => scrollToId(id, { immediate: true }));
    return cleanup;
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-gray-950 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 dark:bg-white dark:text-gray-950"
      >
        Skip to content
      </a>

      <div className="relative isolate min-h-dvh overflow-x-clip">
        <Starfield />
        <Nav onOpenPalette={() => setPaletteOpen(true)} />

        {/* tailwindcss.com-style blueprint: striped gutters around a content column */}
        <div className="grid grid-cols-1 justify-center pt-14 [--gutter:2.5rem] md:grid-cols-[var(--gutter)_minmax(0,80rem)_var(--gutter)]">
          <div
            aria-hidden="true"
            className="pattern-stripes col-start-1 row-start-1 hidden border-x border-(--pattern-fg) md:block"
          />
          <main id="main" className="relative isolate col-start-1 row-start-1 min-w-0 md:col-start-2">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Journey />
            <Skills />
            <Beyond />
            <Contact />
            <Footer />
          </main>
          <div
            aria-hidden="true"
            className="pattern-stripes col-start-3 row-start-1 hidden border-x border-(--pattern-fg) md:block"
          />
        </div>

        <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "var(--toast-bg)",
              color: "var(--toast-fg)",
              borderRadius: "9999px",
              fontSize: "14px",
              padding: "8px 16px",
              boxShadow: "0 10px 30px -10px rgb(0 0 0 / 0.4)",
            },
          }}
        />
      </div>
    </MotionConfig>
  );
}
