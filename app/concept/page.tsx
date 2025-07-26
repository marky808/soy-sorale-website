"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Coffee, Droplets, Clock, Dog } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      <Header />
      {/* 背景アニメーション - サイト全体 */}
      <div className="soy-background-animation fixed inset-0 z-0 overflow-hidden">
        <div className="wave-container">
          <div className="floating-element-1"></div>
          <div className="floating-element-2"></div>
          <div className="floating-element-3"></div>
          <div className="floating-element-4"></div>
          <div className="floating-element-5"></div>
        </div>
      </div>
      <div className="relative z-10">
        {/* ページヘッダー */}
        <section className="py-16 bg-[#81D4E6]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-4">Concept</h1>
            <p className="text-lg text-white">Soy Solareのコンセプト</p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </section>

        {/* サロンコンセプト */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-medium text-[#81D4E6] mb-6">サロンコンセプト</h2>
                  <div className="space-y-4 text-[#333333] leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-[#81D4E6]">完全予約制 大人女性のための隠れ家サロン</strong>
                    </p>
                    <p>
                      ゆったりと過ごしていただきたいので1日3組限定にしています。
                      お一人お一人のご希望を全て叶える施術を心がけています。
                    </p>
                    <p className="text-[#81D4E6] italic text-lg">
                      大人女性が心から癒される特別な時間となりますように・・・
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/images/soy-solare-floral-logo.png"
                    alt="Soy Solare 花リースロゴ"
                    className="w-full h-80 object-contain bg-white rounded-lg shadow-lg p-8"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* インナーケアへのこだわり */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">インナーケアへのこだわり</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/herbal-tea-service.png"
                    alt="デトックスハーブティーサービス"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-[#F8F8FF] p-6 rounded-lg border border-[#81D4E6]">
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">
                      Soy Solareではインナーケアを大切に考えております
                    </h3>
                    <p className="text-[#81D4E6] font-semibold text-lg mb-4">目指すは「インナービューティー」</p>
                    <div className="space-y-3 text-[#333333]">
                      <p>エステ前にデトックスハーブティーを飲んで体調アップ</p>
                      <p>エステ後に栄養満点ソイプロテインで美肌をつくります</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                      <Card className="bg-white border-[#81D4E6]">
                        <CardContent className="p-4 text-center">
                          <Coffee className="h-8 w-8 text-[#81D4E6] mx-auto mb-2" />
                          <h4 className="font-medium text-[#333333]">デトックスハーブティー</h4>
                          <p className="text-sm text-[#333333] mt-2">施術前の体調アップ</p>
                        </CardContent>
                      </Card>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                      <Card className="bg-white border-[#81D4E6]">
                        <CardContent className="p-4 text-center">
                          <Droplets className="h-8 w-8 text-[#81D4E6] mx-auto mb-2" />
                          <h4 className="font-medium text-[#333333]">ソイプロテイン</h4>
                          <p className="text-sm text-[#333333] mt-2">施術後の美肌作り</p>
                        </CardContent>
                      </Card>
                    </ScrollAnimationWrapper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Inner Beauty ダイエットプラン */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Inner Beauty</h2>
                <p className="text-lg text-[#333333] mb-2">エステメニューと併用した自宅ダイエットプラン</p>
                <p className="text-[#333333]">
                  お食事の指導・ZOOMエクササイズの参加・LINEサポートの無料特典付き
                  <br />
                  3ヶ月で確実に結果を出しましょう
                </p>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto mt-4"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4CsKqpFANpm3kO1FdBKhb9lFRKiO8S.png"
                    alt="Inner Beauty ダイエットプラン詳細"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-[#F8F8FF] p-6 rounded-lg border border-[#81D4E6]">
                    <h3 className="text-xl font-semibold text-[#333333] mb-4">エステ × 自宅ケアで理想の体型へ</h3>
                    <p className="text-[#81D4E6] font-semibold text-lg mb-4">内側からの美しさを追求</p>
                    <div className="space-y-3 text-[#333333]">
                      <p>• 専門的な食事指導で正しい栄養管理</p>
                      <p>• ZOOMエクササイズで楽しく運動習慣</p>
                      <p>• LINEサポートで毎日の励ましとアドバイス</p>
                      <p>• 高品質なサプリメントで効果を最大化</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#81D4E6]">
                    <h4 className="font-medium text-[#333333] mb-3">3つのプランをご用意</h4>
                    <div className="space-y-2 text-sm text-[#333333]">
                      <p>
                        <strong>ライト:</strong> ¥168,000（15%off）基本セット+脂肪撃退コース4回
                      </p>
                      <p>
                        <strong>スタンダード:</strong> ¥204,200（25%off）基本セット+各種サプリ+脂肪撃退コース4回
                      </p>
                      <p>
                        <strong>プレミアム:</strong> ¥338,260（35%off）フルセット+脂肪撃退コース4回
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[#81D4E6] italic text-lg mb-4">
                  エステだけでは得られない、持続可能な美しさを手に入れませんか？
                </p>
                <p className="text-[#333333] font-semibold">お気軽にご相談ください</p>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 設備紹介 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">充実の設備とサービス</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">高級アメニティ</h3>
                      <p className="text-[#333333] text-sm">シャワー完備で施術後もさっぱり</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">22時まで営業</h3>
                      <p className="text-[#333333] text-sm">お仕事帰りにもどうぞ</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Dog className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">看板犬「もさく」君</h3>
                      <p className="text-[#333333] text-sm">ワンちゃんに癒されたい方はどうぞ</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={400}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#81D4E6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">プライベート空間</h3>
                      <p className="text-[#333333] text-sm">1日3組限定の特別な時間</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* サロンの様子 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Gallery</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                  <div className="relative">
                    <img
                      src="/images/salon-treatment-room.png"
                      alt="Soy Solare 施術室"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">施術室</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={200}>
                  <div className="relative">
                    <img
                      src="/images/customer-foot-bath.jpeg"
                      alt="お客様の足湯とハーブティー"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">足湯とハーブティー</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={300}>
                  <div className="relative">
                    <img
                      src="/images/mosaku-and-owner-smiling.png"
                      alt="看板犬もさく君とオーナー"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">看板犬もさく君</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <ScrollAnimationWrapper animation="fadeUp" delay={400}>
                  <div className="relative">
                    <img
                      src="/images/treatment-in-progress.png"
                      alt="施術中の様子"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">施術風景</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={500}>
                  <div className="relative">
                    <img
                      src="/images/customer-drinking-protein.png"
                      alt="お客様がソイプロテインを飲んでいる様子"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">ソイプロテイン</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={600}>
                  <div className="relative">
                    <img
                      src="/images/owner-playing-with-mosaku.png"
                      alt="オーナーがもさく君と遊んでいる様子"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">もさく君と触れ合い</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={700}>
                  <div className="relative">
                    <img
                      src="/images/mosaku-and-owner-side.png"
                      alt="看板犬もさく君とオーナーの横顔"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded">
                      <p className="text-sm font-semibold text-[#333333]">癒しの時間</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* メッセージ */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-[#81D4E6] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto soy-animate-gentlePulse">
                <h2 className="text-3xl font-medium text-white mb-6">オーナーからのメッセージ</h2>
                <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                  <p className="text-[#333333] leading-relaxed text-lg mb-4">
                    Soy Solareは、忙しい日常を忘れて心からリラックスしていただける空間を目指しています。
                  </p>
                  <p className="text-[#333333] leading-relaxed mb-4">
                    お一人お一人のお悩みに寄り添い、最適な施術をご提案いたします。
                    インナーケアにもこだわり、内側からの美しさもサポートいたします。
                  </p>
                  <p className="text-[#81D4E6] italic text-lg">
                    当サロンで心地よい時間をお過ごしいただき、
                    <br />
                    新しい自分に出会っていただけることを心より願っております。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <Footer />
      </div>{" "}
      {/* relative z-10の終了 */}
    </div>
  )
}
