import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function HeinekenStarIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L14.9 8.6L22 9.3L16.7 14.1L18.2 21.2L12 17.6L5.8 21.2L7.3 14.1L2 9.3L9.1 8.6L12 2Z" />
    </svg>
  );
}

/**
 * Biểu tượng Chai Bia Heineken chuẩn nhận diện thương hiệu
 * (Dáng chai thủy tinh xanh lục bảo, nắp bạc, nhãn oval và ngôi sao đỏ)
 */
export function HeinekenBottleIcon({ size = 48, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Gradient thân chai thủy tinh Heineken */}
        <linearGradient id="heinekenBottleGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#005a24" />
          <stop offset="30%" stopColor="#00993d" />
          <stop offset="70%" stopColor="#007a30" />
          <stop offset="100%" stopColor="#003816" />
        </linearGradient>
        {/* Nắp chai kim loại bạc */}
        <linearGradient id="bottleCapMetal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="40%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        {/* Nhãn chính thân chai */}
        <linearGradient id="mainLabelBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#005221" />
          <stop offset="50%" stopColor="#003d18" />
          <stop offset="100%" stopColor="#00240e" />
        </linearGradient>
      </defs>

      {/* 1. Nắp chai (Crown Cap) */}
      <rect x="33" y="6" width="14" height="10" rx="1.5" fill="url(#bottleCapMetal)" />
      <line x1="33" y1="12" x2="47" y2="12" stroke="#475569" strokeWidth="0.8" />
      <line x1="33" y1="15" x2="47" y2="15" stroke="#334155" strokeWidth="0.8" />

      {/* 2. Cổ chai và gờ vành cổ */}
      <rect x="32" y="16" width="16" height="4" rx="1" fill="#006629" />
      <path
        d="M34 20 L46 20 L49 66 C49 76 64 86 65 98 L65 186 C65 192 60 195 40 195 C20 195 15 192 15 186 L15 98 C16 86 31 76 31 66 Z"
        fill="url(#heinekenBottleGlass)"
      />

      {/* 3. Vệt sáng phản chiếu thủy tinh bên trái (Glass Highlight) */}
      <path
        d="M35 23 L37 23 L36 66 C36 74 24 84 21 98 L21 184 C21 187 23 189 25 189 L23 189 C19 189 18 186 18 182 L18 99 C19 87 32 77 33 66 Z"
        fill="#ffffff"
        opacity="0.32"
      />

      {/* 4. Nhãn cổ chai (Neck Label) */}
      <path
        d="M33 40 L47 40 L48 55 L32 55 Z"
        fill="#003d18"
        stroke="#ffffff"
        strokeWidth="0.8"
      />
      <line x1="33" y1="47.5" x2="47" y2="47.5" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 1" />

      {/* 5. Nhãn chính thân chai (Main Label) */}
      <ellipse cx="40" cy="138" rx="22" ry="26" fill="url(#mainLabelBg)" stroke="#ffffff" strokeWidth="1.6" />
      <ellipse cx="40" cy="138" rx="19.5" ry="23.5" fill="none" stroke="#90bba2" strokeWidth="0.8" />

      {/* Dải ruy băng đen cong ngang nhãn */}
      <rect x="18" y="132" width="44" height="13" rx="3" fill="#0b1710" stroke="#ffffff" strokeWidth="1" />
      
      {/* Ngôi sao đỏ Heineken trên nhãn */}
      <path
        d="M40 117 L41.8 122.5 L47.5 122.5 L42.9 125.8 L44.7 131.3 L40 128 L35.3 131.3 L37.1 125.8 L32.5 122.5 L38.2 122.5 Z"
        fill="#d3122a"
        stroke="#ffffff"
        strokeWidth="0.8"
      />

      {/* Chữ mô phỏng thương hiệu Heineken trên dải đen */}
      <text
        x="40"
        y="141.5"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="5.2"
        fontFamily="sans-serif"
        fontWeight="900"
        letterSpacing="0.8"
      >
        HEINEKEN
      </text>

      {/* Dải nơ xanh dưới nhãn */}
      <path d="M28 152 Q40 156 52 152" stroke="#4ade80" strokeWidth="1" fill="none" />

      {/* 6. Đáy chai có đường viền gia cố thủy tinh */}
      <ellipse cx="40" cy="191" rx="21" ry="3.5" fill="#00240e" opacity="0.6" />
      <line x1="22" y1="188" x2="58" y2="188" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

/**
 * Khối Logo Chai Bia Heineken sang trọng dành cho Header Form
 */
export function HeinekenBottleLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      {/* Khung Logo hình vuông bo góc nhẹ, width & height bằng nhau, căn giữa */}
      <div className="relative flex items-center justify-center w-20 h-20 aspect-square rounded-2xl bg-gradient-to-br from-[#008234]/15 via-[#00441b]/10 to-transparent border border-[#008234]/30 shadow-[0_4px_16px_rgba(0,130,52,0.15)] transition-transform hover:scale-105">
        <HeinekenBottleIcon size={64} className="drop-shadow-[0_4px_8px_rgba(0,50,20,0.35)]" />
      </div>
    </div>
  );
}

export function UserIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

export function LockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

export function EyeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function EyeOffIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
}

export function PhoneIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function MailIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export function ShieldCheckIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  );
}

export function WarehouseIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21V9l9-6 9 6v12H3z"></path>
      <path d="M9 21v-6h6v6"></path>
    </svg>
  );
}

export function BeerKegIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="7" ry="3"></ellipse>
      <path d="M5 5v14c0 1.66 3.13 3 7 3s7-1.34 7-3V5"></path>
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"></path>
    </svg>
  );
}

export function TruckIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

export function ThermometerIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
    </svg>
  );
}

export function AlertCircleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}
