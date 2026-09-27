import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Command, Menu, Moon, Search, Sun, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import { Kbd } from "./ui";
import { isMac } from "../lib/styles";
import { cn } from "../lib/cn";
import { navLinks, profile } from "../data/portfolio";
import { toggleTheme, useActiveSection, useTheme } from "../lib/hooks";
import { lockScroll, scrollToId } from "../lib/smoothScroll";

const sectionIds = navLinks.map((link) => link.id);

function ThemeToggle() {
  const theme = useTheme();
  return (
    <button
      type="button"
      onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid size-9 place-items-center rounded-full text-gray-600 transition hover:bg-gray-950/5 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
    </button>
  );
}

export default function Nav({ onOpenPalette }) {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 36, restDelta: 0.001 });

  useEffect(() => {
    lockScroll(menuOpen);
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    // let the menu close (and scrolling unlock) before moving
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-(--line) bg-white/75 backdrop-blur-lg dark:bg-gray-950/70">
        <div className="mx-auto flex h-14 max-w-[85rem] items-center gap-3 px-4 sm:px-6">
          <a href="#top" onClick={go("top")} className="flex items-center gap-2.5" aria-label="Moosa Hashim — back to top">
            <Logo className="size-7" />
            <span className="text-[15px] font-semibold tracking-tight">
              moosa<span className="text-gray-400 dark:text-gray-500">.hashim</span>
            </span>
          </a>

          <nav aria-label="Primary" className="ml-6 hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={go(link.id)}
                    aria-current={active === link.id ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3 py-1.5 text-sm/6 font-medium transition-colors",
                      active === link.id
                        ? "text-gray-950 dark:text-white"
                        : "text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                    )}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gray-950/5 dark:bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={onOpenPalette}
              className="mr-1 hidden items-center gap-2 rounded-full py-1.5 pr-1.5 pl-3 text-sm/6 text-gray-500 ring-1 ring-gray-950/10 transition ring-inset hover:ring-gray-950/20 md:flex dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <Search className="size-3.5" />
              <span className="pr-3">Quick actions</span>
              <Kbd>{isMac ? "⌘K" : "Ctrl K"}</Kbd>
            </button>
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open quick actions"
              className="grid size-9 place-items-center rounded-full text-gray-600 transition hover:bg-gray-950/5 md:hidden dark:text-gray-400 dark:hover:bg-white/10"
            >
              <Command className="size-4.5" />
            </button>
            <ThemeToggle />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="hidden size-9 place-items-center rounded-full text-gray-600 transition hover:bg-gray-950/5 hover:text-gray-950 sm:grid dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <FaGithub className="size-4.5" />
            </a>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="ml-1 hidden rounded-full bg-gray-950 px-3.5 py-1.5 text-sm/6 font-semibold text-white transition hover:bg-gray-800 sm:inline-flex dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Résumé
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-9 place-items-center rounded-full text-gray-950 transition hover:bg-gray-950/5 lg:hidden dark:text-white dark:hover:bg-white/10"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400"
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 bottom-0 z-30 overflow-y-auto bg-white/95 backdrop-blur-xl lg:hidden dark:bg-gray-950/95"
            data-lenis-prevent
          >
            <nav aria-label="Mobile" className="flex min-h-full flex-col px-6 pt-6 pb-10">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.04 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-(--line)"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={go(link.id)}
                      className="flex items-baseline gap-4 py-4 text-3xl font-medium tracking-tight"
                    >
                      <span className="font-mono text-xs text-sky-500 dark:text-sky-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
                <a
                  href={profile.resume}
                  download={profile.resumeFileName}
                  className="rounded-full bg-gray-950 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-gray-950"
                >
                  Download résumé
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full py-3 text-center text-sm font-semibold ring-1 ring-gray-950/10 ring-inset dark:ring-white/15"
                >
                  Email me
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaGithub /> GitHub
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
