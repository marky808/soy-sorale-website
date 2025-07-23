import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SOY SORALE - 横浜・仲町台駅徒歩3分の隠れ家エステサロン", // ここを修正
  description: "1日3組限定の完全プライベート空間で、心と身体を癒す大人女性のための隠れ家サロン",
  icons: {
    // ファビコン設定を追加
    icon: "/images/soy-solare-logo.png",
    shortcut: "/images/soy-solare-logo.png",
    apple: "/images/soy-solare-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="font-light">{children}</body>
    </html>
  )
}
