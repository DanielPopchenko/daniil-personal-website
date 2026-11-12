import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { EMAIL, openEmail, socials } from '../data/profile';
import { DURATION, EASE_OUT, INTRO } from '../lib/motion';
import { isProgrammaticScroll, lockScroll, scrollToTarget } from '../lib/scroll';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  // Tuck the bar away while reading downwards, bring it back on any upward intent.
  // Scrolls the visitor triggered from the nav itself never hide it.
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(current > 24);
    if (isProgrammaticScroll()) {
      setHidden(false);
      return;
    }
    if (Math.abs(current - previous) < 4) return;
    setHidden(current > previous && current > 240);
  });

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
    lockScroll(true);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      lockScroll(false);
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

  const go = (target) => (event) => {
    event.preventDefault();
    setOpen(false);
    lockScroll(false);
    scrollToTarget(target);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
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
              onClick={go(id)}
              tabIndex={open ? undefined : -1}
              className={`flex items-baseline gap-4 border-b border-line py-5 transition-all duration-700 ease-out-expo ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${open ? 120 + index * 60 : 0}ms` }}
            >
              <span className="font-mono text-xs text-accent">{`0${index + 1}`}</span>
              <span className="font-display text-4xl leading-none">{label}</span>
            </a>
          ))}

          <div
            className={`mt-10 flex flex-col gap-3 font-mono text-[0.8125rem] transition-all duration-700 ease-out-expo ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: `${open ? 120 + links.length * 60 : 0}ms` }}
          >
            <button
              type="button"
              tabIndex={open ? undefined : -1}
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
                  tabIndex={open ? undefined : -1}
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

      <motion.div
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: DURATION.fast, ease: EASE_OUT }}
      >
        <motion.div
          className="h-px origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />

        <div
          className={`relative transition-colors duration-500 ${
            scrolled || open
              ? 'border-b border-line bg-paper/80 backdrop-blur-md'
              : 'border-b border-transparent'
          }`}
        >
          <nav
            className="drop mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8"
            style={{ animationDelay: `${INTRO.nav}ms` }}
          >
            {/* <a
              href="#top"
              onClick={go('top')}
              className="group flex items-center gap-2.5 font-mono text-sm font-medium text-ink"
              aria-label="Back to top"
            >
              <img
                src="/dp-logo.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 rounded-md transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-105"
              />
              <span className="link">daniil.popchenko</span>
            </a> */}

            <ul className="hidden items-center gap-7 sm:flex">
              {links.map(({ id, label }) => (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    onClick={go(id)}
                    aria-current={active === id ? 'true' : undefined}
                    className={`link font-mono text-xs transition-colors duration-300 ${
                      active === id ? 'text-ink' : 'text-faint hover:text-ink'
                    }`}
                  >
                    {label}
                  </a>
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                    />
                  )}
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
      </motion.div>
    </header>
  );
}
