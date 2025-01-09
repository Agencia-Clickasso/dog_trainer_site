import { Button } from "@/components/ui/button"
import { Lightbulb, Dog } from 'lucide-react'

export function ProductsSection() {
  return (
    <section className="bg-[#5BC0DE] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-white text-lg font-medium">NOSSOS PRODUTOS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dono Feliz(EM BREVE)
            </h2>
            <p className="text-white text-lg">
              O curso online sobre enriquecimento ambiental para cães.
            </p>
            {/* <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#5BC0DE]">
              Saiba Mais
            </Button> */}
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 text-white">
                <Dog className="w-full h-full" />
              </div>
              <div className="absolute -top-6 -right-6">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-2 mt-16">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-[#5BC0DE] transition-colors ${
                num === 1 ? "bg-white text-[#5BC0DE]" : ""
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-4 py-1 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#5BC0DE] transition-colors">
            mais
          </button>
        </div> */}
      </div>
    </section>
  )
}

