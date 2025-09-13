import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform-gpu z-50 shadow-lg"
      style={{ scaleX, transformOrigin: "0%" }}
    >
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm"
        style={{ scaleX }}
      />
    </motion.div>
  );
}