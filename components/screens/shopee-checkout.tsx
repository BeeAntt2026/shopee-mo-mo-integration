"use client"

interface ShopeeCheckoutScreenProps {
  onNext?: () => void
  onPrev?: () => void
}

export function ShopeeCheckoutScreen({ onNext, onPrev }: ShopeeCheckoutScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-gray-50 text-[11px]">
      {/* Header */}
      <div className="bg-[#EE4D2D] px-2 py-2 flex items-center gap-2">
        <button onClick={onPrev}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-white font-medium text-[11px]">Thanh toan</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Address */}
        <div className="bg-white p-2 border-b-2 border-[#EE4D2D]/20">
          <div className="flex items-start gap-1.5">
            <svg className="w-4 h-4 text-[#EE4D2D] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-medium">Nguyen Van A | 0912 345 678</div>
              <p className="text-[9px] text-gray-500 truncate">123 Nguyen Hue, Q1, TP.HCM</p>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="bg-white p-2 mt-1">
          <div className="flex items-center gap-1 mb-2">
            <span className="bg-[#EE4D2D] text-white text-[7px] px-1 rounded">Mall</span>
            <span className="text-[10px] font-medium">Apple Store</span>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
              <img
                src="/iphone-15-6c.webp"
                alt="iPhone 15 Pro Max"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] text-gray-800 truncate">iPhone 15 Pro Max</h4>
              <div className="text-[9px] text-gray-500">Titan Den x1</div>
              <div className="text-[#EE4D2D] font-bold text-[11px]">28.490.000d</div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-2 mt-1">
          <h3 className="text-[10px] font-medium mb-2">Phuong thuc thanh toan</h3>
          
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 p-1.5 rounded border border-gray-200">
              <input type="radio" name="payment" className="w-3 h-3 accent-[#EE4D2D]" />
              <span className="text-[9px]">COD</span>
              <span className="text-[9px] text-gray-400">Thanh toan khi nhan hang</span>
            </label>
            
            <label className="flex items-center gap-2 p-1.5 rounded border border-gray-200">
              <input type="radio" name="payment" className="w-3 h-3 accent-[#EE4D2D]" />
              <div className="w-5 h-5 bg-[#EE4D2D] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">S</span>
              </div>
              <span className="text-[9px]">ShopeePay</span>
            </label>
            
            {/* MoMo - Selected */}
            <label className="flex items-center gap-2 p-1.5 rounded border-2 border-[#D82D8B] bg-[#D82D8B]/5 relative">
              <input type="radio" name="payment" className="w-3 h-3 accent-[#D82D8B]" defaultChecked />
              <div className="w-5 h-5 bg-[#D82D8B] rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">M</span>
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-medium">Vi MoMo</span>
              </div>
              <div className="bg-[#D82D8B] text-white text-[7px] px-1.5 py-0.5 rounded-full animate-bounce">
                Chon
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white border-t border-gray-200 p-2">
        <div className="flex justify-between mb-2 text-[10px]">
          <span className="text-gray-600">Tong thanh toan</span>
          <span className="text-[#EE4D2D] font-bold text-[12px]">28.490.000d</span>
        </div>
        <button 
          onClick={onNext}
          className="w-full py-2 bg-[#EE4D2D] text-white rounded text-[10px] font-medium animate-pulse"
        >
          Dat hang
        </button>
      </div>
    </div>
  )
}
