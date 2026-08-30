import { EMAIL, openEmail, socials } from '../data/profile';

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <p
        className="rise font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-faint sm:text-xs sm:tracking-[0.22em]"
        style={{ animationDelay: '80ms' }}
      >
        New York City.
      </p>

      <h1
        className="rise mt-8 font-display text-[clamp(3.5rem,13vw,9rem)] leading-[0.85] tracking-[-0.02em]"
        style={{ animationDelay: '160ms' }}
      >
        Daniil
        <br />
        Popchenko
      </h1>

      <p
        className="rise mt-6 font-display text-[clamp(1.75rem,5.5vw,3rem)] leading-none tracking-[-0.01em] text-accent italic"
        style={{ animationDelay: '260ms' }}
      >
        Fullstack Engineer
      </p>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.8125rem] sm:text-xs"
        style={{ animationDelay: '360ms' }}
      >
        {socials.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="link text-muted hover:text-ink"
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={openEmail}
          className="link cursor-pointer text-muted hover:text-ink"
        >
          {EMAIL}
        </button>
      </div>

      <div
        className="rule-in mt-12 h-px w-full bg-line"
        style={{ animationDelay: '460ms' }}
        aria-hidden="true"
      />

      <div className="max-w-xl">
        <p
          className="rise mt-10 text-base leading-relaxed text-muted"
          style={{ animationDelay: '560ms' }}
        >
          I build and ship production web applications, three years of it so far. Mostly frontend,
          with enough backend, mobile and QA to be useful when something breaks. I like taking a
          feature from the first conversation about it all the way to production, and I test my own
          work before anyone else has to.
        </p>

        <p
          className="rise mt-6 flex items-center gap-3 text-[0.9375rem] text-ink sm:text-sm"
          style={{ animationDelay: '640ms' }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            style={{ animation: 'breathe 2.8s ease-in-out infinite' }}
            aria-hidden="true"
          />
          Founding Frontend Engineer at Superconnector
        </p>
      </div>
    </section>
  );
}
