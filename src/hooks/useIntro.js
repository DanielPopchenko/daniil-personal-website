import { useEffect, useState } from 'react';

const FONT_TIMEOUT = 1500;

// Releases the page intro once fonts are ready (or after a timeout on slow networks).
export default function useIntro() {
  const [ready, setReady] = useState(
    () => document.documentElement.getAttribute('data-intro') !== 'pending'
  );

  useEffect(() => {
    if (ready) return undefined;
    let done = false;
    const release = () => {
      if (done) return;
      done = true;
      document.documentElement.removeAttribute('data-intro');
      setReady(true);
    };
    const timeout = window.setTimeout(release, FONT_TIMEOUT);
    (document.fonts?.ready ?? Promise.resolve()).then(release);
    return () => window.clearTimeout(timeout);
  }, [ready]);

  return ready;
}
