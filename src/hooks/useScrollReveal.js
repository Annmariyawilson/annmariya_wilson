import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-visible');
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          element.classList.remove('reveal-visible');
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return ref;
}

export function useScrollRevealAll(selector = '.reveal-on-scroll', options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.once === false) {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || '0px 0px -30px 0px',
        ...options
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);
}
