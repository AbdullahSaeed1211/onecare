"use client"

import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  MotionProps,
  useInView,
  UseInViewOptions,
  Variants,
} from "motion/react"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
  respectReducedMotion?: boolean
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  respectReducedMotion = true,
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    if (!respectReducedMotion || typeof window === "undefined") return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setPrefersReducedMotion(mediaQuery.matches)
    update()
    mediaQuery.addEventListener?.("change", update)
    return () => mediaQuery.removeEventListener?.("change", update)
  }, [respectReducedMotion])
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  }
  const combinedVariants = variant || defaultVariants
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={prefersReducedMotion ? "visible" : isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: prefersReducedMotion ? 0 : 0.04 + delay,
          duration: prefersReducedMotion ? 0 : duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
