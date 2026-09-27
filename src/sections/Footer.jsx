import Logo from "../components/Logo";
import { Kbd } from "../components/ui";
import { isMac } from "../lib/styles";
import { scrollToId } from "../lib/smoothScroll";
import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  const elsewhere = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "Résumé (PDF)", href: profile.resume, download: true },
  ];

  return (
    <footer className="mt-24 sm:mt-36">
      <div className="line-y grid gap-10 px-4 py-12 sm:grid-cols-2 sm:px-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="size-7" />
            <span className="text-[15px] font-semibold tracking-tight">
              moosa<span className="text-gray-400 dark:text-gray-500">.hashim</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm/6 text-gray-600 dark:text-gray-400">
            Software engineer building systems that scale, automate and just work. Designed and built with React,
            Tailwind CSS and Framer Motion — visual language inspired by tailwindcss.com.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            Press <Kbd>{isMac ? "⌘K" : "Ctrl K"}</Kbd> for quick actions
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">Sections</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.id);
                  }}
                  className="text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.download
                    ? { download: profile.resumeFileName }
                    : link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  className="text-gray-600 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden px-4 pt-10 sm:px-2" aria-hidden="true">
        <p className="mask-fade-b bg-gradient-to-b from-gray-950/20 to-transparent bg-clip-text text-center text-[11.5vw] leading-[0.85] font-semibold tracking-tighter whitespace-nowrap text-transparent select-none xl:text-[9rem] dark:from-white/20">
          MOOSA HASHIM
        </p>
      </div>

      <div className="line-y flex flex-col gap-2 px-4 py-6 font-mono text-xs text-gray-500 sm:flex-row sm:justify-between sm:px-2">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Karachi, PK · built with curiosity & caffeine</p>
      </div>
    </footer>
  );
}
