"use client"

interface MomoSuccessScreenProps {
  onNext?: () => void
}

export function MomoSuccessScreen({ onNext }: MomoSuccessScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-[#D82D8B] relative overflow-hidden text-[11px]">
      {/* Header */}
      <div className="px-3 py-2 flex items-center justify-center">
        <span className="text-white font-medium text-[11px]">Thanh toan thanh cong</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-3 pb-2">
        {/* Success Animation */}
        <div className="relative mb-3">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-8 h-8 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-white text-[14px] font-bold mb-1">Thanh toan thanh cong!</h2>
        <p className="text-white/70 text-[10px] mb-3">Giao dich da duoc xu ly</p>

        {/* Amount */}
        <div className="text-white text-[20px] font-bold mb-3">28.490.000d</div>

        {/* Transaction Details */}
        <div className="w-full bg-white rounded-xl p-3 shadow-md">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Ma giao dich</span>
              <span className="text-gray-800 font-mono text-[9px]">MM240115001234</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Thoi gian</span>
              <span className="text-gray-800 text-[9px]">15/01/2024 09:41</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Don hang Shopee</span>
              <span className="text-gray-800">#SP2401150001</span>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-600 font-medium">So tien</span>
                <span className="text-[#D82D8B] font-bold">28.490.000d</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-4 pb-3 pt-1">
        <button 
          onClick={onNext}
          className="w-full py-2 bg-white text-[#D82D8B] rounded-lg text-[10px] font-medium hover:bg-white/90 transition-colors"
        >
          Quay lai Shopee
        </button>
        <button className="w-full mt-2 text-white/80 text-[9px] hover:text-white transition-colors">
          Xem chi tiet giao dich
        </button>
      </div>

      {/* Push Notification Simulation */}
      <div className="absolute top-10 left-3 right-3 bg-white rounded-lg p-2 shadow-lg">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 bg-[#EE4D2D] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-[10px]">S</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[10px] text-gray-800">Shopee</span>
              <span className="text-[9px] text-gray-400">now</span>
            </div>
            <p className="text-[9px] text-gray-600 mt-0.5">
              Thanh toan thanh cong! Don hang #SP2401150001 dang duoc xu ly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
