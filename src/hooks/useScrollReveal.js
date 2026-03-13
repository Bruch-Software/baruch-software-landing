import { useEffect, useRef } from 'react';

const defaultOptions = {
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1,
};

/**
 * Hook performance-first: un solo IntersectionObserver por elemento.
 * Añade la clase `section-visible` cuando el elemento entra en viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { rootMargin, threshold } = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return ref;
}

