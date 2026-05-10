"use client"

interface ShopeeConfirmScreenProps {
  onPrev?: () => void
}

export function ShopeeConfirmScreen({ onPrev }: ShopeeConfirmScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-gray-50 text-[11px]">
      {/* Header */}
      <div className="bg-[#EE4D2D] px-2 py-2 flex items-center gap-2">
        <button onClick={onPrev} className="hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-white font-medium text-[11px]">Chi tiet don hang</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] p-3 text-white">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[11px]">Đặt hàng thành công!</div>
              <div className="text-[10px] text-white/80">Đơn hàng đang được xử lý</div>
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white p-3 mt-1">
          <h3 className="text-[10px] font-medium mb-3">Trang thái đơn hàng</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="w-0.5 h-6 bg-[#22C55E]" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-[#22C55E]">Đã thanh toán</div>
                <div className="text-[9px] text-gray-500">15/01/2024 09:41</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-[#EE4D2D] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-0.5 h-6 bg-gray-200" />
              </div>
              <div>
                <div className="text-[10px] font-medium text-[#EE4D2D]">Đang đóng gói</div>
                <div className="text-[9px] text-gray-500">Ưu tiên xử lý</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
                <div className="w-0.5 h-6 bg-gray-200" />
              </div>
              <div>
                <div className="text-[10px] text-gray-400">Đang giao hàng</div>
                <div className="text-[9px] text-gray-400">Dự kiến trong ngày</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="text-[10px] text-gray-400">Đã giao hàng</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-white p-3 mt-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[10px] font-medium">Thanh toán qua</h3>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-[#D82D8B] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">M</span>
              </div>
              <span className="text-[10px] text-[#D82D8B] font-medium">Vi MoMo</span>
            </div>
          </div>
          <div className="bg-gray-50 p-2 rounded-md">
            <div className="flex justify-between text-[9px] mb-1.5">
              <span className="text-gray-500">Ma giao dich MoMo</span>
              <span className="font-mono">MM240115001234</span>
            </div>
            <div className="flex justify-between text-[9px]">
              <span className="text-gray-500">Da thanh toan</span>
              <span className="text-[#22C55E] font-semibold">28.490.000d</span>
            </div>
          </div>
        </div>

        {/* Fast Delivery Badge */}
        <div className="bg-[#EE4D2D]/10 mx-3 mt-2 p-2 rounded-lg border border-[#EE4D2D]/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#EE4D2D] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-semibold text-[#EE4D2D]">Giao hàng nhanh</div>
              <div className="text-[9px] text-gray-600">
                Đơn thanh toán MoMo được ưu tiên giao trong ngày tại TP.HCM
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-3 mt-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#EE4D2D] text-white text-[7px] px-1 rounded">Mall</span>
            <span className="text-[10px] font-medium">Apple Store Official</span>
          </div>
          <div className="flex gap-3">
            <div className="w-11 h-11 bg-gray-100 rounded-md overflow-hidden">
              <img
                src="/iphone-15-6c.webp"
                alt="iPhone 15 Pro Max"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] text-gray-800">iPhone 15 Pro Max 256GB</h4>
              <div className="text-[9px] text-gray-500">Titan Den x1</div>
              <div className="text-[#EE4D2D] font-bold text-[11px] mt-1">28.490.000d</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200 p-2 flex gap-2">
        <button className="flex-1 py-2 border border-[#EE4D2D] text-[#EE4D2D] rounded-md text-[10px] font-medium hover:bg-[#EE4D2D]/5 transition-colors">
          Lien he Shop
        </button>
        <button className="flex-1 py-2 bg-[#EE4D2D] text-white rounded-md text-[10px] font-medium hover:bg-[#EE4D2D]/90 transition-colors">
          Theo doi don hang
        </button>
      </div>
    </div>
  )
}
