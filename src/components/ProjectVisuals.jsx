import { motion } from "framer-motion";
import { Bot, Check, Loader2, Mail, MessageSquare, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "../lib/cn";

const panel =
  "rounded-xl bg-white/90 shadow-xl shadow-gray-950/5 ring-1 ring-gray-950/5 backdrop-blur dark:bg-gray-900/90 dark:shadow-black/30 dark:ring-white/10";

function WorkflowVisual() {
  const steps = [
    { icon: Mail, label: "Email follow-up", meta: "09:00", state: "done" },
    { icon: MessageSquare, label: "SMS reminder", meta: "13:00", state: "done" },
    { icon: Phone, label: "AI voice call", meta: "live", state: "running" },
  ];
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className={cn(panel, "w-full max-w-[19rem] p-4")}>
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] text-gray-500">workflow · InspectionFollowUp</p>
          <span className="flex items-center gap-1 rounded-full bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] text-sky-600 dark:text-sky-300">
            <span className="size-1.5 animate-pulse rounded-full bg-sky-500" /> running
          </span>
        </div>
        <ul className="mt-3 space-y-2">
          {steps.map(({ icon: Icon, label, meta, state }) => (
            <li key={label} className="flex items-center gap-2.5 rounded-lg bg-gray-950/[0.03] px-2.5 py-2 dark:bg-white/[0.04]">
              <Icon className="size-3.5 text-gray-500" />
              <span className="flex-1 text-xs font-medium">{label}</span>
              <span className="font-mono text-[10px] text-gray-400">{meta}</span>
              {state === "done" ? (
                <Check className="size-3.5 text-emerald-500" />
              ) : (
                <Loader2 className="size-3.5 animate-spin text-sky-500" />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/10 to-violet-500/10 px-2.5 py-2 ring-1 ring-sky-500/15 ring-inset">
          <Sparkles className="size-3.5 text-violet-500 dark:text-violet-300" />
          <span className="text-[11px] text-gray-600 dark:text-gray-300">Azure OpenAI ranked 3 valid slots</span>
        </div>
      </div>
    </div>
  );
}

function MigrationVisual() {
  const lines = [
    ["-", "using var cmd = new SqlCommand(sql, conn);"],
    ["-", "var reader = await cmd.ExecuteReaderAsync();"],
    ["+", "var orders = await conn.QueryAsync<Order>("],
    ["+", "    sql, new { tenantId });"],
  ];
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-[21rem] overflow-hidden rounded-xl bg-gray-950 shadow-xl ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
          <Bot className="size-3.5 text-violet-300" />
          <span className="font-mono text-[10px] text-white/60">agent/ado-to-dapper · OrderRepository.cs</span>
        </div>
        <pre className="px-3 py-2.5 font-mono text-[10.5px]/5">
          {lines.map(([sign, code], i) => (
            <div
              key={i}
              className={cn(
                "-mx-3 px-3 whitespace-pre",
                sign === "-" ? "bg-rose-500/10 text-rose-300" : "bg-emerald-500/10 text-emerald-300"
              )}
            >
              {sign} {code}
            </div>
          ))}
        </pre>
        <div className="flex flex-wrap gap-1.5 border-t border-white/5 px-3 py-2.5">
          {["security", "tests", "build"].map((gate, i) => (
            <motion.span
              key={gate}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.25 }}
              className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300"
            >
              <ShieldCheck className="size-3" /> {gate}
            </motion.span>
          ))}
          <span className="ml-auto font-mono text-[10px] text-white/40">65+ repos</span>
        </div>
      </div>
    </div>
  );
}

function PipelineVisual() {
  const lanes = [
    { topic: "payments.transfer", color: "bg-sky-400", duration: "2.6s" },
    { topic: "payments.prepaid", color: "bg-violet-400", duration: "3.4s" },
    { topic: "bank.settlement", color: "bg-fuchsia-400", duration: "2.2s" },
  ];
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className={cn(panel, "w-full max-w-[21rem] p-4")}>
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] text-gray-500">kafka · 200+ banks</p>
          <p className="font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">$5M+/day</p>
        </div>
        <div className="mt-3 space-y-2.5">
          {lanes.map((lane, i) => (
            <div key={lane.topic}>
              <p className="mb-1 font-mono text-[10px] text-gray-400">{lane.topic}</p>
              <div className="relative h-2 overflow-hidden rounded-full bg-gray-950/[0.05] dark:bg-white/[0.06]">
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    className="absolute inset-y-0 left-0 w-full animate-travel"
                    style={{ "--travel-duration": lane.duration, animationDelay: `${-n * 0.9 - i * 0.4}s` }}
                  >
                    <span className={cn("absolute top-1/2 left-0 h-1.5 w-5 -translate-y-1/2 rounded-full", lane.color)} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-3 font-mono text-[10px] text-gray-500">
          <span>
            failures <b className="text-emerald-600 dark:text-emerald-400">−70%</b>
          </span>
          <span>
            core/mem <b className="text-emerald-600 dark:text-emerald-400">−50%</b>
          </span>
        </div>
      </div>
    </div>
  );
}

function LmsVisual() {
  const courses = [
    { name: "Data Structures", pct: 82, color: "bg-emerald-400" },
    { name: "Databases", pct: 64, color: "bg-sky-400" },
    { name: "Operating Systems", pct: 41, color: "bg-violet-400" },
  ];
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className={cn(panel, "grid w-full max-w-[20rem] grid-cols-[3.25rem_1fr] overflow-hidden")}>
        <div className="flex flex-col items-center gap-2.5 border-r border-gray-950/5 bg-gray-950/[0.02] py-4 dark:border-white/5 dark:bg-white/[0.02]">
          {[0, 1, 2, 3].map((n) => (
            <span key={n} className={cn("size-6 rounded-md", n === 0 ? "bg-emerald-400/80" : "bg-gray-950/10 dark:bg-white/10")} />
          ))}
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold">My courses</p>
          <p className="font-mono text-[10px] text-gray-400">Designed for 10K+ users · 100+ APIs</p>
          <div className="mt-3 space-y-3">
            {courses.map((course, i) => (
              <div key={course.name}>
                <div className="flex justify-between text-[11px]">
                  <span>{course.name}</span>
                  <span className="font-mono text-gray-400">{course.pct}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-gray-950/5 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={cn("h-full rounded-full", course.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [62, 78, 70, 88, 94, 81, 97];
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className={cn(panel, "w-full max-w-[20rem] p-4")}>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Present", "96%"],
            ["Overtime", "12h"],
            ["Errors", "−40%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-gray-950/[0.03] px-2 py-1.5 dark:bg-white/[0.04]">
              <p className="text-[10px] text-gray-500">{label}</p>
              <p className="text-sm font-semibold tracking-tight">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-amber-500/60 to-amber-300"
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[9px] text-gray-400">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GameVisual() {
  return (
    <div className="relative h-full overflow-hidden bg-gray-950">
      {Array.from({ length: 36 }, (_, i) => (
        <span
          key={i}
          className="absolute size-px rounded-full bg-white"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            opacity: 0.25 + ((i * 7) % 10) / 14,
          }}
        />
      ))}
      {/* invaders */}
      <div className="absolute top-8 left-1/2 flex -translate-x-1/2 animate-float gap-5">
        {["text-pink-400", "text-violet-400", "text-sky-400", "text-violet-400", "text-pink-400"].map((color, i) => (
          <svg key={i} viewBox="0 0 11 8" className={cn("h-4 w-5 fill-current", color)} aria-hidden="true">
            <path d="M2 0h1v1H2zM8 0h1v1H8zM3 1h5v1H3zM2 2h7v1H2zM1 3h2v1H1zM4 3h3v1H4zM8 3h2v1H8zM0 4h11v1H0zM0 5h1v2H0zM2 5h7v1H2zM10 5h1v2h-1zM2 6h1v1H2zM8 6h1v1H8zM3 7h2v1H3zM6 7h2v1H6z" />
          </svg>
        ))}
      </div>
      {/* lasers */}
      {[0, 1, 2].map((n) => (
        <span
          key={n}
          className="absolute bottom-16 left-1/2 h-3 w-0.5 -translate-x-1/2 animate-laser rounded-full bg-sky-300 shadow-[0_0_8px_2px] shadow-sky-400/70"
          style={{ animationDelay: `${n * 0.45}s` }}
        />
      ))}
      {/* ship */}
      <svg viewBox="0 0 24 24" className="absolute bottom-6 left-1/2 size-9 -translate-x-1/2" aria-hidden="true">
        <path d="M12 2 20 20 12 16 4 20Z" className="fill-sky-400" />
        <path d="M12 16 9 22h6Z" className="fill-amber-400" />
      </svg>
      <p className="absolute top-3 left-4 font-mono text-[10px] text-white/50">SCORE 004200</p>
      <p className="absolute top-3 right-4 font-mono text-[10px] text-white/50">SDL2 · C++</p>
    </div>
  );
}

const visuals = {
  workflow: WorkflowVisual,
  migration: MigrationVisual,
  pipeline: PipelineVisual,
  lms: LmsVisual,
  dashboard: DashboardVisual,
  game: GameVisual,
};

export default function ProjectVisual({ kind }) {
  const Visual = visuals[kind];
  return Visual ? <Visual /> : null;
}
