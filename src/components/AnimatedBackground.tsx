import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Glow Blob 1: Top Left / Right Loop (Blue) */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/10 dark:from-blue-600/15 dark:to-cyan-600/5 blur-[80px] md:blur-[130px]"
      />

      {/* Glow Blob 2: Bottom Right / Left Loop (Purple) */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-500/10 dark:from-purple-600/15 dark:to-pink-600/5 blur-[80px] md:blur-[140px]"
      />

      {/* Glow Blob 3: Center Floating Loop (Indigo/Rose) */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 80, -80, 0],
          scale: [0.9, 1.1, 0.8, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-indigo-400/15 to-rose-400/10 dark:from-indigo-600/10 dark:to-rose-600/5 blur-[90px] md:blur-[120px]"
      />

      {/* Glow Blob 4: Bottom Left Floating Loop (Emerald) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] -left-[10%] w-[38vw] h-[38vw] rounded-full bg-gradient-to-tr from-emerald-400/10 to-teal-500/5 dark:from-emerald-600/8 dark:to-teal-600/3 blur-[80px] md:blur-[110px]"
      />
    </div>
  );
};
