import logo from '../assets/logo.jpg'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/content.js'
import Icon from './Icon.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Logomarca Sun Light" width="72" height="72" loading="lazy" />
              <div>
                <b>SUN LIGHT</b>
                <small>SOLUÇÕES EM TECNOLOGIA</small>
              </div>
            </div>
            <p>Energia fotovoltaica com informação, planejamento e atendimento próximo.</p>
          </div>
          <div>
            <h3>Entre em contato</h3>
            <p className="contact-line">
              <Icon name="phone" size={18} />
              <span>
                Telefone / WhatsApp
                <br />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </span>
            </p>
            <p className="contact-line">
              <Icon name="pin" size={18} />
              <span>Uberlândia – Minas Gerais</span>
            </p>
          </div>
          <div>
            <h3>Vamos conversar?</h3>
            <p>Solicite uma avaliação e tire suas dúvidas com nossa equipe.</p>
            <WhatsAppLink className="btn" message="Olá, vim pelo site da Sun Light.">
              <Icon name="whatsapp" size={18} />
              Chamar no WhatsApp
            </WhatsAppLink>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Sun Light – Soluções em Tecnologia. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
