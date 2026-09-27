import { Fragment, useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { cn } from "../lib/cn";
import { techIcons } from "../lib/techIcons";

const tones = {
  sky: "text-sky-500 dark:text-sky-400",
  pink: "text-pink-500 dark:text-pink-400",
  violet: "text-violet-500 dark:text-violet-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  amber: "text-amber-600 dark:text-amber-400",
  fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
  indigo: "text-indigo-500 dark:text-indigo-400",
};

/* Faint code "annotation" row between hairlines, à la tailwindcss.com. */
export function Annotation({ children, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-7 items-end overflow-hidden px-4 font-mono text-[11px]/6 whitespace-pre text-gray-950/25 sm:h-10 sm:px-2 sm:text-xs/6 dark:text-white/25",
        className
      )}
    >
      {children}
    </div>
  );
}

/* Eyebrow label (rotated into the page gutter on wide screens), annotated
   heading and intro paragraph. */
export function SectionHeading({ id, index, eyebrow, tone = "sky", annotation, title, intro }) {
  return (
    <div className="relative">
      <p
        className={cn(
          "mb-2 px-4 font-mono text-xs/6 font-semibold tracking-widest uppercase sm:px-2 xl:absolute xl:top-0 xl:right-full xl:mb-0 xl:flex xl:w-10 xl:justify-center xl:px-0",
          tones[tone]
        )}
      >
        <span className="xl:rotate-180 xl:[writing-mode:vertical-rl]">
          {index} — {eyebrow}
        </span>
      </p>
      <Annotation>{annotation}</Annotation>
      <h2
        id={`${id}-title`}
        className="line-y max-w-4xl px-4 text-[2.125rem]/10 font-medium tracking-tighter text-balance sm:px-2 sm:text-5xl/14"
      >
        {title}
      </h2>
      {intro && (
        <>
          <Annotation />
          <p className="line-y max-w-2xl px-4 text-base/7 text-gray-600 sm:px-2 dark:text-gray-400">
            {intro}
          </p>
        </>
      )}
    </div>
  );
}

export function Section({ id, className, children, ...heading }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative mt-24 sm:mt-36", className)}>
      <SectionHeading id={id} {...heading} />
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}

/* Blur-to-sharp fade-up when scrolled into view. */
export function Reveal({ as = "div", delay = 0, y = 18, className, children, ...rest }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/* Renders **highlighted** phrases inside plain strings. */
export function RichText({ text, className }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-medium text-gray-950 dark:text-white">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </span>
  );
}

/* Number that counts up once it scrolls into view. */
export function CountUp({ value, prefix = "", suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span aria-hidden="true" className="tabular-nums">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
    </span>
  );
}

/* Card with a soft light that follows the cursor. */
export function SpotlightCard({ as: Comp = "div", className, children, color = "56 189 248", ...rest }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Comp
      onPointerMove={handleMove}
      className={cn("group/spot relative isolate overflow-hidden", className)}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(${color} / 0.12), transparent 45%)`,
        }}
      />
      {children}
    </Comp>
  );
}

export function TechChip({ name, className }) {
  const tech = techIcons[name];
  const Icon = tech?.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-gray-950/[0.04] px-2.5 py-1 font-mono text-[11px]/4 text-gray-700 ring-1 ring-gray-950/5 ring-inset dark:bg-white/[0.04] dark:text-gray-300 dark:ring-white/10",
        className
      )}
    >
      {Icon && <Icon aria-hidden="true" className="size-3.5 shrink-0" style={{ color: tech.color }} />}
      {name}
    </span>
  );
}

export function Kbd({ children, className }) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center rounded-md px-1.5 font-sans text-[11px]/5 font-medium text-gray-500 ring-1 ring-gray-950/10 ring-inset dark:text-gray-400 dark:ring-white/15",
        className
      )}
    >
      {children}
    </kbd>
  );
}

/* Rounded frame used around visuals, like tailwindcss.com's demo cards. */
export function Frame({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-2 outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
