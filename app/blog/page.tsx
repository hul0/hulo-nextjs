"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlitchText } from "@/components/glitch-text"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Terminal, Shield, Bug } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "exploiting-buffer-overflows-2024",
    title: "Modern Buffer Overflow Exploitation Techniques",
    excerpt: "Deep dive into advanced buffer overflow exploitation methods and mitigation bypasses in 2024.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Exploitation", "Binary Security", "Research"],
    category: "Technical",
    icon: Bug,
    color: "primary",
    featured: true,
  },
  {
    id: "api-security-checklist",
    title: "The Ultimate API Security Checklist",
    excerpt: "Comprehensive guide to securing REST APIs against common vulnerabilities and attack vectors.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["API Security", "Web Security", "Best Practices"],
    category: "Guide",
    icon: Shield,
    color: "secondary",
    featured: true,
  },
  {
    id: "osint-techniques-2024",
    title: "Advanced OSINT Techniques for Red Teams",
    excerpt: "Cutting-edge open source intelligence gathering methods for penetration testing and red team operations.",
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["OSINT", "Red Team", "Reconnaissance"],
    category: "Methodology",
    icon: Terminal,
    color: "accent",
    featured: true,
  },
  {
    id: "zero-day-discovery-process",
    title: "My Zero-Day Discovery Process",
    excerpt: "Step-by-step methodology I use to discover and responsibly disclose security vulnerabilities.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["Zero-Day", "Bug Bounty", "Research"],
    category: "Methodology",
    icon: Bug,
    color: "primary",
  },
  {
    id: "container-security-hardening",
    title: "Container Security Hardening Guide",
    excerpt: "Essential techniques for securing Docker containers and Kubernetes deployments in production.",
    date: "2023-12-20",
    readTime: "14 min read",
    tags: ["Container Security", "DevSecOps", "Kubernetes"],
    category: "Guide",
    icon: Shield,
    color: "secondary",
  },
  {
    id: "social-engineering-defense",
    title: "Building Human Firewalls: Social Engineering Defense",
    excerpt: "Practical strategies for organizations to defend against social engineering attacks.",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Social Engineering", "Security Awareness", "Defense"],
    category: "Strategy",
    icon: Terminal,
    color: "accent",
  },
]

const categories = ["All", "Technical", "Guide", "Methodology", "Strategy"]

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

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 6)

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
              <GlitchText text="SECURITY INTEL" className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
              Deep technical writeups, vulnerability research, and cybersecurity insights.
              <br />
              <span className="text-secondary">Knowledge shared is security multiplied.</span>
            </p>
          </motion.div>

          {/* Featured Posts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold font-mono text-accent mb-8 flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`group relative bg-card border-2 ${colorClasses[post.color as keyof typeof colorClasses].border} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:${colorClasses[post.color as keyof typeof colorClasses].glow}`}
                >
                  <Link href={`/blog/${post.id}`}>
                    {/* Post Icon */}
                    <div
                      className={`w-12 h-12 ${colorClasses[post.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <post.icon className={`w-6 h-6 ${colorClasses[post.color as keyof typeof colorClasses].text}`} />
                    </div>

                    {/* Post Title */}
                    <h3 className="text-xl font-bold font-mono text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Post Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 group-hover:text-foreground transition-colors">
                      {post.excerpt}
                    </p>

                    {/* Post Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs font-mono ${colorClasses[post.color as keyof typeof colorClasses].bg} ${colorClasses[post.color as keyof typeof colorClasses].text} rounded`}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Read More */}
                    <div
                      className={`flex items-center gap-1 text-sm ${colorClasses[post.color as keyof typeof colorClasses].text} font-mono group-hover:gap-2 transition-all`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Recent Posts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold font-mono text-secondary mb-8 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Recent Posts
            </h2>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <div className="flex items-start gap-4">
                      {/* Post Icon */}
                      <div
                        className={`w-10 h-10 ${colorClasses[post.color as keyof typeof colorClasses].bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <post.icon
                          className={`w-5 h-5 ${colorClasses[post.color as keyof typeof colorClasses].text}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Post Title */}
                        <h3 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        {/* Post Excerpt */}
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>

                        {/* Post Meta and Tags */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                            <span
                              className={`px-2 py-1 text-xs font-mono ${colorClasses[post.color as keyof typeof colorClasses].bg} ${colorClasses[post.color as keyof typeof colorClasses].text} rounded`}
                            >
                              {post.category}
                            </span>
                          </div>

                          <div
                            className={`flex items-center gap-1 text-sm ${colorClasses[post.color as keyof typeof colorClasses].text} font-mono opacity-0 group-hover:opacity-100 transition-opacity`}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="bg-card border border-accent/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold font-mono text-accent mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new security research and technical writeups.
              </p>
              <motion.a
                href="/socials"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-mono font-semibold hover:bg-accent/90 transition-colors glow-amber"
              >
                <Terminal className="w-4 h-4" />
                Follow for Updates
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
