import usePointerGlow from '../hooks/usePointerGlow';
import Reveal from './Reveal';
import ScrollWords from './ScrollWords';
import Section from './Section';

const notes = [
  {
    label: 'Before the code',
    body: 'Football (soccer, for my American friends) was a big part of my life for years, and I played professionally in Ukraine and Latvia. Then I swapped the ball for a keyboard and learned by building things, breaking them, and building them better. The habits carried over: practise every day, watch the replay, fix what cost you the game.',
  },
  {
    label: 'How I work',
    body: 'Hand me a half-formed idea and you’ll get questions first, then something you can click. I like owning a feature the whole way: the UI, the endpoints and data behind it, the tests, and checking the numbers after launch.',
  },
  {
    label: 'AI tooling',
    body: 'Claude Code, Codex and Cursor are on my screen every day. They help me explore, plan, review and test changes, prototype, implement features and chase bugs faster. What they write gets the same tests and review as what I write. No free passes.',
  },
  {
    label: 'Off the clock',
    body: 'Gym, cooking, whatever book is on my nightstand, and a very long side quest to find the best coffee in Brooklyn. Still unfinished, so leads welcome )',
  },
];

export default function About() {
  const [gridRef, onPointerMove] = usePointerGlow('.glow-card');

  return (
    <Section id="about" index="01" title="About">
      <ScrollWords
        className="max-w-3xl text-[clamp(1.5rem,3.4vw,2.25rem)] font-medium leading-[1.25] tracking-tight text-ink"
        text="I taught myself to code and never really stopped. Now I work across the whole stack, pick up whatever the job needs fast, and lose sleep over a button that’s two pixels off."
      />

      <div
        ref={gridRef}
        onPointerMove={onPointerMove}
        className="glow-grid mt-20 grid gap-3 sm:grid-cols-2"
      >
        {notes.map(({ label, body }, index) => (
          <Reveal
            key={label}
            delay={index * 110}
            className="glow-card relative rounded-xl border border-line bg-white/[0.015] p-6"
          >
            <h3 className="relative z-[2] font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {label}
            </h3>
            <p className="relative z-[2] mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-sm">
              {body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
