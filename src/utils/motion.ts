import { Variants } from 'motion/react';

/* ─── Standard Viewport Settings ───────────────── */
export const viewportConfig = {
  once: true,
  amount: 0.15,
};

/* ─── Container Staggers ──────────────────────── */
export const staggerContainer = (
  staggerChildren: number = 0.08,
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/* ─── Directional Fade Variants ────────────────── */
export const fadeInUp = (
  duration: number = 0.6,
  delay: number = 0,
  distance: number = 24
): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
    },
  },
});

export const fadeInDown = (
  duration: number = 0.5,
  delay: number = 0,
  distance: number = 20
): Variants => ({
  hidden: { opacity: 0, y: -distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeInLeft = (
  duration: number = 0.6,
  delay: number = 0,
  distance: number = 28
): Variants => ({
  hidden: { opacity: 0, x: -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeInRight = (
  duration: number = 0.6,
  delay: number = 0,
  distance: number = 28
): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeInScale = (
  duration: number = 0.5,
  delay: number = 0,
  initialScale: number = 0.95
): Variants => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

/* ─── Card & Item Variants ─────────────────────── */
export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const itemScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ─── Quick Preset Object for Scroll Sections ──── */
export const scrollFadeUp = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportConfig,
  variants: fadeInUp(0.65, 0, 24),
};

export const scrollStagger = (staggerChildren = 0.08) => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportConfig,
  variants: staggerContainer(staggerChildren),
});

/* ─── Whole Section Scroll Entry Transition ─────── */
export const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const sectionScrollProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.08 },
  variants: sectionFadeUp,
};

