import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 한글 주소 /개인정보처리방침 → 처리방침 페이지로 임시 이동(307).
  // AMC air 도메인(www.amcair.co.kr)의 처리방침 주소를 회사 처리방침으로 연결하기 위해 둡니다.
  async redirects() {
    return [
      {
        source: '/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8', // /개인정보처리방침
        destination: '/privacy',
        permanent: false,
      },
    ]
  },
  // i18n: {
  //   locales: ["en", "ko"],
  //   defaultLocale: "en",
  //   domains: [
  //     {
  //       domain: "localhost",
  //       defaultLocale: "en",
  //       locales: ["en", "ko"],
  //     },
  //   ],
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "**",
  //     },
  //   ],
  // },
};

export default nextConfig;
