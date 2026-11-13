import { useTheme } from './hooks/useTheme.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import About from './components/About.jsx'
import Steps from './components/Steps.jsx'
import Cta from './components/Cta.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo">
        <Hero />
        <Benefits />
        <About />
        <Steps />
        <Cta />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
