import { Dog, Syringe, PawPrint } from 'lucide-react'
import Link from 'next/link'

export function BlogSection() {
  const articles = [
    {
      icon: <Dog className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'Cores e pigmentação',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <Dog className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'A criação do cão Pastor Alemão: O tripé - desempenho, saúde, morfologia',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <PawPrint className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'Genética em cães de trabalho',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <PawPrint className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'Cães de Esporte vs. Cães Reais',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <Dog className="w-12 h-12" />,
      category: 'ADESTRAMENTO',
      title: 'Técnicas de Adestramento',
      bg: 'bg-[#4A90E2]',
      href: '#'
    },
    {
      icon: <Syringe className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'Saúde Canina',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <Dog className="w-12 h-12" />,
      category: 'ARTIGOS',
      title: 'Comportamento Canino',
      bg: 'bg-[#556B2F]',
      href: '#'
    },
    {
      icon: <Dog className="w-12 h-12" />,
      category: 'CURSOS',
      title: 'Cursos Disponíveis',
      bg: 'bg-[#F7941D]',
      href: '#'
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <p className="text-gray-600">Artigos, novidades e dicas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={article.href}
              className="group block"
            >
              <div className={`${article.bg} p-8 rounded-lg transition-transform duration-200 group-hover:scale-105`}>
                <div className="flex justify-center text-white mb-4">
                  {article.icon}
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 block mb-2">{article.category}</span>
                <h3 className="font-semibold text-gray-800 line-clamp-2">{article.title}</h3>
              </div>
            </Link>
          ))}
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