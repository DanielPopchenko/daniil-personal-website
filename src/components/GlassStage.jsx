import { lazy, Suspense, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const FluidGlass = lazy(() => import('@/components/FluidGlass'));

const supportsWebGL2 = () => {
  try {
    return Boolean(document.createElement('canvas').getContext('webgl2'));
  } catch {
    return false;
  }
};

function Fallback({ text }) {
  return (
    <span className="absolute inset-0 flex items-center justify-center font-display text-[clamp(4.5rem,17vw,12rem)] leading-none tracking-[-0.03em] text-ink">
      {text}
    </span>
  );
}

// The glass scene only boots once the visitor is close, so it never competes with the hero.
export default function GlassStage({ text }) {
  const ref = useRef(null);
  const near = useInView(ref, { once: true, margin: '600px 0px' });
  const [webgl] = useState(supportsWebGL2);
  const [compact] = useState(() => window.matchMedia('(max-width: 640px)').matches);

  return (
    <div ref={ref} className="absolute inset-0">
      {near && webgl ? (
        <Suspense fallback={<Fallback text={text} />}>
          <FluidGlass
            text={text}
            fontFamily="'Instrument Serif', Georgia, serif"
            fontWeight={400}
            textColor="#f4f4f6"
            background="transparent"
            color="#fed7aa"
            tint={0.12}
            shape="lens"
            size={compact ? 130 : 210}
            refraction={1.1}
            dispersion={0.28}
            reflection={0.7}
            shadow={0.35}
            elevation={0.5}
            smoothness={0.55}
            wobble={0.45}
            morphOnClick={false}
          />
        </Suspense>
      ) : (
        <Fallback text={text} />
      )}
    </div>
  );
}
