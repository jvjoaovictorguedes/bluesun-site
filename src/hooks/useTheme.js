import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'sunlight-theme'
const systemQuery = '(prefers-color-scheme: dark)'

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function initialTheme() {
  // O script inline do index.html já definiu o tema antes do React montar
  const applied = document.documentElement.dataset.theme
  if (applied === 'light' || applied === 'dark') return applied
  return readStored() ?? (window.matchMedia(systemQuery).matches ? 'dark' : 'light')
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#071523' : '#082d55')
  }, [theme])

  // Acompanha o sistema enquanto a pessoa não escolher manualmente
  useEffect(() => {
    const media = window.matchMedia(systemQuery)
    const onChange = (event) => {
      if (!readStored()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* armazenamento indisponível: o tema vale só para esta visita */
      }
      return next
    })
  }, [])

  return [theme, toggle]
}
