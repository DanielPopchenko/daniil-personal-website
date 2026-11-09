import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
});

export default function LocalTime({ className = '' }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let interval = 0;
    // Align ticks to the minute boundary so the clock never lags the real one.
    const timeout = window.setTimeout(
      () => {
        setNow(new Date());
        interval = window.setInterval(() => setNow(new Date()), 60_000);
      },
      60_000 - (Date.now() % 60_000)
    );
    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <time className={className} dateTime={now.toISOString()}>
      {formatter.format(now)}
    </time>
  );
}
