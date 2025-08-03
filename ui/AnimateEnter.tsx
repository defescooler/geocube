'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function AnimateEnter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.main
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
        exit={{ opacity: 0, y: 20 }}
        initial={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </m.main>
    </LazyMotion>
  );
}
