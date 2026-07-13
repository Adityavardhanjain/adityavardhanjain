'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bootSequence } from '@/lib/data';

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  
  const handleComplete = useCallback(() => {
    if (!isSkipped) {
      onComplete();
    }
  }, [onComplete, isSkipped]);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      handleComplete();
      return;
    }
    
    // Check if boot sequence was already shown
    const hasSeenBoot = sessionStorage.getItem('boot-sequence-shown');
    if (hasSeenBoot) {
      onComplete();
      return;
    }
  }, [onComplete]);
  
  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem('boot-sequence-shown', 'true');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);
  
  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        setIsSkipped(true);
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showContent, onComplete]);
  
  const handleSkip = () => {
    sessionStorage.setItem('boot-sequence-shown', 'true');
    onComplete();
  };
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030810]"
      >
        {/* Scan lines effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />
        </div>
        
        {/* Boot text */}
        <div className="relative z-10 font-mono text-sm md:text-base">
          {bootSequence.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: index <= currentLine ? 1 : 0,
                x: index <= currentLine ? 0 : -20 
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex items-center gap-3 text-cyan-400/80 mb-2"
            >
              <span className="text-cyan-500/50">{'>'}</span>
              <span className={index === bootSequence.length - 1 ? 'text-cyan-300 font-semibold' : ''}>
                {line}
              </span>
              {index === currentLine && index < bootSequence.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-cyan-400"
                />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-4 py-2 text-xs text-cyan-500/50 border border-cyan-500/20 rounded hover:border-cyan-500/40 hover:text-cyan-400/70 transition-colors font-mono"
        >
          SKIP [SPACE]
        </motion.button>
        
        {/* Main content reveal */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#030810]"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-slate-100 tracking-wider"
              >
                ADITYAVARDHAN JAIN
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4 text-cyan-400/80 font-mono text-sm md:text-base"
              >
                Data Analyst · AI/ML Engineer · Research Enthusiast
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
