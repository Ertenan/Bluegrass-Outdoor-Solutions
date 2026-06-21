export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.55, ease: 'easeOut' }
};

export const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.2 },
  transition: { staggerChildren: 0.08 }
};
