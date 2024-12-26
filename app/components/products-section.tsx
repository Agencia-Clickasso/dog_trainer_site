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
              Entendendo o Aprendizado Canino: O Guia Definitivo
            </h2>
            <p className="text-white text-lg">
              O curso online mais completo sobre adestramento canino em língua portuguesa
            </p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#5BC0DE]">
              Saiba Mais
            </Button>
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
        <div className="flex justify-center items-center gap-2 mt-16">
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
        </div>

        {/* Social Share Buttons */}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-r-lg p-2 space-y-3">
          <button aria-label="Share on Facebook" className="block p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-[#3b5998]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </button>
          <button aria-label="Share on Twitter" className="block p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-[#1da1f2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </button>
          <button aria-label="Share on LinkedIn" className="block p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 