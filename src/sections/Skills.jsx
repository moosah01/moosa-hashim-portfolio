import { ArrowRight } from "lucide-react";
import { Reveal, Section, SpotlightCard, TechChip } from "../components/ui";
import { scrollToId } from "../lib/smoothScroll";
import { skillGroups } from "../data/portfolio";

// Tools I use every day at Spursol — highlighted in the grid.
const daily = new Set([
  "C#",
  ".NET",
  "Temporal",
  "Azure OpenAI",
  "Dapper",
  "SQL Server",
  "Azure",
  "Azure Blob Storage",
  "SQL",
]);

export default function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      eyebrow="Skills"
      tone="amber"
      annotation="// languages, platforms, practices"
      title="Technical skills."
      intro="Grouped by area of work. Highlighted technologies are part of my current role at Spursol."
    >
      <div className="line-y grid gap-px bg-(--line) sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06} className="bg-(--site-bg)">
            <SpotlightCard className="h-full p-6 sm:p-7" color="251 191 36">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
                <span className="font-mono text-[11px] text-gray-400">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">{group.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechChip
                    key={item}
                    name={item}
                    className={
                      daily.has(item)
                        ? "bg-amber-400/10 text-amber-800 ring-amber-500/25 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-300/25"
                        : undefined
                    }
                  />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}

        <Reveal delay={0.12} className="bg-(--site-bg) sm:col-span-2 lg:col-span-1">
          <div className="relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-16 size-56 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgb(139 92 246 / 0.35), transparent)" }}
            />
            <div>
              <h3 className="text-gradient animate-shimmer text-lg font-semibold tracking-tight">Different stack? Let's talk.</h3>
              <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
                My work has moved from Kafka and Camel K integrations to .NET services and Temporal workflows.
                I'm comfortable learning a new stack when the role calls for it.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              className="group relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400"
            >
              Tell me what you're building
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
