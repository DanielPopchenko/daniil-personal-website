import { EMAIL, openEmail, socials } from '../data/profile';
import Reveal from './Reveal';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal className="max-w-2xl">
        <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          Looking for someone to own your frontend end to end?
        </p>
        <p className="mt-5 text-base leading-relaxed text-muted">
          I am in Brooklyn and open to relocation. Email is the fastest way to reach me, and I do
          reply.
        </p>

        <button
          type="button"
          onClick={openEmail}
          className="link mt-8 inline-block cursor-pointer font-mono text-base text-ink sm:text-lg"
        >
          {EMAIL}
        </button>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
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
        </div>
      </Reveal>
    </Section>
  );
}
