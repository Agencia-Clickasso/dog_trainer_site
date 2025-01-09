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
          <a 
            href="https://wa.me/5511993285473" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp" 
            className="block p-2 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          {/* <button aria-label="Share on Facebook" className="block p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-[#3b5998]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </button>
          <button aria-label="Share on Twitter" className="block p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-[#1da1f2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  )
}

