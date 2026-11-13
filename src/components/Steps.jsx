import { steps } from '../data/content.js'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Steps() {
  return (
    <section id="como-funciona">
      <div className="wrap">
        <SectionHead
          kicker="Simples e planejado"
          title="Como funciona o caminho até a sua energia solar"
        >
          Cada projeto é único. Estas são as etapas gerais para avaliar e implementar um sistema
          fotovoltaico conectado à rede.
        </SectionHead>
        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal as="li" className="step" delay={index * 90} key={step.title}>
              <b>{index + 1}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
