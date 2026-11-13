import Icon from './Icon.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      className="whats"
      message="Olá! Vim pelo site da Sun Light."
      aria-label="Fale com a Sun Light pelo WhatsApp"
    >
      <Icon name="whatsapp" size={22} />
      <span>WhatsApp</span>
    </WhatsAppLink>
  )
}
