export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Sobre Nós</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">A Nossa Missão</h2>
              <p className="text-gray-700 leading-relaxed">
                O APOSTAS DESPORTIVAS ONLINE PT é a sua fonte confiável para comparar os melhores sites de apostas
                desportivas licenciados em Portugal. A nossa missão é fornecer informações precisas, análises detalhadas
                e guias completos para ajudar os apostadores portugueses a tomar decisões informadas.
              </p>
            </section>

            {/* Mission section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-600">A Nossa Missão</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O APOSTAS DESPORTIVAS ONLINE PT é a sua fonte confiável para comparar os melhores sites de apostas
                desportivas licenciados em Portugal. A nossa missão é fornecer informações precisas, análises detalhadas
                e guias completos para ajudar os apostadores portugueses a tomar decisões informadas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trabalhamos incansavelmente para garantir que todas as casas de apostas que recomendamos possuem licença
                válida do SRIJ e oferecem uma experiência segura e justa aos jogadores portugueses.
              </p>
            </section>

            {/* Why trust us section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Porque Confiar em Nós</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: "#006633" }}>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Análises Imparciais</h3>
                  <p className="text-gray-700 text-sm">
                    Testamos pessoalmente cada casa de apostas, avaliando bónus, odds, mercados e suporte ao cliente de
                    forma objetiva.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: "#cc0000" }}>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Licenciamento Verificado</h3>
                  <p className="text-gray-700 text-sm">
                    Apenas recomendamos casas de apostas com licença válida do SRIJ, garantindo a sua segurança e
                    proteção legal.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: "#cc0000" }}>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Atualizações Regulares</h3>
                  <p className="text-gray-700 text-sm">
                    Mantemos as nossas análises e comparações sempre atualizadas com as últimas ofertas e mudanças do
                    mercado.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: "#006633" }}>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Foco em Portugal</h3>
                  <p className="text-gray-700 text-sm">
                    Especializamo-nos exclusivamente no mercado português, conhecendo as suas especificidades e
                    regulamentações.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsible gambling section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Jogo Responsável</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Promovemos o jogo responsável e alertamos para os riscos associados às apostas online. O jogo deve ser
                  sempre uma forma de entretenimento, nunca uma solução para problemas financeiros.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Lembre-se:</strong> Aposte apenas o que pode perder, estabeleça limites de tempo e dinheiro, e
                  procure ajuda se sentir que o jogo está a afetar negativamente a sua vida.
                </p>
                <p className="text-sm text-gray-600">
                  Para mais informações sobre jogo responsável, visite:{" "}
                  <a href="https://jogoresponsavel.pt" className="text-blue-600 hover:underline">
                    jogoresponsavel.pt
                  </a>
                </p>
              </div>
            </section>

            {/* Contact section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para questões, sugestões ou mais informações, pode contactar-nos através do nosso site
                apostasdesportivasonlinept.com. Estamos sempre disponíveis para ajudar os apostadores portugueses a
                encontrar as melhores opções de apostas desportivas online.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
