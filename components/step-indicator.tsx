"use client"

interface Step {
  id: number
  title: string
  shortTitle: string
  platform: "shopee" | "momo"
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
  onStepClick: (stepId: number) => void
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-center justify-start md:justify-center gap-0.5 md:gap-1 min-w-max px-2">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isPast = step.id < currentStep
          const isShopee = step.platform === "shopee"
          
          return (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => onStepClick(step.id)}
                className={`
                  relative flex flex-col items-center gap-0.5 px-1.5 md:px-2 py-1.5 rounded-lg transition-all duration-300
                  ${isActive 
                    ? isShopee 
                      ? "bg-primary text-primary-foreground scale-105" 
                      : "bg-secondary text-secondary-foreground scale-105"
                    : isPast
                      ? "bg-muted text-muted-foreground"
                      : "bg-transparent text-muted-foreground hover:bg-muted"
                  }
                `}
              >
                <div className={`
                  w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold
                  ${isActive 
                    ? "bg-white/20" 
                    : isPast 
                      ? isShopee ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                      : "bg-border"
                  }
                `}>
                  {isPast ? (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span className="text-[8px] md:text-[10px] font-medium whitespace-nowrap">
                  {step.shortTitle}
                </span>
              </button>
              
              {index < steps.length - 1 && (
                <div className={`
                  w-2 md:w-4 h-0.5 mx-0.5
                  ${step.id < currentStep 
                    ? step.platform === "shopee" ? "bg-primary/50" : "bg-secondary/50"
                    : "bg-border"
                  }
                `} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
