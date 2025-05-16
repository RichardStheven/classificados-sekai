'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function TextoManifesto() {
  const containerRef = useRef(null)

  useEffect(() => {
    const lines = gsap.utils.toArray('.manifesto-line')

    gsap.to(lines, {
      opacity: 1,
      y: 0,
      stagger: 0.8,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f4f1ec] text-black py-[32] px-6 md:px-20 font-editorial"
    >
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-16">
  {/* BLOCO DE TEXTO */}
  <div className="space-y-8 pt-4 md:pt-0">
    <h1 className="text-3xl md:text-4xl font-semibold manifesto-line opacity-0 translate-y-4">
      Uma campanha feita para colecionar lembranças
    </h1>
    <p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
      Inspirada nos jornais de bairro, nas colagens lambe-lambe e nas promoções que
      a gente recortava na infância.
    </p>
    <p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
      Aqui, tudo vira peça: os anúncios, os desafios, os prêmios e os próprios seguidores.
    </p>
    <p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
      Um feed vivo, interativo e nostálgico, onde cada post é uma pista – e cada like, um empurrão.
    </p>
    <p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
  A campanha nasce da vontade de resgatar o encanto das ideias simples: sorteios,
  promoções, desafios visuais, figurinhas, fragmentos.
</p>

<p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
  Ela transforma o Instagram em um jornal popular digital — com manchetes falsas,
  estética de rua, linguagem lúdica e um sistema de gamificação orgânico.
</p>

<p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
  Cada post é um fragmento. Um “classificado” com visual vintage, onde o público
  precisa observar, juntar pistas e interagir para ganhar.
</p>

<p className="text-lg md:text-xl leading-relaxed manifesto-line opacity-0 translate-y-4">
  Ao final, quem decifrar a campanha, encontra o prêmio. Ou vários. Porque aqui,
  o tesouro é parte da jornada — e também da brincadeira.
</p>



  </div>

  {/* IMAGEM MAIS BAIXA */}
  <div className="max-w-md mt-12 md:mt-24">
    <Image
      src="/f0.jpeg"
      alt="Visual da campanha"
      width={900}
      height={1000}
      className="w-full h-auto rounded-md shadow-md"
    />
  </div>
</div>
</section>
  )
}
