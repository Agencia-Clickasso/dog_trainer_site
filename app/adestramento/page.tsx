'use client'

import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Header } from '@/components/header'

export default function AdestramentoPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-[#3DADD1] to-[#45C4A4]">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Adestramento Canino Profissional
          </h1>
          <p className="text-white text-lg mb-8">
            Transforme a relação com seu cão através de técnicas modernas e humanizadas
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nossa Metodologia</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos técnicas positivas e científicas para desenvolver uma comunicação efetiva entre você e seu cão. 
              Nossa abordagem é personalizada, considerando o temperamento único de cada animal e as necessidades específicas da família.
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#3DADD1] hover:bg-[#2C96B8]"
            >
              Agende uma Avaliação
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/adestramento.jpg"
              alt="Adestramento canino"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Adestramento Básico</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Comandos básicos</li>
              <li>• Socialização</li>
              <li>• Passeio sem puxar</li>
              <li>• Controle de latidos</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Adestramento Avançado</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Comandos avançados</li>
              <li>• Controle à distância</li>
              <li>• Trabalho de foco</li>
              <li>• Comportamento social</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Correção Comportamental</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Agressividade</li>
              <li>• Ansiedade</li>
              <li>• Medos e fobias</li>
              <li>• Destruição</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Agende uma Avaliação</DialogTitle>
          </DialogHeader>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeI0U4uogRcb5x8a1Lo-2umJ0iVxdQO5MSUBZwIJuWuAKn2uQ/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            className="border-0"
          >
            Carregando formulário...
          </iframe>
        </DialogContent>
      </Dialog>
    </div>
  )
} 