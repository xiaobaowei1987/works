import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiao Baowei — Illustrator",
  description: "Selected illustration work by Xiao Baowei.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
