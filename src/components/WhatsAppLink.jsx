import { whatsapp } from '../data/content.js'

export default function WhatsAppLink({ message, children, ...props }) {
  return (
    <a href={whatsapp(message)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
