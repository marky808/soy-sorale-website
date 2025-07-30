"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper"
import { useEffect } from "react"

export default function MenuPage() {
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
        <section className="py-16 bg-[#81D4E6]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-4">Menu</h1>
            <p className="text-lg text-white">すべてのコースにデトックスハーブティとソイプロテインが付いています</p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
        </section>

        {/* フェイシャルメニュー */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Facial Menu</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              {/* 濃密生プラセンタ美顔 */}
              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <Card className="mb-12 bg-gradient-to-r from-[#F8F8FF] to-white border-[#81D4E6] shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-[#81D4E6] text-white px-3 py-1">★1番人気★</Badge>
                          <h3 className="text-2xl font-semibold text-[#333333]">濃密生プラセンタ美顔</h3>
                        </div>
                        <p className="text-lg text-[#333333] mb-6">
                          究極のアンチエイジングでお肌が蘇る。非加熱の冷凍保存の生プラセンタをナノスキンニードルを使って直接肌に導入。シミ・しわ・乾燥の改善。
                        </p>

                        <div className="mb-6">
                          <h4 className="font-medium text-[#333333] mb-3">60分コース</h4>
                          <ul className="space-y-2 text-[#333333]">
                            <li>• デコルテ周りのマッサージ</li>
                            <li>• 洗顔</li>
                            <li>• 生プラセンタ塗布</li>
                            <li>• 高級パックでクールダウン</li>
                            <li>• 頭皮マッサージ</li>
                          </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg mb-6 border border-[#81D4E6]">
                          <h4 className="font-medium text-[#333333] mb-2">料金</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl font-bold text-[#81D4E6]">¥7,980</span>
                              <Badge className="bg-red-100 text-red-700">初回限定</Badge>
                            </div>
                            <p className="text-[#333333]">5回券: ¥49,800</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <img
                          src="/images/needle.png"
                          alt="濃密生プラセンタ美顔のナノニードル施術詳細"
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>

              {/* オプションメニュー */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#81D4E6] mb-6 text-center">
                  オプションメニュー（各¥3,000）
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                    <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow">
                      <CardContent className="p-6">
                        <img
                          src="/images/light-facial-treatment.png"
                          alt="光フェイシャル施術の実際の様子"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <h4 className="text-lg font-medium text-[#333333] mb-3 mt-4">光フェイシャル</h4>
                        <p className="text-[#333333] text-sm mb-3">
                          光を肌に照射することで、しみ・そばかす・小じわ・毛穴開き・赤ら顔などを改善
                        </p>
                        <p className="text-[#81D4E6] font-bold">¥3,000</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                    <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow">
                      <CardContent className="p-6">
                        <img
                          src="/images/rejuran-treatment.png"
                          alt="リジュラン施術の実際の様子"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <h4 className="text-lg font-medium text-[#333333] mb-3 mt-4">リジュラン</h4>
                        <p className="text-[#333333] text-sm mb-3">
                          サーモンDNAから抽出される成分が、肌のハリや弾力アップ。目元のたるみやしわにも効果あり
                        </p>
                        <p className="text-[#81D4E6] font-bold">¥3,000</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>

                  <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                    <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow">
                      <CardContent className="p-6">
                        <img
                          src="/images/lemon-bottle-product.png"
                          alt="レモンボトル（脂肪溶解剤）商品画像"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <h4 className="text-lg font-medium text-[#333333] mb-3 mt-4">小顔&脂肪燃焼</h4>
                        <p className="text-[#333333] text-sm mb-3">
                          エラ張り解消マッサージ。完全オーガニックの脂肪溶解剤「レモンボトル」でアゴと頬の脂肪を減らします
                        </p>
                        <p className="text-[#81D4E6] font-bold">¥3,000</p>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                </div>
              </div>

              {/* 学生専用メニュー */}
              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <Card className="mb-12 bg-gradient-to-r from-green-50 to-white border-green-200 shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="bg-green-100 text-green-700 px-3 py-1 mb-4">★学生専用★</Badge>
                      <h3 className="text-xl font-semibold text-[#333333] mb-4">光フェイシャル</h3>
                      <p className="text-[#333333] mb-4">
                        光を肌に照射することでニキビ跡・そばかす・毛穴開き・赤ら顔などを改善（マッサージなし）
                      </p>
                      <p className="text-2xl font-bold text-[#81D4E6]">¥3,000</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 光脱毛メニュー */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">光脱毛メニュー</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              {/* 初回限定お試し */}
              <Card className="mb-12 bg-gradient-to-r from-[#81D4E6] to-[#5FB3C7] shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    初回限定お試し価格！（1部位のみ）カウンセリング付き
                  </h3>
                  <p className="text-4xl font-bold text-white">¥1,980！</p>
                </CardContent>
              </Card>

              {/* 脱毛部位一覧 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    name: "顔",
                    price: "¥7,980",
                    package5: "¥29,800 (¥5,960/回)",
                    package10: "¥39,800 (¥3,980/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/face-hair-removal-treatment.png",
                  },
                  {
                    name: "うなじ",
                    price: "¥6,980",
                    package5: "¥25,900 (¥5,180/回)",
                    package10: "¥34,900 (¥3,490/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/nape-hair-removal.png",
                  },
                  {
                    name: "ワキ",
                    price: "¥6,980",
                    package5: "¥25,900 (¥5,180/回)",
                    package10: "¥34,900 (¥3,490/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/armpit-hair-removal-treatment.png",
                  },
                  {
                    name: "うで",
                    price: "¥7,980",
                    package5: "¥29,800 (¥5,960/回)",
                    package10: "¥39,800 (¥3,980/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/arm-hair-removal-treatment.png",
                  },
                  {
                    name: "背中",
                    price: "¥7,980",
                    package5: "¥29,800 (¥5,960/回)",
                    package10: "¥39,800 (¥3,980/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/back-hair-removal-treatment.png",
                  },
                  {
                    name: "あし",
                    price: "¥9,980",
                    package5: "¥37,500 (¥7,500/回)",
                    package10: "¥49,800 (¥4,980/回)",
                    discount5: "25%off",
                    discount10: "50%off",
                    image: "/images/leg-hair-removal-treatment.png",
                  },
                ].map((item, index) => (
                  <ScrollAnimationWrapper animation="fadeUp" delay={index * 100} key={index}>
                    <Card
                      className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow h-full flex flex-col"
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name}脱毛のイメージ`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="mt-4 flex-grow flex flex-col">
                          <h4 className="text-lg font-semibold text-[#333333] mb-3">{item.name}</h4>
                          <div className="space-y-2 text-sm flex-grow">
                            <p>
                              都度払い: <span className="font-bold text-[#81D4E6]">{item.price}</span>
                            </p>
                            <p>
                              5回券: <span className="font-bold">{item.package5}</span>{" "}
                              <span className="text-green-600">({item.discount5})</span>
                            </p>
                            <p>
                              10回券: <span className="font-bold">{item.package10}</span>{" "}
                              <span className="text-green-600">({item.discount10})</span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimationWrapper>
                ))}
              </div>

              {/* VIO・Mensヒゲ */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6">
                      <img
                        src="/images/vio-hair-removal-treatment.png"
                        alt="VIO脱毛施術"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <h4 className="text-lg font-semibold text-[#333333] mb-3 mt-4">VIO</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          都度払い: <span className="font-bold text-[#81D4E6]">¥11,980</span>
                        </p>
                        <p>
                          5回券: <span className="font-bold">¥44,900 (¥8,790/回)</span>{" "}
                          <span className="text-green-600">(25%off)</span>
                        </p>
                        <p>
                          10回券: <span className="font-bold">¥59,900 (¥5,980/回)</span>{" "}
                          <span className="text-green-600">(50%off)</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6">
                      <img
                        src="/images/mens-beard-removal-treatment.png"
                        alt="Mensヒゲ脱毛施術"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <h4 className="text-lg font-semibold text-[#333333] mb-3 mt-4">Mensヒゲ</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          都度払い: <span className="font-bold text-[#81D4E6]">¥7,980</span>
                        </p>
                        <p>
                          5回券: <span className="font-bold">¥29,800 (¥5,960/回)</span>{" "}
                          <span className="text-green-600">(25%off)</span>
                        </p>
                        <p>
                          10回券: <span className="font-bold">¥39,800 (¥3,980/回)</span>{" "}
                          <span className="text-green-600">(50%off)</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>

              {/* 特別コース */}
              <div className="space-y-8">
                <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                  <Card className="bg-gradient-to-r from-[#81D4E6] to-[#5FB3C7] shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">全身つるつる極みコース</h3>
                      <div className="text-white space-y-2">
                        <p className="text-2xl font-bold">
                          10回コース: ¥449,000 → ¥198,000 <span className="text-lg">(50%off)</span>
                        </p>
                        <p className="font-medium">極み特典</p>
                        <p>定価¥5,000美肌光フェイシャル10回分プレゼント</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="fadeUp" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#333333] mb-4">オプション（1部位）</h3>
                      <p className="text-2xl font-bold text-[#81D4E6]">¥3,000</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* ボディメニュー */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-[#F5F5F5] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Body Menu</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/body-slimming-massage-treatment.png"
                        alt="全身脂肪撃退コース施術風景"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-[#333333] mb-3">全身痩せマッサージ</h3>
                        <p className="text-[#333333] mb-4 flex-grow">
                          足湯やヒートマットで体を芯から温めて発汗
                          <br />
                          痩身マシンとハンドマッサージ
                          <br />
                          早く痩せたい方におすすめ
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-[#333333]">90分</span>
                          <span className="text-2xl font-bold text-[#81D4E6]">¥9,800</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/full-body-oil-massage-treatment.png"
                        alt="極癒し全身オイルマッサージ"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-[#333333] mb-3">極癒し全身オイルマッサージ</h3>
                        <p className="text-[#333333] mb-4 flex-grow">
                          全身をオイルマッサージで日ごろの疲れを癒します
                          <br />
                          ご希望をお聞きしてオーダーメイドで施術します
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-[#333333]">90分</span>
                          <span className="text-2xl font-bold text-[#81D4E6]">¥7,800</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg soy-hover-lift transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        src="/images/neck-shoulder-massage-treatment.png"
                        alt="首肩極癒し施術"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold text-[#333333] mb-3">首肩極癒しマッサージ</h3>
                        <p className="text-[#333333] mb-4 flex-grow">
                          デコルテ周りをオイルマッサージ
                          <br />
                          サクッと癒されたい方におすすめ
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-[#333333]">45分</span>
                          <span className="text-2xl font-bold text-[#81D4E6]">¥4,800</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={400}>
                  <Card className="bg-gradient-to-r from-[#81D4E6] to-[#5FB3C7] shadow-lg soy-hover-lift transition-shadow h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <img
                          src="/images/loyal.png"
                          alt="ロイヤルコース施術風景"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className="bg-white text-[#81D4E6]">★Premium★</Badge>
                          <h3 className="text-xl font-semibold text-white">ロイヤルコース</h3>
                        </div>
                        <p className="text-white mb-4 flex-grow">
                          全身痩せマッサージ + 濃密生プラセンタ美顔 + 光フェイシャル
                          <br />
                          人気No.1・2の組み合わせ。極上の時間をお届けします
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-white">180分</span>
                          <span className="text-2xl font-bold text-white">¥30,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Inner Beauty（ダイエットプラン） */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Inner Beauty</h2>
                <p className="text-[#333333] mb-4">エステメニューと併用した自宅ダイエットプラン</p>
                <p className="text-sm text-[#333333]">
                  お食事の指導・ZOOMエクササイズの参加・LINEサポートの無料特典付き
                  <br />
                  3ヶ月で確実に結果を出しましょう
                </p>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <Badge className="bg-green-100 text-green-700 mb-2">ライト</Badge>
                        <h3 className="text-lg font-semibold text-[#333333]">基本セット + ソイプロテイン2本</h3>
                        <p className="text-sm text-[#333333] mt-2">脂肪撃退コース4回</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 line-through">¥197,850</p>
                        <p className="text-2xl font-bold text-[#81D4E6]">¥168,000</p>
                        <Badge className="bg-red-100 text-red-700 text-xs">15%off</Badge>
                        <p className="text-xs text-[#333333] mt-2">×3ヶ月</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">スタンダード</Badge>
                        <h3 className="text-lg font-semibold text-[#333333]">基本セット + ソイプロテイン2本</h3>
                        <p className="text-sm text-[#333333] mt-2">
                          セルロス・ファイバーボンド
                          <br />
                          トータルスリム
                          <br />
                          脂肪撃退コース4回
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 line-through">¥272,300</p>
                        <p className="text-2xl font-bold text-[#81D4E6]">¥204,200</p>
                        <Badge className="bg-red-100 text-red-700 text-xs">25%off</Badge>
                        <p className="text-xs text-[#333333] mt-2">×3ヶ月</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={300}>
                  <Card className="bg-white border-[#81D4E6] shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <Badge className="bg-purple-100 text-purple-700 mb-2">プレミアム</Badge>
                        <h3 className="text-lg font-semibold text-[#333333]">フルセット</h3>
                        <p className="text-sm text-[#333333] mt-2">
                          基本セット + 各種サプリメント
                          <br />
                          脂肪撃退コース4回
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 line-through">¥520,400</p>
                        <p className="text-2xl font-bold text-[#81D4E6]">¥338,260</p>
                        <Badge className="bg-red-100 text-red-700 text-xs">35%off</Badge>
                        <p className="text-xs text-[#333333] mt-2">×3ヶ月</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 花嫁エステメニュー */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-gradient-to-r from-pink-50 to-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">Bridal Menu</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <ScrollAnimationWrapper animation="fadeUp" delay={100}>
                <Card className="bg-gradient-to-r from-pink-50 to-white border-pink-200 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-pink-100 text-pink-700 px-3 py-1">★花嫁様限定★</Badge>
                          <h3 className="text-2xl font-semibold text-[#333333]">よこはま短期中集中花嫁コース</h3>
                        </div>
                        <p className="text-lg text-[#333333] mb-6">
                          人生最高の日のための特別コース。短期間で集中的に美しさを磨き上げます。
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

                        <Link href="/bridal">
                          <Button className="bg-[#81D4E6] hover:bg-[#5FB3C7] text-white px-6 py-2">詳細を見る</Button>
                        </Link>
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

        {/* 割引コース */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-20 bg-white rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-[#81D4E6] mb-4">割引コース</h2>
                <div className="w-16 h-1 bg-[#81D4E6] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ScrollAnimationWrapper animation="scaleIn" delay={100}>
                  <Card className="bg-gradient-to-r from-green-50 to-white border-green-200 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Badge className="bg-green-100 text-green-700 mb-4">学割コース</Badge>
                      <h3 className="text-xl font-semibold text-[#333333] mb-4">
                        中高大生安心の全メニュー定価の50%off
                      </h3>
                      <p className="text-[#333333]">学生証の提示が必要です</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper animation="scaleIn" delay={200}>
                  <Card className="bg-gradient-to-r from-blue-50 to-white border-blue-200 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Badge className="bg-blue-100 text-blue-700 mb-4">親子割コース</Badge>
                      <h3 className="text-xl font-semibold text-[#333333] mb-4">お一人当たり全メニュー定価の50%off</h3>
                      <p className="text-[#333333]">親子でのご利用が条件です</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* 予約CTA */}
        <ScrollAnimationWrapper animation="fadeUp">
          <section className="py-16 bg-[#81D4E6] rounded-2xl mx-4 my-12 shadow-lg">
            <div className="container mx-auto px-4 text-center animate-gentlePulse">
              <h2 className="text-3xl font-medium text-white mb-4">ご予約・ご相談はお気軽に</h2>
              <p className="text-white mb-8">完全予約制・1日3組限定のプライベートサロンです</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/access#contact">
                  <Button className="bg-white text-[#81D4E6] hover:bg-gray-100">ご予約フォーム</Button>
                </Link>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#81D4E6]">
                  TEL: 045-941-0021
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        <Footer />
      </div>
    </div>
  )
}
