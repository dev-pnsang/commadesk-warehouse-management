'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  HeinekenStarIcon,
  HeinekenBottleIcon,
  BeerKegIcon,
  ThermometerIcon,
  TruckIcon,
  WarehouseIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
} from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { Card, KpiCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
} from '@/components/ui/Table';

interface DispatchOrder {
  id: string;
  batch: string;
  product: string;
  type: 'export' | 'import';
  quantity: string;
  truck: string;
  driver: string;
  time: string;
  status: 'completed' | 'processing' | 'pending';
  statusText: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'export' | 'import'>('all');
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'card' | 'table'>('card');

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('cp_user');
      } catch {}
      router.push('/');
    }
  };

  const dispatchOrders: DispatchOrder[] = [
    {
      id: 'PXK-2026-0891',
      batch: 'HNK-SG-2610-A1',
      product: 'Heineken Silver Lon 330ml (Thùng 24 lon)',
      type: 'export',
      quantity: '2,400 Thùng',
      truck: '51C-842.19 (Container 40ft)',
      driver: 'Trần Văn Mạnh',
      time: '15:45 - Hôm nay',
      status: 'completed',
      statusText: 'Đã hoàn tất xuất kho',
    },
    {
      id: 'PNK-2026-0422',
      batch: 'KEG-TG-2610-09',
      product: 'Bom Bia Tươi Keg Heineken 20L',
      type: 'import',
      quantity: '450 Bom',
      truck: 'Dây chuyền chiết B4 ➔ Kho Lạnh',
      driver: 'Kỹ thuật viên Chiết rót',
      time: '15:20 - Hôm nay',
      status: 'completed',
      statusText: 'Đã nhập kho mát (4.5°C)',
    },
    {
      id: 'PXK-2026-0892',
      batch: 'HNK-OG-2609-C3',
      product: 'Heineken Original Chai 330ml (Két 24 chai)',
      type: 'export',
      quantity: '1,800 Két',
      truck: '60C-915.42 (Xe tải 15 tấn)',
      driver: 'Lê Hoàng Long',
      time: '14:50 - Hôm nay',
      status: 'processing',
      statusText: 'Đang bốc hàng (Cửa Dock 03)',
    },
    {
      id: 'PXK-2026-0893',
      batch: 'KEG-TG-2610-04',
      product: 'Bom Bia Tươi Keg Heineken 50L (Draught)',
      type: 'export',
      quantity: '320 Bom',
      truck: '50H-112.87 (Xe lạnh chuyên dụng)',
      driver: 'Nguyễn Quốc Cường',
      time: '14:15 - Hôm nay',
      status: 'pending',
      statusText: 'Chờ kiểm định nhiệt độ xe',
    },
    {
      id: 'PNK-2026-0421',
      batch: 'HNK-SV-2610-B2',
      product: 'Heineken 0.0% Cồn Lon Sleek 330ml',
      type: 'import',
      quantity: '3,200 Thùng',
      truck: 'Nhà máy Tiền Giang ➔ Tổng kho',
      driver: 'Đội xe nội bộ',
      time: '13:30 - Hôm nay',
      status: 'completed',
      statusText: 'Đã lưu kho Phân khu B2',
    },
  ];

  const filteredOrders =
    activeTab === 'all'
      ? dispatchOrders
      : dispatchOrders.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-[#f4f7f5] flex flex-col text-[#0e2417]">
      {/* Top Navigation */}
      <header className="bg-[#022713] text-white px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between border-b-2 border-[#008234] sticky top-0 z-50 gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <HeinekenBottleIcon size={26} className="drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span>HEINEKEN WAREHOUSE</span>
          </div>
          <Badge variant="neutral" className="hidden sm:inline-flex">
            <WarehouseIcon size={14} />
            Tổng Kho Miền Nam — Trung Tâm Phân Phối Tiền Giang
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#72f59a] text-xs before:content-[''] before:w-2 before:h-2 before:bg-[#25d366] before:rounded-full before:shadow-[0_0_8px_#25d366]">
            Hệ thống IoT cảm biến: 4.8°C Online
          </span>
          <div className="text-white/90">
            Thủ kho: <strong>Nguyễn Văn Hùng</strong>
          </div>
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1360px] w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-7">
        {/* Banner giới thiệu & Thông báo vận hành */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e2417] tracking-tight mb-1">
              Bảng Điều Phối & Giám Sát Kho Bia
            </h2>
            <p className="text-xs sm:text-sm text-[#5e7968]">
              Theo dõi biến động tồn kho, điều phối xuất - nhập hàng và kiểm soát chuỗi cung ứng lạnh
            </p>
          </div>
          <div>
            <Badge variant="success" className="px-3.5 py-2 text-xs">
              ✓ Chuẩn FIFO Hạn sử dụng: 100% tuân thủ
            </Badge>
          </div>
        </div>

        {/* 4 Reusable KPI Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <KpiCard
            title="Bia Tươi Bom Keg (20L & 50L)"
            value="14,850"
            unit="Bom"
            subtitle={<>Lấp đầy: <strong>92.8%</strong> kho lạnh · Nhập mới: +450 bom</>}
            icon={<BeerKegIcon size={22} />}
          />

          <KpiCard
            title="Thùng Lon Heineken Silver"
            value="54,200"
            unit="Thùng"
            subtitle={<>Định mức an toàn: <strong>Tốt</strong> · Đã xuất 2,400 thùng</>}
            icon={<WarehouseIcon size={22} />}
          />

          <KpiCard
            title="Thùng Lon Heineken Original"
            value="38,150"
            unit="Thùng"
            subtitle={<>Dự trữ lưu kho: <strong>8.5 ngày</strong> cung ứng thị trường</>}
            icon={<WarehouseIcon size={22} />}
          />

          <KpiCard
            title="Nhiệt Độ Kho Lạnh Keg"
            value="4.8°C"
            unit="Ổn định"
            subtitle={<>Dải chuẩn: <strong>4.0°C - 6.0°C</strong> (Cảm biến Sensor A1-A4)</>}
            icon={<ThermometerIcon size={22} />}
            accentColor="#008234"
          />
        </div>

        {/* Section Bảng Lệnh Xuất Nhập Kho - Dùng Table Component Độc Lập */}
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <TruckIcon size={20} className="text-[#008234] shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0e2417]">
                  Nhật Ký Điều Phối Bến Bốc Dỡ (Dock Logistics)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5e7968] mt-0.5">
                Lịch trình xe tải xuất/nhập hàng tại các cửa Dock 01 - Dock 08
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-nowrap overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {/* Nút lọc tab theo loại lệnh - KHÔNG BAO GIỜ RỚT CHỮ */}
              <div className="flex items-center gap-1.5 bg-[#f0f5f2] p-1 rounded-xl border border-[#dce9e0] shrink-0">
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Tất cả ({dispatchOrders.length})
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'export'}
                  onClick={() => setActiveTab('export')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Xuất kho đại lý
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'import'}
                  onClick={() => setActiveTab('import')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Nhập nhà máy
                </Button>
              </div>

              {/* Bộ chuyển đổi chế độ xem trên Mobile (Thẻ / Bảng) */}
              <div className="md:hidden flex items-center gap-1 bg-[#f0f5f2] p-1 rounded-xl border border-[#dce9e0] shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('card')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'card'
                      ? 'bg-white text-[#008234] shadow-xs'
                      : 'text-[#5e7968] hover:text-[#0e2417]'
                  }`}
                >
                  Dạng Thẻ
                </button>
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('table')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'table'
                      ? 'bg-white text-[#008234] shadow-xs'
                      : 'text-[#5e7968] hover:text-[#0e2417]'
                  }`}
                >
                  Dạng Bảng
                </button>
              </div>
            </div>
          </div>

          {/* 1. HIỂN THỊ DẠNG THẺ (CARD VIEW) TRÊN MOBILE CHO TRẢI NGHIỆM TỐI ƯU */}
          <div
            className={`flex flex-col gap-3.5 ${
              mobileDisplayMode === 'card' ? 'md:hidden' : 'hidden'
            }`}
          >
            {filteredOrders.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#5e7968] bg-[#f9fbf9] rounded-xl border border-[#e1ebe4]">
                Không tìm thấy lệnh xuất nhập phù hợp.
              </div>
            ) : (
              filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#fafcfa] border border-[#dbeae0] rounded-xl p-4 transition-all hover:border-[#008234] hover:shadow-xs flex flex-col gap-3"
                >
                  {/* Card Header: Mã phiếu & Badge trạng thái */}
                  <div className="flex items-start justify-between gap-2 border-b border-[#edf3ef] pb-2.5">
                    <div>
                      <div className="text-sm font-extrabold text-[#0e2417] tracking-tight">
                        {order.id}
                      </div>
                      <div className="text-xs text-[#5e7968]">
                        Lô sản xuất: <span className="font-mono font-medium text-[#0e2417]">{order.batch}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        order.status === 'completed'
                          ? 'success'
                          : order.status === 'processing'
                          ? 'warning'
                          : 'info'
                      }
                      className="shrink-0 text-[11px] whitespace-nowrap"
                    >
                      {order.statusText}
                    </Badge>
                  </div>

                  {/* Card Body: Tên sản phẩm & Số lượng */}
                  <div>
                    <div className="font-bold text-[15px] text-[#0e2417] leading-snug">
                      {order.product}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-[#e1ebe4]">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          order.type === 'export'
                            ? 'bg-[#e8f4fd] text-[#006eb4]'
                            : 'bg-[#e6f8ec] text-[#007a33]'
                        }`}
                      >
                        {order.type === 'export' ? '↑ Lệnh xuất kho đại lý' : '↓ Lệnh nhập từ nhà máy'}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-[#5e7968] block">Số lượng</span>
                        <span className="text-base font-extrabold text-[#008234]">{order.quantity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details: Xe, Tài xế, Thời gian */}
                  <div className="bg-white rounded-lg p-2.5 border border-[#e1ebe4] text-xs grid grid-cols-1 gap-1.5 text-[#5e7968]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5e7968]">Phương tiện / Dock:</span>
                      <span className="font-semibold text-[#0e2417] text-right">{order.truck}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5e7968]">Tài xế / Bộ phận:</span>
                      <span className="font-semibold text-[#0e2417] text-right">{order.driver}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5e7968]">Thời gian điều phối:</span>
                      <span className="font-medium text-[#0e2417] text-right">{order.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 2. HIỂN THỊ DẠNG BẢNG (TABLE VIEW) KẾ THỪA COMPONENT TABLE */}
          <div
            className={`w-full ${
              mobileDisplayMode === 'table' ? 'block' : 'hidden md:block'
            }`}
          >
            <Table minWidth="min-w-[1150px]" showScrollHint={true}>
              <TableHeader>
                <TableRow>
                  <TableHead nowrap={true} className="min-w-[150px]">Mã Phiếu / Lô</TableHead>
                  <TableHead nowrap={true} className="min-w-[300px]">Chủng Loại Sản Phẩm Bia</TableHead>
                  <TableHead nowrap={true} className="min-w-[140px]">Số Lượng</TableHead>
                  <TableHead nowrap={true} className="min-w-[240px]">Phương Tiện &amp; Bến Dock</TableHead>
                  <TableHead nowrap={true} className="min-w-[180px]">Tài Xế / Bộ Phận</TableHead>
                  <TableHead nowrap={true} className="min-w-[140px]">Thời Gian</TableHead>
                  <TableHead nowrap={true} className="min-w-[180px]">Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredOrders.length === 0 ? (
                  <TableEmpty
                    colSpan={7}
                    message="Không có dữ liệu điều phối"
                    description="Hiện chưa có phiếu xuất hoặc nhập nào theo bộ lọc được chọn."
                  />
                ) : (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      {/* Cột Mã Phiếu / Lô - Thẳng hàng, không rớt chữ */}
                      <TableCell nowrap={true}>
                        <div className="font-bold text-[#0e2417] whitespace-nowrap">{order.id}</div>
                        <div className="text-xs text-[#5e7968] font-mono whitespace-nowrap">Lô: {order.batch}</div>
                      </TableCell>

                      {/* Cột Chủng Loại Sản Phẩm Bia - Thẳng dài, nếu quá dài thì hiện ... (3 chấm) */}
                      <TableCell nowrap={true} className="max-w-[320px]">
                        <div
                          className="font-semibold text-[#0e2417] whitespace-nowrap truncate"
                          title={order.product}
                        >
                          {order.product}
                        </div>
                        <div
                          className={`text-xs font-medium mt-0.5 whitespace-nowrap ${
                            order.type === 'export' ? 'text-[#006eb4]' : 'text-[#007a33]'
                          }`}
                        >
                          {order.type === 'export' ? '↑ Lệnh xuất kho đại lý' : '↓ Lệnh nhập nhà máy'}
                        </div>
                      </TableCell>

                      {/* Cột Số Lượng - Thẳng hàng */}
                      <TableCell nowrap={true}>
                        <span className="font-extrabold text-[15px] text-[#0e2417] whitespace-nowrap">
                          {order.quantity}
                        </span>
                      </TableCell>

                      {/* Cột Phương Tiện & Bến Dock - Thẳng dài, nếu quá dài hiện ... */}
                      <TableCell nowrap={true} className="max-w-[250px]">
                        <span
                          className="text-[#0e2417] whitespace-nowrap truncate block"
                          title={order.truck}
                        >
                          {order.truck}
                        </span>
                      </TableCell>

                      {/* Cột Tài Xế / Bộ Phận - Thẳng dài, nếu quá dài hiện ... */}
                      <TableCell nowrap={true} className="max-w-[190px]">
                        <span
                          className="font-medium text-[#0e2417] whitespace-nowrap truncate block"
                          title={order.driver}
                        >
                          {order.driver}
                        </span>
                      </TableCell>

                      {/* Cột Thời Gian - Thẳng hàng */}
                      <TableCell nowrap={true}>
                        <span className="text-[#5e7968] text-xs whitespace-nowrap">
                          {order.time}
                        </span>
                      </TableCell>

                      {/* Cột Trạng Thái - Thẳng hàng */}
                      <TableCell nowrap={true}>
                        <Badge
                          variant={
                            order.status === 'completed'
                              ? 'success'
                              : order.status === 'processing'
                              ? 'warning'
                              : 'info'
                          }
                          className="whitespace-nowrap"
                        >
                          {order.statusText}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Section Cảnh báo kho bãi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Card>
            <h4 className="text-base font-bold text-[#0e2417] mb-3 flex items-center gap-2">
              <ShieldCheckIcon size={20} className="text-[#008234]" />
              Quy Tắc Quản Trị Hạn Sử Dụng (FIFO)
            </h4>
            <p className="text-xs sm:text-sm text-[#5e7968] leading-relaxed mb-4">
              Hệ thống tự động ưu tiên xuất các lô bia sản xuất sớm nhất và đảm bảo bom bia tươi Keg được luân chuyển trước 15 ngày kể từ ngày đóng nắp.
            </p>
            <div className="bg-[#f5faf6] p-3 rounded-xl text-xs sm:text-sm border border-[#dbeae0]">
              <strong>Lô ưu tiên xuất kho tiếp theo:</strong>{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-[#dbeae0] font-mono text-[#008234] font-bold">
                KEG-TG-2610-04
              </code>{' '}
              (Kho Lạnh Khu C).
            </div>
          </Card>

          <Card>
            <h4 className="text-base font-bold text-[#0e2417] mb-3 flex items-center gap-2">
              <AlertCircleIcon size={20} className="text-[#d3122a]" />
              Trực Ban Kỹ Thuật Kho &amp; Bến Bãi
            </h4>
            <p className="text-xs sm:text-sm text-[#5e7968] leading-relaxed mb-4">
              Mọi sự cố về chênh lệch nhiệt độ kho mát (&gt; 6.5°C), kẹt bến bốc dỡ hoặc lỗi quét mã vạch Pallet vui lòng liên hệ trực ban điều phối 24/7.
            </p>
            <div className="flex items-center gap-2.5 text-sm font-bold text-[#00441b]">
              <span>📞 Hotline Trực Ban Vận Hành:</span>
              <a href="tel:0945318968" className="text-[#d3122a] underline hover:text-[#b80c21]">
                094 531 89 68
              </a>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
