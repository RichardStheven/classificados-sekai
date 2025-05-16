'use client'

import { BadgeCheck, Eye, Link2, Medal } from 'lucide-react'

export default function Cotas() {
    const beneficios = [
        {
          icon: <Eye className="w-6 h-6 text-red-700" />,
          titulo: 'Presença nas Imagens',
          desc: 'Sua marca aparece dentro da arte visual dos posts da campanha, integrada ao conteúdo que viraliza.',
        },
        {
          icon: <BadgeCheck className="w-6 h-6 text-red-700" />,
          titulo: 'Menção em Feed e Stories',
          desc: 'Sua marca será citada oficialmente no início da campanha e nos stories diários com CTA.',
        },
        {
          icon: <Link2 className="w-6 h-6 text-red-700" />,
          titulo: 'Link direto na bio',
          desc: 'Durante toda a ação, sua marca terá um link personalizado no perfil da Sekai.',
        },
        {
          icon: <Eye className="w-6 h-6 text-red-700" />,
          titulo: 'Presença exclusiva em 3 artes da campanha',
          desc: 'Cada marca terá 3 artes dedicadas, postadas no feed da Sekai. Também estarão na landing page e nas páginas dos desafios, como jogos da memória personalizados (ex: patrocinado por TEKBOND).',
        },
        {
          icon: <BadgeCheck className="w-6 h-6 text-red-700" />,
          titulo: 'Exposição física no centro de São Paulo',
          desc: 'As artes da campanha também estarão em um mural estilo lambe-lambe no centro da cidade, onde serão filmados conteúdos para Reels e TikTok.',
        },
        {
          icon: <Medal className="w-6 h-6 text-red-700" />,
          titulo: 'Investimento por visibilidade',
          desc: 'Cada imagem terá R$15 de mídia por 12 dias (R$180 no total), garantindo exposição real e engajamento orgânico para sua marca.',
        },
      ]
      
  return (
    <section className="bg-[#f4f1ec] text-black py-24 px-6 md:px-20 font-editorial">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
          Seja uma marca caçada
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Sua marca pode estar em um post viral, escondida atrás de um prêmio ou liderando o ranking da semana. O importante é ser vista.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {beneficios.map((item, i) => (
          <div
            key={i}
            className="bg-[#fcfaf6] border border-gray-300 p-6 rounded-md shadow-sm flex flex-col items-start gap-4"
          >
            {item.icon}
            <h3 className="text-xl font-bold uppercase tracking-wide">{item.titulo}</h3>
            <p className="text-md leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
