import Reveal from './Reveal';

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <Reveal className="mb-12 flex items-baseline gap-5">
        <span className="font-mono text-[0.8125rem] text-accent sm:text-xs">{index}</span>
        <h2 className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
          {title}
        </h2>
        <span className="h-px flex-1 bg-line" />
      </Reveal>
      {children}
    </section>
  );
}
