import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const neighborhoods = [
  "Mooca",
  "Vila Prudente",
  "Brás",
  "Belenzinho",
  "Tatuapé",
  "Parque da Mooca",
  "Ipiranga",
  "Água Rasa",
  "Quarta Parada",
  "Cambuci",
  "Santana",
  "Vila Maria",
  "Vila Guilherme",
  "Carrão",
  "Vila Formosa"
];

export function NeighborhoodsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Bairros Atendidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood}
              className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              {neighborhood}
            </div>
          ))}
        </div>
        {/* <div className="text-center">
          <Button variant="outline" className="hover:bg-[#5BC0DE] hover:text-white">
            Ver Todos os Bairros
          </Button>
        </div> */}
      </div>
    </section>
  )
} 