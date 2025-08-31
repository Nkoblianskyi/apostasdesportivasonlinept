"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, X, Trophy, Gift, Zap } from "lucide-react"
import { bettingSites } from "@/lib/betting-sites-data"

function StarRating({ rating }: { rating: number }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative w-5 h-5">
          <Star className="w-5 h-5 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    } else {
      stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />)
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>
}

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => {
    const hasShown = sessionStorage.getItem("modalShown")
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("modalShown", "true")
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      <Link href={topSite.url} target="_blank" rel="noopener noreferrer">
        <div className="relative bg-transparent border-4 border-green-600 rounded-lg p-6 max-w-md w-full hover:scale-105 hover:shadow-3xl transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(false)
            }}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-6">
            <div className="relative">
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg px-6 py-2 rounded-full shadow-lg">
                <Trophy className="w-5 h-5 inline mr-2" />
                NOSSA ESCOLHA #1
              </Badge>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            <div className="flex justify-center">
              <div className="w-36 h-36 bg-black border-4 border-gradient-to-r from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg p-4">
                <Image
                  src={topSite.logo || "/placeholder.svg"}
                  alt={`${topSite.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>

            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-red-600 bg-clip-text text-transparent">
              {topSite.name}
            </h3>

            <div className="flex items-center justify-center gap-3 bg-white/80 rounded-full px-6 py-3 shadow-md">
              <StarRating rating={topSite.stars} />
              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-lg px-4 py-2 rounded-full font-bold shadow-md">
                {topSite.rating}
              </span>
            </div>

            <div className="bg-white/90 rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gift className="w-6 h-6 text-red-600" />
                <p className="text-red-600 font-bold text-lg">Bónus de Boas-Vindas</p>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {topSite.bonus}
              </p>
            </div>

            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
              <Zap className="w-5 h-5 mr-2" />
              OBTER BÓNUS AGORA
            </Button>

            <p className="text-sm text-gray-600 bg-white/70 rounded-lg px-4 py-2">
              18+ | Jogue com responsabilidade | T&C aplicam-se
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TopSitesModal
