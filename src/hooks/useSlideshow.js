import { useEffect, useState } from 'react';

export function useSlideshow(count, interval = 6000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (count < 2 || reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval, index]);

  return [index, setIndex];
}