"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { bettingSites, type BettingSite } from "@/lib/betting-sites-data"

function StarRating({ rating, className = "" }: { rating: number; className?: string }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} className={`w-4 h-4 fill-yellow-400 text-yellow-400 ${className}`} />)
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <Star className={`w-4 h-4 text-gray-300 ${className}`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <Star className={`w-4 h-4 fill-yellow-400 text-yellow-400 ${className}`} />
          </div>
        </div>,
      )
    } else {
      stars.push(<Star key={i} className={`w-4 h-4 text-gray-300 ${className}`} />)
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>
}

function BettingSiteCard({ site, index }: { site: BettingSite; index: number }) {
  const formatReviews = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k avaliações`
    }
    return `${count} avaliações`
  }

  const cardClasses = `
    relative bg-white border-4 rounded-lg overflow-hidden
    hover:scale-[1.02] transition-transform duration-200
    ${index === 0 ? "border-yellow-500 shadow-lg shadow-yellow-500/20" : "border-green-600"}
  `

  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer">
      <div className={cardClasses}>
        {/* Badge for first 4 sites */}
        {site.badges.length > 0 && (
          <Badge className="absolute top-0 left-0 bg-red-600 text-white rounded-none rounded-br-lg z-10">
            {site.badges[0]}
          </Badge>
        )}

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-2">
          {/* Left side - Gray background */}
          <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3">
            <div className="w-20 h-20 bg-black border-2 border-black rounded flex items-center justify-center">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={`${site.name} logo`}
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">{formatReviews(site.reviews)}</p>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={site.stars} />
                <span className="bg-white text-green-600 text-xs px-2 py-1 rounded-full font-semibold">
                  {site.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - White background */}
          <div className="bg-white p-4 flex flex-col justify-center space-y-3">
            <div className="text-center space-y-2">
              <p className="text-red-600 text-sm font-semibold">Bónus de Boas-Vindas</p>
              <p className="text-lg font-bold text-gray-800">{site.bonus}</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center p-6 gap-6">
          {/* Logo - increased width */}
          <div className="w-64 h-32 bg-black border-2 border-black rounded flex items-center justify-center flex-shrink-0">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={196}
              height={124}
              className="object-contain"
            />
          </div>

          {/* Center content - reduced width to 1/3 */}
          <div className="w-48 space-y-2 flex-shrink-0">
            <h3 className="text-lg font-bold text-gray-800">{site.name}</h3>
            <p className="text-xs text-gray-600">{formatReviews(site.reviews)}</p>
            <div className="flex items-center gap-2">
              <StarRating rating={site.stars} />
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {site.rating}
              </span>
            </div>
          </div>

          {/* Bonus section - expanded to take remaining space */}
          <div className="flex-1 text-center space-y-3">
            <p className="text-red-600 text-lg font-semibold">Bónus de Boas-Vindas</p>
            <p className="text-2xl font-bold text-gray-800">{site.bonus}</p>
          </div>
        </div>

        <div className="px-6 pb-4">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3">
            OBTER BÓNUS AGORA
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 px-4 py-2 text-center">
          <p className="text-xs text-gray-600">18+ | Jogue com responsabilidade | Aplicam-se termos e condições</p>
        </div>

        {/* Background sports elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-600/10 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-1 bg-green-600/5"></div>
          <div className="absolute top-1/2 right-8 w-1 h-8 bg-green-600/5 transform -rotate-45"></div>
        </div>
      </div>
    </Link>
  )
}

export function BettingSitesList() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-0">
      <div className="flex flex-col gap-8">
        {bettingSites.map((site, index) => (
          <BettingSiteCard key={site.id} site={site} index={index} />
        ))}
      </div>
    </section>
  )
}

export default BettingSitesList
