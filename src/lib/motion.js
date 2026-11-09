// One motion vocabulary for the whole site. CSS mirrors these as --ease-out-expo / --ease-in-out-quart.
export const EASE_OUT = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

export const DURATION = {
  fast: 0.45,
  base: 0.9,
  slow: 1.4,
};

export const STAGGER = 0.08;

export const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' };

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE_OUT } },
};

export const sequence = (stagger = STAGGER, delay = 0) => ({
  hidden: {},
  shown: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
