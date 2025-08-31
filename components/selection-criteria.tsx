import { Shield, Gift, Zap, Users } from "lucide-react"

export function SelectionCriteria() {
  const criteria = [
    {
      icon: Shield,
      title: "Licenciamento",
      description: "Verificamos se todos os sites possuem licença válida do SRIJ para operar legalmente em Portugal.",
      gradient: "from-green-600/20 to-green-800/20",
      iconColor: "text-green-400",
    },
    {
      icon: Gift,
      title: "Bónus & Promoções",
      description: "Analisamos a qualidade e valor dos bónus de boas-vindas e promoções regulares oferecidas.",
      gradient: "from-red-600/20 to-red-800/20",
      iconColor: "text-red-400",
    },
    {
      icon: Zap,
      title: "Velocidade",
      description: "Testamos a rapidez dos levantamentos, processamento de apostas e navegação no site.",
      gradient: "from-yellow-600/20 to-yellow-800/20",
      iconColor: "text-yellow-400",
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Avaliamos a facilidade de uso, suporte ao cliente e feedback real dos utilizadores portugueses.",
      gradient: "from-blue-600/20 to-blue-800/20",
      iconColor: "text-blue-400",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-md rounded-xl p-8 border border-white/10">
      <div className="bg-gradient-to-br from-black/50 to-black/70 rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-green-600">Como</span> <span className="text-red-600">Selecionamos</span>{" "}
          <span className="text-yellow-600">os</span> <span className="text-white">Melhores</span>{" "}
          <span className="text-green-600">Sites</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${criterion.gradient} backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-black/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${criterion.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {criterion.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{criterion.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
