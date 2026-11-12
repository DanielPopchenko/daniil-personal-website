import { lazy, Suspense, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { DURATION, EASE_OUT } from '../lib/motion';

const scenes = {
  waves: lazy(() => import('@/components/PatternWaves')),
};

// One look per scene, so every section that uses it reads as the same surface.
const looks = {
  waves: {
    preset: 'silk',
    color: '#ea580c',
    backgroundColor: '#0c0907',
    fade: 'none',
    cursorSize: 70,
  },
};

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
};

// Full-bleed decorative WebGL layer that only boots when its section is close to the viewport.
export default function Backdrop({ scene, mask, className = '', ...props }) {
  const ref = useRef(null);
  const near = useInView(ref, { once: true, margin: '400px 0px' });
  const [webgl] = useState(supportsWebGL);
  const Scene = scenes[scene];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {near && webgl && (
        <Suspense fallback={null}>
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.slow, ease: EASE_OUT }}
          >
            <Scene {...looks[scene]} {...props} />
          </motion.div>
        </Suspense>
      )}
    </div>
  );
}
