import React from 'react';
import { PhoneIcon } from '@/components/icons/Icons';

export interface HotlineBannerProps {
  label?: string;
  phoneNumber?: string;
  telHref?: string;
  className?: string;
}

export function HotlineBanner({
  label = 'Hotline Điều Phối Kho 24/7',
  phoneNumber = '094 531 89 68',
  telHref = 'tel:0945318968',
  className = '',
}: HotlineBannerProps) {
  return (
    <a
      href={telHref}
      className={`flex items-center gap-3.5 bg-[#f3f9f5] border border-[#cce5d4] rounded-xl p-3 px-4 hover:bg-[#eaf5ee] hover:border-[#008234] hover:-translate-y-0.5 transition-all no-underline ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#d3122a] text-white flex items-center justify-center text-lg shrink-0 animate-pulse-ring">
        <PhoneIcon size={18} />
      </div>
      <div>
        <span className="block text-[11px] font-semibold text-[#5e7968] tracking-widest uppercase">{label}</span>
        <span className="block text-[17px] font-extrabold text-[#00441b]">{phoneNumber}</span>
      </div>
    </a>
  );
}
