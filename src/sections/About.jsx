import { motion, useMotionValue, useSpring } from "framer-motion";
import { Gauge, Layers, MapPin, Rocket, Sparkles } from "lucide-react";
import portrait from "../assets/images/MoosaHotPot.png";
import { Reveal, Section, SpotlightCard } from "../components/ui";
import { useLocalTime } from "../lib/hooks";
import { profile, whyMe } from "../data/portfolio";

const icons = { layers: Layers, gauge: Gauge, sparkles: Sparkles, rocket: Rocket };

function Portrait() {
  const time = useLocalTime(profile.timeZone);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="relative h-full">
      {/* orbit rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-8 -left-8 z-10 hidden size-40 sm:block">
        <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-sky-400/30">
          <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_3px] shadow-sky-400/60" />
        </div>
        <div className="absolute inset-6 animate-orbit rounded-full border border-fuchsia-400/20 [--orbit-duration:14s] [animation-direction:reverse]">
          <span className="absolute top-1/2 -left-1 size-1.5 -translate-y-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_2px] shadow-fuchsia-400/60" />
        </div>
      </div>

      <motion.figure
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-900 lg:h-full"
      >
        <img
          src={portrait}
          alt="Muhammad Moosa Hashim"
          loading="lazy"
          width="1086"
          height="1448"
          className="absolute inset-0 size-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-gray-950/50 px-3 py-1 font-mono text-[11px] text-white/90 ring-1 ring-white/15 backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          {time} in Karachi
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xl font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
            <MapPin className="size-3.5" /> {profile.location} · UTC+5
          </p>
        </figcaption>
      </motion.figure>
    </div>
  );
}

const K = "text-pink-400";
const S = "text-sky-300";
const P = "text-gray-500";
const F = "text-violet-300";
const V = "text-gray-200";
const N = "text-amber-300";

const codeLines = [
  [[K, "import"], [P, " { "], [V, "defineEngineer"], [P, " } "], [K, "from"], [S, ' "@moosa/core"'], [P, ";"]],
  [],
  [[K, "export default "], [F, "defineEngineer"], [P, "({"]],
  [[V, "  name"], [P, ": "], [S, '"Muhammad Moosa Hashim"'], [P, ","]],
  [[V, "  role"], [P, ": "], [S, '"Software Engineer"'], [P, ","]],
  [[V, "  company"], [P, ": "], [S, '"Spursol | ValueLink"'], [P, ","]],
  [[V, "  experience"], [P, ": "], [S, '"3+ years"'], [P, ","]],
  [[V, "  stack"], [P, ": ["], [S, '"C#/.NET"'], [P, ", "], [S, '"Temporal"'], [P, ", "], [S, '"Kafka"'], [P, ", "], [S, '"Azure"'], [P, "],"]],
  [[V, "  focus"], [P, ": ["]],
  [[S, '    "backend services"'], [P, ","]],
  [[S, '    "system integrations"'], [P, ","]],
  [[S, '    "workflow automation"'], [P, ","]],
  [[P, "  ],"]],
  [[V, "  background"], [P, ": "], [S, '"engineering + product"'], [P, ","]],
  [[V, "  openToWork"], [P, ": "], [N, "true"], [P, ","]],
  [[P, "});"]],
];

function CodeWindow() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-gray-950 ring-1 ring-gray-950/10 dark:bg-white/[0.03] dark:ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-white/15" />
        <span className="size-3 rounded-full bg-white/15" />
        <span className="ml-3 rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs text-white/80">moosa.config.ts</span>
        <span className="ml-auto font-mono text-[11px] text-white/30">TypeScript</span>
      </div>
      <motion.pre
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="scrollbar-none flex-1 overflow-x-auto p-4 font-mono text-[12.5px]/6 sm:p-5 sm:text-[13px]/7"
      >
        <code className="block min-w-max">
          {codeLines.map((tokens, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, x: -6 },
                show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
              }}
              className="flex"
            >
              <span className="w-8 shrink-0 text-right text-white/20 select-none">{i + 1}</span>
              <span className="pl-5">
                {tokens.length === 0 ? " " : tokens.map(([cls, text], j) => (
                  <span key={j} className={cls}>{text}</span>
                ))}
                {i === codeLines.length - 1 && (
                  <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-sky-400/80" />
                )}
              </span>
            </motion.span>
          ))}
        </code>
      </motion.pre>
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      tone="sky"
      annotation="// engineering + product experience"
      title="Backend engineer. Product perspective."
      intro="I'm a software engineer based in Karachi and a computer science graduate from IBA. My work spans banking integrations, data migrations and real-estate software. Before engineering, I worked in product and co-founded a travel business. I like understanding why a feature matters as much as how it works."
    >
      <div className="line-y grid gap-px bg-(--line) lg:grid-cols-12">
        <Reveal className="bg-(--site-bg) p-2 lg:col-span-5">
          <Portrait />
        </Reveal>
        <Reveal delay={0.1} className="bg-(--site-bg) p-2 lg:col-span-7">
          <CodeWindow />
        </Reveal>
      </div>

      <div className="line-y mt-10 grid gap-px bg-(--line) sm:grid-cols-2 lg:grid-cols-4">
        {whyMe.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={0.06 * i} className="bg-(--site-bg)">
              <SpotlightCard className="h-full p-6 sm:p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400/15 to-fuchsia-400/15 ring-1 ring-sky-400/20 ring-inset">
                  <Icon className="size-5 text-sky-500 dark:text-sky-300" />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">{item.body}</p>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
