"use client"

import { Download } from "lucide-react"
import { NeonButton } from "./neon-button"

export function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/hulo-resume.pdf"
    link.download = "Hulo-Cybersecurity-Resume.pdf"
    link.click()
  }

  return (
    <NeonButton onClick={handleDownload} className="group">
      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
      Download Resume
    </NeonButton>
  )
}
