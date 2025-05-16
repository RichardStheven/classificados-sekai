'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Conceito() {
  const containerRef = useRef(null)
  const f1 = useRef(null)
  const f2 = useRef(null)
  const f3 = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(containerRef)

    // f1 sobe levemente
    gsap.to(f1.current, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // f2 fica quase estática
    gsap.to(f2.current, {
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // f3 desce levemente
    gsap.to(f3.current, {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f4f1ec] py-[30vh] px-8 overflow-hidden"
    >
      <div className="flex justify-center items-start gap-5 max-w-none">
        <div ref={f1}>
          <Image
            src="/f1.jpg"
            alt="f1"
            width={400}
            height={600}
            className="w-auto h-[70vh] object-contain rounded-md shadow-md"
          />
        </div>
        <div ref={f2}>
          <Image
            src="/f2.jpg"
            alt="f2"
            width={400}
            height={600}
            className="w-auto h-[70vh] object-contain rounded-md shadow-md"
          />
        </div>
        <div ref={f3}>
          <Image
            src="/f3.jpg"
            alt="f3"
            width={400}
            height={600}
            className="w-auto h-[70vh] object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
