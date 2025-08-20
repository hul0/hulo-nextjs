"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NeonButton } from "@/components/neon-button"
import { GlitchText } from "@/components/glitch-text"
import { KonamiCode } from "@/components/konami-code"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Terminal, Shield, Code, Zap } from "lucide-react"

export default function HomePage() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "I see the patterns. I secure the future."

  useEffect(() => {
    let i = 0
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typeTimer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <KonamiCode />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,188,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,188,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-2 text-primary font-mono text-sm"
        >
          <Terminal className="w-4 h-4" />
          <span>root@hulo:~$</span>
          <span className="animate-pulse">_</span>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-mono"
          >
            <GlitchText text="HULO" className="text-primary" />
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono"
          >
            <span className="text-secondary">Cybersecurity Professional</span>
            <span className="mx-2 text-accent">•</span>
            <span className="text-accent">Ethical Hacker</span>
            <span className="mx-2 text-secondary">•</span>
            <span className="text-primary">Digital Legend</span>
          </motion.div>

          {/* Typing Animation Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-foreground mb-12 font-mono min-h-[2rem]"
          >
            <span>{typedText}</span>
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>|</span>
          </motion.div>

          {/* Hacker Cat Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12 relative"
          >
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-full h-32 bg-card rounded-full border-2 border-primary flex items-center justify-center glow-cyan">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <NeonButton variant="primary" href="/projects">
              <Code className="w-4 h-4 mr-2" />
              Projects
            </NeonButton>
            <NeonButton variant="secondary" href="/skills">
              <Zap className="w-4 h-4 mr-2" />
              Skills
            </NeonButton>
            <NeonButton variant="accent" href="/blog">
              <Terminal className="w-4 h-4 mr-2" />
              Blog
            </NeonButton>
            <NeonButton variant="primary" href="/socials">
              <Shield className="w-4 h-4 mr-2" />
              Socials
            </NeonButton>
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex justify-center gap-8 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">Systems: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-muted-foreground">Security: Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-muted-foreground">Mode: Elite</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
