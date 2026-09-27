import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading, TechChip } from "../components/ui";
import { cn } from "../lib/cn";
import { useMediaQuery } from "../lib/hooks";
import { scrollToId } from "../lib/smoothScroll";
import { journey } from "../data/portfolio";

const heading = {
  id: "journey",
  index: "04",
  eyebrow: "Journey",
  tone: "emerald",
  annotation: "while (alive) { learn(); build(); ship(); }",
  title: "A new stack at every stop. Shipped at every one.",
  intro:
    "I learn by reading the docs, building something real and shipping it — with AI as a sidekick, not a crutch. Here's how the toolbox grew.",
};

function Milestone({ item, index }) {
  return (
    <article
      className={cn(
        "relative flex w-[18.5rem] shrink-0 snap-start flex-col rounded-2xl p-6 sm:w-[21rem]",
        item.next
          ? "bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-fuchsia-500/10 outline outline-dashed outline-sky-400/40"
          : "bg-white outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10"
      )}
    >
      {/* node on the timeline */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-[1.78rem] left-6 size-3 rounded-full ring-4 ring-(--site-bg)",
          item.next ? "animate-pulse bg-fuchsia-400" : "bg-emerald-400"
        )}
      />
      <div className="flex items-baseline justify-between">
        <span className={cn("font-mono text-sm font-semibold", item.next ? "text-gradient" : "text-emerald-600 dark:text-emerald-400")}>
          {item.year}
        </span>
        <span className="font-mono text-[11px] text-gray-400">
          {String(index + 1).padStart(2, "0")} · +{item.learned.length} skills
        </span>
      </div>
      <h3 className={cn("mt-4 text-xl font-semibold tracking-tight", item.next && "text-gradient")}>{item.title}</h3>
      <p className="mt-0.5 text-sm text-gray-500">{item.org}</p>
      <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">{item.body}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {item.learned.map((skill) => (
          <TechChip key={skill} name={skill} />
        ))}
      </div>
      {item.next && (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contact");
          }}
          className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400"
        >
          Hand me a stack
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </article>
  );
}

function Track({ trackRef, x, progress }) {
  return (
    <motion.div ref={trackRef} style={{ x }} className="relative flex w-max gap-5 px-4 pt-10 sm:px-2">
      {/* the line the cards hang from */}
      <div aria-hidden="true" className="absolute top-[1.1rem] right-0 left-0 h-px bg-(--line)">
        {progress && (
          <motion.div
            style={{ scaleX: progress }}
            className="absolute inset-0 origin-left bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400"
          />
        )}
      </div>
      {journey.map((item, i) => (
        <Milestone key={`${item.year}-${item.title}`} item={item} index={i} />
      ))}
      <div aria-hidden="true" className="w-4 shrink-0 sm:w-12" />
    </motion.div>
  );
}

// Desktop: the section pins while vertical scroll drives the track sideways.
function PinnedJourney() {
  const tall = useMediaQuery("(min-height: 900px)");
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewportRef.current);
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-labelledby="journey-title"
      className="relative mt-24 sm:mt-36"
      style={{ height: `calc(100dvh - 3.5rem + ${distance}px)` }}
    >
      <div className="sticky top-14 flex h-[calc(100dvh-3.5rem)] flex-col justify-center gap-8">
        <SectionHeading {...heading} intro={tall ? heading.intro : undefined} />
        <div ref={viewportRef} className="line-y py-6">
          <Track trackRef={trackRef} x={x} progress={smooth} />
        </div>
      </div>
    </section>
  );
}

// Mobile / short screens: native horizontal swipe with snap points.
function SwipeJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="relative mt-24 sm:mt-36">
      <SectionHeading {...heading} />
      <div className="line-y mt-10 py-6">
        <div className="scrollbar-none snap-x snap-mandatory scroll-px-4 overflow-x-auto overscroll-x-contain" data-lenis-prevent-horizontal>
          <Track />
        </div>
        <p className="mt-4 px-4 font-mono text-[11px] text-gray-400 sm:px-2">swipe →</p>
      </div>
    </section>
  );
}

export default function Journey() {
  const pinned = useMediaQuery(
    "(min-width: 1024px) and (min-height: 740px) and (prefers-reduced-motion: no-preference)"
  );
  return pinned ? <PinnedJourney /> : <SwipeJourney />;
}
