"use client"

import { ShopeeProductScreen } from "./screens/shopee-product"
import { ShopeeCartScreen } from "./screens/shopee-cart"
import { ShopeeCheckoutScreen } from "./screens/shopee-checkout"
import { MomoRedirectScreen } from "./screens/momo-redirect"
import { MomoPinScreen } from "./screens/momo-pin"
import { MomoSuccessScreen } from "./screens/momo-success"
import { ShopeeConfirmScreen } from "./screens/shopee-confirm"

interface StepData {
  id: number
  title: string
  platform: "shopee" | "momo"
}

interface PhoneSimulatorProps {
  currentStep: number
  stepData: StepData
  onNext?: () => void
  onPrev?: () => void
}

export function PhoneSimulator({ currentStep, stepData, onNext, onPrev }: PhoneSimulatorProps) {
  const isShopee = stepData.platform === "shopee"
  
  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return <ShopeeProductScreen onNext={onNext} />
      case 2:
        return <ShopeeCartScreen onNext={onNext} onPrev={onPrev} />
      case 3:
        return <ShopeeCheckoutScreen onNext={onNext} onPrev={onPrev} />
      case 4:
        return <MomoRedirectScreen onNext={onNext} onPrev={onPrev} />
      case 5:
        return <MomoPinScreen onNext={onNext} onPrev={onPrev} />
      case 6:
        return <MomoSuccessScreen onNext={onNext} />
      case 7:
        return <ShopeeConfirmScreen onPrev={onPrev} />
      default:
        return <ShopeeProductScreen onNext={onNext} />
    }
  }

  return (
    <div className="relative">
      {/* Platform indicator */}
      <div className={`
        absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-semibold z-10
        ${isShopee 
          ? "bg-primary text-primary-foreground" 
          : "bg-secondary text-secondary-foreground"
        }
      `}>
        {isShopee ? "Shopee App" : "MoMo App"}
      </div>
      
      {/* Phone Frame */}
      <div className="phone-mockup w-[220px] md:w-[260px]">
        <div className="phone-screen">
          {/* Status Bar */}
          <div className={`
            flex items-center justify-between px-3 py-1.5 text-[10px]
            ${isShopee 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground"
            }
          `}>
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C7.46 3 3.34 4.78.29 7.67l1.42 1.42C4.08 6.74 7.82 5.25 12 5.25s7.92 1.49 10.29 3.84l1.42-1.42C20.66 4.78 16.54 3 12 3z"/>
                <path d="M12 9c-3.03 0-5.78 1.23-7.77 3.22l1.42 1.42C7.28 12.03 9.52 11 12 11s4.72 1.03 6.35 2.64l1.42-1.42C17.78 10.23 15.03 9 12 9z"/>
                <path d="M12 15c-1.52 0-2.89.62-3.89 1.61l1.42 1.42c.63-.63 1.5-1.03 2.47-1.03s1.84.4 2.47 1.03l1.42-1.42C14.89 15.62 13.52 15 12 15z"/>
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="20" y="10" width="2" height="4" rx="1"/>
                <rect x="4" y="9" width="10" height="6" rx="1"/>
              </svg>
            </div>
          </div>
          
          {/* Screen Content */}
          <div className="h-[460px] md:h-[540px] overflow-y-auto bg-white">
            {renderScreen()}
          </div>
        </div>
      </div>
      
      {/* Animated ring */}
      <div className={`
        absolute inset-0 rounded-[2rem] pointer-events-none
        ${isShopee ? "animate-pulse-shopee" : "animate-pulse-momo"}
      `} />
    </div>
  )
}
