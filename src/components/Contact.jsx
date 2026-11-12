import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplitText from '@/components/SplitText';
import { EMAIL, openEmail, socials } from '../data/profile';
import { DURATION, EASE_IN_OUT } from '../lib/motion';
import Backdrop from './Backdrop';
import GlassStage from './GlassStage';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import Section from './Section';

function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      openEmail();
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="relative inline-flex h-7 min-w-[4.75rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-line px-3 font-mono text-[0.6875rem] text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
      aria-label={copied ? 'Email copied' : 'Copy email address'}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? 'copied' : 'copy'}
          initial={{ y: '120%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-120%' }}
          transition={{ duration: DURATION.fast, ease: EASE_IN_OUT }}
          className={copied ? 'text-accent' : undefined}
        >
          {copied ? 'Copied' : 'Copy'}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <Backdrop
        scene="waves"
        mask="linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)"
        className="opacity-45"
      />

      <div className="max-w-2xl">
        <SplitText
          text="Looking for my next team."
          tag="p"
          splitType="words"
          mask
          textAlign="left"
          delay={45}
          duration={1.1}
          ease="expo.out"
          from={{ yPercent: 110 }}
          to={{ yPercent: 0 }}
          className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
        />
        <Reveal as="p" delay={200} className="mt-5 text-base leading-relaxed text-muted">
          Full-time, in New York or wherever the team plays. Email or LinkedIn is the quickest way
          to reach me, looking forward to connecting!
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14">
        <button
          type="button"
          onClick={openEmail}
          aria-label={`Let’s talk. Email ${EMAIL}`}
          className="group relative block h-[clamp(13rem,34vw,24rem)] w-full overflow-hidden border-y border-line [@media(pointer:fine)]:cursor-none"
        >
          <GlassStage text="Let’s talk." />
          <span className="pointer-events-none absolute right-0 bottom-3 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-faint transition-colors duration-500 group-hover:text-accent group-focus-visible:text-accent">
            Write to me
            <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </Reveal>

      <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openEmail}
            className="link cursor-pointer font-mono text-base text-ink sm:text-lg"
          >
            {EMAIL}
          </button>
          <CopyButton />
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {socials.map(({ label, href }) => (
            <Magnetic key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="link text-muted hover:text-ink"
              >
                {label} ↗
              </a>
            </Magnetic>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
