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

export default function ConsultoriaPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-[#3DADD1] to-[#45C4A4]">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Consultoria Comportamental
          </h1>
          <p className="text-white text-lg mb-8">
            Entenda melhor seu cão e resolva problemas comportamentais
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/consultoria.jpg"
              alt="Consultoria comportamental"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
            <p className="text-gray-600 mb-4">
              Nossa consultoria comportamental é um serviço especializado que visa identificar 
              e resolver problemas específicos do seu cão. Através de uma análise detalhada, 
              desenvolvemos estratégias personalizadas para melhorar o comportamento do seu pet.
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#3DADD1] hover:bg-[#2C96B8]"
            >
              Agende uma Consulta
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Problemas que Resolvemos</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Agressividade com pessoas ou outros animais</li>
              <li>• Ansiedade de separação</li>
              <li>• Medos e fobias</li>
              <li>• Comportamentos destrutivos</li>
              <li>• Problemas de socialização</li>
              <li>• Latidos excessivos</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Benefícios da Consultoria</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Análise profissional do comportamento</li>
              <li>• Plano de ação personalizado</li>
              <li>• Orientação para toda a família</li>
              <li>• Suporte contínuo</li>
              <li>• Técnicas baseadas em evidências</li>
              <li>• Resultados duradouros</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Agende uma Consulta</DialogTitle>
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