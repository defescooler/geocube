'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { componentStyles } from './tokens';

/**
 * Button component with consistent styling
 */
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  children,
  onClick,
}: ButtonProps) {
  const styles = cn(
    componentStyles.buttons[variant].base,
    componentStyles.buttons[variant].sizes[size],
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={styles} target={target}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

/**
 * Section container with consistent spacing and width
 */
type SectionProps = {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
};

export function Section({
  className,
  children,
  as = 'section',
  id,
}: SectionProps) {
  const Component = as;
  
  return (
    <Component 
      id={id}
      className={cn(componentStyles.containers.section, className)}
    >
      <div className={componentStyles.containers.page}>
        {children}
      </div>
    </Component>
  );
}

/**
 * Heading components with consistent typography
 */
type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

export function Heading({ level = 2, className, children }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const headingStyle = `h${level}` as keyof typeof componentStyles.headings;
  
  return (
    <Component className={cn(componentStyles.headings[headingStyle], className)}>
      {children}
    </Component>
  );
}

/**
 * Responsive container for images and content
 */
type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
};

export function Container({ 
  className, 
  children,
  maxWidth = 'xl',
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
  };
  
  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
}

/**
 * Card component with consistent styling
 */
type CardProps = {
  className?: string;
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
};

export function Card({
  className,
  children,
  padding = 'md',
  shadow = 'md',
  border = true,
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };
  
  return (
    <div 
      className={cn(
        'rounded-lg bg-white dark:bg-surface-800',
        paddingClasses[padding],
        shadowClasses[shadow],
        border && 'border border-surface-200 dark:border-surface-700',
        className
      )}
    >
      {children}
    </div>
  );
}
