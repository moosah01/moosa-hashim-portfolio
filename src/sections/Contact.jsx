import { useState } from "react";
import { toast } from "react-hot-toast";
import { ArrowUpRight, Clock, Copy, FileDown, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Reveal, Section, SpotlightCard } from "../components/ui";
import { btnPrimary } from "../lib/styles";
import { cn } from "../lib/cn";
import { copyEmail } from "../lib/actions";
import { useLocalTime } from "../lib/hooks";
import { profile } from "../data/portfolio";

const emailConfig = {
  service: import.meta.env.VITE_EMAILJS_SERVICE,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
};

const emptyForm = { name: "", email: "", subject: "", message: "" };

const field =
  "block w-full rounded-lg bg-white px-3.5 py-2.5 text-sm/6 text-gray-950 ring-1 ring-gray-950/10 transition outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-sky-500 dark:bg-white/[0.03] dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-sky-400";

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    // Without EmailJS keys (e.g. a fresh deploy), hand off to the mail client.
    if (!emailConfig.service || !emailConfig.template || !emailConfig.publicKey) {
      const subject = form.subject || `Hello from ${form.name}`;
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setSending(true);
    toast.loading("Sending…", { id: "mail" });
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(emailConfig.service, emailConfig.template, form, emailConfig.publicKey);
      toast.success("Message sent — I'll be in touch soon.", { id: "mail" });
      setForm(emptyForm);
    } catch {
      toast.error(`Something went wrong. Email me at ${profile.email}`, { id: "mail" });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="h-full p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" value={form.name} onChange={update} placeholder="Jane Doe" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update}
            placeholder="jane@company.com"
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">
            Subject <span className="font-normal text-gray-400">(optional)</span>
          </span>
          <input name="subject" value={form.subject} onChange={update} placeholder="Senior Software Engineer role at …" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={update}
            placeholder="Tell me about the role, the team or the problem you're solving."
            className={cn(field, "resize-none")}
          />
        </label>
      </div>
      <button type="submit" disabled={sending} className={cn(btnPrimary, "group mt-6 w-full disabled:opacity-60")}>
        {sending ? "Sending…" : "Send message"}
        <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}

export default function Contact() {
  const time = useLocalTime(profile.timeZone);

  const links = [
    { label: "LinkedIn", value: "in/moosahashim", href: profile.linkedin, icon: FaLinkedin },
    { label: "GitHub", value: "@moosah01", href: profile.github, icon: FaGithub },
    { label: "Résumé", value: "PDF · Aug 2026", href: profile.resume, icon: FileDown, download: true },
  ];

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      tone="indigo"
      annotation={'await hire("moosa"); // → 200 OK'}
      title="Let's build something that lasts."
      intro="Hiring for a role, stuck on a hard integration problem or need a product shipped? My inbox is open — I'd love to hear what you're working on."
    >
      <div className="line-y grid gap-px bg-(--line) lg:grid-cols-2">
        <Reveal className="flex flex-col bg-(--site-bg)">
          <SpotlightCard className="p-6 sm:p-8" color="129 140 248">
            <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">Email</p>
            <button
              type="button"
              onClick={copyEmail}
              className="group mt-3 flex w-full items-center justify-between gap-4 text-left"
              title="Copy email address"
            >
              <span className="text-2xl font-medium tracking-tight break-all sm:text-3xl">{profile.email}</span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full ring-1 ring-gray-950/10 transition ring-inset group-hover:bg-gray-950 group-hover:text-white dark:ring-white/15 dark:group-hover:bg-white dark:group-hover:text-gray-950">
                <Copy className="size-4" />
              </span>
            </button>
            <p className="mt-2 text-sm text-gray-500">Click to copy · or use the form</p>
          </SpotlightCard>

          <ul className="border-t border-(--line)">
            {links.map(({ label, value, href, icon: Icon, download }) => (
              <li key={label} className="border-b border-(--line) last:border-b-0">
                <a
                  href={href}
                  {...(download
                    ? { download: profile.resumeFileName }
                    : { target: "_blank", rel: "noreferrer" })}
                  className="group flex items-center gap-4 px-6 py-4 transition hover:bg-gray-950/[0.02] sm:px-8 dark:hover:bg-white/[0.02]"
                >
                  <Icon className="size-5 text-gray-500 transition group-hover:text-gray-950 dark:group-hover:text-white" />
                  <span className="text-sm font-medium">{label}</span>
                  <span className="ml-auto font-mono text-xs text-gray-500">{value}</span>
                  <ArrowUpRight className="size-4 text-gray-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-(--line) px-6 py-6 sm:px-8">
            <p className="font-mono text-xs tracking-widest text-gray-500 uppercase">Best fit for</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Backend engineering", "Integrations & workflows", "Applied AI", "Full-stack product"].map((fit) => (
                <li
                  key={fit}
                  className="rounded-full bg-indigo-500/10 px-3 py-1 text-[13px] font-medium text-indigo-700 ring-1 ring-indigo-500/20 ring-inset dark:text-indigo-300"
                >
                  {fit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-(--line) px-6 py-5 sm:px-8">
            <Clock className="size-4 text-gray-500" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              It's <span className="font-medium text-gray-950 dark:text-white">{time}</span> in {profile.location} (UTC+5)
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="bg-(--site-bg)">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
