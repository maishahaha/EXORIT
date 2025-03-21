import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollAnimationConfig {
  offset?: [number, number];
  inputRange?: [number, number];
  outputRange?: [number, number];
  direction?: 'vertical' | 'horizontal';
}

export const useScrollAnimation = ({
  offset = [0, 1],
  inputRange = [0, 1],
  outputRange = [0, 1],
  direction = 'vertical'
}: ScrollAnimationConfig = {}) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Store the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [element]);

  useEffect(() => {
    if (!element) return;
    setClientHeight(window.innerHeight);
  }, [element]);

  const transformInitialValue = useTransform(
    scrollY,
    [elementTop - clientHeight * offset[0], elementTop + clientHeight * offset[1]],
    inputRange
  );

  const transformValue = useTransform(
    transformInitialValue,
    inputRange,
    outputRange
  );

  return [setElement, transformValue] as const;
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [0, distance]);
};