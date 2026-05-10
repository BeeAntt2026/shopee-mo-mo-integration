"use client"

interface MomoSuccessScreenProps {
  onNext?: () => void
}

export function MomoSuccessScreen({ onNext }: MomoSuccessScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-[#D82D8B] relative overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-center">
        <span className="text-white font-medium text-sm">Thanh toan thanh cong</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success Animation */}
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-12 h-12 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {/* Confetti effect */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
          <div className="absolute -top-2 right-0 w-2 h-2 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: "100ms" }} />
          <div className="absolute top-0 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
          <div className="absolute bottom-0 -left-2 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        </div>

        <h2 className="text-white text-xl font-bold mb-2">Thanh toan thanh cong!</h2>
        <p className="text-white/70 text-sm mb-6">Giao dich da duoc xu ly</p>

        {/* Amount */}
        <div className="text-white text-3xl font-bold mb-8">28.490.000d</div>

        {/* Transaction Details */}
        <div className="w-full bg-white rounded-2xl p-4 shadow-lg">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Ma giao dich</span>
              <span className="text-gray-800 font-mono text-xs">MM240115001234</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Thoi gian</span>
              <span className="text-gray-800">15/01/2024 09:41:23</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Don hang Shopee</span>
              <span className="text-gray-800">#SP2401150001</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Nguon tien</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-[#D82D8B] rounded flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">M</span>
                </div>
                <span className="text-gray-800">Vi MoMo</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">So tien</span>
                <span className="text-[#D82D8B] font-bold">28.490.000d</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 space-y-3">
        <button 
          onClick={onNext}
          className="w-full py-3 bg-white text-[#D82D8B] rounded-xl font-medium hover:bg-white/90 transition-colors"
        >
          Quay lai Shopee
        </button>
        <button className="w-full py-3 bg-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/20 transition-colors">
          Xem chi tiet giao dich
        </button>
      </div>

      {/* Push Notification Simulation */}
      <div className="absolute top-16 left-3 right-3 bg-white rounded-xl p-3 shadow-2xl animate-bounce">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#EE4D2D] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-gray-800">Shopee</span>
              <span className="text-xs text-gray-400">now</span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5">
              Thanh toan thanh cong! Don hang #SP2401150001 dang duoc xu ly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
