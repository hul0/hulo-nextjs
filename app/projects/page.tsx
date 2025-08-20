"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Github,
  ExternalLink,
  Shield,
  Terminal,
  Bug,
  Network,
  Lock,
  Search,
  Code,
  Database,
  Zap,
  Eye,
  Target,
  Wrench,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "VulnScanner Pro",
    category: "Tools",
    stack: ["Python", "Nmap", "SQLite", "Flask"],
    description: "Advanced vulnerability scanner with AI-powered threat detection and automated reporting.",
    github: "https://github.com/hulo/vulnscanner-pro",
    demo: "https://vulnscanner.hulo.dev",
    icon: Search,
    color: "primary",
    featured: true,
  },
  {
    id: 2,
    title: "CryptoBreaker",
    category: "Research",
    stack: ["Rust", "Cryptography", "Mathematics"],
    description: "Research project exploring weaknesses in legacy encryption algorithms.",
    github: "https://github.com/hulo/cryptobreaker",
    icon: Lock,
    color: "secondary",
    featured: true,
  },
  {
    id: 3,
    title: "NetGuard",
    category: "Open Source",
    stack: ["Go", "eBPF", "Linux", "Docker"],
    description: "Real-time network monitoring and intrusion detection system for containerized environments.",
    github: "https://github.com/hulo/netguard",
    demo: "https://netguard.hulo.dev",
    icon: Network,
    color: "accent",
    featured: true,
  },
  {
    id: 4,
    title: "SQLi Hunter",
    category: "Tools",
    stack: ["Python", "Selenium", "BeautifulSoup"],
    description: "Automated SQL injection detection tool with advanced payload generation.",
    github: "https://github.com/hulo/sqli-hunter",
    icon: Database,
    color: "primary",
  },
  {
    id: 5,
    title: "Zero-Day Research: CVE-2024-XXXX",
    category: "Research",
    stack: ["C", "Assembly", "Reverse Engineering"],
    description: "Discovered and responsibly disclosed critical buffer overflow in popular IoT firmware.",
    github: "https://github.com/hulo/cve-2024-research",
    icon: Bug,
    color: "secondary",
  },
  {
    id: 6,
    title: "SecureAPI Framework",
    category: "Open Source",
    stack: ["TypeScript", "Node.js", "JWT", "Rate Limiting"],
    description: "Production-ready API security framework with built-in threat protection.",
    github: "https://github.com/hulo/secure-api",
    demo: "https://secureapi.hulo.dev",
    icon: Shield,
    color: "accent",
  },
  {
    id: 7,
    title: "PhishDetect AI",
    category: "Tools",
    stack: ["Python", "TensorFlow", "NLP", "React"],
    description: "Machine learning-powered phishing detection with real-time URL analysis.",
    github: "https://github.com/hulo/phishdetect-ai",
    demo: "https://phishdetect.hulo.dev",
    icon: Eye,
    color: "primary",
  },
  {
    id: 8,
    title: "Malware Analysis Sandbox",
    category: "Research",
    stack: ["Python", "Docker", "YARA", "Volatility"],
    description: "Automated malware analysis environment with behavioral pattern recognition.",
    github: "https://github.com/hulo/malware-sandbox",
    icon: Target,
    color: "secondary",
  },
  {
    id: 9,
    title: "PenTest Toolkit",
    category: "Open Source",
    stack: ["Bash", "Python", "Metasploit", "Nmap"],
    description: "Comprehensive penetration testing toolkit with automated reconnaissance.",
    github: "https://github.com/hulo/pentest-toolkit",
    icon: Wrench,
    color: "accent",
  },
]

const categories = ["All", "Tools", "Research", "Open Source"]

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

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

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
              <GlitchText text="PROJECT ARSENAL" className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              From cutting-edge security tools to groundbreaking research.
              <br />
              <span className="text-secondary">Each project represents a victory against digital threats.</span>
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold font-mono text-accent mb-8 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`group relative bg-card border-2 ${colorClasses[project.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[project.color as keyof typeof colorClasses].glow}`}
                >
                  {/* Project Icon */}
                  <div
                    className={`w-12 h-12 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <project.icon
                      className={`w-6 h-6 ${colorClasses[project.color as keyof typeof colorClasses].text}`}
                    />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Category Badge */}
                  <span
                    className={`inline-block px-2 py-1 text-xs font-mono ${colorClasses[project.color as keyof typeof colorClasses].bg} ${colorClasses[project.color as keyof typeof colorClasses].text} rounded mb-3`}
                  >
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center gap-1 text-sm ${colorClasses[project.color as keyof typeof colorClasses].text} hover:underline font-mono`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center gap-1 text-sm ${colorClasses[project.color as keyof typeof colorClasses].text} hover:underline font-mono`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="flex gap-2 bg-card border border-primary/30 rounded-lg p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground glow-cyan"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold font-mono text-secondary mb-8 flex items-center gap-2">
              <Code className="w-6 h-6" />
              All Projects ({filteredProjects.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group relative bg-card border-2 ${colorClasses[project.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[project.color as keyof typeof colorClasses].glow}`}
                >
                  {/* Project Icon */}
                  <div
                    className={`w-10 h-10 ${colorClasses[project.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <project.icon
                      className={`w-5 h-5 ${colorClasses[project.color as keyof typeof colorClasses].text}`}
                    />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold font-mono text-foreground mb-2">{project.title}</h3>

                  {/* Category Badge */}
                  <span
                    className={`inline-block px-2 py-1 text-xs font-mono ${colorClasses[project.color as keyof typeof colorClasses].bg} ${colorClasses[project.color as keyof typeof colorClasses].text} rounded mb-3`}
                  >
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-sm ${colorClasses[project.color as keyof typeof colorClasses].text} hover:underline font-mono`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-sm ${colorClasses[project.color as keyof typeof colorClasses].text} hover:underline font-mono`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-card border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-mono text-secondary mb-4">Want to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in working on challenging cybersecurity projects and research.
              </p>
              <motion.a
                href="/socials"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-mono font-semibold hover:bg-secondary/90 transition-colors glow-magenta"
              >
                <Terminal className="w-4 h-4" />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
