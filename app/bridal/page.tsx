"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Crown, Calendar, Clock, Phone } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
import Link from "next/link"
import { useEffect } from "react"

export default function BridalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F8FF]">
      <Header />
      {/* 背景アニメーション */}
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
        {/* ページヘッダー */}
        <section className="py-16 bg-gradient-to-r from-pink-100 to-[#81D4E6]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-4">Bridal Esthetic</h1>
            <p className="text-lg text-white">よこはま短期集中花嫁コース</p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </section>

        {/* メインビジュアル */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <ScrollAnimationWrapper animation="slideLeft" delay={100}>
                    <div>
                      <Badge className="bg-pink-100 text-pink-700 px-4 py-2 text-lg mb-4">★花嫁様限定★</Badge>
                      <h2 className="text-3xl lg:text-4xl font-medium text-[#81D4E6] mb-6">
                        よこはま短期集中
                        <br />
                        花嫁コース
                      </h2>
                      <p className="text-lg text-[#333333] leading-relaxed mb-6">
                        人生最高の日のための特別コース。短期間で集中的に美しさを磨き上げ、
                        結婚式当日に最高の輝きを手に入れていただけます。
                      </p>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-pink-500" />
                          <span className="text-[#333333]">短期集中プログラム</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Sparkles className="h-5 w-5 text-pink-500" />
                          <span className="text-[#333333]">特別価格</span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                </div>

                <div className="relative">
                  <ScrollAnimationWrapper animation="fadeUp" delay={200}>
                    <img
                      src="/images/bridal-main.jpeg"
                      alt="笑顔の美しい花嫁"
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                      <Crown className="h-6 w-6 text-pink-600" />
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 花嫁エステコース詳細 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-gradient-to-r from-pink-50 to-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">よこはま短期集中花嫁コース</h2>
                <div className="w-16 h-1 bg-pink-300 mx-auto"></div>
              </div>

              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <Card className="bg-white border-pink-200 shadow-xl mb-12">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-pink-100 text-pink-700 px-3 py-1">★人気No.1★</Badge>
                          <h3 className="text-2xl font-semibold text-[#333333]">短期集中スペシャルコース</h3>
                        </div>
                        <p className="text-lg text-[#333333] mb-6">
                          結婚式に向けて短期間で集中的にケア。フェイシャル、ボディ、脱毛をトータルでサポートします。
                        </p>

                        <div className="mb-6">
                          <h4 className="font-medium text-[#333333] mb-3">コース内容</h4>
                          <ul className="space-y-2 text-[#333333]">
                            <li>• 濃密生プラセンタ美顔 4回（¥7,980）</li>
                            <li>• 光フェイシャル 4回</li>
                            <li>• 光脱毛 2回</li>
                            <li>• 痩身 4回</li>
                            <li>• ダイエットコース 30日分</li>
                          </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg mb-6 border border-pink-200">
                          <h4 className="font-medium text-[#333333] mb-2">料金</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <span className="text-3xl font-bold text-[#81D4E6]">¥169,800</span>
                            </div>
                            <p className="text-sm text-gray-500">通常価格より大幅割引の特別価格</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <img
                          src="/images/bridal-elegant.png"
                          alt="エレガントな花嫁エステイメージ"
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 施術の流れ */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">施術の流れ</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "STEP 1",
                    title: "カウンセリング",
                    description: "お肌の状態とご希望をお聞きし、最適なプランをご提案",
                    number: "39",
                  },
                  {
                    step: "STEP 2",
                    title: "フェイシャルケア",
                    description: "生プラセンタと光フェイシャルでお顔を完璧に仕上げ",
                    number: "40",
                  },
                  {
                    step: "STEP 3",
                    title: "ボディケア",
                    description: "痩身マッサージでボディラインを美しく整える",
                    number: "41",
                  },
                  {
                    step: "STEP 4",
                    title: "脱毛ケア",
                    description: "ドレスから見える部分の光脱毛で完璧な仕上がり",
                    number: "42",
                  },
                ].map((item, index) => (
                  <ScrollAnimationWrapper animation="fadeUp" delay={index * 100} key={index}>
                    <Card className="bg-white border-pink-200 shadow-lg hover:shadow-xl transition-shadow h-full">
                      <CardContent className="p-6 text-center">
                        <Badge className="bg-pink-100 text-pink-700 mb-3">{item.step}</Badge>
                        <h3 className="text-lg font-semibold text-[#333333] mb-3">{item.title}</h3>
                        <p className="text-[#333333] text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* スケジュール提案 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">おすすめスケジュール</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-pink-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">挙式3ヶ月前</h3>
                      <p className="text-[#333333] text-sm mb-4">初回カウンセリング＋施術開始</p>
                      <p className="text-pink-600 font-semibold">集中ケアスタート</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-pink-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">挙式1ヶ月前</h3>
                      <p className="text-[#333333] text-sm mb-4">中間チェック＋調整</p>
                      <p className="text-pink-600 font-semibold">美容効果を実感</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-pink-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#333333] mb-3">挙式1週間前</h3>
                      <p className="text-[#333333] text-sm mb-4">最終仕上げ</p>
                      <p className="text-pink-600 font-semibold">完璧な美しさを実現</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* お客様の声 */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">花嫁様の声</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                  <Card className="bg-gradient-to-r from-pink-50 to-white border-pink-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src="/images/hanayome2.png"
                          alt="お客様A様のアイコン"
                          className="w-16 h-16 object-contain rounded-full flex-shrink-0 bg-gray-200 p-2"
                        />
                        <div>
                          <h4 className="font-semibold text-[#333333]">A様（28歳）</h4>
                          <p className="text-sm text-gray-500">2024年春挙式</p>
                        </div>
                      </div>
                      <p className="text-[#333333] italic">
                        「短期集中コースで本当に変わりました！フェイシャルも脱毛も痩身も全部含まれていて、
                        この価格は信じられないくらいお得でした。当日は自信を持ってドレスを着ることができました。」
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={200}>
                  <Card className="bg-gradient-to-r from-pink-50 to-white border-pink-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src="/images/nhanayome1.png"
                          alt="お客様M様のアイコン"
                          className="w-16 h-16 object-contain rounded-full flex-shrink-0 bg-gray-200 p-2"
                        />
                        <div>
                          <h4 className="font-semibold text-[#333333]">M様（26歳）</h4>
                          <p className="text-sm text-gray-500">2024年秋挙式</p>
                        </div>
                      </div>
                      <p className="text-[#333333] italic">
                        「ダイエットコースも付いていて、結婚式までに理想の体型になれました！ 写真を見返すたびに、SOY
                        SOLAREでお手入れしてもらって本当に良かったと思います。」
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 予約CTA */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-gradient-to-r from-pink-100 to-[#81D4E6] rounded-2xl mx-4 my-12 shadow-xl">
            <div className="container mx-auto px-4 text-center soy-animate-gentlePulse">
              <h2 className="text-3xl font-medium text-white mb-4">よこはま短期集中花嫁コースのご予約</h2>
              <p className="text-white mb-8 text-lg">人生最高の日のために、今すぐご相談ください</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/access#contact">
                  <Button className="bg-white text-[#81D4E6] hover:bg-gray-100 px-8 py-3 text-lg">
                    ご予約フォーム
                  </Button>
                </Link>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#81D4E6] px-8 py-3 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  045-941-0021
                </Button>
              </div>
              <p className="text-white/90 text-sm mt-4">※花嫁エステは完全予約制です</p>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <Footer />
      </div>
    </div>
  )
}
