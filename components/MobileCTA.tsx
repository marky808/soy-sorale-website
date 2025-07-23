"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar } from "lucide-react"

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が100px以上の場合に表示
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePhoneCall = () => {
    window.location.href = "tel:045-941-0021"
  }

  const handleReservation = () => {
    window.location.href = "/access#contact"
  }

  const handleContact = () => {
    // お問い合わせページへのリンク
    window.location.href = "/access#contact"
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-1 p-2">
          {/* 電話ボタン */}
          <Button
            onClick={handlePhoneCall}
            className="flex flex-col items-center justify-center h-16 bg-[#81D4E6] hover:bg-[#5FB3C7] text-white text-xs font-medium rounded-lg"
          >
            <Phone className="h-5 w-5 mb-1" />
            <span>電話</span>
          </Button>

          {/* お問い合わせボタン */}
          <Button
            onClick={handleContact}
            className="flex flex-col items-center justify-center h-16 bg-white hover:bg-gray-50 text-[#81D4E6] border border-[#81D4E6] text-xs font-medium rounded-lg"
          >
            <Mail className="h-5 w-5 mb-1" />
            <span>お問い合わせ</span>
          </Button>

          {/* ご予約ボタン */}
          <Button
            onClick={handleReservation}
            className="flex flex-col items-center justify-center h-16 bg-[#81D4E6] hover:bg-[#5FB3C7] text-white text-xs font-medium rounded-lg"
          >
            <Calendar className="h-5 w-5 mb-1" />
            <span>ご予約</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
