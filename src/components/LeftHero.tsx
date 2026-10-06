import React from 'react';
import { HeinekenStarIcon, BeerKegIcon, ThermometerIcon, TruckIcon } from './icons/Icons';

export default function LeftHero() {

  return (
    <div className="relative hidden lg:flex flex-col justify-between p-12 xl:p-14 text-white overflow-hidden bg-[radial-gradient(circle_at_20%_30%,#006b2b_0%,#004b1e_50%,#022413_100%)]">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />

      {/* Rotating watermark star */}
      <div className="absolute -right-20 -bottom-16 w-[480px] h-[480px] opacity-[0.07] text-white pointer-events-none z-10 animate-slow-spin" aria-hidden="true">
        <HeinekenStarIcon size={480} />
      </div>

      <div className="relative z-20 flex flex-col justify-between h-full">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md w-fit">
          <HeinekenStarIcon size={18} className="text-[#d3122a] drop-shadow-[0_0_6px_rgba(211,18,42,0.6)]" />
          <span className="text-xs xl:text-[13px] font-bold tracking-wider uppercase">Heineken Supply Chain & Logistics</span>
        </div>

        {/* Hero Body */}
        <div className="my-10 xl:my-12">
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.2] tracking-tight mb-5">
            Hệ thống Quản lý<br />
            Kho Bia <em className="not-italic text-[#55ef88] bg-gradient-to-r from-[#5dfd93] to-white bg-clip-text text-transparent">Heineken</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/80 max-w-[460px] mb-8">
            Giải pháp số hóa điều phối và quản trị kho vận thông minh, theo dõi luân chuyển
            bia lon, bia chai và bom bia tươi Keg theo thời gian thực tại các nhà máy & tổng kho toàn quốc.
          </p>

          {/* Key Operations Badges */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5 bg-[#022413]/50 border border-white/15 p-3.5 rounded-xl backdrop-blur-sm max-w-[440px] transition-all hover:translate-x-1 hover:border-[#5dfd93]/40">
              <div className="w-9 h-9 rounded-lg bg-[#008234]/60 border border-[#5dfd93]/30 flex items-center justify-center text-lg shrink-0">
                <BeerKegIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Quản lý Bom Keg & Thùng Lon Theo Lô</h4>
                <p className="text-xs text-white/70">Kiểm soát nghiêm ngặt quy tắc FIFO và hạn sử dụng bia tươi</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#022413]/50 border border-white/15 p-3.5 rounded-xl backdrop-blur-sm max-w-[440px] transition-all hover:translate-x-1 hover:border-[#5dfd93]/40">
              <div className="w-9 h-9 rounded-lg bg-[#008234]/60 border border-[#5dfd93]/30 flex items-center justify-center text-lg shrink-0">
                <ThermometerIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Giám Sát Nhiệt Độ Kho Lạnh 24/7</h4>
                <p className="text-xs text-white/70">Duy trì dải nhiệt chuẩn 4°C - 6°C đảm bảo chất lượng bia tuyệt hảo</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#022413]/50 border border-white/15 p-3.5 rounded-xl backdrop-blur-sm max-w-[440px] transition-all hover:translate-x-1 hover:border-[#5dfd93]/40">
              <div className="w-9 h-9 rounded-lg bg-[#008234]/60 border border-[#5dfd93]/30 flex items-center justify-center text-lg shrink-0">
                <TruckIcon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Điều Phối Bến Xuất - Nhập Hàng Tự Động</h4>
                <p className="text-xs text-white/70">Tối ưu hóa thời gian bốc dỡ của đội xe vận tải logistics</p>
              </div>
            </div>
          </div>
        </div>
        {/* Spacer giữ cân bằng bố cục khi đã ẩn footer */}
        <div />
      </div>
    </div>
  );
}
