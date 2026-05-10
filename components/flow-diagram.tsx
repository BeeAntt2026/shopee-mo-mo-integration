"use client"

interface Step {
  id: number
  title: string
  shortTitle: string
  platform: "shopee" | "momo"
}

interface FlowDiagramProps {
  steps: Step[]
  currentStep: number
  onStepClick: (stepId: number) => void
}

export function FlowDiagram({ steps, currentStep, onStepClick }: FlowDiagramProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          Sơ Đồ Luồng Thanh Toán
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Nhấn vào từng bước để xem chi tiết
        </p>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center justify-center gap-2 min-w-max px-4">
            {steps.map((step, index) => {
              const isActive = step.id === currentStep
              const isPast = step.id < currentStep
              const isShopee = step.platform === "shopee"
              
              return (
                <div key={step.id} className="flex items-center">
                  <button
                    onClick={() => onStepClick(step.id)}
                    className={`
                      relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 min-w-[100px]
                      ${isActive 
                        ? isShopee 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105" 
                          : "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30 scale-105"
                        : isPast
                          ? "bg-card text-foreground border border-border"
                          : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                      }
                    `}
                  >
                    {/* Platform Badge */}
                    <div className={`
                      absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-semibold
                      ${isActive
                        ? "bg-white/20 text-current"
                        : isShopee 
                          ? "bg-primary/10 text-primary" 
                          : "bg-secondary/10 text-secondary"
                      }
                    `}>
                      {isShopee ? "Shopee" : "MoMo"}
                    </div>
                    
                    {/* Step Number */}
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2
                      ${isActive 
                        ? "bg-white/20" 
                        : isPast 
                          ? isShopee ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                          : "bg-muted"
                      }
                    `}>
                      {isPast ? (
                        <svg className={`w-5 h-5 ${isShopee ? "text-primary" : "text-secondary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.id
                      )}
                    </div>
                    
                    {/* Step Title */}
                    <span className="text-xs font-medium text-center leading-tight">
                      {step.shortTitle}
                    </span>
                  </button>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center mx-1">
                      <svg 
                        className={`w-6 h-6 ${
                          step.id < currentStep 
                            ? step.platform === "shopee" ? "text-primary" : "text-secondary"
                            : "text-border"
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Shopee Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-muted-foreground">MoMo Wallet</span>
          </div>
        </div>
      </div>
    </section>
  )
}
