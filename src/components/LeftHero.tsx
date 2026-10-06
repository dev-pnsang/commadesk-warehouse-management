import React from 'react';
import BeerBottleBanner from './BeerBottleBanner';
import { HeinekenStarIcon, BeerKegIcon, ThermometerIcon, TruckIcon } from './icons/Icons';

export default function LeftHero() {
  return (
    <BeerBottleBanner className="hidden lg:flex flex-col justify-between p-12 xl:p-14 text-white min-h-screen">
      {/* Ngôi sao xoay chậm mờ nghệ thuật ở góc dưới bên phải */}
      <div
        className="absolute -right-20 -bottom-16 w-[480px] h-[480px] opacity-[0.06] text-white pointer-events-none z-[3] animate-slow-spin"
        aria-hidden="true"
      >
        <HeinekenStarIcon size={480} />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Brand Badge phía trên cùng */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md w-fit shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <HeinekenStarIcon size={18} className="text-[#d3122a] drop-shadow-[0_0_8px_rgba(211,18,42,0.8)]" />
          <span className="text-xs xl:text-[13px] font-bold tracking-wider uppercase text-white/95">
            Heineken Supply Chain & Logistics
          </span>
        </div>

        {/* Nội dung chính Hero Body */}
        <div className="my-10 xl:my-12">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.2] tracking-tight mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Hệ thống Quản lý<br />
            Kho Bia <em className="not-italic text-[#55ef88] bg-gradient-to-r from-[#5dfd93] via-[#94ffb8] to-white bg-clip-text text-transparent">Heineken</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/90 max-w-[460px] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            Giải pháp số hóa điều phối và quản trị kho vận thông minh, theo dõi luân chuyển
            bia lon, bia chai và bom bia tươi Keg theo thời gian thực tại các nhà máy & tổng kho toàn quốc.
          </p>

          {/* Key Operations Badges (Các khối nghiệp vụ dạng kính mờ Glassmorphism) */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5 bg-[#022413]/60 hover:bg-[#022413]/80 border border-white/20 hover:border-[#5dfd93]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(93,253,147,0.2)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00993d] to-[#004d1e] border border-[#5dfd93]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <BeerKegIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Quản lý Bom Keg & Thùng Lon Theo Lô</h4>
                <p className="text-xs text-white/80">Kiểm soát nghiêm ngặt quy tắc FIFO và hạn sử dụng bia tươi</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#022413]/60 hover:bg-[#022413]/80 border border-white/20 hover:border-[#5dfd93]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(93,253,147,0.2)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00993d] to-[#004d1e] border border-[#5dfd93]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <ThermometerIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Giám Sát Nhiệt Độ Kho Lạnh 24/7</h4>
                <p className="text-xs text-white/80">Duy trì dải nhiệt chuẩn 4°C - 6°C đảm bảo chất lượng bia tuyệt hảo</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#022413]/60 hover:bg-[#022413]/80 border border-white/20 hover:border-[#5dfd93]/50 p-3.5 rounded-xl backdrop-blur-md max-w-[440px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(93,253,147,0.2)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00993d] to-[#004d1e] border border-[#5dfd93]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <TruckIcon size={20} className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Điều Phối Bến Xuất - Nhập Hàng Tự Động</h4>
                <p className="text-xs text-white/80">Tối ưu hóa thời gian bốc dỡ của đội xe vận tải logistics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Status Badge tinh tế */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5dfd93] shadow-[0_0_8px_#5dfd93] animate-pulse" />
            <span className="font-medium text-white/85">Hệ thống điều phối vận hành trực tuyến</span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-white/60">Phiên bản V3.8 Pro</span>
        </div>
      </div>
    </BeerBottleBanner>
  );
}
