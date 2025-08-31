import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StarRating } from "./star-rating"
import { bettingSites } from "@/lib/betting-sites-data"
import { Trophy } from "lucide-react"

export function OurChoice() {
  const topSite = bettingSites[0]

  const formatReviews = (reviews: number) => {
    if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(1)}k avaliações`
    }
    return `${reviews} avaliações`
  }

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">

            <h2 className="text-3xl font-bold text-gray-800">Nossa Escolha</h2>

          </div>
          <p className="text-lg max-w-2xl mx-auto text-black">
            A nossa recomendação número 1 baseada em análise profissional e experiência dos utilizadores
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg border-2 border-yellow-500 shadow-lg overflow-hidden">
              <div className="bg-yellow-500 text-white text-center py-2 font-bold text-sm"> MELHOR ESCOLHA #1</div>

              <div className="grid grid-cols-2 min-h-[200px]">
                {/* Left side - Logo and Rating */}
                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 left-2 w-16 h-1 bg-green-600 transform -rotate-45"></div>
                    <div className="absolute bottom-2 right-2 w-16 h-1 bg-green-600 transform rotate-45"></div>
                  </div>

                  <div className="bg-black border-2 border-gray-300 rounded-lg p-2 mb-3 relative z-10">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={196}
                      height={120}
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <p className="text-xs text-gray-600 mb-1">{formatReviews(topSite.reviews)}</p>
                    <div className="flex items-center gap-1">
                      <StarRating rating={topSite.rating} />
                      <span className="text-sm font-bold text-gray-800">{topSite.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Bonus and Button */}
                <div className="bg-white p-4 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-600 transform rotate-45 translate-x-4 -translate-y-4"></div>

                  <div className="text-center mb-4">
                    <p className="text-xs text-red-600 font-semibold mb-1">Bónus de Boas-Vindas</p>
                    <p className="text-lg font-bold text-gray-800 leading-tight">{topSite.bonus}</p>
                  </div>

                  <Link href={topSite.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-red-600 text-white font-bold py-2 text-xs transition-colors">
                      OBTER BÓNUS AGORA
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="px-4 pb-3">
                <p className="text-xs text-gray-500 text-center">
                  18+ | Jogue com responsabilidade | Aplicam-se termos e condições
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg border-2 border-yellow-500 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center py-3 font-bold">
                🏆 MELHOR ESCOLHA #1 - RECOMENDAÇÃO PREMIUM
              </div>

              <div className="p-8">
                <div className="grid grid-cols-[120px_1fr_300px_120px] gap-8 items-center">
                  {/* Logo */}
                  <div className="flex justify-center">
                    <div className="bg-black border-2 border-gray-300 rounded-lg p-3">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Site Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">{topSite.name}</h3>
                    <p className="text-gray-600">{formatReviews(topSite.reviews)}</p>
                    <div className="flex items-center gap-2">
                      <StarRating rating={topSite.rating} />
                      <span className="font-bold text-lg text-gray-800">{topSite.rating}</span>
                    </div>
                  </div>

                  {/* Bonus */}
                  <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-lg p-6 text-center border border-gray-200">
                    <p className="text-sm text-red-600 font-semibold mb-2">Bónus de Boas-Vindas</p>
                    <p className="text-xl font-bold text-gray-800 mb-4">{topSite.bonus}</p>
                    <Link href={topSite.url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 hover:bg-red-600 text-white font-bold py-3 transition-colors">
                        OBTER BÓNUS AGORA
                      </Button>
                    </Link>
                  </div>

                  {/* Rating Badge */}
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl font-bold">{topSite.rating}</span>
                    </div>
                    <p className="text-xs text-gray-600">Classificação</p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-4">
                <p className="text-sm text-gray-500 text-center">
                  18+ | Jogue com responsabilidade | Aplicam-se termos e condições
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurChoice
