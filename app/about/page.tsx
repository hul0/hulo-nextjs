"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import { Shield, Code, Bug, Terminal, Zap, Target, Eye, Lock } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "The Awakening",
    description:
      "Discovered my first buffer overflow vulnerability in a college CTF. The thrill of breaking systems to understand them became my obsession.",
    icon: Bug,
    color: "primary",
  },
  {
    year: "2019",
    title: "First Bug Bounty",
    description:
      "Earned my first $5,000 bug bounty by finding a critical SQL injection in a major e-commerce platform. The hunt had begun.",
    icon: Target,
    color: "secondary",
  },
  {
    year: "2020",
    title: "Red Team Specialist",
    description:
      "Joined an elite red team, simulating advanced persistent threats against Fortune 500 companies. Learned to think like the enemy.",
    icon: Shield,
    color: "accent",
  },
  {
    year: "2021",
    title: "Zero-Day Hunter",
    description:
      "Discovered and responsibly disclosed 12 zero-day vulnerabilities, including CVEs in major IoT devices and enterprise software.",
    icon: Eye,
    color: "primary",
  },
  {
    year: "2022",
    title: "Security Architect",
    description:
      "Led security architecture for a unicorn startup, building defense systems that protected millions of users from sophisticated attacks.",
    icon: Lock,
    color: "secondary",
  },
  {
    year: "2023",
    title: "Independent Researcher",
    description:
      "Went independent to focus on cutting-edge security research, tool development, and sharing knowledge with the community.",
    icon: Code,
    color: "accent",
  },
  {
    year: "2024",
    title: "Digital Legend",
    description:
      "Recognized as a leading voice in cybersecurity, with research cited in academic papers and tools used by security teams worldwide.",
    icon: Zap,
    color: "primary",
  },
]

const stats = [
  { label: "Zero-Days Found", value: "47", color: "primary" },
  { label: "Bug Bounties", value: "$250K+", color: "secondary" },
  { label: "CVEs Assigned", value: "23", color: "accent" },
  { label: "Years Experience", value: "6+", color: "primary" },
]

const colorClasses = {
  primary: {
    border: "border-primary",
    text: "text-primary",
    glow: "glow-cyan",
    bg: "bg-primary/10",
  },
  secondary: {
    border: "border-secondary",
    text: "text-secondary",
    glow: "glow-magenta",
    bg: "bg-secondary/10",
  },
  accent: {
    border: "border-accent",
    text: "text-accent",
    glow: "glow-amber",
    bg: "bg-accent/10",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6">
              <GlitchText text="ABOUT HULO" className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              The story of a digital guardian who sees patterns others miss.
              <br />
              <span className="text-secondary">Every vulnerability found makes the digital world safer.</span>
            </p>
          </motion.div>

          {/* Hero Section with Avatar */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Avatar */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
                    <div className="relative w-full h-full bg-card rounded-full border-4 border-primary flex items-center justify-center glow-cyan">
                      <Shield className="w-32 h-32 text-primary" />
                    </div>
                    {/* Floating Icons */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <Bug className="absolute top-4 left-1/2 w-6 h-6 text-secondary" />
                      <Code className="absolute right-4 top-1/2 w-6 h-6 text-accent" />
                      <Lock className="absolute bottom-4 left-1/2 w-6 h-6 text-primary" />
                      <Terminal className="absolute left-4 top-1/2 w-6 h-6 text-secondary" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-mono text-primary">The Digital Guardian</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am <span className="text-primary font-semibold">Hulo</span>, a cybersecurity professional who
                    lives at the intersection of curiosity and protection. Where others see code, I see patterns. Where
                    others see systems, I see vulnerabilities waiting to be discovered and secured.
                  </p>
                  <p>
                    My journey began with a simple question:{" "}
                    <span className="text-secondary italic">"What if this breaks?"</span> That question has led me
                    through the depths of binary exploitation, the intricacies of web application security, and the
                    evolving landscape of modern cyber threats.
                  </p>
                  <p>
                    I don't just find vulnerabilities—I understand them. I don't just write exploits—I craft solutions.
                    Every bug bounty, every CVE, every line of defensive code is a step toward a more secure digital
                    future.
                  </p>
                  <p className="text-accent font-mono">
                    "In a world of digital chaos, I am the pattern recognition engine that brings order."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`text-center p-6 bg-card border-2 ${colorClasses[stat.color as keyof typeof colorClasses].border} rounded-lg hover:${colorClasses[stat.color as keyof typeof colorClasses].glow} transition-all duration-300`}
                >
                  <div
                    className={`text-3xl font-bold font-mono ${colorClasses[stat.color as keyof typeof colorClasses].text} mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold font-mono text-secondary mb-12 text-center">The Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                      <div
                        className={`bg-card border-2 ${colorClasses[event.color as keyof typeof colorClasses].border} rounded-lg p-6 hover:${colorClasses[event.color as keyof typeof colorClasses].glow} transition-all duration-300`}
                      >
                        <div
                          className={`text-2xl font-bold font-mono ${colorClasses[event.color as keyof typeof colorClasses].text} mb-2`}
                        >
                          {event.year}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 ${colorClasses[event.color as keyof typeof colorClasses].bg} border-4 ${colorClasses[event.color as keyof typeof colorClasses].border} rounded-full flex items-center justify-center ${colorClasses[event.color as keyof typeof colorClasses].glow}`}
                      >
                        <event.icon
                          className={`w-6 h-6 ${colorClasses[event.color as keyof typeof colorClasses].text}`}
                        />
                      </div>
                    </div>

                    <div className="w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Philosophy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-mono text-primary mb-6">My Philosophy</h3>
              <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                "Security is not about building walls—it's about understanding the landscape. Every vulnerability
                discovered is a lesson learned, every exploit crafted is knowledge gained, and every system secured is a
                victory for the digital world."
              </blockquote>
              <div className="text-accent font-mono font-semibold">— Hulo, Digital Guardian</div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
