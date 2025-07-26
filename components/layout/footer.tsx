export default function Footer() {
  return (
    <footer className="bg-[#81D4E6] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* サロン情報 */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">Soy Solare</div>
            <p className="text-white/90 mb-4">横浜・仲町台駅徒歩3分の隠れ家エステサロン</p>
            <p className="text-sm text-white/80">大人女性が心から癒される特別な時間を提供いたします</p>
          </div>

          {/* 営業情報 */}
          <div>
            <h3 className="font-semibold text-white mb-4">営業情報</h3>
            <div className="space-y-2 text-sm text-white/90">
              <p>営業時間: 11:00-22:00</p>
              <p>定休日: 水曜日</p>
              <p>完全予約制・1日3組限定</p>
              <p>TEL: 045-941-0021</p>
            </div>
          </div>

          {/* アクセス */}
          <div>
            <h3 className="font-semibold text-white mb-4">アクセス</h3>
            <div className="space-y-2 text-sm text-white/90">
              <p>〒224-0041</p>
              <p>横浜市都筑区仲町台1-15-15</p>
              <p>磯部ビル402</p>
              <p>仲町台駅徒歩3分</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">© 2024 Soy Solare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
