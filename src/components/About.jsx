import Reveal from './Reveal';
import Section from './Section';

const notes = [
  {
    label: 'How I work',
    body: 'I like owning the process. Iterating through the process, agreeing what to build, designing, implementing, wiring up the API, writing the tests, shipping it, then checking it behaves in production. Right now I am a Lead Frontend Engineer at a New York startup, so ownership is something I live with every day. And I enjoy it!',
  },
  {
    label: 'AI tooling',
    body: 'Claude Code, CLI, every day and on purpose. Good context in, a few rounds of prompting, then the same review and testing bar as code I typed myself. It makes me faster, but it does not get to skip review.',
  },
  {
    label: 'Off the clock',
    body: 'Football (aka soccer) has been part of my life for years, I played in professional leagues in Ukraine and Latvia. These days it is mostly cooking, reading, gym, finding somewhere new to eat and have a decent cup of coffee.',
  },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted">
        <Reveal as="p" delay={80}>
          I don’t limit myself to the boundaries of an engineering title. I move across engineering,
          product, design, and QA, taking ownership wherever the product needs it and turning
          problems into shipped solutions.
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-3">
        {notes.map(({ label, body }, index) => (
          <Reveal key={label} delay={index * 90} className=" pt-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{label}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-sm">{body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
