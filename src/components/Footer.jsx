import { scrollToTarget } from '../lib/scroll';
import { EMAIL, openEmail, socials } from '../data/profile';
import LocalTime from './LocalTime';
import Magnetic from './Magnetic';
import SocialIcon from './SocialIcon';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 font-mono text-[0.8125rem] text-faint sm:text-xs">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p>
            Brooklyn, New York · <LocalTime className="text-muted" />
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map(({ label, icon, href }) => (
              <a
                key={label}
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
            ))}
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
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <Magnetic strength={0.4}>
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                scrollToTarget('top');
              }}
              className="group inline-flex items-center gap-2 text-muted transition-colors duration-300 hover:text-ink"
            >
              Back to top
              <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </Magnetic>
          <p>&copy; {new Date().getFullYear()} Daniil Popchenko</p>
        </div>
      </div>
    </footer>
  );
}
