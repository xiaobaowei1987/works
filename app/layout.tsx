import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xiaobaowei.com"),
  title: "小宝维 Xiao Baowei — 插画创作者",
  description: "小宝维的插画、手写诗、绘本与动画作品集。",
  openGraph: {
    title: "小宝维 Xiao Baowei — 插画创作者",
    description: "插画、手写诗、绘本与动画。",
    url: "https://www.xiaobaowei.com",
    siteName: "Xiao Baowei",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "小宝维插画作品《温暖》" }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小宝维 Xiao Baowei — 插画创作者",
    description: "插画、手写诗、绘本与动画。",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
