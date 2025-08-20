"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import {
  Shield,
  Code,
  Bug,
  Terminal,
  Brain,
  Zap,
  Lock,
  Search,
  Target,
  Eye,
  Cpu,
  Database,
  Network,
  Wrench,
  Lightbulb,
  Crosshair,
} from "lucide-react"

const skillCategories = [
  {
    title: "Cybersecurity Mastery",
    icon: Shield,
    color: "primary",
    skills: [
      { name: "Penetration Testing", icon: Target, boast: "I find what others miss", code: "nmap -sS -O target.com" },
      {
        name: "Ethical Hacking",
        icon: Lock,
        boast: "Breaking systems to build them stronger",
        code: "exploit.py --target vulnerable.app",
      },
      {
        name: "Exploit Research",
        icon: Bug,
        boast: "Zero-day hunter extraordinaire",
        code: "buffer_overflow(payload, ret_addr)",
      },
      {
        name: "Red Teaming",
        icon: Crosshair,
        boast: "Thinking like the adversary",
        code: "social_engineer(target_org)",
      },
      { name: "OSINT", icon: Eye, boast: "Information is power", code: "gather_intel(digital_footprint)" },
    ],
  },
  {
    title: "Programming & Engineering",
    icon: Code,
    color: "secondary",
    skills: [
      { name: "Kotlin", icon: Cpu, boast: "Android security at its finest", code: "fun secureEncrypt(data: String)" },
      { name: "Python", icon: Terminal, boast: "Automation is my superpower", code: "def exploit_scanner():" },
      { name: "Rust", icon: Zap, boast: "Memory-safe system programming", code: "unsafe { raw_ptr.write(payload) }" },
      {
        name: "JavaScript/TypeScript",
        icon: Code,
        boast: "Full-stack security architect",
        code: "const sanitize = (input) => {}",
      },
      {
        name: "Reverse Engineering",
        icon: Search,
        boast: "Deconstructing the impossible",
        code: "objdump -d malware.bin",
      },
    ],
  },
  {
    title: "Bug Bounty & Systems Hardening",
    icon: Bug,
    color: "accent",
    skills: [
      {
        name: "Web Exploits",
        icon: Network,
        boast: "XSS, SQLi, CSRF - I speak fluent vuln",
        code: "' OR 1=1; DROP TABLE users--",
      },
      {
        name: "API Security",
        icon: Database,
        boast: "REST assured, APIs are secure",
        code: "Authorization: Bearer jwt.token",
      },
      {
        name: "Network Defense",
        icon: Shield,
        boast: "Building digital fortresses",
        code: "iptables -A INPUT -j DROP",
      },
      { name: "System Hardening", icon: Lock, boast: "Locking down every vector", code: "chmod 600 /etc/shadow" },
      {
        name: "Vulnerability Assessment",
        icon: Search,
        boast: "Systematic weakness detection",
        code: "nessus_scan(target_range)",
      },
    ],
  },
  {
    title: "Tools of the Trade",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Wireshark", icon: Network, boast: "Packet whisperer", code: "tcp.port == 443 and ssl" },
      { name: "Burp Suite", icon: Target, boast: "Web app testing legend", code: "Intruder: payload positions" },
      {
        name: "Metasploit",
        icon: Zap,
        boast: "Exploitation framework master",
        code: "use exploit/windows/smb/ms17_010",
      },
      { name: "Nmap", icon: Search, boast: "Network reconnaissance ninja", code: "nmap -sC -sV -oA scan target" },
      {
        name: "Custom Tools",
        icon: Wrench,
        boast: "Building tomorrow's exploits today",
        code: "#!/usr/bin/env python3",
      },
    ],
  },
  {
    title: "Mindset Skills",
    icon: Brain,
    color: "secondary",
    skills: [
      {
        name: "Pattern Recognition",
        icon: Eye,
        boast: "Seeing connections others miss",
        code: "if anomaly_detected():",
      },
      {
        name: "Strategic Thinking",
        icon: Lightbulb,
        boast: "Chess master of cybersecurity",
        code: "plan_attack_vector(target)",
      },
      {
        name: "Adversarial Simulation",
        icon: Crosshair,
        boast: "Thinking like the enemy",
        code: "simulate_threat_actor(apt_group)",
      },
      {
        name: "Problem Deconstruction",
        icon: Cpu,
        boast: "Breaking complexity into simplicity",
        code: "divide_and_conquer(problem)",
      },
      { name: "Continuous Learning", icon: Brain, boast: "Evolution never stops", code: "while True: learn_adapt()" },
    ],
  },
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

export default function SkillsPage() {
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
              <GlitchText text="LEGENDARY SKILLS" className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Years of dedication, countless hours of practice, and an unrelenting pursuit of excellence.
              <br />
              <span className="text-secondary">These are the weapons in my digital arsenal.</span>
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-3 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses].bg} ${colorClasses[category.color as keyof typeof colorClasses].glow}`}
                  >
                    <category.icon
                      className={`w-8 h-8 ${colorClasses[category.color as keyof typeof colorClasses].text}`}
                    />
                  </div>
                  <h2
                    className={`text-3xl font-bold font-mono ${colorClasses[category.color as keyof typeof colorClasses].text}`}
                  >
                    {category.title}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`group relative bg-card border-2 ${colorClasses[category.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[category.color as keyof typeof colorClasses].glow}`}
                    >
                      {/* Skill Icon and Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <skill.icon
                          className={`w-6 h-6 ${colorClasses[category.color as keyof typeof colorClasses].text}`}
                        />
                        <h3 className="text-lg font-semibold font-mono text-foreground">{skill.name}</h3>
                      </div>

                      {/* Boast */}
                      <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors">
                        {skill.boast}
                      </p>

                      {/* Code Snippet (appears on hover) */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`bg-background/50 border ${colorClasses[category.color as keyof typeof colorClasses].border} rounded p-3 font-mono text-xs`}
                        >
                          <code className={colorClasses[category.color as keyof typeof colorClasses].text}>
                            {skill.code}
                          </code>
                        </div>
                      </motion.div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-20"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-mono text-primary mb-4">Ready to See These Skills in Action?</h3>
              <p className="text-muted-foreground mb-6">
                Explore my projects to witness these capabilities deployed in real-world scenarios.
              </p>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono font-semibold hover:bg-primary/90 transition-colors glow-cyan"
              >
                <Code className="w-4 h-4" />
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
