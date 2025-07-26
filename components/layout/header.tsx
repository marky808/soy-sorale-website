"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/concept", label: "CONCEPT" },
    { href: "/bridal", label: "BRIDAL" },
    { href: "/access", label: "CONTACT" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/soy-solare-logo.png" alt="Soy Solare ロゴ" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-2xl font-bold text-[#81D4E6]">Soy Solare</div>
                <div className="text-sm text-[#333333]">横浜・仲町台駅徒歩3分</div>
              </div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#333333] hover:text-[#81D4E6] transition-colors font-medium ${
                  pathname === item.href ? "text-[#81D4E6] border-b-2 border-[#81D4E6]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 電話番号と予約ボタン */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-[#81D4E6]">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">045-941-0021</span>
            </div>
            <Link href="/access#contact">
              <Button className="bg-[#81D4E6] hover:bg-[#5FB3C7] text-white hidden lg:block">
                ご予約・お問い合わせ
              </Button>
            </Link>

            {/* モバイルメニューボタン */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[#333333] hover:text-[#81D4E6] transition-colors font-medium ${
                    pathname === item.href ? "text-[#81D4E6]" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-[#81D4E6] pt-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">045-941-0021</span>
              </div>
              <Link
                href="/access#contact"
                className="text-[#81D4E6] hover:text-[#5FB3C7] transition-colors font-medium pt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ご予約フォーム
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
