'use client';

import { Loader2 } from 'lucide-react';

interface TradeButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function TradeButton({
  variant = 'primary',
  onClick,
  disabled = false,
  loading = false,
  children,
  className = ''
}: TradeButtonProps) {
  const baseClasses = 'w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 shadow-lg hover:shadow-xl',
    secondary: 'glass-button text-textPrimary hover:bg-opacity-20'
  };

  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {loading && <Loader2 size={20} className="animate-spin" />}
      <span>{children}</span>
    </button>
  );
}
