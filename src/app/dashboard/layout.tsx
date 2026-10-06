import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Điều Khiển Quản Lý Kho & Vận Hành Chuỗi Cung Ứng Bia',
  description:
    'Trung tâm điều hành và giám sát thời gian thực kho bia Heineken Vietnam. Thống kê xuất - nhập - tồn kho bom bia tươi Keg 20L/50L, thùng lon Heineken Silver, điều phối bến bốc dỡ xe tải Dock Logistics và nhiệt độ kho mát 4.8°C.',
  openGraph: {
    title: 'Bảng Điều Khiển Quản Lý Kho Bia Heineken Vietnam',
    description:
      'Giám sát thời gian thực kho bom bia tươi Keg, thùng lon Silver, nhiệt độ kho mát 4.8°C và điều phối 8 bến bốc dỡ xe tải.',
    url: 'https://heineken.commadesk.vn/dashboard',
    siteName: 'Heineken Warehouse Management',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'Heineken Warehouse Dashboard Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Điều Khiển Quản Lý Kho Bia Heineken Vietnam',
    description:
      'Giám sát thời gian thực kho bom bia tươi Keg, thùng lon Silver, nhiệt độ kho mát 4.8°C và điều phối bến xe tải.',
    images: ['./og-image.png'],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
