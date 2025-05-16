'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Numeros() {
  const ref = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(ref)

    q('.item').forEach((el: any) => {
      const numEl = el.querySelector('.count')
      const final = numEl?.getAttribute('data-final')

      if (!final || final === '∞') return

      const target = parseFloat(final.replace(',', '.'))

      gsap.fromTo(
        numEl,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.6,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: function () {
            if (numEl) {
              const value = parseFloat((this.targets()[0] as any).innerText)
              numEl.innerText = final.includes(',') ? value.toFixed(1).replace('.', ',') : Math.round(value).toString()
            }
          },
        }
      )
    })

    gsap.fromTo(
      q('.item'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  const dados = [
    { numero: '48', label: 'artes originais' },
    { numero: '13,4', label: 'de mural físico em SP' },
    { numero: '12', label: 'prêmios escondidos' },
    { numero: '12', label: 'dias de campanha' },
    { numero: '1', label: 'iPhone real em jogo' },
    { numero: '∞', label: 'possibilidades de viralização' },
  ]

  return (
    <section
      ref={ref}
      className="bg-[#f4f1ec] text-black py-32 px-6 md:px-20 font-editorial text-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {dados.map((item, i) => (
          <div key={i} className="item">
            <h3
              className="count text-5xl md:text-6xl font-bold tracking-tighter mb-2"
              data-final={item.numero}
            >
              {item.numero === '∞' ? '∞' : '0'}
            </h3>
            <p className="text-lg uppercase tracking-wide opacity-70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
