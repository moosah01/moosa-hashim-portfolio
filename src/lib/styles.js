export const isMac =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent);

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm/6 font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 transition ring-inset hover:bg-gray-950/[0.04] dark:text-white dark:ring-white/15 dark:hover:bg-white/5";
