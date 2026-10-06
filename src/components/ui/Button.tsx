import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'tab';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  isActive = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer rounded-xl select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-11 gap-2',
    lg: 'text-[15px] px-5 py-3 h-[50px] gap-2 tracking-wide',
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#008234] to-[#006629] hover:from-[#00993d] hover:to-[#00732e] text-white hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(0,130,52,0.28)] hover:shadow-[0_6px_22px_rgba(0,130,52,0.38)]',
    secondary:
      'bg-white border border-[#d7e4dc] text-[#0e2417] hover:bg-[#f4f8f5] hover:border-[#008234] hover:text-[#008234]',
    danger:
      'bg-[#d3122a]/15 border border-[#d3122a]/40 text-[#ff6b7b] hover:bg-[#d3122a] hover:text-white',
    tab: isActive
      ? 'bg-[#008234] text-white border border-[#008234]'
      : 'bg-white text-[#0e2417] border border-[#d7e4dc] hover:bg-[#f4f8f5]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin shrink-0" aria-hidden="true" />
          <span>{loadingText || 'Đang xử lý...'}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
