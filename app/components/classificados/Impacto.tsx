'use client'

import { useEffect, useRef } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Impacto() {
  const ref = useRef(null)

  const data = [
    { dia: 'Dia 1', seguidores: 100, interacoes: 200 },
    { dia: 'Dia 2', seguidores: 300, interacoes: 380 },
    { dia: 'Dia 3', seguidores: 800, interacoes: 560 },
    { dia: 'Dia 4', seguidores: 1500, interacoes: 730 },
    { dia: 'Dia 5', seguidores: 2200, interacoes: 900 },
    { dia: 'Dia 6', seguidores: 3100, interacoes: 1080 },
    { dia: 'Dia 7', seguidores: 4200, interacoes: 1260 },
    { dia: 'Dia 8', seguidores: 5400, interacoes: 1450 },
    { dia: 'Dia 9', seguidores: 6700, interacoes: 1650 },
    { dia: 'Dia 10', seguidores: 8000, interacoes: 1850 },
    { dia: 'Dia 11', seguidores: 9200, interacoes: 2100 },
    { dia: 'Dia 12', seguidores: 10000, interacoes: 2300 },
  ]

  useEffect(() => {
    const q = gsap.utils.selector(ref)

    gsap.fromTo(
      q('.grafico'),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      q('.texto'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.2,
        duration: 1,
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
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
          Mais que engajamento. Uma arquitetura de atenção.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          O Classificados Sekai é uma sequência lógica de estímulos visuais, psicológicos e comportamentais. Uma campanha construída para gerar retorno diário, engajamento recorrente e retenção de marca.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-start">
        {/* GRÁFICO */}
        <div className="grafico w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d0d0d0" />
              <XAxis dataKey="dia" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }} />
              <Line type="monotone" dataKey="seguidores" stroke="#c1121f" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="interacoes" stroke="#780000" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* TEXTO PERSUASIVO */}
        <div className="w-full md:w-1/2 space-y-6 text-lg leading-relaxed">
          <p className="texto">
            Gatilhos ativados: escassez, exclusividade, nostalgia, curiosidade e recompensa.
          </p>
          <p className="texto">
            12 dias de engajamento contínuo: o público retorna ao perfil todos os dias em busca de pistas e prêmios.
          </p>
          <p className="texto">
            Estética como ferramenta: a visualidade da campanha garante retenção de marca e compartilhamento espontâneo.
          </p>
          <p className="texto">
            Da tela para a rua: as ações físicas geram conteúdo orgânico para TikTok e Reels, ampliando o impacto.
          </p>
        </div>
      </div>

      <div className="text-center mt-20 text-xl italic opacity-80">
        “Não é sobre o que você vende. É sobre o que as pessoas lembram.”
      </div>
    </section>
  )
}
