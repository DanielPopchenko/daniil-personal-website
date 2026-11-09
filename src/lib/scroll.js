let lenis = null;
let programmatic = false;
let release = 0;

const DURATION = 1.4;

export function setLenis(instance) {
  lenis = instance;
}

export function lockScroll(locked) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}

// True while a nav-initiated scroll is in flight, so chrome can ignore it.
export function isProgrammaticScroll() {
  return programmatic;
}

const settle = () => {
  window.clearTimeout(release);
  release = window.setTimeout(() => {
    programmatic = false;
  }, 120);
};

// Section offsets come from each target's scroll-margin-top, so this matches native anchors.
export function scrollToTarget(target) {
  const node = target === 'top' ? null : document.getElementById(target);
  if (target !== 'top' && !node) return;

  programmatic = true;
  window.clearTimeout(release);

  if (lenis) {
    lenis.scrollTo(node ?? 0, { force: true, duration: DURATION, onComplete: settle });
    return;
  }

  if (node) node.scrollIntoView({ behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
  release = window.setTimeout(() => {
    programmatic = false;
  }, DURATION * 1000);
}
