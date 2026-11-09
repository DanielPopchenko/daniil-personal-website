import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

const format = (value) => Math.round(value).toLocaleString('en-US');

export default function CountUp({ to, from = 0, prefix = '', suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return undefined;
    if (reduced) {
      node.textContent = format(to);
      return undefined;
    }
    const controls = animate(from, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (value) => {
        node.textContent = format(value);
      },
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span>
      <span className="sr-only">{`${prefix}${format(to)}${suffix}`}</span>
      <span aria-hidden="true">
        {prefix}
        <span ref={ref} className="tabular-nums">
          {format(from)}
        </span>
        {suffix}
      </span>
    </span>
  );
}
