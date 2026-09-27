import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Copy } from "lucide-react";
import portrait from "../assets/images/moosa-portrait.jpg";
import { Annotation, CountUp } from "../components/ui";
import { btnPrimary, btnSecondary } from "../lib/styles";
import { cn } from "../lib/cn";
import { copyEmail } from "../lib/actions";
import { scrollToId } from "../lib/smoothScroll";
import { marqueeRows, techIcons } from "../lib/techIcons";
import { heroWords, impactStats, profile } from "../data/portfolio";

const ease = [0.16, 1, 0.3, 1];

function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[46rem] overflow-hidden">
      <div
        className="absolute top-0 left-[8%] h-[26rem] w-[38rem] animate-aurora rounded-full opacity-50 blur-3xl dark:opacity-70"
        style={{ background: "radial-gradient(closest-side, rgb(56 189 248 / 0.45), transparent)" }}
      />
      <div
        className="absolute top-20 right-[4%] h-[24rem] w-[34rem] animate-aurora rounded-full opacity-40 blur-3xl [animation-delay:-6s] dark:opacity-60"
        style={{ background: "radial-gradient(closest-side, rgb(217 70 239 / 0.4), transparent)" }}
      />
      <div
        className="absolute top-56 left-[38%] h-[20rem] w-[30rem] animate-aurora rounded-full opacity-40 blur-3xl [animation-delay:-12s] dark:opacity-60"
        style={{ background: "radial-gradient(closest-side, rgb(99 102 241 / 0.45), transparent)" }}
      />
    </div>
  );
}

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[1.12em] overflow-hidden pb-[0.12em]">
      <span className="sr-only">{heroWords[0]}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={heroWords[index]}
          aria-hidden="true"
          initial={{ y: "90%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-90%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease }}
          className="text-gradient inline-block animate-shimmer"
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function PhotoPill() {
  return (
    <motion.span
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "1.55em", opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.9, ease }}
      className="relative mx-[0.12em] inline-block h-[0.78em] -translate-y-[0.06em] overflow-hidden rounded-full align-middle ring-1 ring-gray-950/10 dark:ring-white/20"
    >
      <img
        src={portrait}
        alt="Portrait of Moosa Hashim"
        width="800"
        height="1000"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[50%_32%]"
      />
    </motion.span>
  );
}

function MarqueeRow({ items, reverse }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={cn(
          "flex w-max shrink-0 gap-3 hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ "--marquee-gap": "0.75rem", "--marquee-duration": reverse ? "52s" : "46s" }}
      >
        {[...items, ...items].map((name, i) => {
          const tech = techIcons[name];
          const Icon = tech?.icon;
          return (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= items.length ? "true" : undefined}
              className="flex shrink-0 items-center gap-2.5 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-950/[0.06] ring-inset dark:bg-white/[0.03] dark:text-gray-300 dark:ring-white/10"
            >
              {Icon && <Icon aria-hidden="true" className="size-4" style={{ color: tech.color }} />}
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

const statBorders = ["", "border-l", "max-lg:border-t lg:border-l", "border-l max-lg:border-t"];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative pt-6 sm:pt-10">
      <Aurora />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="line-y flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2 sm:px-2"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm/6 font-medium text-emerald-700 ring-1 ring-emerald-500/20 ring-inset dark:text-emerald-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to new opportunities
        </span>
        <span className="font-mono text-xs/6 text-gray-500">
          {profile.role} @ {profile.company} · {profile.location}
        </span>
      </motion.div>

      <Annotation>text-5xl tracking-tighter text-balance lg:text-8xl</Annotation>

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease, delay: 0.1 }}
        className="line-y px-4 text-[2.6rem]/[1.08] tracking-tighter text-balance max-lg:font-medium sm:px-2 sm:text-6xl/[1.05] lg:text-7xl/[1.02] xl:text-8xl/[1]"
      >
        {profile.shortName}
        <PhotoPill /> builds software that
        <RotatingWord />
      </motion.h1>

      <Annotation>text-lg/8 text-gray-400 max-w-2xl</Annotation>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
        className="line-y max-w-2xl px-4 text-lg/8 text-gray-600 sm:px-2 dark:text-gray-400"
      >
        Software engineer at <strong className="font-medium text-gray-950 dark:text-white">Spursol | ValueLink</strong>,
        building AI-orchestrated workflows and .NET services for a multi-tenant real-estate platform. 3+ years across
        banking integrations, fintech and SaaS — a new stack at every stop, shipped at every one.
      </motion.p>

      <Annotation />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.35 }}
        className="line-y flex flex-wrap items-center gap-3 px-4 py-3 sm:px-2"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contact");
          }}
          className={cn(btnPrimary, "group")}
        >
          Let's talk
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href={profile.resume} download={profile.resumeFileName} className={cn(btnSecondary, "group")}>
          Download résumé
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="group hidden items-center gap-3 rounded-full py-2.5 pr-3 pl-4 font-mono text-[13px]/6 text-gray-500 transition hover:text-gray-950 sm:inline-flex dark:text-gray-400 dark:hover:text-white"
          title="Copy email address"
        >
          <span className="text-sky-500 dark:text-sky-400">$</span>
          {profile.email}
          <Copy className="size-3.5 opacity-60 transition group-hover:opacity-100" />
        </button>
      </motion.div>

      {/* Impact at a glance */}
      <div className="line-y mt-10 grid grid-cols-2 sm:mt-14 lg:grid-cols-4">
        {impactStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.08 * i }}
            className={cn("border-(--line) px-4 py-6 sm:px-6 sm:py-8", statBorders[i])}
          >
            <p className="font-mono text-[11px] tracking-widest text-gray-400 uppercase dark:text-gray-500">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-4xl font-medium tracking-tighter sm:text-5xl">
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="mt-2 max-w-[16rem] text-sm/6 text-gray-600 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Toolbox marquee */}
      <div className="mt-16 sm:mt-20">
        <p className="px-4 text-center font-mono text-xs tracking-widest text-gray-500 uppercase">
          Tools of the trade
        </p>
        <div className="line-y mt-5 py-6">
          <div className="mask-fade-x space-y-3">
            <MarqueeRow items={marqueeRows[0]} />
            <MarqueeRow items={marqueeRows[1]} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
