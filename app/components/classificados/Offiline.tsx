'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Offline() {
  const ref = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(ref)
    gsap.fromTo(
      q('.bloco'),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section
      ref={ref}
      className="bg-[#f4f1ec] text-black py-24 px-6 md:px-20 font-editorial"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="bloco space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Do feed para o asfalto
          </h2>
          <p className="text-lg leading-relaxed">
            A campanha também vive fora das telas. As artes dos Classificados Sekai serão transformadas em lambe-lambes reais, aplicadas em um mural no centro de São Paulo.
          </p>
          <p className="text-lg leading-relaxed">
            Durante a campanha, esse mural será usado como cenário para vídeos em Reels e TikTok, explorando a estética urbana e a curiosidade de quem passa. Cada arte poderá conter QR Codes, pistas e interações físicas.
          </p>
          <p className="text-lg leading-relaxed">
            É mais que mídia exterior. É intervenção cultural.
          </p>
        </div>

        {/* Imagem do mural */}
        <div className="bloco">
          <div className="w-full h-[400px] relative rounded-md shadow-md overflow-hidden border border-gray-300">
            <Image
              src="/m.jpg" // substitua por sua imagem real
              alt="Mural dos Classificados Sekai"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm mt-2 text-center opacity-70 italic">
            Exemplo ilustrativo do mural. 
          </p>
        </div>
      </div>
    </section>
  )
}
