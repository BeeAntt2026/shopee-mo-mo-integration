"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { StepIndicator } from "@/components/step-indicator"
import { PhoneSimulator } from "@/components/phone-simulator"
import { StepExplanation } from "@/components/step-explanation"
import { FlowDiagram } from "@/components/flow-diagram"

const STEPS = [
  {
    id: 1,
    title: "Chọn sản phẩm",
    shortTitle: "Sản phẩm",
    description: "Người dùng duyệt và chọn sản phẩm trên Shopee",
    platform: "shopee" as const,
    details: [
      "Tìm kiếm sản phẩm theo từ khóa hoặc danh mục",
      "Xem chi tiết sản phẩm, đánh giá, giá cả",
      "Chọn phân loại (màu sắc, kích thước)",
      "Nhấn 'Thêm vào giỏ hàng'"
    ],
    technicalNote: "Shopee ghi nhận product_id và variant_id vào session của user"
  },
  {
    id: 2,
    title: "Giỏ hàng & Voucher",
    shortTitle: "Giỏ hàng",
    description: "Xem giỏ hàng và áp dụng mã giảm giá",
    platform: "shopee" as const,
    details: [
      "Kiểm tra số lượng sản phẩm đã chọn",
      "Áp dụng voucher giảm giá (nếu có)",
      "Xem tổng tiền trước khi thanh toán",
      "Nhấn 'Mua hàng' để tiếp tục"
    ],
    technicalNote: "Hệ thống tính toán tổng đơn hàng sau khi áp dụng discount codes"
  },
  {
    id: 3,
    title: "Chọn thanh toán MoMo",
    shortTitle: "Chọn MoMo",
    description: "Tại trang checkout, chọn phương thức thanh toán MoMo",
    platform: "shopee" as const,
    details: [
      "Hiển thị danh sách phương thức thanh toán",
      "Chọn 'Ví MoMo' từ danh sách",
      "Xác nhận địa chỉ giao hàng",
      "Nhấn 'Đặt hàng' để chuyển sang MoMo"
    ],
    technicalNote: "Shopee tạo payment_request với order_id, amount, callback_url gửi đến MoMo API"
  },
  {
    id: 4,
    title: "Chuyển hướng MoMo",
    shortTitle: "Redirect",
    description: "Tự động chuyển sang ứng dụng MoMo hoặc hiển thị QR code",
    platform: "momo" as const,
    details: [
      "Mobile: Auto-redirect sang app MoMo",
      "Desktop: Hiển thị QR code để quét",
      "Thông tin đơn hàng được truyền sang MoMo",
      "Hiển thị số tiền cần thanh toán"
    ],
    technicalNote: "MoMo nhận payment_token từ Shopee qua deeplink hoặc QR payload"
  },
  {
    id: 5,
    title: "Xác thực & Thanh toán",
    shortTitle: "Xác thực",
    description: "Xác thực bằng PIN hoặc sinh trắc học trên MoMo",
    platform: "momo" as const,
    details: [
      "Kiểm tra thông tin đơn hàng",
      "Nhập mã PIN 6 số hoặc",
      "Sử dụng vân tay / Face ID",
      "Xác nhận thanh toán"
    ],
    technicalNote: "MoMo xác thực user và kiểm tra số dư ví trước khi xử lý giao dịch"
  },
  {
    id: 6,
    title: "Thanh toán thành công",
    shortTitle: "Thành công",
    description: "Nhận thông báo thanh toán thành công",
    platform: "momo" as const,
    details: [
      "MoMo trừ tiền từ ví người dùng",
      "Push notification gửi đến cả 2 app",
      "MoMo gửi callback về Shopee",
      "Hiển thị mã giao dịch"
    ],
    technicalNote: "MoMo gọi webhook đến Shopee với transaction_id và status='SUCCESS'"
  },
  {
    id: 7,
    title: "Xác nhận đơn hàng",
    shortTitle: "Đơn hàng",
    description: "Shopee nhận xác nhận và kích hoạt xử lý đơn hàng",
    platform: "shopee" as const,
    details: [
      "Shopee cập nhật trạng thái đơn hàng",
      "Kích hoạt 'Ưu tiên đóng gói'",
      "Thông báo cho người bán chuẩn bị hàng",
      "Giao hàng nhanh tại 12 thành phố lớn"
    ],
    technicalNote: "Order status chuyển từ 'PENDING' sang 'PAID', trigger fulfillment workflow"
  }
]

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const handleNextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId)
    setIsAutoPlaying(false)
  }

  const handleAutoPlay = () => {
    setIsAutoPlaying(true)
    setCurrentStep(1)
    
    let step = 1
    const interval = setInterval(() => {
      step++
      if (step > STEPS.length) {
        clearInterval(interval)
        setIsAutoPlaying(false)
      } else {
        setCurrentStep(step)
      }
    }, 3000)
  }

  const currentStepData = STEPS.find(s => s.id === currentStep) || STEPS[0]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-4 md:py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm md:text-base">S</span>
            </div>
            <span className="text-xl md:text-2xl text-muted-foreground">×</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm md:text-base">M</span>
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2 text-balance">
            Cơ Chế Tích Hợp Thanh Toán
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm max-w-xl mx-auto text-pretty">
            Khám phá quy trình thanh toán giữa Shopee và MoMo. Nhấn vào các bước để tương tác.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 md:py-6 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Step Indicator - Above Phone */}
          <div className="mb-4">
            <StepIndicator 
              steps={STEPS}
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>
          
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Phone Simulator - Smaller */}
            <div className="lg:col-span-2 flex justify-center">
              <PhoneSimulator 
                currentStep={currentStep}
                stepData={currentStepData}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
              />
            </div>

            {/* Step Explanation */}
            <div className="lg:col-span-3">
              <StepExplanation 
                stepData={currentStepData}
                totalSteps={STEPS.length}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
                onAutoPlay={handleAutoPlay}
                isAutoPlaying={isAutoPlaying}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <FlowDiagram 
        steps={STEPS}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      {/* Technical Summary */}
      <section className="py-12 md:py-16 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            Tóm Tắt Kỹ Thuật
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <h3 className="font-semibold text-lg">Shopee Platform</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Tạo payment request với order details
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Redirect user đến MoMo gateway
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Nhận webhook callback từ MoMo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Update order status và trigger fulfillment
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">M</span>
                </div>
                <h3 className="font-semibold text-lg">MoMo Wallet</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Nhận và validate payment token
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Xác thực user (PIN/Biometric)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Xử lý transaction và trừ tiền
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Gửi callback với transaction result
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>Case Study: Mô phỏng tích hợp thanh toán • Chỉ mang tính chất giáo dục</p>
      </footer>
    </main>
  )
}
