import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import DecryptedText from '@/components/DecryptedText';
import SplitText from '@/components/SplitText';
import { EMAIL, openEmail, socials } from '../data/profile';
import useIntro from '../hooks/useIntro';
import Backdrop from './Backdrop';
import { DURATION, EASE_IN_OUT } from '../lib/motion';
import LocalTime from './LocalTime';
import Magnetic from './Magnetic';

const roles = ['Full-Stack Engineer', 'Frontend Engineer'];

const nameReveal = {
  splitType: 'chars',
  mask: true,
  trigger: 'load',
  textAlign: 'left',
  tag: 'span',
  delay: 34,
  duration: 1.2,
  ease: 'expo.out',
  hoverEffect: 'lift',
  from: { yPercent: 115 },
  to: { yPercent: 0 },
};

// Delays (ms) measured from the moment the name starts rising.
const beat = {
  eyebrow: 0,
  role: 420,
  links: 620,
  rule: 680,
  body: 780,
  status: 860,
  cue: 1100,
};

const at = (ms) => ({ animationDelay: `${ms}ms` });

function RoleRotator() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || !inView) return undefined;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 4200);
    return () => window.clearInterval(id);
  }, [reduced, inView]);

  return (
    <span ref={ref} className="relative block overflow-hidden pb-[0.12em]">
      <span className="sr-only">{roles.join(' and ')}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[index]}
          className="text-gradient block w-fit pr-[0.08em]"
          aria-hidden="true"
          initial={{ y: '105%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-105%' }}
          transition={{ duration: DURATION.base, ease: EASE_IN_OUT }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Name({ ready }) {
  if (!ready) {
    return (
      <span className="invisible">
        Daniil
        <br />
        Popchenko
      </span>
    );
  }
  return (
    <>
      <SplitText text="Daniil" {...nameReveal} />
      <br />
      <SplitText text="Popchenko" {...nameReveal} to={{ yPercent: 0, delay: 0.14 }} />
    </>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const ready = useIntro();
  const reduced = useReducedMotion();
  // Lenis already smooths the scroll position, so these map it directly with no extra spring.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const roleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -36]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.2]);

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Backdrop
        scene="slats"
        mask="radial-gradient(85% 75% at 78% 28%, #000 10%, rgba(0,0,0,0.35) 50%, transparent 82%)"
        className="opacity-80"
        preset="tide"
        color="#c2410c"
        glintColor="#fdba74"
        backgroundColor="#0c0907"
        cursorSize={60}
      />

      <div
        className="rise flex items-baseline justify-between gap-6 font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs sm:tracking-[0.22em]"
        style={at(beat.eyebrow)}
      >
        {ready ? (
          <DecryptedText
            text="New York City. Open to relocating."
            animateOn="view"
            sequential
            speed={40}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            encryptedClassName="text-line"
          />
        ) : (
          <span className="invisible">New York City.</span>
        )}
        <span className="hidden normal-case tracking-normal sm:inline">
          Local time <LocalTime className="text-muted" />
        </span>
      </div>

      <motion.div style={{ y: nameY, opacity: fade }}>
        <h1
          className="mt-8 font-display text-[clamp(3.5rem,13vw,9rem)] leading-[0.9] tracking-[-0.02em]"
          aria-label="Daniil Popchenko"
        >
          <Name ready={ready} />
        </h1>
      </motion.div>

      <motion.div style={{ y: roleY }}>
        <p
          className="rise mt-5 font-display text-[clamp(1.75rem,5.5vw,3rem)] leading-none tracking-[-0.01em] italic"
          style={at(beat.role)}
        >
          <RoleRotator />
        </p>
      </motion.div>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.8125rem] sm:text-xs"
        style={at(beat.links)}
      >
        {socials.map(({ label, href }) => (
          <Magnetic key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="link text-muted hover:text-ink"
            >
              {label}
            </a>
          </Magnetic>
        ))}
        <Magnetic>
          <button
            type="button"
            onClick={openEmail}
            className="link cursor-pointer text-muted hover:text-ink"
          >
            {EMAIL}
          </button>
        </Magnetic>
      </div>

      <div className="rule-in mt-12 h-px w-full bg-line" style={at(beat.rule)} aria-hidden="true" />

      <div className="flex items-end justify-between gap-10">
        <div className="max-w-xl">
          <p className="rise mt-10 text-base leading-relaxed text-muted" style={at(beat.body)}>
            I build and ship production web applications, three years of it so far. Mostly frontend,
            with enough backend, mobile and QA to be useful when something breaks. I like taking a
            feature from the first conversation about it all the way to production, and I test my
            own work before anyone else has to.
          </p>

          <p
            className="rise mt-6 flex items-center gap-3 text-[0.9375rem] text-ink sm:text-sm"
            style={at(beat.status)}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              style={{ animation: 'breathe 2.8s ease-in-out infinite' }}
              aria-hidden="true"
            />
            Full-Stack Engineer · Superconnector, 2025–2026
          </p>
        </div>

        <div
          className="rise hidden flex-col items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-faint sm:flex"
          style={at(beat.cue)}
          aria-hidden="true"
        >
          <span className="[writing-mode:vertical-rl]">Scroll</span>
          <span className="relative h-14 w-px overflow-hidden bg-line">
            <span
              className="absolute inset-0 bg-ink"
              style={{ animation: 'scrollCue 2.4s var(--ease-in-out-quart) infinite' }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
