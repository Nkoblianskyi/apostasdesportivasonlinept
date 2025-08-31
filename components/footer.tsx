import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
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

  const organizations = [
    {
      name: "SICAD",
      logo: "/icad.png",
      url: "https://sicad.pt",
    },
    {
      name: "GamCare",
      logo: "/gamecare.svg",
      url: "https://gamcare.org.uk",
    },
    {
      name: "SRIJ",
      logo: "/srij.svg",
      url: "https://srij.turismodeportugal.pt",
    },
    {
      name: "GambleAware",
      logo: "/gamble.webp",
      url: "https://gambleaware.org",
    },
    {
      name: "Jogo Responsável",
      logo: "/jogo2.png",
      url: "https://jogoresponsavel.pt",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
              <span className="font-bold">
                <span className="text-green-400">APOSTAS</span> <span className="text-red-400">DESPORTIVAS</span>{" "}
                <span className="text-yellow-400">ONLINE</span> <span className="text-white">PT</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              A sua fonte confiável para comparar os melhores sites de apostas desportivas licenciados em Portugal.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-yellow-400 border-b border-yellow-400 pb-2">Informação</h3>
            <div className="space-y-4 text-base text-gray-300">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Licenciamento SRIJ verificado</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>
                  Atualizado: {currentMonth} {currentYear}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Suporte apenas para jogadores portugueses</span>
              </div>
              <div className="flex items-center gap-3 mt-4 p-3 bg-gray-800 rounded-lg">
                <Image src="/flag.png" alt="Portugal" width={24} height={18} />
                <span className="font-semibold">Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Organizations section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-bold text-center mb-6">Organizações Parceiras</h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {organizations.map((org, index) => (
              <Link
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={org.logo || "/placeholder.svg"}
                  alt={org.name}
                  width={80}
                  height={40}
                  className="object-contain filter brightness-0 invert"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center space-y-2">
          <p className="text-sm text-gray-400">
            © {currentYear} APOSTAS DESPORTIVAS ONLINE PT (apostasdesportivasonlinept.com). Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-gray-500">18+ | Apenas jogadores portugueses | Jogue com responsabilidade</p>
        </div>
      </div>
    </footer>
  )
}
