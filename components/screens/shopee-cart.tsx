"use client"

interface ShopeeCartScreenProps {
  onNext?: () => void
  onPrev?: () => void
}

export function ShopeeCartScreen({ onNext, onPrev }: ShopeeCartScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-gray-50 text-[11px]">
      {/* Header */}
      <div className="bg-[#EE4D2D] px-2 py-2 flex items-center gap-2">
        <button onClick={onPrev}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-white font-medium text-[11px]">Gio hang (1)</span>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white p-2">
          <div className="flex items-center gap-1.5 mb-2">
            <input type="checkbox" className="w-3 h-3 accent-[#EE4D2D]" defaultChecked />
            <span className="bg-[#EE4D2D] text-white text-[7px] px-1 rounded">Mall</span>
            <span className="text-[10px] font-medium">Apple Store</span>
          </div>

          <div className="flex gap-2">
            <input type="checkbox" className="w-3 h-3 accent-[#EE4D2D] mt-2" defaultChecked />
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[10px] font-medium text-gray-800 truncate">iPhone 15 Pro Max</h4>
              <div className="text-[9px] text-gray-500">Titan Den</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[#EE4D2D] font-bold text-[11px]">28.990.000d</span>
                <div className="flex items-center border border-gray-200 rounded text-[9px]">
                  <button className="px-1.5 py-0.5 text-gray-500">-</button>
                  <span className="px-1.5 py-0.5 border-x border-gray-200">1</span>
                  <button className="px-1.5 py-0.5 text-gray-500">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voucher Applied */}
        <div className="bg-[#EE4D2D]/5 mx-2 mt-2 p-2 rounded border border-[#EE4D2D]/20">
          <div className="flex items-center gap-2">
            <div className="bg-[#EE4D2D] text-white text-[8px] px-1.5 py-0.5 rounded font-bold">-500K</div>
            <div className="flex-1">
              <div className="text-[10px] font-medium">Giam 500.000d</div>
              <div className="text-[8px] text-gray-500">Don toi thieu 20tr</div>
            </div>
            <svg className="w-4 h-4 text-[#EE4D2D]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-white border-t border-gray-200">
        <div className="p-2 border-b border-gray-100 text-[10px]">
          <div className="flex justify-between text-gray-600 mb-0.5">
            <span>Tong tien hang</span>
            <span>28.990.000d</span>
          </div>
          <div className="flex justify-between text-[#EE4D2D] mb-0.5">
            <span>Giam gia voucher</span>
            <span>-500.000d</span>
          </div>
          <div className="flex justify-between font-medium text-[11px] mt-1">
            <span>Tong thanh toan</span>
            <span className="text-[#EE4D2D] font-bold">28.490.000d</span>
          </div>
        </div>
        <div className="p-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5 flex-1">
            <input type="checkbox" className="w-3 h-3 accent-[#EE4D2D]" defaultChecked />
            <span className="text-[10px] text-gray-600">Tat ca</span>
          </div>
          <button 
            onClick={onNext}
            className="px-4 py-1.5 bg-[#EE4D2D] text-white rounded text-[10px] font-medium animate-pulse"
          >
            Mua hang (1)
          </button>
        </div>
      </div>
    </div>
  )
}
