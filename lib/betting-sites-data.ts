export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  features: string[]
}

export const bettingSites: BettingSite[] = [
  {
    id: 0,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 9.7,
    stars: 4.9,
    reviews: 4823,
    badges: ["Melhor Escolha"],
    features: ["Bónus Regulares", "Interface Simples", "Pagamentos Rápidos"],
  },
  {
    id: 1,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casino.pt",
    rating: 9.5,
    stars: 4.8,
    reviews: 3967,
    badges: ["Marca Top"],
    features: ["Licença Portuguesa", "Casino + Apostas", "Promoções Semanais"],
  },
  {
    id: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt",
    rating: 9.3,
    stars: 4.7,
    reviews: 2845,
    badges: ["Oferta Exclusiva"],
    features: ["Marca Estabelecida", "Múltiplas Plataformas", "Eventos ao Vivo"],
  },
  {
    id: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt",
    rating: 9.1,
    stars: 4.6,
    reviews: 4156,
    badges: ["Altamente Avaliado"],
    features: ["Suporte 24/7", "Cash Out", "Mercados Variados"],
  },
  {
    id: 4,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt",
    rating: 8.9,
    stars: 4.5,
    reviews: 1923,
    badges: [],
    features: ["App Móvel", "Streaming ao Vivo", "Odds Altas"],
  },
]
