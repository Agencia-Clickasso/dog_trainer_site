import Image from 'next/image'

export function WelcomeSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Olá, seja bem-vindo!</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Médico Veterinário formado pela Escola de Veterinária da Universidade Federal de Minas Gerais em 2000. Proprietário da Companhia de Cães de Patrulhamento e Detecção, empresa dedicada a criação de cães para trabalho, ao seu treinamento e a instrução de pessoal de segurança pública e privada voltados ao emprego de cães de alto desempenho para patrulhamento, detecção de drogas e explosivos e serviço policial em geral.
              </p>
              
              <p>
                Atua desde 1992 na área zootécnica, com ênfase em comportamento, etologia e melhoramento genético de cães para trabalho policial e militar. Pioneiro no Brasil na criação sistemática de cães Pastores Alemães com genética especializada em trabalho e esportes.
              </p>
              
              <p>
                Árbitro Internacional de Cães de Trabalho do Clube Brasileiro do Pastor Alemão e da Confederação Brasileira de Cinofilia.
              </p>
              
              <p>
                1º Tenente Veterinário da Reserva do Exército Brasileiro, serviu à força terrestre como Oficial Veterinário de 2001 a 2008. Especializado em cães de patrulhamento e de detecção, compôs a primeira equipe nacional de condutores de cães de detecção de explosivos da Força Nacional de Segurança Pública, em 2005. Continua atuando como instrutor de treinamento de cães de serviço policial militar para as Forças Armadas (Marinha, Exército e Força Aérea) e demais instituições policiais por todo o Brasil.
              </p>
              
              <p>
                Competiu em mais de uma dezena de campeonatos brasileiros de adestramento com importantes colocações, sendo selecionado para representar o Brasil nos Campeonatos Mundiais de Cães de Trabalho WUSV 2009 (Krefeld - Alemanha) e 2011 (Kiew - Ucrânia). Disputou pelo time brasileiro o Campeonato Mundial de Cães de Trabalho WUSV 2009 em Krefeld, Alemanha, posicionando-se em 12º Lugar Geral por Equipes.
              </p>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg"
              alt="Jefferson Felix com Pastor Alemão"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

