import React from 'react';
import Image from 'next/image';

interface BeerBottleBannerProps {
  className?: string;
  children?: React.ReactNode;
  imgClassName?: string;
  priority?: boolean;
}

/**
 * Component hiển thị Banner hình ảnh Chai Bia Heineken tối ưu WebP
 * Tích hợp lớp phủ gradient điện ảnh (Cinematic Emerald Gradient Overlay)
 * Tôn vinh hình ảnh 2 chai bia thủy tinh sắc nét, đảm bảo độ tương phản hoàn hảo cho nội dung.
 */
export default function BeerBottleBanner({
  className = '',
  children,
  imgClassName = '',
  priority = true,
}: BeerBottleBannerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1. Lớp hình ảnh nền 2 chai bia Heineken sắc nét tối ưu định dạng WebP */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/heineken-beer-bottles.webp"
          alt="Chai bia Heineken chính hãng"
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`object-cover object-[70%_center] scale-[1.02] transition-transform duration-1000 ease-out ${imgClassName}`}
        />
      </div>

      {/* 2. Lớp phủ Gradient điện ảnh: Đậm ở bên trái (giúp chữ và badge cực kỳ sắc nét), trong trẻo ở bên phải để lộ 2 chai bia Heineken */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#012211]/95 via-[#01351b]/82 to-[#00170a]/35 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Lớp Vignette viền trên dưới tạo chiều sâu không gian */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#011409]/90 via-transparent to-[#011409]/50 pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Họa tiết lưới công nghệ tinh tế mờ nhẹ */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />

      {/* 5. Nội dung hiển thị bên trên */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
