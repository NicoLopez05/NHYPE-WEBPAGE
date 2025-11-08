"use client"

import { CheckCircle2 } from "lucide-react"

interface TimelineStep {
  id: number
  label: string
  status: "completed" | "active" | "pending"
}

interface TimelineProgressProps {
  steps: TimelineStep[]
  currentStep: number
}

export function TimelineProgress({ steps, currentStep }: TimelineProgressProps) {
  return (
    <div className="sticky top-0 z-50 bg-background border-b border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2 min-w-max">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step.status === "completed"
                      ? "bg-primary text-white"
                      : step.status === "active"
                        ? "bg-secondary text-white border-2 border-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.status === "completed" ? <CheckCircle2 size={20} /> : <span>{index + 1}</span>}
                </div>
                <label className="text-xs font-semibold text-center mt-2 max-w-[80px] text-foreground">
                  {step.label}
                </label>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-8 sm:w-12 transition-all ${
                    step.status === "completed" ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
