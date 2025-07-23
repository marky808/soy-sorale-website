"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import type { ReactNode } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation: "fadeUp" | "scaleIn" | "slideLeft"
  delay?: number
  className?: string
}

export function ScrollAnimationWrapper({
  children,
  animation,
  delay = 0,
  className = "",
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    if (!isVisible) return "soy-animate-hidden"

    const baseClass = `soy-animate-${animation}`
    const delayClass = delay > 0 ? `soy-delay-${delay}` : ""

    return `${baseClass} ${delayClass}`.trim()
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
