"use client"

interface ShopeeProductScreenProps {
  onNext?: () => void
}

export function ShopeeProductScreen({ onNext }: ShopeeProductScreenProps) {
  return (
    <div className="min-h-full flex flex-col bg-gray-50 text-[11px]">
      {/* Header */}
      <div className="bg-[#EE4D2D] px-2 py-1.5 flex items-center gap-2">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div className="flex-1 bg-white/20 rounded px-2 py-1 text-white/70 text-[10px]">
          Tim kiem...
        </div>
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.5 5M17 13l2.5 5M9 21h6" />
        </svg>
      </div>

      {/* Product Image */}
      <div className="bg-white relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="w-14 h-14 bg-[#EE4D2D]/10 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-[#EE4D2D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-1 left-1 bg-[#EE4D2D] text-white px-1.5 py-0.5 rounded text-[8px] font-bold">
          FLASH SALE
        </div>
      </div>

      {/* Product Info */}
      <div className="p-2 bg-white">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[#EE4D2D] font-bold">28.990.000d</span>
          <span className="text-gray-400 text-[9px] line-through">34.990.000d</span>
          <span className="bg-[#EE4D2D]/10 text-[#EE4D2D] text-[8px] px-1 rounded">-17%</span>
        </div>
        <h3 className="text-[10px] font-medium text-gray-800 line-clamp-1">
          iPhone 15 Pro Max 256GB
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[9px] text-gray-500">4.9 (12.5k)</span>
        </div>
      </div>

      {/* Variants */}
      <div className="p-2 bg-white mt-1">
        <div className="text-[9px] text-gray-600 mb-1">Mau sac:</div>
        <div className="flex gap-1">
          {["Den", "Trang", "Xanh"].map((color, i) => (
            <button 
              key={color}
              className={`px-2 py-1 rounded text-[9px] border ${
                i === 0 ? "border-[#EE4D2D] text-[#EE4D2D] bg-[#EE4D2D]/5" : "border-gray-200 text-gray-600"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200 p-2 flex gap-2">
        <button className="flex-1 py-2 border border-[#EE4D2D] text-[#EE4D2D] rounded text-[10px] font-medium">
          Them vao gio
        </button>
        <button 
          onClick={onNext}
          className="flex-1 py-2 bg-[#EE4D2D] text-white rounded text-[10px] font-medium animate-pulse"
        >
          Mua ngay
        </button>
      </div>
    </div>
  )
}
