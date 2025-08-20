"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MessageCircle, Key, Download, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    handle: "@hulo",
    url: "https://github.com/hulo",
    icon: Github,
    color: "primary",
    description: "Open source projects, security tools, and research code",
  },
  {
    name: "LinkedIn",
    handle: "Hulo - Cybersecurity Professional",
    url: "https://linkedin.com/in/hulo-security",
    icon: Linkedin,
    color: "secondary",
    description: "Professional network and industry insights",
  },
  {
    name: "Twitter/X",
    handle: "@hulo_sec",
    url: "https://twitter.com/hulo_sec",
    icon: Twitter,
    color: "accent",
    description: "Security research, threat intelligence, and hot takes",
  },
  {
    name: "Discord",
    handle: "hulo#1337",
    url: "https://discord.gg/hulo-security",
    icon: MessageCircle,
    color: "primary",
    description: "Join the security community discussions",
  },
  {
    name: "Email",
    handle: "contact@hulo.dev",
    url: "mailto:contact@hulo.dev",
    icon: Mail,
    color: "secondary",
    description: "Direct communication for collaborations",
  },
  {
    name: "PGP Key",
    handle: "4096R/DEADBEEF",
    url: "/hulo-pgp-key.asc",
    icon: Key,
    color: "accent",
    description: "Secure communications and identity verification",
  },
]

const resources = [
  {
    name: "Resume/CV",
    description: "Comprehensive professional background and achievements",
    url: "/hulo-resume.pdf",
    icon: Download,
    color: "primary",
  },
  {
    name: "Security Blog",
    description: "In-depth technical writeups and research findings",
    url: "/blog",
    icon: ExternalLink,
    color: "secondary",
  },
  {
    name: "Project Portfolio",
    description: "Showcase of security tools and research projects",
    url: "/projects",
    icon: ExternalLink,
    color: "accent",
  },
]

const colorClasses = {
  primary: {
    border: "border-primary",
    text: "text-primary",
    glow: "glow-cyan",
    bg: "bg-primary/10",
    hover: "hover:bg-primary/20",
  },
  secondary: {
    border: "border-secondary",
    text: "text-secondary",
    glow: "glow-magenta",
    bg: "bg-secondary/10",
    hover: "hover:bg-secondary/20",
  },
  accent: {
    border: "border-accent",
    text: "text-accent",
    glow: "glow-amber",
    bg: "bg-accent/10",
    hover: "hover:bg-accent/20",
  },
}

export default function SocialsPage() {
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
              <GlitchText text="CONNECT" className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Join the network. Share knowledge. Build a more secure future together.
              <br />
              <span className="text-secondary">Every connection strengthens the collective defense.</span>
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold font-mono text-secondary mb-8 text-center">Social Networks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative bg-card border-2 ${colorClasses[social.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[social.color as keyof typeof colorClasses].glow} ${colorClasses[social.color as keyof typeof colorClasses].hover}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${colorClasses[social.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <social.icon
                      className={`w-8 h-8 ${colorClasses[social.color as keyof typeof colorClasses].text}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                    {social.name}
                  </h3>
                  <p
                    className={`text-sm font-mono ${colorClasses[social.color as keyof typeof colorClasses].text} mb-3`}
                  >
                    {social.handle}
                  </p>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    {social.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink
                      className={`w-5 h-5 ${colorClasses[social.color as keyof typeof colorClasses].text}`}
                    />
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-${social.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold font-mono text-accent mb-8 text-center">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.name}
                  href={resource.url}
                  target={resource.url.startsWith("http") ? "_blank" : "_self"}
                  rel={resource.url.startsWith("http") ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className={`group bg-card border-2 ${colorClasses[resource.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[resource.color as keyof typeof colorClasses].glow}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${colorClasses[resource.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <resource.icon
                        className={`w-6 h-6 ${colorClasses[resource.color as keyof typeof colorClasses].text}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                        {resource.name}
                      </h3>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-card border border-primary/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-mono text-primary mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in security research, vulnerability disclosure, or just want to discuss the latest threats?
                I'm always open to connecting with fellow security professionals and researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:contact@hulo.dev"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono font-semibold hover:bg-primary/90 transition-colors glow-cyan"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </motion.a>
                <motion.a
                  href="/hulo-pgp-key.asc"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-mono font-semibold hover:bg-secondary/90 transition-colors glow-magenta"
                >
                  <Key className="w-4 h-4" />
                  Get PGP Key
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
