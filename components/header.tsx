import Link from 'next/link'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6">
      <div className="text-white text-2xl font-bold">
        <Link href="/">
          Felix Adestramento
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6 text-white">
        <Link href="/adestramento" className="hover:opacity-80">Adestramento</Link>
        <Link href="/consultoria" className="hover:opacity-80">Consultoria</Link>
        <Link href="#" className="hover:opacity-80">Produtos</Link>
        <Link href="#" className="hover:opacity-80">Blog</Link>
        <Link href="#" className="hover:opacity-80">Contato</Link>
      </div>
      <div className="flex items-center gap-4">
        <Search className="text-white w-5 h-5" />
        <span className="text-white">BR</span>
      </div>
    </nav>
  )
} 