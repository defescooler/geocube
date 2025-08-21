import React from 'react';
import { cn } from '@/lib/utils';

interface UnifiedSectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  background?: 'transparent' | 'black' | 'gradient';
}

export function UnifiedSection({ 
  children, 
  className,
  padding = 'md',
  background = 'transparent'
}: UnifiedSectionProps) {
  const paddingClasses = {
    sm: "py-12 md:py-16 lg:py-20",
    md: "py-16 md:py-20 lg:py-24 xl:py-32",
    lg: "py-20 md:py-24 lg:py-32 xl:py-40"
  };
  
  const backgroundClasses = {
    transparent: "",
    black: "bg-black",
    gradient: "bg-gradient-to-b from-gray-900 via-black to-black"
  };
  
  return (
    <section className={cn(
      "relative",
      paddingClasses[padding],
      backgroundClasses[background],
      className
    )}>
      <div className="container-unified">
        {children}
      </div>
    </section>
  );
}
