"use client"

interface ShopeeConfirmScreenProps {
  onPrev?: () => void
}

export function ShopeeConfirmScreen({ onPrev }: ShopeeConfirmScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-[#EE4D2D] px-3 py-3 flex items-center gap-3">
        <button onClick={onPrev} className="hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-white font-medium text-sm">Chi tiet don hang</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Dat hang thanh cong!</div>
              <div className="text-sm text-white/80">Don hang dang duoc xu ly</div>
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white p-4 mt-2">
          <h3 className="text-sm font-semibold mb-4">Trang thai don hang</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="w-0.5 h-8 bg-[#22C55E]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#22C55E]">Da thanh toan</div>
                <div className="text-xs text-gray-500">15/01/2024 09:41</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-[#EE4D2D] rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-0.5 h-8 bg-gray-200" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#EE4D2D]">Dang dong goi</div>
                <div className="text-xs text-gray-500">Uu tien xu ly</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
                <div className="w-0.5 h-8 bg-gray-200" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Dang giao hang</div>
                <div className="text-xs text-gray-400">Du kien trong ngay</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Da giao hang</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-white p-4 mt-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Thanh toan qua</h3>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-[#D82D8B] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">M</span>
              </div>
              <span className="text-sm text-[#D82D8B] font-medium">Vi MoMo</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-500">Ma giao dich MoMo</span>
              <span className="font-mono">MM240115001234</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Da thanh toan</span>
              <span className="text-[#22C55E] font-semibold">28.490.000d</span>
            </div>
          </div>
        </div>

        {/* Fast Delivery Badge */}
        <div className="bg-[#EE4D2D]/10 mx-4 mt-4 p-3 rounded-xl border border-[#EE4D2D]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EE4D2D] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#EE4D2D]">Giao hang nhanh</div>
              <div className="text-xs text-gray-600">
                Don thanh toan MoMo duoc uu tien giao trong ngay tai TP.HCM
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 mt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#EE4D2D] text-white text-[8px] px-1 rounded">Mall</span>
            <span className="text-sm font-medium">Apple Store Official</span>
          </div>
          <div className="flex gap-3">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-xs text-gray-800">iPhone 15 Pro Max 256GB</h4>
              <div className="text-[10px] text-gray-500">Titan Den x1</div>
              <div className="text-[#EE4D2D] font-bold text-sm mt-1">28.490.000d</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200 p-3 flex gap-2">
        <button className="flex-1 py-2.5 border border-[#EE4D2D] text-[#EE4D2D] rounded-lg text-sm font-medium hover:bg-[#EE4D2D]/5 transition-colors">
          Lien he Shop
        </button>
        <button className="flex-1 py-2.5 bg-[#EE4D2D] text-white rounded-lg text-sm font-medium hover:bg-[#EE4D2D]/90 transition-colors">
          Theo doi don hang
        </button>
      </div>
    </div>
  )
}
