export default function CookiesPage() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("pt-PT", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Política de Cookies</h1>

          <p className="text-sm text-gray-600 mb-8 text-center">
            Última atualização: {currentMonth} {currentYear}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">O que são Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Os cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita o
                APOSTAS DESPORTIVAS ONLINE PT (apostasdesportivasonlinept.com). Estes ficheiros permitem-nos reconhecer
                o seu dispositivo e melhorar a sua experiência de navegação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Como Utilizamos os Cookies</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-yellow-600">Cookies Essenciais</h3>
                  <p className="text-gray-700 text-sm">
                    Necessários para o funcionamento básico do site, incluindo navegação e acesso a áreas seguras.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-yellow-600">Cookies de Análise</h3>
                  <p className="text-gray-700 text-sm">
                    Ajudam-nos a compreender como os visitantes interagem com o site, permitindo melhorar a experiência
                    do utilizador.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-yellow-600">Cookies de Preferências</h3>
                  <p className="text-gray-700 text-sm">
                    Recordam as suas escolhas e preferências para personalizar a sua experiência de navegação.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Gestão de Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pode controlar e gerir os cookies através das definições do seu navegador. A maioria dos navegadores
                permite-lhe:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Ver que cookies estão armazenados no seu dispositivo</li>
                <li>• Eliminar cookies individualmente ou todos de uma vez</li>
                <li>• Bloquear cookies de sites específicos</li>
                <li>• Bloquear cookies de terceiros</li>
                <li>• Eliminar todos os cookies quando fechar o navegador</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Cookies de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed">
                O nosso site pode conter cookies de terceiros, incluindo serviços de análise como o Google Analytics.
                Estes cookies são regidos pelas políticas de privacidade dos respetivos fornecedores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre a nossa utilização de cookies, pode contactar-nos através do nosso site
                apostasdesportivasonlinept.com. Responderemos a todas as consultas no prazo de 30 dias.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
