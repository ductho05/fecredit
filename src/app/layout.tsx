import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonCall from "@/components/ButtonCall/ButtonCall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FeCredit",
  description:
    "Nền tảng hỗ trợ vay vốn nhanh. Cho vay tiền mặt từ 10 đến 100 triệu ,không thẩm định người thân, không cần xác minh thu nhập. Chỉ cần CCCD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={geistSans.variable + " " + geistMono.variable}>
        <Navbar />
        {children}
        <Footer />
        {/* Button gọi ngay fixed bottom right */}
        <ButtonCall />
      </body>
    </html>
  );
}
