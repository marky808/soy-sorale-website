"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, FlaskConical, Leaf, Clock, Phone, MapPin } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import MobileCTA from "@/components/MobileCTA"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
import Link from "next/link"

export default function SoySelareHome() {
  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      {/* 背景アニメーション - 元の動作する形 */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="wave-container">
          <div className="floating-element-1"></div>
          <div className="floating-element-2"></div>
          <div className="floating-element-3"></div>
          <div className="floating-element-4"></div>
          <div className="floating-element-5"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* メインビジュアル */}
        <section className="relative mb-12">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* 左側：画像 */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32557116_s.jpg-iRv8L6ESxeztISWLz5sGfToYPxVARu.jpeg"
                alt="リラックスしたエステサロンでのマッサージ施術風景"
                className="w-full h-full min-h-[500px] object-cover"
              />
            </div>

            {/* 右側：テキスト */}
            <div className="bg-[#81D4E6] flex items-center justify-center p-8 lg:p-12">
              <div className="text-center text-white max-w-md">
                <Badge className="bg-white text-[#81D4E6] px-6 py-2 text-lg mb-6">横浜・仲町台駅徒歩3分</Badge>
                <h1 className="text-3xl lg:text-5xl font-medium mb-4">大人女性のための</h1>
                <h2 className="text-2xl lg:text-4xl font-medium mb-6 text-white">隠れ家サロン</h2>
                <p className="text-lg lg:text-xl mb-8 leading-relaxed">1日3組限定の特別な空間で、心と身体を癒す</p>
                <Link href="/access#contact">
                  <Button className="bg-white text-[#81D4E6] hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    ご予約・ご相談はこちら
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* キャッチコピーセクション */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-gradient-to-r from-[#F8F8FF] via-white to-[#F8F8FF] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* 左側：キャッチコピー */}
                <div className="lg:col-span-3 space-y-6">
                  <ScrollAnimationWrapper animation="slideLeft" delay={100}>
                    <div className="text-center lg:text-left">
                      <h2 className="text-2xl lg:text-4xl font-medium text-[#333333] mb-4 leading-tight">
                        忙しい毎日に、
                        <br />
                        <span className="text-[#81D4E6]">特別な癒しの時間を</span>
                      </h2>
                      <div className="w-24 h-1 bg-[#81D4E6] mx-auto lg:mx-0 mb-6"></div>
                      <p className="text-lg text-[#333333] leading-relaxed mb-6">
                        仲町台駅徒歩3分の隠れ家サロンで、あなただけの贅沢な時間を。
                        <br />
                        最新技術とインナーケアで、内側から輝く美しさを手に入れませんか？
                      </p>

                      {/* 特徴ポイント */}
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#81D4E6] rounded-full"></div>
                          <span className="text-[#333333]">1日3組限定の完全プライベート空間</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#81D4E6] rounded-full"></div>
                          <span className="text-[#333333]">22時まで営業でお仕事帰りもOK</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#81D4E6] rounded-full"></div>
                          <span className="text-[#333333]">デトックスハーブティー＆ソイプロテイン付き</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#81D4E6] rounded-full"></div>
                          <span className="text-[#333333]">高級アメニティ・シャワー完備</span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                </div>

                {/* 右側：装飾画像 */}
                <div className="lg:col-span-2 flex justify-center">
                  <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                    <div className="relative">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4970637_s.jpg-GG6FiT82GQlJtfpmxOVgNybcpmcWZd.jpeg"
                        alt="エステサロンの美しい花とタオルの装飾"
                        className="w-64 lg:w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl soy-hover-lift"
                      />
                      {/* 装飾要素 */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#81D4E6] rounded-full opacity-70 animate-pulse"></div>
                      <div
                        className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#81D4E6] rounded-full opacity-50 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 -left-6 w-6 h-6 bg-white rounded-full opacity-80 animate-pulse"
                        style={{ animationDelay: "2s" }}
                      ></div>
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>

              {/* 下部：次へのスクロール誘導 */}
              <ScrollAnimationWrapper animation="fadeUp" delay={300}>
                <div className="text-center mt-16">
                  <p className="text-[#81D4E6] font-semibold mb-4">あなたにぴったりのメニューを見つけてください</p>
                  <div className="flex justify-center">
                    <div className="animate-bounce">
                      <svg className="w-6 h-6 text-[#81D4E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* おすすめメニュー */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-medium text-center mb-12 text-[#81D4E6]">おすすめメニュー</h2>
              <div className="grid md:grid-cols-4 gap-8 items-stretch">
                {/* メニューカード1 */}
                <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/needle.png"
                        alt="濃密生プラセンタ美顔のナノニードル施術風景"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <Badge className="bg-[#81D4E6] text-white mb-2 w-fit">★おすすめ★</Badge>
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">濃密生プラセンタ美顔</h3>
                        <p className="text-gray-600 text-sm mb-3 flex-grow">
                          究極のアンチエイジングでお肌が蘇る。非加熱の生プラセンタを直接お肌に導入。
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-[#81D4E6]">¥7,980</span>
                          <span className="text-sm text-gray-400 line-through">¥16,000</span>
                          <Badge className="bg-red-100 text-red-700 text-xs">初回限定</Badge>
                        </div>
                        <Link href="/menu">
                          <Button className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white mt-auto">
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* メニューカード2 */}
                <ScrollAnimationWrapper animation="fadeUp" delay={200}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/loyal.png"
                        alt="ロイヤルコースのリラックスマッサージ風景"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">ロイヤルコース</h3>
                        <p className="text-gray-600 text-sm mb-3 flex-grow">
                          全身痩せマッサージ + 濃密生プラセンタ美顔 + 光フェイシャル。極上の時間。
                        </p>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-[#81D4E6]">¥30,000</span>
                          <p className="text-sm text-gray-500">時間: 180分</p>
                        </div>
                        <Link href="/menu">
                          <Button className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white mt-auto">
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* メニューカード3 */}
                <ScrollAnimationWrapper animation="fadeUp" delay={300}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/hikari.png"
                        alt="光脱毛施術風景"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">光脱毛お試し</h3>
                        <p className="text-gray-600 text-sm mb-3 flex-grow">
                          初回限定価格！カウンセリング付き。1部位のみ。
                        </p>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-2xl font-bold text-[#81D4E6]">¥1,980</span>
                          <Badge className="bg-red-100 text-red-700 text-xs">初回限定</Badge>
                        </div>
                        <Link href="/menu">
                          <Button className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white mt-auto">
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* メニューカード4 - 花嫁メニュー */}
                <ScrollAnimationWrapper animation="fadeUp" delay={400}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/bridal-main.jpeg"
                        alt="笑顔の美しい花嫁"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <Badge className="bg-pink-100 text-pink-700 mb-2 w-fit">★花嫁様限定★</Badge>
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">よこはま短期集中花嫁コース</h3>
                        <p className="text-gray-600 text-sm mb-3 flex-grow">
                          人生最高の日のための特別コース。フェイシャル・ボディ・脱毛をトータルケア。
                        </p>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-[#81D4E6]">¥169,800</span>
                          <p className="text-sm text-gray-500">特別価格</p>
                        </div>
                        <Link href="/bridal">
                          <Button className="w-full bg-[#81D4E6] hover:bg-[#5FB3C7] text-white mt-auto">
                            詳細を見る
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Soy Solareの特徴 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-medium text-center mb-12 text-[#81D4E6]">Soy Solareの特徴</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* 特徴1 */}
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/naisou.jpg"
                        alt="1日3組限定の清潔で落ち着いたサロン内装"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex items-start space-x-4 flex-grow">
                        <div className="w-12 h-12 bg-[#81D4E6] rounded-full flex items-center justify-center flex-shrink-0">
                          <Crown className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">1日3組限定</h3>
                          <p className="text-gray-600 text-sm">
                            ゆったりと過ごしていただきたいので1日3組限定にしています。お一人お一人のご希望を全て叶える施術を心がけています。
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* 特徴2 */}
                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/saisin.jpg"
                        alt="最新のナノニードル機器SKIN NEEDLE"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex items-start space-x-4 flex-grow">
                        <div className="w-12 h-12 bg-[#81D4E6] rounded-full flex items-center justify-center flex-shrink-0">
                          <FlaskConical className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">最新技術</h3>
                          <p className="text-gray-600 text-sm">最新のエステマシン導入で医療級の効果を実感</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* 特徴3 */}
                <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/herbal-tea-service.png"
                        alt="デトックスハーブティーとソイプロテインサービス"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex items-start space-x-4 flex-grow">
                        <div className="w-12 h-12 bg-[#81D4E6] rounded-full flex items-center justify-center flex-shrink-0">
                          <Leaf className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">インナーケア</h3>
                          <p className="text-gray-600 text-sm">
                            エステ前にデトックスハーブティーを飲んで代謝アップ。エステ後に栄養満点ソイプロテインで美肌をつくります。
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                {/* 特徴4 */}
                <ScrollAnimationWrapper animation="scaleIn" delay={400}>
                  <Card className="bg-white rounded-lg shadow-lg soy-hover-lift h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/yoru.jpg"
                        alt="夜でも安心な癒しのサロン空間"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex items-start space-x-4 flex-grow">
                        <div className="w-12 h-12 bg-[#81D4E6] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#81D4E6] mb-2">22時まで営業</h3>
                          <p className="text-gray-600 text-sm">
                            高級アメニティ・シャワー完備。22時までなのでお仕事帰りにもどうぞ。
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* サロン情報 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-medium text-center mb-12 text-[#81D4E6]">サロン情報</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {/* 基本情報 */}
                  <ScrollAnimationWrapper animation="slideLeft" delay={100}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-4">基本情報</h3>
                        <div className="space-y-3 text-[#333333]">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-[#81D4E6]" />
                            <span>
                              <strong>営業時間:</strong> 11:00-22:00
                            </span>
                          </div>
                          <p>
                            <strong>定休日:</strong> 水曜日
                          </p>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-[#81D4E6] mt-1" />
                            <div>
                              <p>
                                <strong>住所:</strong>
                              </p>
                              <button
                                onClick={() => {
                                  const address = "横浜市都筑区仲町台1-15-15磯部ビル402"
                                  const encodedAddress = encodeURIComponent(address)
                                  window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
                                    "_blank",
                                  )
                                }}
                                className="text-[#81D4E6] hover:text-[#5FB3C7] underline text-left"
                              >
                                横浜市都筑区仲町台1-15-15磯部ビル402
                              </button>
                              <p>
                                <strong>アクセス:</strong> 仲町台駅徒歩3分
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#81D4E6]" />
                            <span className="font-bold text-[#81D4E6]">045-941-0021</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>

                  {/* 看板犬紹介 */}
                  <ScrollAnimationWrapper animation="slideLeft" delay={200}>
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-[#81D4E6] mb-4">看板犬紹介</h3>
                        <div className="flex items-center space-x-4">
                          <img
                            src="/images/mosaku.png"
                            alt="看板犬もさく君"
                            className="w-20 h-20 object-cover rounded-full flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-[#333333]">看板犬「もさく」君</h4>
                            <p className="text-gray-600 text-sm">ワンちゃんに癒されたい方はどうぞ♪</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                </div>

                {/* マップ */}
                <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                  <div className="relative">
                    <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7759856237035!2d139.5878622752071!3d35.534533138019704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018594826899347%3A0x275315b51db6ec6b!2zU295IFNvbGFyZe-8iOOCveOCpOOCveODqeODvOODrO-8iSDjg5fjg6njgqTjg5njg7zjg4jnqbrplpPjgafosrTlpbPjgaDjgZHjga7jgqrjg7zjg4Djg7zjg6HjgqTjg4nmlr3ooZM!5e0!3m2!1sja!2sjp!4v1753217967943!5m2!1sja!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Soy Solare 地図"
                      ></iframe>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/95 px-4 py-3 rounded-lg shadow-md">
                      <p className="text-sm font-semibold text-[#333333]">Soy Solare</p>
                      <p className="text-xs text-[#333333]">仲町台駅から徒歩3分</p>
                      <p className="text-xs text-[#333333]">磯部ビル402</p>
                    </div>

                    {/* マップを開くボタンを削除 */}
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 予約CTA */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-[#81D4E6] rounded-2xl mx-4 my-12 shadow-xl mb-20 lg:mb-12">
            <div className="container mx-auto px-4 text-center soy-animate-gentlePulse">
              <h2 className="text-3xl font-medium text-white mb-4">ご予約・ご相談はお気軽に</h2>
              <p className="text-white mb-8 text-lg">完全予約制・1日3組限定のプライベートサロンです</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    window.location.href = "tel:045-941-0021"
                  }}
                  className="bg-white text-[#81D4E6] hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  045-941-0021
                </Button>
                <Link href="/access#contact">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#81D4E6] px-8 py-3 text-lg">
                    ご予約フォーム
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <Footer />

        {/* モバイル固定CTAボタン */}
        <MobileCTA />
      </div>
    </div>
  )
}
