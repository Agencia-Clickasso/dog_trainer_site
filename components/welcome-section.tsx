import Image from 'next/image'

export function WelcomeSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Olá, seja bem-vindo!</h2>
            
            <div className="space-y-4 text-gray-600">
              <h3 className="text-2xl font-semibold">Sobre Nós</h3>
              <p>Bem-vindo à nossa empresa de adestramento canino, onde transformamos a relação entre cães e humanos. Com mais de 20 anos de experiência e uma certificação da renomada Escola K9 Sarge, nossa paixão e dedicação são voltadas para promover uma convivência harmoniosa e feliz.</p>

              <h3 className="text-2xl font-semibold">Nossa Abordagem</h3>
              <p>Utilizamos o sistema das Leis de Efeito, o famoso condicionamento operante, e técnicas avançadas de aprendizagem baseadas no behaviorismo. Essa abordagem garante que cada treinamento seja eficaz e personalizado, respeitando o ritmo e a individualidade de cada cão.</p>

              <h3 className="text-2xl font-semibold">Nossas Qualificações</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Experiência Ampla: Mais de 20 anos dedicados ao adestramento e ao bem-estar canino.</li>
                <li>Certificação K9 Sarge: Formação de alta qualidade que assegura métodos avançados e eficazes.</li>
                <li>Métodos Científicos: Aplicamos princípios behavioristas para ensinar e reforçar comportamentos positivos.</li>
              </ul>

              <h3 className="text-2xl font-semibold">Nossa Missão</h3>
              <p>Nossa missão é transformar a vida dos cães e seus tutores, fortalecendo os laços entre eles e promovendo comportamentos equilibrados. Com paciência, respeito e técnicas adequadas, acreditamos que todos os cães podem aprender e viver felizes ao lado de seus humanos.</p>

              <h3 className="text-2xl font-semibold">Conectando Cães a Pessoas</h3>
              <p>Acreditamos que cada cão tem o potencial de ser um companheiro incrível, e estamos aqui para ajudar a construir essa conexão.</p>
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

