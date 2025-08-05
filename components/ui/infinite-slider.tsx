'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  speed?: number;
  speedOnHover?: number;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
  speed = 40,
  speedOnHover = 20,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let animationId: number;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    
    if (size > 0) {
      // Start animation immediately with logos visible
      const animate = () => {
        const currentValue = translation.get();
        const step = (currentSpeed / 100) * (reverse ? -1 : 1);
        
        translation.set(currentValue + step);
        
        // Infinite carousel effect - reset when logos move completely out of view
        if (reverse ? currentValue <= -contentSize : currentValue >= contentSize) {
          translation.set(reverse ? 0 : -contentSize);
        }
        
        animationId = requestAnimationFrame(animate);
      };
      
      // Start animation immediately
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [
    translation,
    currentSpeed,
    width,
    height,
    gap,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}