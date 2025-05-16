'use client'

import { useEffect, useState } from 'react'

export default function MobileBlock() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed inset-0 bg-[#f4f1ec] z-[9999] flex items-center justify-center text-center p-8 font-editorial">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-black uppercase tracking-wide">
          A versão mobile ainda está em construção
        </h1>
        <p className="text-black text-lg max-w-sm mx-auto">
          Para visualizar corretamente a campanha <strong>Classificados Sekai</strong>, acesse via computador ou aumente a largura da sua tela.
        </p>
      </div>
    </div>
  )
}
