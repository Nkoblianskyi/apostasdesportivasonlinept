import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import "./globals.css"
import { Suspense } from "react"
import { TopSitesModal } from "@/components/top-sites-modal"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "apostas desportivas online pt - Melhores Casas de Apostas Portuguesas",
  description:
    "Compare os melhores sites de apostas desportivas licenciados em Portugal. Bónus exclusivos, análises detalhadas e guia completo para apostadores portugueses.",
  keywords:
    "apostas desportivas, casas de apostas, Portugal, SRIJ, bónus apostas, sites apostas portugueses, apostasdesportivasonlinept.com",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
          <TopSitesModal />
          <CookieBanner />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
