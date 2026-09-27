import { Award, ExternalLink, HeartHandshake, Mic2, Users } from "lucide-react";
import ibaLogo from "../assets/images/IbaLogo.png";
import nixorLogo from "../assets/images/nixorLogo.png";
import { Reveal, Section, SpotlightCard } from "../components/ui";
import { cn } from "../lib/cn";
import { education, hobbies, leadership } from "../data/portfolio";

const logos = {
  iba: { src: ibaLogo, className: "object-cover" },
  nixor: { src: nixorLogo, className: "object-contain bg-[#900000] p-0.5" },
};
const leadershipIcons = { mic: Mic2, heart: HeartHandshake, users: Users };

function School({ school, featured }) {
  return (
    <SpotlightCard className="h-full p-6 sm:p-8" color="167 139 250">
      <div className="flex items-start gap-4">
        <img
          src={logos[school.logo].src}
          alt={`${school.school} logo`}
          loading="lazy"
          className={cn(
            "size-12 shrink-0 rounded-xl ring-1 ring-gray-950/10 dark:ring-white/10",
            logos[school.logo].className
          )}
        />
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-gray-500">{school.period}</p>
          <h3 className={cn("mt-1 font-semibold tracking-tight", featured ? "text-xl sm:text-2xl" : "text-lg")}>
            {school.degree}
          </h3>
          <a
            href={school.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-0.5 inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            {school.school}
            <ExternalLink className="size-3 opacity-50 transition group-hover:opacity-100" />
          </a>
        </div>
      </div>
      <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-700 ring-1 ring-violet-500/20 ring-inset dark:text-violet-300">
        <Award className="size-4" /> {school.highlight}
      </p>
      <ul className={cn("mt-5 grid gap-2", featured && "sm:grid-cols-3")}>
        {school.awards.map((award) => (
          <li
            key={award}
            className="rounded-lg bg-gray-950/[0.03] px-3 py-2 text-[13px]/5 text-gray-700 ring-1 ring-gray-950/5 ring-inset dark:bg-white/[0.03] dark:text-gray-300 dark:ring-white/5"
          >
            {award}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

function Leadership({ item }) {
  const Icon = leadershipIcons[item.icon];
  return (
    <SpotlightCard className="flex h-full flex-col p-6 sm:p-7" color="244 114 182">
      <span className="grid size-10 place-items-center rounded-xl bg-pink-500/10 ring-1 ring-pink-500/20 ring-inset">
        <Icon className="size-5 text-pink-500 dark:text-pink-300" />
      </span>
      <h3 className="mt-5 text-base font-semibold tracking-tight">{item.title}</h3>
      <p className="text-sm text-gray-500">{item.org}</p>
      <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">{item.body}</p>
      <dl className="mt-auto grid grid-cols-3 gap-3 pt-6">
        {item.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-lg font-semibold tracking-tight">{stat.value}</dd>
            <dd className="text-[11px]/4 text-gray-500">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </SpotlightCard>
  );
}

export default function Beyond() {
  const [iba, nixor] = education;
  return (
    <Section
      id="beyond"
      index="06"
      eyebrow="Beyond"
      tone="pink"
      annotation="// education + community"
      title="Outside the engineering role."
      intro="My education, developer talks and community work, including volunteer operations and welfare campaigns."
    >
      <div className="line-y grid gap-px bg-(--line) lg:grid-cols-3">
        <Reveal className="bg-(--site-bg) lg:col-span-2">
          <School school={iba} featured />
        </Reveal>
        <Reveal delay={0.06} className="bg-(--site-bg)">
          <School school={nixor} />
        </Reveal>
        {leadership.map((item, i) => (
          <Reveal key={item.title} delay={0.06 * i} className="bg-(--site-bg)">
            <Leadership item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal className="line-y mt-10 flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-2">
        <p className="shrink-0 font-mono text-xs tracking-widest text-gray-500 uppercase">Off the clock</p>
        <ul className="flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <li
              key={hobby.label}
              className="flex items-center gap-2 rounded-full bg-gray-950/[0.03] px-3.5 py-1.5 text-sm text-gray-700 ring-1 ring-gray-950/5 ring-inset transition hover:-translate-y-0.5 dark:bg-white/[0.04] dark:text-gray-300 dark:ring-white/10"
            >
              <span aria-hidden="true">{hobby.emoji}</span>
              {hobby.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
