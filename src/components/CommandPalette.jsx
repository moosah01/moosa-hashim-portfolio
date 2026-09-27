import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Copy, CornerDownLeft, FileDown, Hash, Mail, Search, SunMoon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Kbd } from "./ui";
import { cn } from "../lib/cn";
import { navLinks, profile } from "../data/portfolio";
import { copyEmail, downloadResume } from "../lib/actions";
import { toggleTheme } from "../lib/hooks";
import { lockScroll, scrollToId } from "../lib/smoothScroll";

const actions = [
  { id: "copy", group: "Actions", label: "Copy email address", hint: profile.email, icon: Copy, run: copyEmail },
  { id: "resume", group: "Actions", label: "Download résumé", hint: "PDF", icon: FileDown, run: downloadResume },
  { id: "theme", group: "Actions", label: "Toggle light / dark theme", icon: SunMoon, run: () => toggleTheme() },
  {
    id: "mail",
    group: "Contact",
    label: "Send an email",
    icon: Mail,
    run: () => (window.location.href = `mailto:${profile.email}`),
  },
  {
    id: "linkedin",
    group: "Contact",
    label: "Open LinkedIn",
    icon: FaLinkedin,
    run: () => window.open(profile.linkedin, "_blank", "noopener"),
  },
  {
    id: "github",
    group: "Contact",
    label: "Open GitHub",
    icon: FaGithub,
    run: () => window.open(profile.github, "_blank", "noopener"),
  },
  ...navLinks.map((link) => ({
    id: `go-${link.id}`,
    group: "Jump to",
    label: link.label,
    icon: Hash,
    run: () => scrollToId(link.id),
  })),
];

function Palette({ onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.group} ${a.label} ${a.hint ?? ""}`.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const run = (action) => {
    onClose();
    requestAnimationFrame(() => action.run());
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      run(results[activeIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm dark:bg-gray-950/70" onClick={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Quick actions"
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -6 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-950/10 dark:bg-gray-900 dark:ring-white/10"
      >
        <div className="flex items-center gap-3 border-b border-(--line) px-4">
          <Search className="size-4 shrink-0 text-gray-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search actions or jump to a section…"
            aria-label="Search actions"
            className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <Kbd>Esc</Kbd>
        </div>

        <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2" data-lenis-prevent role="listbox">
          {results.length === 0 && (
            <li className="px-3 py-10 text-center text-sm text-gray-500">
              No matches. Try “email”, “résumé” or “projects”.
            </li>
          )}
          {results.map((action, i) => {
            const showGroup = action.group !== lastGroup;
            lastGroup = action.group;
            const Icon = action.icon;
            return (
              <li key={action.id} role="presentation">
                {showGroup && (
                  <p className="px-3 pt-3 pb-1 font-mono text-[11px] font-medium tracking-widest text-gray-400 uppercase dark:text-gray-500">
                    {action.group}
                  </p>
                )}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === activeIndex}
                  data-index={i}
                  onMouseMove={() => setActiveIndex(i)}
                  onClick={() => run(action)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                    i === activeIndex
                      ? "bg-sky-500/10 text-gray-950 dark:bg-sky-400/10 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  <Icon className={cn("size-4 shrink-0", i === activeIndex ? "text-sky-500 dark:text-sky-400" : "text-gray-400")} />
                  <span className="flex-1">{action.label}</span>
                  {action.hint && <span className="font-mono text-xs text-gray-400">{action.hint}</span>}
                  {i === activeIndex && (
                    action.group === "Jump to" ? (
                      <ArrowRight className="size-3.5 text-gray-400" />
                    ) : (
                      <CornerDownLeft className="size-3.5 text-gray-400" />
                    )
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-(--line) px-4 py-2.5 font-mono text-[11px] text-gray-400 dark:text-gray-500">
          <span>↑↓ navigate · ↵ select</span>
          <span>moosa.hashim</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CommandPalette({ open, onClose }) {
  useEffect(() => {
    lockScroll(open);
  }, [open]);

  return <AnimatePresence>{open && <Palette onClose={onClose} />}</AnimatePresence>;
}
