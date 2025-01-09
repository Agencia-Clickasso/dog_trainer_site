'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlogSection } from '../components/blog-section'
import { ProductsSection } from '../components/products-section'
import { WelcomeSection } from '../components/welcome-section'
import { Footer } from '../components/footer'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-[#5BC0DE] to-[#5CD6B3]">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-4 md:p-6">
          <div className="text-white text-2xl font-bold">
            Felix Adestramento
          </div>
          <div className="hidden md:flex items-center gap-6 text-white">
            {/* <Link href="#" className="hover:opacity-80">História</Link> */}
            {/* <Link href="#" className="hover:opacity-80">Materiais Gratuitos</Link> */}
            {/* <Link href="#" className="hover:opacity-80">Cursos Online</Link> */}
            <Link href="#" className="hover:opacity-80">Produtos</Link>
            <Link href="#" className="hover:opacity-80">Blog</Link>
            {/* <Link href="#" className="hover:opacity-80">Imersão Presencial</Link> */}
            <Link href="#" className="hover:opacity-80">Contato</Link>
          </div>
          <div className="flex items-center gap-4">
            <Search className="text-white w-5 h-5" />
            <span className="text-white">BR</span>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white space-y-6">
            <h2 className="text-xl font-medium tracking-wide">CULTURA CANINA SAUDÁVEL</h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Conheça como funciona o aprendizado canino e transforme a sua relação com seu cão
            </h1>
            <p className="text-lg opacity-90">
              Jefferson Felix, adestrador de cães desde 2004
            </p>
            {/* <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              Cursos Online
            </Button> */}
          </div>
          
          {/* Dog Icons Circle */}
          <div className="md:w-1/2 relative mt-12 md:mt-0">
            <div className="relative w-[400px] h-[400px] mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full bg-[#F7941D] flex items-center justify-center">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Felix Adestramento Logo" 
                    width={208}
                    height={208}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Sections */}
        <section className="container mx-auto px-4 py-12 relative">
          <div className="grid md:grid-cols-2 gap-12 text-white">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Comece por aqui</h3>
              <p className="max-w-md mx-auto">
                Em 2016 fundou a Felix Adestramento e Comportamento canino com o objetivo principal de conectar pessoas e cães promovendo assim uma maior integração entre os cães e suas famílias.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Conteúdo gratuito</h3>
              <p className="max-w-md mx-auto">
                Especialista em técnicas de psicologia aplicada no funcionamento da mente dos cães e associado as teorias mais modernas de aprendizado, temos mais de 1000 famílias e seus cães atendidos ao longo de mais de 20 anos.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#5BC0DE]"
                asChild
              >
                <Link href="https://blog.felixpet.com.br">
                  Acessar o Blog
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-white text-xl font-medium bg-[#5BC0DE] px-4 py-2 rounded">
              OU
            </span>
          </div>
        </section>
      </div>
      
      <BlogSection />
      <ProductsSection />
      <WelcomeSection />
      <Footer />
    </div>
  )
}

