import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { profile, impactStats } from "../src/data/portfolio.js";

// Run after changing the portrait or portfolio copy; commit the generated image.
const portrait = await readFile(new URL("../src/assets/images/MoosaHotPot.png", import.meta.url));
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>
    * { box-sizing: border-box; }
    body { margin: 0; width: 1200px; height: 630px; background: #070c19; color: #f3f5fa; font-family: Arial, sans-serif; }
    main { height: 100%; padding: 48px 56px; background: radial-gradient(ellipse at 10% 0%, #133449 0%, transparent 55%); }
    .top { display: flex; justify-content: space-between; align-items: center; font-size: 17px; color: #a8b4ca; }
    .available { color: #65e4c1; border: 1px solid #245c57; border-radius: 24px; padding: 10px 16px; background: #11332f; }
    .content { display: flex; justify-content: space-between; align-items: center; margin-top: 30px; gap: 28px; }
    .copy { flex: 1; }
    h1 { font-size: 64px; line-height: 1.08; letter-spacing: -2.5px; margin: 0 0 16px; }
    h2 { color: #96c4fc; font-size: 31px; line-height: 1.25; margin: 0 0 22px; font-weight: 500; }
    .role { font-size: 18px; line-height: 1.6; color: #bac4d6; margin: 0; }
    img { width: 222px; height: 296px; object-fit: cover; border-radius: 18px; border: 1px solid #354258; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 32px; padding-top: 22px; border-top: 1px solid #334155; gap: 24px; }
    .value { font-size: 34px; font-weight: 700; letter-spacing: -1px; }
    .label { color: #a8b4ca; font-size: 14px; line-height: 1.45; margin-top: 7px; }
  </style></head><body><main>
    <div class="top"><span class="available">Open to opportunities</span><span>moosa.hashim</span></div>
    <div class="content"><div class="copy">
      <h1>${escape(profile.shortName)}</h1>
      <h2>Backend engineer.<br>Product perspective.</h2>
      <p class="role">${escape(profile.role)} · ${escape(profile.company)}<br>.NET · Kafka · Temporal · Azure</p>
    </div><img src="data:image/png;base64,${portrait.toString("base64")}" alt="${escape(profile.name)}"></div>
    <div class="stats">${impactStats.map(stat => `<div><div class="value">${escape(`${stat.prefix || ""}${stat.value}${stat.suffix || ""}`)}</div><div class="label">${escape(stat.label)}</div></div>`).join("")}</div>
  </main></body></html>`);
  await page.locator("img").evaluate(img => img.decode());
  await page.screenshot({ path: fileURLToPath(new URL("../public/og.png", import.meta.url)) });
  const buffer = await readFile(new URL("../public/og.png", import.meta.url));
  console.log(`Generated 1200x630 social preview (${buffer.length} bytes).`);
} finally {
  await browser.close();
}
