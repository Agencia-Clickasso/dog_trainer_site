import Image from 'next/image'

export function WelcomeSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Olá, seja bem-vindo!</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>Jefferson Felix, adestrador de cães desde 2004</p>

              <p>Em 2016 fundou a Felix Adestramento e Comportamento canino com o objetivo principal de conectar pessoas e cães promovendo assim uma mair integração entre os cães e suas familias atendendo todas as nuances do fenômeno crescente das famílias multiespecies.</p>

              <p>Respeitar a natureza canina é a chave para que seu cão consiga aprender a conviver em um ambiente humano e urbano.</p>

              <p>Especialista em tecnicas de psicologia aplicada no funcionamento da mente dos cães e associado as teorias mais modernas de aprendizado temos mais  de 1000 familias e seus cães atrndidos ao longo de mais de 20 anos.</p>
            </div>
          </div>
          
          <div className="relative h-[600px]">
            <Image
              src="/images/jefferson-felix.png"
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

