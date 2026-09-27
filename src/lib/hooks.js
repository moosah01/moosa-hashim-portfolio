import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

/* ---------- media queries ---------- */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query]
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

/* ---------- theme (dark by default, persisted) ---------- */
const themeListeners = new Set();

function readTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#030712" : "#ffffff");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
  themeListeners.forEach((listener) => listener());
}

// Switch themes with a circular reveal that grows from `origin` (a click
// position) when the View Transitions API is available.
export function toggleTheme(origin) {
  const next = readTheme() === "dark" ? "light" : "dark";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduced) return setTheme(next);

  const x = origin?.x ?? window.innerWidth - 40;
  const y = origin?.y ?? 28;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  document.startViewTransition(() => setTheme(next)).ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 650,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
}

export function useTheme() {
  return useSyncExternalStore(
    (onChange) => {
      themeListeners.add(onChange);
      return () => themeListeners.delete(onChange);
    },
    readTheme,
    () => "dark"
  );
}

/* ---------- which section is on screen ---------- */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ---------- live clock in a given time zone ---------- */
export function useLocalTime(timeZone) {
  const format = useCallback(
    () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date()),
    [timeZone]
  );
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, [format]);

  return time;
}
