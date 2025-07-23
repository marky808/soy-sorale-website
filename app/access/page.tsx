"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Train, Calendar } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
import Link from "next/link"

export default function AccessPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
        {/* ページヘッダー */}
        <section className="py-16 bg-[#81D4E6]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Access & Contact</h1>
            <p className="text-lg text-white">アクセス・お問い合わせ</p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </section>

        {/* 予約方法 */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#81D4E6] mb-4">ご予約方法</h2>
              <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">LINE</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">LINE予約</h3>
                    <p className="text-[#333333] text-sm mb-4">LINEからご予約・お問い合わせできます</p>
                    <div className="bg-[#F8F8FF] p-4 rounded-lg border border-[#81D4E6]">
                      <img
                        src="/images/line-qr-code.png"
                        alt="LINE QRコード"
                        className="w-32 h-32 mx-auto object-contain"
                      />
                      <p className="text-xs text-[#333333] mt-2">QRコードを読み取ってください</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">電話予約</h3>
                    <p className="text-[#333333] text-sm mb-4">お電話でのご予約も承っております</p>
                    <p className="text-2xl font-bold text-[#81D4E6]">045-941-0021</p>
                    <p className="text-xs text-[#333333] mt-2">営業時間: 11:00-22:00</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333] mb-3">オンライン予約</h3>
                    <p className="text-[#333333] text-sm mb-4">24時間いつでもご予約いただけます</p>
                    <Link href="https://tol-app.jp/s/vkv0e4in1cyho9z80vaq" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#81D4E6] hover:bg-[#5FB3C7] text-white">オンライン予約サイトへ</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* お問い合わせフォーム */}
        <ScrollAnimationWrapper
          animation="fadeUp"
          id="contact"
          className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#81D4E6] mb-4">お問い合わせフォーム</h2>
                <p className="text-[#333333]">ご質問やご相談はこちらからお気軽にどうぞ</p>
              </div>

              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <Card className="bg-white shadow-xl border-[#81D4E6]">
                  <CardContent className="p-8">
                    <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-[#333333]">
                            お名前 *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 border-[#81D4E6] focus:border-[#81D4E6] focus:ring-[#81D4E6]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-[#333333]">
                            電話番号 *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 border-[#81D4E6] focus:border-[#81D4E6] focus:ring-[#81D4E6]"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#333333]">
                          メールアドレス *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 border-[#81D4E6] focus:border-[#81D4E6] focus:ring-[#81D4E6]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-[#333333]">
                          メッセージ
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="ご質問やご要望がございましたらお書きください"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 border-[#81D4E6] focus:border-[#81D4E6] focus:ring-[#81D4E6]"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white py-3 text-lg">
                        送信する
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* 注意事項 */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-16 bg-[#81D4E6] rounded-2xl mx-4 my-12 shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto soy-animate-gentlePulse">
              <h3 className="text-2xl font-bold text-white mb-6">ご来店にあたって</h3>
              <div className="bg-white/95 p-6 rounded-lg shadow-lg">
                <div className="space-y-3 text-[#333333] text-left">
                  <p>• 完全予約制となっております。事前にご予約をお取りください</p>
                  <p>• 1日3組限定のため、お早めのご予約をおすすめいたします</p>
                  <p>• キャンセルの場合は、前日までにご連絡をお願いいたします</p>
                  <p>• 施術内容によってはお化粧を落としていただく場合がございます</p>
                  <p>• シャワー・アメニティを完備しておりますのでご安心ください</p>
                </div>
              </div>
              <p className="text-white italic text-lg mt-6">
                当サロンでリフレッシュして、心地よい時間をお過ごしください
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* アクセス情報 */}
        <ScrollAnimationWrapper animation="fadeUp" className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* 基本情報 */}
              <div className="space-y-8">
                <ScrollAnimationWrapper animation="slideLeft" delay={100}>
                  <Card className="bg-white shadow-lg border-[#81D4E6]">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-[#81D4E6] mb-6">サロン情報</h2>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-[#81D4E6] mt-1" />
                          <div>
                            <p className="font-semibold text-[#333333]">SOY SOLARE（ソイソラーレ）</p>
                            <p className="text-[#333333]">〒224-0041</p>
                            <p className="text-[#333333]">横浜市都筑区仲町台1-15-15磯部ビル402</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Train className="h-5 w-5 text-[#81D4E6]" />
                          <p className="text-[#333333]">仲町台駅徒歩3分</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-[#81D4E6]" />
                          <div>
                            <p className="text-[#333333]">営業時間: 11:00-22:00</p>
                            <p className="text-[#333333]">定休日: 水曜日</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-[#81D4E6]" />
                          <p className="text-[#333333] font-semibold">045-941-0021</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-[#81D4E6]" />
                          <p className="text-[#333333]">soysolare@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* 道順案内 */}
                <ScrollAnimationWrapper animation="slideLeft" delay={200}>
                  <Card className="bg-[#F8F8FF] shadow-lg border-[#81D4E6]">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#81D4E6] mb-4">仲町台駅からの道順</h3>
                      <div className="space-y-2 text-[#333333] text-sm">
                        <p>1. 仲町台駅を出て、センター北方面へ向かいます</p>
                        <p>2. 徒歩約3分で磯部ビルが見えてきます</p>
                        <p>3. 4階の402号室がSOY SOLAREです</p>
                        <p className="text-[#81D4E6] font-semibold mt-3">※迷われた場合はお気軽にお電話ください</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>

              {/* 地図 */}
              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <div className="relative">
                  <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7759856237035!2d139.5878622752071!3d35.534533138019704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018594826899347%3A0x275315b51db6ec6b!2zU295IFNvbGFyZe-8iOOCveOCpOOCveODqeODvOODrO-8iSDjg5fjg6njgqTjg5njg7zjg4jnqbrplpPjgafosrTlpbPjgaDjgZHjga7jgqrjg7zjg4Djg7zjg6HjgqTjg4nmlr3ooZM!5e0!3m2!1sja!2sjp!4v1753217967943!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SOY SOLARE 地図"
                    ></iframe>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 px-4 py-3 rounded-lg shadow-md">
                    <p className="text-sm font-semibold text-[#333333]">SOY SOLARE</p>
                    <p className="text-xs text-[#333333]">仲町台駅から徒歩3分</p>
                    <p className="text-xs text-[#333333]">磯部ビル402</p>
                  </div>
                  {/* マップを開くボタンを削除 */}
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <Footer />
    </div>
  )
}
