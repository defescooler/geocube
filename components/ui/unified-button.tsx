import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface UnifiedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function UnifiedButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: UnifiedButtonProps) {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black";
  
  const variantClasses = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 active:scale-95",
    secondary: "bg-transparent border border-gray-700 hover:border-emerald-500 text-white hover:bg-gray-900/50",
    ghost: "bg-transparent hover:bg-white/10 text-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
