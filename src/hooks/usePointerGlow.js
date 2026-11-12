import { useRef } from 'react';

// Every item reads the same pointer, so the glow spills across neighbours like one light source.
export default function usePointerGlow(selector) {
  const ref = useRef(null);
  const frame = useRef(0);

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse' || frame.current) return;
    const { clientX, clientY } = event;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = 0;
      ref.current?.querySelectorAll(selector).forEach((node) => {
        const box = node.getBoundingClientRect();
        node.style.setProperty('--mx', `${clientX - box.left}px`);
        node.style.setProperty('--my', `${clientY - box.top}px`);
      });
    });
  };

  return [ref, onPointerMove];
}
