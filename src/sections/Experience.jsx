import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Reveal, RichText, Section, TechChip } from "../components/ui";
import { cn } from "../lib/cn";
import { experience } from "../data/portfolio";

function Role({ job, index }) {
  return (
    <article className="line-y relative grid lg:grid-cols-[19rem_1fr]">
      {/* node on the rail */}
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0.4, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "0px 0px -45% 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={cn(
          "absolute top-9 left-5 z-10 size-3 -translate-x-1/2 rounded-full bg-gradient-to-br ring-4 ring-(--site-bg) lg:top-11 lg:left-[19rem]",
          job.gradient
        )}
      />

      <div className="pt-7 pr-4 pl-11 sm:pl-12 lg:py-10 lg:pr-10 lg:pl-2">
        <Reveal className="lg:sticky lg:top-24">
          <p className="flex items-center gap-2 font-mono text-xs/6 text-gray-500">
            {job.period}
            {job.current && (
              <span className="rounded-full bg-emerald-500/10 px-2 font-sans text-[11px]/5 font-medium text-emerald-600 ring-1 ring-emerald-500/20 ring-inset dark:text-emerald-300">
                Current
              </span>
            )}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span
              className={cn(
                "grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-semibold tracking-tight text-white shadow-lg shadow-gray-950/10",
                job.gradient
              )}
            >
              {job.short}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg/6 font-semibold tracking-tight">{job.company}</h3>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{job.role}</p>
            </div>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gray-950/[0.04] px-3 py-1 text-xs/5 font-medium text-gray-700 ring-1 ring-gray-950/5 ring-inset dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">
            <TrendingUp className="size-3.5 text-emerald-500" />
            {job.metric}
          </p>
        </Reveal>
      </div>

      <div className="pt-5 pr-4 pb-9 pl-11 sm:pl-12 lg:py-10 lg:pr-2 lg:pl-12">
        <ul className="space-y-4">
          {job.bullets.map((bullet, i) => (
            <Reveal
              as="li"
              key={i}
              delay={0.05 * i}
              className="relative pl-5 text-[15px]/7 text-gray-600 dark:text-gray-400"
            >
              <span aria-hidden="true" className="absolute top-[0.7rem] left-0 h-px w-2.5 bg-gray-400 dark:bg-gray-600" />
              <RichText text={bullet} />
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-1.5">
          {job.stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </Reveal>
      </div>
      <span className="sr-only">Role {index + 1} of {experience.length}</span>
    </article>
  );
}

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const cometTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      tone="violet"
      annotation="// roles, responsibilities, results"
      title="Experience and results."
      intro="Backend engineering at Spursol and Techlogix, preceded by product ownership and entrepreneurship. Here's what I was responsible for and what improved."
    >
      <div ref={listRef} className="relative">
        {/* timeline rail + comet */}
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-5 w-px bg-(--line) lg:left-[19rem]">
          <motion.div
            style={{ scaleY: progress }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-sky-400 via-violet-400 to-fuchsia-400"
          />
          <motion.div style={{ top: cometTop }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="block size-2 rounded-full bg-white shadow-[0_0_14px_5px] shadow-sky-400/70" />
          </motion.div>
        </div>

        {experience.map((job, i) => (
          <Role key={job.company} job={job} index={i} />
        ))}
      </div>
    </Section>
  );
}
