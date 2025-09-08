'use client';

import { useState } from 'react';
import { ArrowUpDown, Loader2 } from 'lucide-react';

interface TradeButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function TradeButton({
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  children
}: TradeButtonProps) {
  const baseClasses = "w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 shadow-lg hover:shadow-xl",
    secondary: "glass-button text-textPrimary hover:bg-opacity-20"
  };

  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <span>{children}</span>
          {variant === 'primary' && <ArrowUpDown className="w-5 h-5" />}
        </>
      )}
    </button>
  );
}
