"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, Terminal, Bug } from "lucide-react"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length)

        if (newSequence.length === KONAMI_CODE.length && newSequence.every((key, i) => key === KONAMI_CODE[i])) {
          setShowEasterEgg(true)
          setTimeout(() => setShowEasterEgg(false), 5000)
          return []
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
        >
          <div className="text-center">
            {/* Holographic Cat */}
            <motion.div
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative mb-8"
            >
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-full h-full bg-card/50 rounded-full border-4 border-primary flex items-center justify-center glow-cyan backdrop-blur-sm">
                  <Shield className="w-24 h-24 text-primary" />
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Bug className="absolute top-8 left-1/2 w-8 h-8 text-secondary" />
                  <Terminal className="absolute right-8 top-1/2 w-8 h-8 text-accent" />
                  <Zap className="absolute bottom-8 left-1/2 w-8 h-8 text-primary" />
                  <Shield className="absolute left-8 top-1/2 w-8 h-8 text-secondary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Easter Egg Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold font-mono text-primary glitch" data-text="KONAMI ACTIVATED">
                KONAMI ACTIVATED
              </h2>
              <p className="text-xl text-secondary font-mono">You found the secret hologram!</p>
              <p className="text-muted-foreground font-mono">
                "In the matrix of code, only the curious find the hidden paths."
              </p>
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
