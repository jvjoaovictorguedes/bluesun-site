import Reveal from './Reveal.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="wrap">
        <Reveal className="cta">
          <h2>Sua conta de luz merece uma nova estratégia.</h2>
          <p>
            Converse com a Sun Light e descubra como a energia fotovoltaica pode funcionar para sua
            casa ou empresa.
          </p>
          <WhatsAppLink
            className="btn"
            message="Olá! Gostaria de fazer uma avaliação de energia solar."
          >
            Quero solicitar meu orçamento
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
