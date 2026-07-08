import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://app-tatsukikane.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "毎日をアップデートする小さな魔法たち",
    template: "%s | 毎日をアップデートする小さな魔法たち",
  },
  description:
    "行きたい場所をマップに保存する「iko」、友達と共有する「iko for Friends」、夢を管理する「DreamBox」など、毎日の暮らしをちょっと便利・楽しくするiOS・Androidアプリ6選。",
  keywords: [
    "iko", "iko for Friends", "DreamBox", "じおめも", "BaeLab",
    "iOSアプリ", "Androidアプリ", "マップアプリ", "バケットリスト",
    "マッチングアプリ", "メモアプリ", "旅行アプリ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "毎日をアップデートする小さな魔法たち",
    title: "毎日をアップデートする小さな魔法たち",
    description:
      "行きたい場所をマップに保存する「iko」、友達と共有する「iko for Friends」、夢を管理する「DreamBox」など、毎日の暮らしをちょっと便利・楽しくするアプリ6選。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "毎日をアップデートする小さな魔法たち — iko・DreamBox・じおめも・BaeLab",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
