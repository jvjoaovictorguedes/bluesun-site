import { benefits } from '../data/content.js'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'

export default function Benefits() {
  return (
    <section id="beneficios">
      <div className="wrap">
        <SectionHead
          kicker="Por que energia solar?"
          title="Uma escolha inteligente para hoje e para o futuro"
        >
          O sistema fotovoltaico aproveita a luz do sol para gerar eletricidade e pode ajudar a
          reduzir os custos com energia, conforme o perfil de consumo e as condições do projeto.
        </SectionHead>
        <div className="cards">
          {benefits.map((item, index) => (
            <Reveal as="article" className="card" delay={index * 100} key={item.title}>
              <div className="symbol">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
