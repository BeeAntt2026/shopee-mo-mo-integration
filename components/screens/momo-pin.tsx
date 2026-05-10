"use client"

import { useState, useEffect } from "react"

interface MomoPinScreenProps {
  onNext?: () => void
  onPrev?: () => void
}

export function MomoPinScreen({ onNext, onPrev }: MomoPinScreenProps) {
  const [pin, setPin] = useState("")
  
  const handlePinClick = (num: string) => {
    setPin((prev) => (prev.length < 6 ? prev + num : prev))
  }

  // Auto-advance when PIN is complete
  useEffect(() => {
    if (pin.length === 6 && onNext) {
      const timer = setTimeout(() => {
        onNext()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [pin, onNext])

  return (
    <div className="min-h-full flex flex-col bg-[#D82D8B] text-[11px]">
      {/* Header */}
      <div className="px-3 py-2 flex items-center justify-between">
        <button onClick={onPrev} className="hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-white font-medium text-[11px]">Xác nhận thanh toán</span>
        <div className="w-4" />
      </div>

      <div className="flex-1 flex flex-col items-center pt-2 px-4 pb-3">
        {/* Amount */}
        <div className="bg-white/10 px-4 py-1.5 rounded-full mb-3">
          <span className="text-white text-[13px] font-bold">28.490.000d</span>
        </div>

        {/* Merchant Info */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-[#EE4D2D] rounded-md flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">S</span>
          </div>
          <span className="text-white text-[10px]">Shopee Việt Nam</span>
        </div>

        {/* PIN Input Display */}
        <div className="mb-2">
          <div className="text-white/70 text-[10px] mb-2 text-center">Nhập mã PIN MoMo</div>
          <div className="flex gap-2 justify-center">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                  i < pin.length ? "bg-white border-white scale-105" : "border-white/50"
                }`}
              >
                {i < pin.length && (
                  <div className="w-2.5 h-2.5 bg-[#D82D8B] rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Biometric Option */}
        <button 
          onClick={onNext}
          className="flex items-center gap-2 text-white/70 text-[9px] mb-3 hover:text-white transition-colors"
        >
          <div className="w-7 h-7 border border-white/30 rounded-full flex items-center justify-center hover:border-white transition-colors">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1C8.14 1 5 4.14 5 8v4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2V8c0-3.86-3.14-7-7-7zm0 2c2.76 0 5 2.24 5 5v4H7V8c0-2.76 2.24-5 5-5zm0 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            </svg>
          </div>
          <span>Sử dụng vân tay / Face ID</span>
        </button>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-2 mt-2 mb-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handlePinClick(num.toString())}
              className="w-11 h-11 rounded-full bg-white/10 text-white text-[15px] font-semibold hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center"
            >
              {num}
            </button>
          ))}
          <button className="w-11 h-11 rounded-full text-white/50 text-[9px] flex items-center justify-center hover:text-white transition-colors">
            Quên PIN?
          </button>
          <button
            onClick={() => handlePinClick("0")}
            className="w-11 h-11 rounded-full bg-white/10 text-white text-[15px] font-semibold hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center"
          >
            0
          </button>
          <button
            onClick={() => setPin((prev) => prev.slice(0, -1))}
            className="w-11 h-11 rounded-full text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
