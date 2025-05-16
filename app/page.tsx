import Hero from "./components/Classificados/Hero";
import Conceito from "./components/Classificados/Conceito";
import TextoManifesto from "./components/Classificados/TextoManifesto";
import Mecanica from "./components/Classificados/Mecanica";
import Mecanica2 from "./components/Classificados/Mecanica2";
import Integridade from "./components/Classificados/Integridade";
import Cotas from "./components/Classificados/Cotas";
import Impacto from "./components/Classificados/Impacto";
import Offiline from "./components/Classificados/Offiline";
import Mural from "./components/Classificados/Mural";
import Numeros from "./components/Classificados/Numeros";
import MobileBlock from "./components/Classificados/MobileBlock";

export default function Home() {
  return (
    <main className="bg-[#f4f1ec] text-black">
      <Hero />
      <Conceito />
      <TextoManifesto />
      <Mecanica />
      <Mecanica2 />
      <Integridade />
      <Cotas />
      <Impacto />
      <Offiline />
      <Numeros />
      <MobileBlock />
      <Mural />
    </main>
  );
}
