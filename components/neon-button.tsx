"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface NeonButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export function NeonButton({ children, variant = "primary", size = "md", className, onClick, href }: NeonButtonProps) {
  const baseClasses = "relative overflow-hidden border-2 font-mono font-semibold transition-all duration-300"

  const variantClasses = {
    primary: "border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-cyan",
    secondary: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-magenta",
    accent: "border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-amber",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const Component = href ? "a" : "button"

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild={!!href}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        onClick={onClick}
      >
        <Component {...(href ? { href } : {})}>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Component>
      </Button>
    </motion.div>
  )
}
