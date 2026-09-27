import Lenis from "lenis";

const NAV_OFFSET = -64;
let lenis = null;

export function initSmoothScroll() {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  lenis = new Lenis({
    autoRaf: true,
    duration: 1.1,
    anchors: { offset: NAV_OFFSET },
  });

  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id, { immediate = false } = {}) {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (target === null) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: id === "top" ? 0 : NAV_OFFSET, immediate });
  } else if (target === 0) {
    window.scrollTo({ top: 0 });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    window.scrollTo({ top });
  }
  const { pathname, search } = window.location;
  history.replaceState(null, "", id === "top" ? pathname + search : `#${id}`);
}

// Freeze page scrolling while overlays (menu, command palette) are open.
export function lockScroll(locked) {
  if (lenis) {
    locked ? lenis.stop() : lenis.start();
  } else {
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }
}
