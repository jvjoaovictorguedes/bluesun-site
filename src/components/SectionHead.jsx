import Reveal from './Reveal.jsx'

export default function SectionHead({ kicker, title, children }) {
  return (
    <Reveal className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </Reveal>
  )
}
