"use client"

interface StepData {
  id: number
  title: string
  description: string
  platform: "shopee" | "momo"
  details: string[]
  technicalNote: string
}

interface StepExplanationProps {
  stepData: StepData
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  onAutoPlay: () => void
  isAutoPlaying: boolean
}

export function StepExplanation({ 
  stepData, 
  totalSteps, 
  onNext, 
  onPrev, 
  onAutoPlay,
  isAutoPlaying 
}: StepExplanationProps) {
  const isShopee = stepData.platform === "shopee"
  const isFirst = stepData.id === 1
  const isLast = stepData.id === totalSteps

  return (
    <div className="space-y-4">
      {/* Step Header */}
      <div className="flex items-center gap-3">
        <div className={`
          w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold
          ${isShopee 
            ? "bg-primary text-primary-foreground" 
            : "bg-secondary text-secondary-foreground"
          }
        `}>
          {stepData.id}
        </div>
        <div>
          <div className={`
            text-[10px] font-medium
            ${isShopee ? "text-primary" : "text-secondary"}
          `}>
            Bước {stepData.id} / {totalSteps}
          </div>
          <h2 className="text-base md:text-lg font-bold text-foreground">
            {stepData.title}
          </h2>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {stepData.description}
      </p>

      {/* Details */}
      <div className="space-y-2">
        <h3 className="font-semibold text-xs text-foreground">Chi tiết hoạt động:</h3>
        <ul className="space-y-1.5">
          {stepData.details.map((detail, index) => (
            <li 
              key={index}
              className="flex items-start gap-2 text-xs"
            >
              <span className={`
                mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0
                ${isShopee ? "bg-primary" : "bg-secondary"}
              `} />
              <span className="text-muted-foreground">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Note */}
      <div className={`
        p-3 rounded-lg border
        ${isShopee 
          ? "bg-primary/5 border-primary/20" 
          : "bg-secondary/5 border-secondary/20"
        }
      `}>
        <div className="flex items-center gap-1.5 mb-1.5">
          <svg className={`w-3 h-3 ${isShopee ? "text-primary" : "text-secondary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className={`text-[10px] font-semibold ${isShopee ? "text-primary" : "text-secondary"}`}>
            Ghi chú kỹ thuật
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          {stepData.technicalNote}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`
            flex-1 py-2 px-3 rounded-lg font-medium text-xs transition-all
            ${isFirst 
              ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50" 
              : "bg-muted text-foreground hover:bg-muted/80"
            }
          `}
        >
          ← Trước
        </button>
        
        <button
          onClick={onAutoPlay}
          disabled={isAutoPlaying}
          className={`
            py-2 px-3 rounded-lg font-medium text-xs transition-all
            ${isAutoPlaying
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : isShopee
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "bg-secondary/10 text-secondary hover:bg-secondary/20"
            }
          `}
        >
          {isAutoPlaying ? (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              ...
            </span>
          ) : (
            "▶ Tự động"
          )}
        </button>
        
        <button
          onClick={onNext}
          disabled={isLast}
          className={`
            flex-1 py-2 px-3 rounded-lg font-medium text-xs transition-all
            ${isLast 
              ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50" 
              : isShopee
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            }
          `}
        >
          Tiếp →
        </button>
      </div>
    </div>
  )
}
