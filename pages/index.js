import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import CtaHero from '../src/components/organisms/CtaHero'
import CtaPhone from '../src/components/organisms/CtaPhone'
import SobreMCL from '../src/components/organisms/SobreMCL'
import BancosParceiros from '../src/components/organisms/BancosParceiros'
import AntecipacaoSaque from '../src/components/organisms/AntecipacaoSaque'
import PerguntasFrequentes from '../src/components/organisms/PerguntasFrequentes'
import Condicoes from '../src/components/organisms/Condicoes'
import Vantagens from '../src/components/organisms/Vantagens'
import ComoFunciona from '../src/components/organisms/ComoFunciona'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CtaHero />
      <BancosParceiros/>
      <ComoFunciona/>
      <AntecipacaoSaque/>
      <Condicoes/>
      <Vantagens/>
      <CtaPhone />
      <SobreMCL />
      <PerguntasFrequentes />
      <Footer/>
    </div>
  )
}
