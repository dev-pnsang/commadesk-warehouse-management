import React, { forwardRef } from 'react';

export interface InputAffixProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  requiredMark?: boolean;
  prefixIcon?: React.ReactNode;
  suffixAction?: React.ReactNode;
  error?: string;
}

export const InputAffix = forwardRef<HTMLInputElement, InputAffixProps>(function InputAffix(
  {
    label,
    requiredMark = false,
    prefixIcon,
    suffixAction,
    error,
    id,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-[13px] font-semibold text-[#0e2417] mb-1.5 ${
            requiredMark ? "after:content-['*'] after:ml-1 after:text-[#d3122a]" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center bg-[#f8faf8] border rounded-xl h-12 px-3.5 transition-all ${
          error
            ? 'border-[#d3122a] focus-within:ring-2 focus-within:ring-[#d3122a]/20'
            : 'border-[#d7e4dc] hover:border-[#92c4a1] focus-within:bg-white focus-within:border-[#008234] focus-within:ring-2 focus-within:ring-[#008234]/20'
        } ${className}`}
      >
        {prefixIcon && <span className="text-[#5e7968] shrink-0 mr-2.5" aria-hidden="true">{prefixIcon}</span>}
        <input
          ref={ref}
          id={id}
          className="w-full bg-transparent border-0 outline-none text-sm text-[#0e2417] placeholder:text-[#a4b5aa]"
          {...props}
        />
        {suffixAction}
      </div>
      {error && <p className="text-xs text-[#d3122a] mt-1.5">{error}</p>}
    </div>
  );
});
