import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { categories, languages, practices, skills } from '../data/skills';
import { DURATION, EASE_OUT, VIEWPORT } from '../lib/motion';
import Section from './Section';

const tile = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  shown: (delay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT, delay },
  }),
  dimmed: {
    opacity: 0.14,
    y: 0,
    scale: 0.96,
    transition: { duration: DURATION.fast, ease: EASE_OUT },
  },
};

const chip = {
  shown: { opacity: 1, transition: { duration: DURATION.fast, ease: EASE_OUT } },
  dimmed: { opacity: 0.25, transition: { duration: DURATION.fast, ease: EASE_OUT } },
};

const matches = (active, category) => active === 'all' || active === category;

function Filters({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Highlight skills by category">
      {categories.map(({ id, label }) => {
        const selected = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={selected}
            className={`relative cursor-pointer rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors duration-300 sm:text-[0.6875rem] ${
              selected ? 'text-ink' : 'text-faint hover:text-ink'
            }`}
          >
            {selected && (
              <motion.span
                layoutId="skills-filter"
                className="absolute inset-0 rounded-full border border-accent/40 bg-gradient-to-r from-accent/15 to-accent-2/15"
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              />
            )}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

function SkillTile({ skill, delay, state, dimmed }) {
  return (
    <motion.li
      custom={delay}
      variants={tile}
      initial="hidden"
      animate={state}
      className={`skill-tile group relative ${dimmed ? 'pointer-events-none' : ''}`}
    >
      <div className="skill-face relative flex aspect-square flex-col items-center justify-center gap-2.5 rounded-xl border border-line bg-white/[0.015] transition-[transform,background-color] duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:bg-white/[0.035]">
        <img
          src={skill.icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width="32"
          height="32"
          className={`skill-icon relative z-[2] h-7 w-7 sm:h-8 sm:w-8 ${skill.invert ? 'is-inverted' : ''}`}
        />
        <span className="relative z-[2] px-1.5 text-center font-mono text-[0.625rem] leading-tight text-faint transition-colors duration-300 group-hover:text-ink sm:text-[0.6875rem]">
          {skill.name}
        </span>
      </div>
    </motion.li>
  );
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const [settled, setSettled] = useState(false);
  const gridRef = useRef(null);
  const frame = useRef(0);
  const inView = useInView(gridRef, VIEWPORT);

  // Only the first entrance cascades; later highlight changes respond immediately.
  useEffect(() => {
    if (!inView) return undefined;
    const id = window.setTimeout(() => setSettled(true), 1200);
    return () => window.clearTimeout(id);
  }, [inView]);

  const count =
    skills.filter((skill) => matches(active, skill.category)).length +
    practices.filter((item) => matches(active, item.category)).length;
  const total = skills.length + practices.length;

  // Every tile reads the same pointer, so the glow spills across neighbours like one light source.
  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse' || frame.current) return;
    const { clientX, clientY } = event;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = 0;
      gridRef.current?.querySelectorAll('.skill-tile').forEach((node) => {
        const box = node.getBoundingClientRect();
        node.style.setProperty('--mx', `${clientX - box.left}px`);
        node.style.setProperty('--my', `${clientY - box.top}px`);
      });
    });
  };

  return (
    <Section id="skills" index="03" title="Skills">
      <motion.div
        className="mb-8 flex flex-wrap items-center justify-between gap-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
      >
        <Filters active={active} onChange={setActive} />
        <p
          className="font-mono text-xs text-faint tabular-nums sm:text-[0.6875rem]"
          aria-live="polite"
        >
          <span className="text-ink">{String(count).padStart(2, '0')}</span> / {total}
          <span className="sr-only"> skills highlighted</span>
        </p>
      </motion.div>

      <ul
        ref={gridRef}
        onPointerMove={onPointerMove}
        className="skill-grid grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-7"
      >
        {skills.map((skill, index) => {
          const dimmed = !matches(active, skill.category);
          const state = !inView ? 'hidden' : dimmed ? 'dimmed' : 'shown';
          return (
            <SkillTile
              key={skill.name}
              skill={skill}
              delay={settled ? 0 : index * 0.025}
              state={state}
              dimmed={dimmed}
            />
          );
        })}
      </ul>

      <motion.div
        className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-[9.5rem_1fr] sm:gap-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
      >
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs">
          Also
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {practices.map((item) => (
            <motion.li
              key={item.name}
              variants={chip}
              initial={false}
              animate={matches(active, item.category) ? 'shown' : 'dimmed'}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted sm:text-[0.6875rem]"
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-10">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs">
          Languages
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-base text-muted sm:text-[0.9375rem]">
          {languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </p>
      </div>
    </Section>
  );
}
