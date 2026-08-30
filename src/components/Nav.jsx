import { useEffect, useState } from 'react';
import { EMAIL, openEmail, socials } from '../data/profile';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  // { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((node) => node !== null);

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((entry) => entry.isIntersecting);
        if (inView.length > 0) setActive(inView[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Keep the page from scrolling behind the open menu, and let Escape close it.
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="h-px origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 bg-paper transition-[opacity,visibility] duration-500 ease-out sm:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-6 pb-16">
          {links.map(({ id, label }, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-line py-5 transition-all duration-500 ease-out ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: `${open ? 140 + index * 70 : 0}ms` }}
            >
              <span className="font-mono text-xs text-accent">{`0${index + 1}`}</span>
              <span className="font-display text-4xl leading-none">{label}</span>
            </a>
          ))}

          <div
            className={`mt-10 flex flex-col gap-3 font-mono text-[13px] transition-all duration-500 ease-out ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: `${open ? 140 + links.length * 70 : 0}ms` }}
          >
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openEmail();
              }}
              className="link cursor-pointer text-left text-muted"
            >
              {EMAIL}
            </button>
            <div className="flex gap-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="link text-muted"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative transition-colors duration-500 ${
          scrolled || open
            ? 'border-b border-line bg-paper/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="link font-mono text-sm font-medium text-ink"
            aria-label="Back to top"
          >
            daniil.popchenko
          </a>

          <ul className="hidden items-center gap-7 sm:flex">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`link font-mono text-xs transition-colors duration-300 ${
                    active === id ? 'text-ink' : 'text-faint hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative -mr-1 h-6 w-6 cursor-pointer sm:hidden"
          >
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-500 ease-out ${
                open ? 'top-1/2 rotate-45' : 'top-[0.5rem]'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-500 ease-out ${
                open ? 'top-1/2 -rotate-45' : 'top-[0.9rem]'
              }`}
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
