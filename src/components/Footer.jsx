import { EMAIL, openEmail, socials } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 font-mono text-[0.8125rem] text-faint sm:text-xs">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="uppercase tracking-[0.16em]">Get in touch</p>
          <button
            type="button"
            onClick={openEmail}
            className="link mt-3 block cursor-pointer text-left text-muted hover:text-ink"
          >
            {EMAIL}
          </button>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
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
        </div>

        <div className="sm:text-right">
          <p>Brooklyn, New York</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Daniil Popchenko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
