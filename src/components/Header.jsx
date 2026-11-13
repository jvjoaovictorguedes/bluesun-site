import { useEffect, useMemo, useState } from 'react'
import logo from '../assets/logo.jpg'
import { navLinks } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScrollProgress } from '../hooks/useScrollProgress.js'
import Icon from './Icon.jsx'
import WhatsAppLink from './WhatsAppLink.jsx'

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const active = useActiveSection(sectionIds)
  const { progress, scrolled } = useScrollProgress()
  const isDark = theme === 'dark'

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 860 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="wrap nav">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logomarca Sun Light" width="56" height="56" />
          <span>
            <b>SUN LIGHT</b>
            SOLUÇÕES EM TECNOLOGIA
          </span>
        </a>

        <nav id="menu" className={`links ${menuOpen ? 'is-open' : ''}`} aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <WhatsAppLink
            className="btn links-cta"
            message="Olá! Gostaria de solicitar um orçamento de energia solar."
          >
            Peça seu orçamento
          </WhatsAppLink>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Modo claro' : 'Modo escuro'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} size={20} key={theme} />
          </button>
          <WhatsAppLink
            className="btn nav-cta"
            message="Olá! Gostaria de solicitar um orçamento de energia solar."
          >
            Peça seu orçamento
          </WhatsAppLink>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
