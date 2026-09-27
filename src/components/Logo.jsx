import { useId } from "react";

// A small ringed planet — the site's mark (also used as the favicon).
export default function Logo({ className }) {
  const id = useId();
  const gradient = `planet-${id}`;
  const front = `front-${id}`;

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="0.55" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#e879f9" />
        </linearGradient>
        <clipPath id={front}>
          <rect x="0" y="16" width="32" height="16" />
        </clipPath>
      </defs>
      <g transform="rotate(-22 16 16)">
        <ellipse cx="16" cy="16" rx="14.5" ry="4.4" fill="none" stroke={`url(#${gradient})`} strokeWidth="1.6" opacity="0.55" />
      </g>
      <circle cx="16" cy="16" r="8.4" fill={`url(#${gradient})`} />
      <g transform="rotate(-22 16 16)" clipPath={`url(#${front})`}>
        <ellipse cx="16" cy="16" rx="14.5" ry="4.4" fill="none" stroke={`url(#${gradient})`} strokeWidth="1.6" />
      </g>
    </svg>
  );
}
