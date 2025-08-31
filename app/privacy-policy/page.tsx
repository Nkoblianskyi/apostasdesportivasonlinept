export default function PrivacyPolicyPage() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("pt-PT", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Política de Privacidade</h1>

          <p className="text-sm text-gray-600 mb-8 text-center">
            Última atualização: {currentMonth} {currentYear}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Recolha de Informações</h2>
              <p className="text-gray-700 leading-relaxed">
                O APOSTAS DESPORTIVAS ONLINE PT (apostasdesportivasonlinept.com) recolhe informações limitadas para
                melhorar a experiência do utilizador. Utilizamos cookies para análise de tráfego e personalização de
                conteúdo, sempre em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Utilização de Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Utilizamos cookies para:</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Analisar o tráfego do site e melhorar a experiência do utilizador</li>
                <li>• Personalizar conteúdo com base nas suas preferências</li>
                <li>• Garantir o funcionamento adequado das funcionalidades do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Partilha de Informações</h2>
              <p className="text-gray-700 leading-relaxed">
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros para fins comerciais.
                As informações recolhidas são utilizadas exclusivamente para melhorar os nossos serviços e fornecer
                conteúdo relevante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Os Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">De acordo com o RGPD, tem o direito de:</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Aceder às suas informações pessoais</li>
                <li>• Retificar informações incorretas</li>
                <li>• Solicitar a eliminação dos seus dados</li>
                <li>• Opor-se ao processamento dos seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Segurança</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança adequadas para proteger as suas informações contra acesso não
                autorizado, alteração, divulgação ou destruição. Utilizamos encriptação SSL e outras tecnologias de
                segurança para garantir a proteção dos seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre esta Política de Privacidade ou sobre como tratamos os seus dados, pode
                contactar-nos através do nosso site apostasdesportivasonlinept.com. Responderemos a todas as consultas
                no prazo de 30 dias.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
