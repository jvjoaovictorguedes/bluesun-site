import { aboutChecks } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap about-grid">
        <Reveal className="about-visual">
          <strong>O melhor projeto começa entendendo o seu consumo.</strong>
        </Reveal>
        <Reveal delay={120}>
          <span className="kicker">Conheça a Sun Light</span>
          <h2>Soluções em tecnologia e energia para você.</h2>
          <p>
            A Sun Light atende em Uberlândia – MG, conectando pessoas e empresas às possibilidades
            da energia fotovoltaica. Nosso objetivo é ajudar você a entender o investimento e
            encontrar uma solução compatível com seu imóvel e seu consumo.
          </p>
          <ul className="checks">
            {aboutChecks.map((text) => (
              <li key={text}>
                <span className="check-icon">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <WhatsAppLink
            className="btn btn-green"
            message="Olá, Sun Light! Quero conhecer uma solução de energia solar."
          >
            Fale com a Sun Light
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
