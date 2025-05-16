'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = new Audio('/audio/sobe-junto.mp3')
    audio.volume = 0.08
    audio.loop = true
    audio.play().catch(() => {
      console.log("Autoplay bloqueado até interação do usuário.")
    })

    return () => {
      audio.pause()
    }
  }, [])

  useEffect(() => {
    if (container.current) {
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-[#f4f1ec] text-black flex items-center justify-center px-10"
    >
      <div className="z-10 text-center">
        <h1 className="text-[9vw] leading-none font-editorial tracking-tight uppercase">
          Classificados Sekai
        </h1>
        <p className="mt-6 text-lg tracking-wide italic">
          Uma campanha como nenhuma outra. Nostalgia, arte e uma caça ao tesouro digital.
        </p>
      </div>

      {/* Marca d’água */}
      <div className="absolute top-6 left-8 text-xs opacity-40 uppercase tracking-widest">
        Brava Comunicação
      </div>
    </section>
  )
}
