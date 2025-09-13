import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({ text, speed = 100, delay = 0, className = "", onComplete }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete?.();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      >
        |
      </motion.span>
    </span>
  );
}

interface MultiTypingAnimationProps {
  phrases: string[];
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

export function MultiTypingAnimation({ phrases, speed = 100, pauseDuration = 2000, className = "" }: MultiTypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        // Pause at the end of the phrase
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        // Add character
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, speed, pauseDuration]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      >
        |
      </motion.span>
    </span>
  );
}