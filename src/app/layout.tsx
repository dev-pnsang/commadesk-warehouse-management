import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  themeColor: '#008234',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://heineken.commadesk.vn'),
  title: {
    default: 'Heineken Vietnam — Quản Lý Kho Bia & Vận Hành Chuỗi Cung Ứng',
    template: '%s | Heineken Warehouse Management',
  },
  description:
    'Hệ thống số hóa điều phối và quản trị kho bia Heineken (Heineken Brewery Supply Chain & Warehouse Management System). Theo dõi xuất - nhập - tồn kho bom bia tươi Keg 20L/50L, thùng lon Heineken Silver và giám sát nhiệt độ kho lạnh chuẩn 4°C - 6°C.',
  keywords: [
    'Heineken',
    'Heineken Vietnam',
    'Quản lý kho bia',
    'Heineken Warehouse Management',
    'Bia tươi Keg 20L',
    'Bia tươi Keg 50L',
    'Heineken Silver',
    'Heineken Original',
    'Chuỗi cung ứng bia',
    'Logistics kho bãi',
    'Bến bốc dỡ xe tải Dock',
    'Kho mát bia tươi 4°C',
    'CommaDesk Custom Login',
    'FIFO kho bãi',
  ],
  authors: [{ name: 'Heineken Breweries Vietnam - Supply Chain Operations' }],
  creator: 'Heineken Breweries Vietnam',
  publisher: 'Heineken Vietnam',
  applicationName: 'Heineken Warehouse Management',
  category: 'Logistics & Supply Chain Management',
  classification: 'Enterprise Warehouse Management System',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './favicon.svg', type: 'image/svg+xml' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: './icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: './favicon.ico',
    apple: [
      { url: './apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: './favicon.svg', color: '#008234' },
    ],
  },
  manifest: './site.webmanifest',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Heineken Vietnam — Quản Lý Kho Bia & Vận Hành Chuỗi Cung Ứng',
    description:
      'Hệ thống số hóa điều phối và quản trị kho bia Heineken. Theo dõi thời gian thực kho bom bia tươi Keg, thùng lon Heineken Silver và lịch trình bến bốc dỡ xe tải.',
    url: 'https://heineken.commadesk.vn',
    siteName: 'Heineken Warehouse Management',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'Heineken Vietnam Warehouse Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heineken Vietnam — Quản Lý Kho Bia & Vận Hành Chuỗi Cung Ứng',
    description:
      'Hệ thống số hóa điều phối và quản trị kho bia Heineken. Theo dõi xuất - nhập - tồn kho bom bia tươi Keg và thùng lon.',
    images: ['./og-image.png'],
    creator: '@Heineken',
  },
  other: {
    'apple-mobile-web-app-title': 'Heineken Warehouse',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable}>
      <head>
        {/* Placeholder script theo đặc tả CommaDesk Custom Login UI Spec */}
        <script src="/__commadesk/login-bridge.js" />
        {/* Thẻ favicon & icon tương đối chuẩn cho gói xuất tĩnh CommaDesk ZIP */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Heineken Warehouse" />
        <meta name="application-name" content="Heineken Warehouse Management" />
        <meta name="theme-color" content="#008234" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
