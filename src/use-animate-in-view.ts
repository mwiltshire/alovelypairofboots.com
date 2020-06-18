import { useEffect } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

export const useAnimateInView = (
  animationTrigger: () => void,
  options?: IntersectionOptions
) => {
  const [ref, inView] = useInView(options);

  useEffect(() => {
    if (inView) {
      animationTrigger();
    }
  }, [animationTrigger, inView]);

  return [ref];
};
