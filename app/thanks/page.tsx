"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
import Link from "next/link"

export default function ThanksPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      <Header />
      
      {/* 背景アニメーション */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="soy-background-animation">
          <div className="wave-container">
            <div className="floating-element-1"></div>
            <div className="floating-element-2"></div>
            <div className="floating-element-3"></div>
            <div className="floating-element-4"></div>
            <div className="floating-element-5"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* メインセクション */}
        <section className="py-32 bg-gradient-to-b from-[#81D4E6] to-[#5FB3C7]">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimationWrapper animation="scaleIn">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8">
                  <CheckCircle className="h-12 w-12 text-[#81D4E6]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  お問い合わせありがとうございます
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  メッセージを正常に受信いたしました
                </p>
                <div className="w-24 h-1 bg-white mx-auto"></div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* 詳細情報 */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-[#81D4E6]/10 to-white border-[#81D4E6] shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#81D4E6] mb-6 text-center">
                    今後の流れについて
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#81D4E6] text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#333333] mb-2">メール確認</h3>
                        <p className="text-[#666666]">
                          送信いただいたメールアドレス宛に、自動返信メールをお送りしております。
                          メールが届かない場合は、迷惑メールフォルダもご確認ください。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* 連絡先情報 */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#81D4E6] mb-4">お急ぎの場合</h2>
              <p className="text-[#333333]">お電話でも承っております</p>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="bg-white shadow-lg border-[#81D4E6]">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-[#81D4E6] mb-4">
                    <Phone className="h-6 w-6" />
                    <span className="text-2xl font-bold">045-941-0021</span>
                  </div>
                  <p className="text-[#333333] mb-4">営業時間: 11:00-22:00（水曜定休）</p>
                  <Button
                    onClick={() => {
                      window.location.href = "tel:045-941-0021"
                    }}
                    className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    電話をかける
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* ナビゲーション */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-12 text-center">
          <div className="space-y-4">
            <Link href="/">
              <Button className="bg-[#81D4E6] hover:bg-[#5FB3C7] text-white px-8 py-3 mr-4">
                トップページに戻る
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" className="border-[#81D4E6] text-[#81D4E6] hover:bg-[#81D4E6] hover:text-white px-8 py-3">
                施術メニューを見る
              </Button>
            </Link>
          </div>
        </ScrollAnimationWrapper>

        <Footer />
      </div>
    </div>
  )
}
