'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Mecanica2() {
  const ref = useRef(null)

  const imagens = [
    { src: '/e1.png', legenda: ' Imagem comum — sem prêmios escondidos.' },
    { src: '/e2.png', legenda: ' Nível difícil — o prêmio está escondido em um QR Code que leva a um desafio.' },
    { src: '/e3.png', legenda: ' Nível fácil — o prêmio aparece claramente na imagem.' },
    { src: '/e4.png', legenda: ' Revelação — mostra onde o prêmio estava escondido.' },
  ]

  useEffect(() => {
    const q = gsap.utils.selector(ref)

    // Parallax sutil nas imagens
    q('.imagem-parallax').forEach((el: any, index: number) => {
      const speed = index % 2 === 0 ? -60 : 60

      gsap.to(el, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
            trigger: ref.current,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          }
      })
    })
  }, [])

  return (
    <section
      ref={ref}
      className="bg-[#f4f1ec] text-black py-24 px-6 md:px-20 font-editorial"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
          Exemplos de imagens da campanha
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Veja como os prêmios podem aparecer nas postagens. Você vai precisar de atenção aos detalhes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {imagens.map((item, i) => (
          <div
            key={i}
            className="imagem-parallax w-full md:w-[22%] flex flex-col items-center"
          >
            <div className="rounded-md shadow-md">
              <Image
                src={item.src}
                alt={`Imagem ${i + 1}`}
                width={350}
                height={500}
                className="rounded-md"
              />
            </div>
            <p className="text-sm mt-3 text-center leading-snug">{item.legenda}</p>
          </div>
        ))}
      </div>
    </section>

    
  )
}
