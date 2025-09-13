import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxBackground({ children, speed = 0.5, className = "" }: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  
  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}