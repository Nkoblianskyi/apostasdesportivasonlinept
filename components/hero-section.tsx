import { Smartphone, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <section className="min-h-[200px] md:min-h-[280px] max-h-[280px] md:max-h-[350px] bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center">
      <div className="text-center space-y-3 md:space-y-6">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
          <span className="text-balance">
            <span className="text-green-700">MELHORES</span> <span className="text-red-600">CASAS</span>{" "}
            <span className="text-yellow-600">DE</span> <span className="text-green-700">APOSTAS</span>{" "}
            <span className="text-black">PORTUGAL</span>
          </span>
        </h1>

        <div className="space-y-1 md:space-y-2 text-black/90">
          <p className="text-sm sm:text-base md:text-lg">
            Descubra as casas de apostas mais confiáveis e lucrativas de Portugal
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Comparações imparciais, ofertas exclusivas e análises profissionais para maximizar os seus ganhos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <Badge
            variant="secondary"
            className="bg-white/10 text-green border-white/20 hover:bg-white/20 text-xs md:text-sm"
          >
            <Image src="/flag.png" width={16} height={16} className="md:w-5 md:h-5" alt="Flag" />
            <span className="ml-1 md:ml-2">Licenciado SRIJ</span>
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-green border-white/20 hover:bg-white/20 text-xs md:text-sm"
          >
            <Smartphone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Apps Móveis
          </Badge>
          <Badge
            variant="secondary"
            className="bg-white/10 text-green border-white/20 hover:bg-white/20 text-xs md:text-sm"
          >
            <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Pagamentos Rápidos
          </Badge>
        </div>

        <p className="text-xs md:text-sm text-black">
          Última atualização: {currentMonth} {currentYear}
        </p>
      </div>
    </section>
  )
}

export default HeroSection
