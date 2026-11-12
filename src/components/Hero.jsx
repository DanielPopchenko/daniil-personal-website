import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import DecryptedText from '@/components/DecryptedText';
import SplitText from '@/components/SplitText';
import ShinyText from '@/components/ShinyText';
import { EMAIL, openEmail, socials } from '../data/profile';
import useIntro from '../hooks/useIntro';
import { INTRO } from '../lib/motion';
import Backdrop from './Backdrop';
import LocalTime from './LocalTime';
import Magnetic from './Magnetic';
import SocialIcon from './SocialIcon';

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

const at = (ms) => ({ animationDelay: `${ms}ms` });

// Flips to true once the intro clock passes `ms`, for pieces that animate on mount.
function useBeat(ready, ms) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (!ready) return undefined;
    const id = window.setTimeout(() => setPassed(true), ms);
    return () => window.clearTimeout(id);
  }, [ready, ms]);

  return passed;
}

// "Hi, I'm", "Daniil" and "Popchenko" rise as one wave: each line starts as the previous
// one's last letter starts, so the stagger never restarts.
const lineStart = (line) => {
  const lines = [GREETING, 'Daniil'];
  const before = lines.slice(0, line).join('').replace(/\s/g, '').length;
  return INTRO.greeting / 1000 + (before * nameReveal.delay) / 1000;
};

const GREETING = 'Hi, I’m';

function Greeting({ ready }) {
  return (
    <p className="greeting font-display text-[clamp(1.75rem,5.5vw,3rem)] leading-none tracking-[-0.01em] text-muted italic">
      {ready ? (
        <SplitText
          text={GREETING}
          {...nameReveal}
          hoverEffect="none"
          to={{ yPercent: 0, delay: lineStart(0) }}
        />
      ) : (
        <span className="invisible">{GREETING}</span>
      )}
    </p>
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
      <SplitText text="Daniil" {...nameReveal} to={{ yPercent: 0, delay: lineStart(1) }} />
      <br />
      <SplitText text="Popchenko" {...nameReveal} to={{ yPercent: 0, delay: lineStart(2) }} />
    </>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const ready = useIntro();
  const decrypt = useBeat(ready, INTRO.eyebrow);
  const reduced = useReducedMotion();
  // Lenis already smooths the scroll position, so these map it directly with no extra spring.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const roleY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -36]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.2]);

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Backdrop
        scene="waves"
        mask="radial-gradient(85% 75% at 78% 28%, #000 10%, rgba(0,0,0,0.35) 50%, transparent 82%)"
        className="opacity-60"
      />

      <div
        className="rise flex items-baseline justify-between gap-6 font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs sm:tracking-[0.22em]"
        style={at(INTRO.eyebrow)}
      >
        {decrypt ? (
          <DecryptedText
            text="Brooklyn, NY. Willing to relocate for the right opportunity."
            animateOn="view"
            sequential
            speed={40}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            encryptedClassName="text-line"
          />
        ) : (
          <span className="invisible">
            Brooklyn, NY. Willing to relocate for the right opportunity.
          </span>
        )}
        <span className="hidden normal-case tracking-normal sm:inline">
          Local time <LocalTime className="text-muted" />
        </span>
      </div>

      <motion.div className="mt-8" style={{ y: nameY, opacity: fade }}>
        <Greeting ready={ready} />
        <h1
          className="mt-3 font-display text-[clamp(3.5rem,13vw,9rem)] sm:mt-4 leading-[0.9] tracking-[-0.02em]"
          aria-label="Daniil Popchenko"
        >
          <Name ready={ready} />
        </h1>
      </motion.div>

      <motion.div style={{ y: roleY }}>
        <p
          className="rise mt-5 font-display text-[clamp(1.75rem,5.5vw,3rem)] leading-none tracking-[-0.01em] italic"
          style={at(INTRO.role)}
        >
          <span className="text-gradient block w-fit pr-[0.08em] pb-[0.12em]">
            Full-Stack Engineer
          </span>
        </p>
      </motion.div>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.8125rem] sm:text-xs"
        style={at(INTRO.links)}
      >
        {socials.map(({ label, icon, href }) => (
          <Magnetic key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-muted transition-colors duration-300 hover:text-ink"
            >
              <SocialIcon name={icon} />
              <span className="link group-hover:[background-size:100%_1px] group-focus-visible:[background-size:100%_1px]">
                {label}
              </span>
            </a>
          </Magnetic>
        ))}
        <Magnetic>
          <button
            type="button"
            onClick={openEmail}
            className="group inline-flex cursor-pointer items-center gap-2 text-muted transition-colors duration-300 hover:text-ink"
          >
            <SocialIcon name="gmail" />
            <span className="link group-hover:[background-size:100%_1px] group-focus-visible:[background-size:100%_1px]">
              {EMAIL}
            </span>
          </button>
        </Magnetic>
      </div>

      <div
        className="rule-in mt-12 h-px w-full bg-line"
        style={at(INTRO.rule)}
        aria-hidden="true"
      />

      <div className="flex items-end justify-between gap-10">
        <div className="max-w-xl">
          <p className="rise mt-10 text-base leading-relaxed text-muted" style={at(INTRO.body)}>
            I&rsquo;ve spent the last three years building web and mobile apps end to end: the
            screens, the API endpoints behind them, the tests, and the numbers after launch. I test
            my own work before anyone else has to.
          </p>

          <p
            className="rise mt-6 flex items-center gap-3 text-[0.9375rem] text-ink sm:text-sm"
            style={at(INTRO.status)}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              style={{ animation: 'breathe 2.8s ease-in-out infinite' }}
              aria-hidden="true"
            />
            <span>
              <ShinyText text="Open to full-time roles" speed={6} />
              <span className="text-muted"> · previously at Superconnector</span>
            </span>
          </p>
        </div>

        <div
          className="rise hidden flex-col items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-faint sm:flex"
          style={at(INTRO.cue)}
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
