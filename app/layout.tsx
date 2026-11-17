import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 환경변수가 없어도 실제 문구가 나가도록 기본값을 실제 회사 정보로 둔다.
// (기존에는 보일러플레이트 값인 "Title is missing" 이 브라우저 탭과 검색결과에 그대로 노출됐다.)
const SITE_TITLE = "AMC | Risk Solutions from Korea to the World";
const SITE_DESCRIPTION =
  "AMC is a new-generation insurance brokerage firm based in Korea. We turn deep local insight into tailored risk solutions for Korean corporations and their global insurance and reinsurance partners.";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE || SITE_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION || SITE_DESCRIPTION,
  applicationName: "AMC",
  openGraph: {
    title: process.env.NEXT_PUBLIC_TITLE || SITE_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION || SITE_DESCRIPTION,
    siteName: "AMC Insured Co., Ltd",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={process.env.NEXT_PUBLIC_LANGUAGE || "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
