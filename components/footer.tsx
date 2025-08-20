"use client"

import { motion } from "framer-motion"
import { Shield, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hulo", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/hulo", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/hulo", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@hulo.dev", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and Tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm" />
              </div>
              <span className="text-2xl font-mono font-bold text-primary">HULO</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm">I see the patterns. I secure the future.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground font-mono">
            <p>&copy; 2024 Hulo. All rights reserved.</p>
            <p className="mt-1">Built with Next.js, TypeScript & Cyberpunk Aesthetics</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
