import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import ProjectVisual from "../components/ProjectVisuals";
import { Reveal, Section, SpotlightCard, TechChip } from "../components/ui";
import { cn } from "../lib/cn";
import { projects } from "../data/portfolio";

const accentText = {
  sky: "text-sky-600 dark:text-sky-400",
  violet: "text-violet-600 dark:text-violet-400",
  fuchsia: "text-fuchsia-600 dark:text-fuchsia-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  amber: "text-amber-600 dark:text-amber-400",
  pink: "text-pink-600 dark:text-pink-400",
};

const accentRgb = {
  sky: "56 189 248",
  violet: "167 139 250",
  fuchsia: "232 121 249",
  emerald: "52 211 153",
  amber: "251 191 36",
  pink: "244 114 182",
};

function ProjectCard({ project }) {
  return (
    <SpotlightCard
      as="article"
      color={accentRgb[project.accent]}
      className="flex h-full flex-col rounded-2xl bg-white p-2 outline outline-gray-950/5 dark:bg-gray-950 dark:outline-white/10"
    >
      <div className="pattern-dots relative h-56 overflow-hidden rounded-xl bg-gray-950/[0.025] ring-1 ring-(--line) ring-inset sm:h-60 dark:bg-white/[0.02]">
        <div data-parallax className="absolute inset-y-0 -right-[8%] -left-[8%] will-change-transform">
          <ProjectVisual kind={project.visual} />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3 sm:px-4">
        <p className={cn("font-mono text-[11px] font-medium tracking-wider uppercase", accentText[project.accent])}>
          {project.kind}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-center gap-1.5 text-[13px] font-medium">
              <CheckCircle2 className="size-3.5 text-emerald-500" />
              {outcome}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const [viewportRef, embla] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", skipSnaps: false },
    [WheelGesturesPlugin()]
  );
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const progressRef = useRef(null);

  // Parallax: shift each card's visual against the scroll direction.
  const tween = useCallback((api) => {
    const viewport = api.rootNode().getBoundingClientRect();
    const center = viewport.left + viewport.width / 2;
    api.slideNodes().forEach((slide) => {
      const layer = slide.querySelector("[data-parallax]");
      if (!layer) return;
      const rect = slide.getBoundingClientRect();
      const offset = (rect.left + rect.width / 2 - center) / viewport.width;
      layer.style.transform = `translate3d(${Math.max(-1, Math.min(1, offset)) * -6}%, 0, 0)`;
    });
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
  }, []);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    const onReInit = () => {
      setSnapCount(embla.scrollSnapList().length);
      onSelect();
      tween(embla);
    };
    onReInit();
    embla.on("reInit", onReInit).on("select", onSelect).on("scroll", tween).on("resize", tween);
    return () => {
      embla.off("reInit", onReInit).off("select", onSelect).off("scroll", tween).off("resize", tween);
    };
  }, [embla, tween]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      embla?.scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      embla?.scrollNext();
    }
  };

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      tone="fuchsia"
      annotation="projects.filter((p) => p.shipped).map(tellTheStory);"
      title="Selected work, from production systems to side quests."
      intro="Case studies from my day jobs alongside things I've built end to end. Drag, swipe or use your arrow keys to explore."
    >
      <Reveal className="line-y py-4">
        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={onKeyDown}
          className="cursor-grab overflow-hidden px-2 outline-none active:cursor-grabbing"
        >
          <div className="-ml-3 flex touch-pan-y touch-pinch-zoom">
            {projects.map((project, i) => (
              <div
                key={project.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${projects.length}: ${project.title}`}
                className="min-w-0 shrink-0 grow-0 basis-[88%] pl-3 xs:basis-[80%] sm:basis-[62%] lg:basis-[44%] xl:basis-[38%]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="line-y flex items-center gap-4 px-4 py-4 sm:gap-6 sm:px-2">
        <p className="font-mono text-xs text-gray-500 tabular-nums">
          <span className="text-gray-950 dark:text-white">{String(selected + 1).padStart(2, "0")}</span> /{" "}
          {String(snapCount).padStart(2, "0")}
        </p>
        <div className="relative h-px flex-1 overflow-hidden bg-(--line)">
          <div
            ref={progressRef}
            className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400"
          />
        </div>
        <div className="flex gap-2">
          {[
            { label: "Previous project", icon: ArrowLeft, onClick: () => embla?.scrollPrev(), disabled: !canPrev },
            { label: "Next project", icon: ArrowRight, onClick: () => embla?.scrollNext(), disabled: !canNext },
          ].map(({ label, icon: Icon, onClick, disabled }) => (
            <button
              key={label}
              type="button"
              onClick={onClick}
              disabled={disabled}
              aria-label={label}
              className="grid size-10 place-items-center rounded-full ring-1 ring-gray-950/10 transition ring-inset hover:bg-gray-950/5 disabled:opacity-30 disabled:hover:bg-transparent dark:ring-white/15 dark:hover:bg-white/10"
            >
              <Icon className="size-4" />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
