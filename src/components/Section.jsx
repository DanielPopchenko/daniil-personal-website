import { motion } from 'motion/react';
import DecryptedText from '@/components/DecryptedText';
import { DURATION, EASE_OUT, VIEWPORT } from '../lib/motion';

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="mb-12 flex items-baseline gap-5">
        <motion.span
          className="font-mono text-[0.8125rem] text-accent sm:text-xs"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
        >
          {index}
        </motion.span>
        <h2 className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
          <DecryptedText
            text={title}
            animateOn="view"
            sequential
            speed={40}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            encryptedClassName="text-faint"
          />
        </h2>
        <motion.span
          className="h-px flex-1 origin-left bg-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.1 }}
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}
