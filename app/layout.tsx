import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Hulo - Cybersecurity Professional & Hacker",
    template: "%s | Hulo - Cybersecurity Professional",
  },
  description:
    "Elite cybersecurity professional, ethical hacker, and digital security expert. I see the patterns. I secure the future. Specializing in penetration testing, vulnerability research, and security architecture.",
  generator: "v0.app",
  applicationName: "Hulo Portfolio",
  keywords: [
    "cybersecurity",
    "ethical hacking",
    "penetration testing",
    "security consultant",
    "bug bounty",
    "vulnerability research",
    "red team",
    "security architecture",
    "OSINT",
    "malware analysis",
  ],
  authors: [{ name: "Hulo", url: "https://hulo.dev" }],
  creator: "Hulo",
  publisher: "Hulo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hulo.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hulo.dev",
    title: "Hulo - Cybersecurity Professional & Hacker",
    description:
      "Elite cybersecurity professional, ethical hacker, and digital security expert. I see the patterns. I secure the future.",
    siteName: "Hulo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hulo - Cybersecurity Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hulo - Cybersecurity Professional & Hacker",
    description:
      "Elite cybersecurity professional, ethical hacker, and digital security expert. I see the patterns. I secure the future.",
    creator: "@hulo_sec",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00BCD4" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
