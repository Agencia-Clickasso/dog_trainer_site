import Link from 'next/link'
import {  Mail, Phone, MapPin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Felix Adestramento</h3>
            <p className="text-sm">
              Especialistas em comportamento e treinamento canino desde 2004.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/felix_adestramento/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              {/* <li>
                <Link href="#" className="hover:text-white">História</Link>
              </li> */}
              {/* <li>
                <Link href="#" className="hover:text-white">Materiais Gratuitos</Link>
              </li> */}
              {/* <li>
                <Link href="#" className="hover:text-white">Cursos Online</Link>
              </li> */}
              <li>
                <Link href="#" className="hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">Adestramento</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Consultoria</Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-white">Imersão Presencial</Link>
              </li> */}
              <li>
                {/* <Link href="#" className="hover:text-white">Produtos</Link> */}
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@felixadestramento.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99328-5473</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Felix Adestramento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

