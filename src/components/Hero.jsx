import { audiences } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <Reveal>
          <span className="eyebrow">
            <Icon name="sun" size={16} />
            Energia inteligente para o seu dia a dia
          </span>
          <h1>
            Deixe o sol trabalhar a <em>seu favor.</em>
          </h1>
          <p>
            Transforme a luz do sol em energia para sua casa ou empresa. Conheça as possibilidades
            da energia fotovoltaica com um projeto pensado para sua necessidade.
          </p>
          <div className="hero-actions">
            <WhatsAppLink className="btn" message="Olá! Quero uma avaliação para energia solar.">
              Solicitar avaliação gratuita
              <Icon name="arrow" size={18} />
            </WhatsAppLink>
            <a className="btn btn-outline" href="#como-funciona">
              Entenda como funciona
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-card" delay={150}>
          <h2>Energia solar para diferentes necessidades</h2>
          <p>Uma solução que pode ser dimensionada para o consumo do seu imóvel.</p>
          <ul>
            {audiences.map((item) => (
              <li className="mini" key={item.title}>
                <span className="mini-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
