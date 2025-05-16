'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(ref)
    gsap.fromTo(
      q('.cta'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <section
      ref={ref}
      className="bg-[#f4f1ec] text-black py-32 px-6 md:px-20 font-editorial text-center"
    >
      <div className="cta max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
          Quem vai estar nesse jornal?
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          As marcas mais atentas ao futuro sabem que impactar é mais do que vender.
          Participe da campanha mais criativa do ano — e esteja onde os olhos estarão.
        </p>
        <a
  href="/ClassificadosSekai.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-black text-white px-8 py-4 text-lg uppercase font-semibold tracking-wide rounded-md hover:bg-zinc-800 transition"
>
  Veja proposta completa no PDF
</a>
      </div>
    </section>
  )
}
