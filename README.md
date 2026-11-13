# Sun Light — Energia Solar em Uberlândia

Site institucional da Sun Light Soluções em Tecnologia, feito em **React + Vite**.

## Recursos

- Modo claro/escuro com botão no cabeçalho (segue o sistema e lembra a escolha)
- Layout responsivo com menu mobile
- Animações de entrada ao rolar a página (respeita `prefers-reduced-motion`)
- Barra de progresso de leitura e destaque da seção ativa no menu
- FAQ em acordeão animado
- Botões de contato direto pelo WhatsApp

## Como rodar

```bash
npm install
npm run dev
```

Build de produção (gera a pasta `dist/`):

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  assets/       logomarca
  components/   seções da página (Header, Hero, Faq, ...)
  data/         textos e contatos (content.js)
  hooks/        tema, seção ativa, progresso de rolagem
  styles.css    estilos e variáveis de tema
```

Para alterar textos, telefone ou mensagens do WhatsApp, edite `src/data/content.js`.
