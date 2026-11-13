import { useState } from 'react'
import { faqs } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="duvidas">
      <div className="wrap">
        <SectionHead
          kicker="Perguntas frequentes"
          title="Tire suas dúvidas sobre energia fotovoltaica"
        />
        <Reveal className="faq">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-botao-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-painel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    {item.question}
                    <Icon name="chevron" size={20} />
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-painel-${index}`}
                  role="region"
                  aria-labelledby={`faq-botao-${index}`}
                  inert={isOpen ? undefined : ''}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
