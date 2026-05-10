"use client"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-muted-foreground">×</span>
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">M</span>
            </div>
          </div>
          <span className="font-semibold text-sm md:text-base hidden sm:inline">
            Tích hợp thanh toán
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
            Shopee
          </span>
          <span className="px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
            MoMo
          </span>
        </div>
      </div>
    </header>
  )
}
