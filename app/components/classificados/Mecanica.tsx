'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function MecanicaVisual() {
  const containerRef = useRef(null)
  const gridRef = useRef(null)

  // Gera as 48 imagens embaralhadas usando f1.jpg até f9.jpg e f10.png até f18.png
  const [imagensEmbaralhadas, setImagensEmbaralhadas] = useState<string[]>([])

  useEffect(() => {
    const imagensBase = Array.from({ length: 18 }, (_, i) => {
      const num = i + 1
      const ext = num <= 9 ? 'jpg' : 'png'
      return `/f${num}.${ext}`
    })
  
    const embaralhadas = Array.from({ length: 48 }, () => {
      const random = Math.floor(Math.random() * imagensBase.length)
      return imagensBase[random]
    })
  
    setImagensEmbaralhadas(embaralhadas)
  }, [])
  

  const [revelados, setRevelados] = useState<number[]>([])
  const prêmios = new Set<number>()

  while (prêmios.size < 12) {
    prêmios.add(Math.floor(Math.random() * 48))
  }

  const handleClick = (id: number) => {
    if (!revelados.includes(id)) {
      setRevelados([...revelados, id])
    }
  }

  useEffect(() => {
    const q = gsap.utils.selector(gridRef)
    gsap.fromTo(
      q('.card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  const rankingFake = [
    { nome: 'João do Bairro', acertos: 5 },
    { nome: 'Sr. Blindagem', acertos: 3 },
    { nome: 'Maria da Lupa', acertos: 7 },
    { nome: 'X9 do Instagram', acertos: 2 },
    { nome: 'Detetive da Sekai', acertos: 9 },
  ]

  return (
    <section
      ref={containerRef}
      className="bg-[#f4f1ec] text-black py-24 px-6 md:px-20 font-editorial"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
          Mecânica do Jogo
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Durante 12 dias, 48 imagens serão publicadas no Instagram da Sekai. Em 12 delas, há iPhones
          escondidos. Os participantes precisam encontrar todas as peças para ganhar o prêmio final.
        </p>
      </div>

      {/* Grade de Cards */}
      <div
        ref={gridRef}
        className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12"
      >
        {imagensEmbaralhadas.map((src, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="card cursor-pointer aspect-square bg-[#e9e6dd] rounded-md overflow-hidden border border-[#ccc] shadow-md hover:scale-105 transition-all"
          >
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover"
              />
              {revelados.includes(index) && prêmios.has(index) && (
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-sm font-bold">
                  🎁 iPhone escondido!
                </div>
              )}
              {revelados.includes(index) && !prêmios.has(index) && (
                <div className="absolute inset-0 bg-white bg-opacity-70 text-black flex items-center justify-center text-sm italic">
                  Nada aqui...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Ranking Fake */}
      <div className="max-w-2xl mx-auto text-left border-t border-[#ccc] pt-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 uppercase tracking-wide">
          Ranking dos Investigadores
        </h3>
        <ul className="space-y-2 text-lg">
          {rankingFake.map((user, i) => (
            <li key={i} className="flex justify-between border-b border-dotted border-gray-400 pb-1">
              <span>{user.nome}</span>
              <span>{user.acertos} prêmios encontrados</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
