import { useState, useEffect } from 'react';

const useOnScreen = (ref: any, rootMargin = '0px', threshold = 1.0) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isIntersecting;
};

export default useOnScreen;
