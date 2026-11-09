import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

// Words ink in one by one as the paragraph travels up the viewport.
export default function ScrollWords({ text, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.88', 'end 0.5'] });
  const words = text.split(' ');

  if (reduced) return <p className={className}>{text}</p>;

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        return (
          <span key={`${word}-${index}`}>
            <Word progress={scrollYProgress} range={[start, start + 1 / words.length]}>
              {word}
            </Word>
            {index < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
