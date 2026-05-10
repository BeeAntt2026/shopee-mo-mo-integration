"use client"

import { useEffect, useState } from "react"

interface MomoRedirectScreenProps {
  onNext?: () => void
  onPrev?: () => void
}

export function MomoRedirectScreen({ onNext, onPrev }: MomoRedirectScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100 && onNext) {
      const timeout = setTimeout(() => {
        onNext()
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [progress, onNext])

  return (
    <div className="min-h-full flex flex-col bg-[#D82D8B] text-[11px]">
      {/* Header */}
      <div className="px-2 py-2 flex items-center justify-between">
        <button onClick={onPrev}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span className="text-white font-medium text-[11px]">Thanh toan MoMo</span>
        <div className="w-4" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* MoMo Logo */}
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <span className="text-[#D82D8B] text-xl font-bold">M</span>
        </div>

        <h2 className="text-white text-sm font-semibold mb-1">Xac nhan thanh toan</h2>
        <p className="text-white/70 text-[10px] text-center mb-4">
          Dang chuyen den MoMo...
        </p>

        {/* Order Info Card */}
        <div className="w-full bg-white rounded-xl p-3 shadow-lg">
          <div className="text-center mb-3">
            <div className="text-[9px] text-gray-500 mb-0.5">So tien thanh toan</div>
            <div className="text-lg font-bold text-gray-800">28.490.000d</div>
          </div>

          <div className="border-t border-dashed border-gray-200 pt-2 space-y-1.5 text-[10px]">
            <div className="flex justify-between">
              <span className="text-gray-500">Don hang</span>
              <span className="text-gray-800 font-medium">#SP2401150001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Nguon</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#EE4D2D] rounded flex items-center justify-center">
                  <span className="text-white text-[6px] font-bold">S</span>
                </div>
                <span className="text-gray-800">Shopee</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#D82D8B] rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-4 flex gap-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
