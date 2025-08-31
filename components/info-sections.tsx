import { Shield, Gift, TrendingUp, HelpCircle, Heart, FileText } from "lucide-react"

export function InfoSections() {
  const sections = [
    {
      icon: Shield,
      title: "Licenças SRIJ",
      content:
        "Todos os sites recomendados possuem licença válida do Serviço de Regulação e Inspeção de Jogos (SRIJ), garantindo operação legal e segura em território português.",
      color: "text-green-600",
    },
    {
      icon: Gift,
      title: "Bónus e Ofertas",
      content:
        "Comparamos os melhores bónus de boas-vindas, promoções regulares e programas de fidelidade disponíveis para jogadores portugueses.",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Mercados de Apostas",
      content:
        "Analisamos a variedade de desportos, ligas e mercados disponíveis, com foco especial no futebol português e competições europeias.",
      color: "text-yellow-600",
    },
    {
      icon: HelpCircle,
      title: "Como Escolher um Bookmaker",
      content:
        "Guia completo com critérios essenciais: licenciamento, odds competitivas, métodos de pagamento, suporte em português e aplicações móveis.",
      color: "text-green-600",
    },
    {
      icon: Heart,
      title: "Jogo Responsável",
      content:
        "Informações sobre limites de depósito, auto-exclusão e recursos de proteção ao jogador disponíveis nos sites licenciados.",
      color: "text-red-600",
    },
    {
      icon: FileText,
      title: "Perguntas Frequentes",
      content:
        "Respostas às dúvidas mais comuns sobre apostas online em Portugal, desde o registo até aos levantamentos de ganhos.",
      color: "text-yellow-600",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-md rounded-xl p-8 border border-white/10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-green-600">Guia</span> <span className="text-red-600">Completo</span>{" "}
        <span className="text-yellow-600">de</span> <span className="text-white">Apostas Online</span>{" "}
        <span className="text-green-600">em</span> <span className="text-red-600">Portugal</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg bg-black/30 ${section.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold ${section.color}`}>{section.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{section.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
