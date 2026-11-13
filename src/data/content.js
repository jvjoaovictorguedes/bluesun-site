const WHATSAPP_NUMBER = '5534996591553'

export const PHONE_DISPLAY = '(34) 99659-1553'
export const PHONE_HREF = 'tel:+5534996591553'

export const whatsapp = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const navLinks = [
  { id: 'sobre', label: 'A empresa' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'duvidas', label: 'Dúvidas' },
]

export const audiences = [
  {
    icon: 'home',
    title: 'Residências',
    text: 'Mais controle sobre os gastos da casa',
  },
  {
    icon: 'building',
    title: 'Comércios e empresas',
    text: 'Uma alternativa para otimizar custos operacionais',
  },
  {
    icon: 'sprout',
    title: 'Propriedades rurais',
    text: 'Energia solar conforme a estrutura e o consumo',
  },
]

export const benefits = [
  {
    icon: 'sun',
    title: 'Potencial de economia',
    text: 'Gere parte da energia que você consome e reduza sua dependência da energia comprada da rede.',
  },
  {
    icon: 'leaf',
    title: 'Fonte renovável',
    text: 'Use uma fonte limpa e renovável, contribuindo para uma matriz energética mais sustentável.',
  },
  {
    icon: 'home',
    title: 'Valorização do imóvel',
    text: 'Um sistema bem planejado pode agregar modernidade e atratividade ao imóvel.',
  },
]

export const aboutChecks = [
  'Avaliação conforme sua conta de energia',
  'Dimensionamento de acordo com sua necessidade',
  'Orientação durante as etapas do projeto',
]

export const steps = [
  {
    title: 'Você compartilha sua conta',
    text: 'Analisamos seu consumo e entendemos o que você precisa.',
  },
  {
    title: 'Estudo e dimensionamento',
    text: 'Avaliamos as condições do imóvel e a solução adequada.',
  },
  {
    title: 'Projeto e instalação',
    text: 'Com a proposta aprovada, são realizadas as etapas técnicas e a instalação.',
  },
  {
    title: 'Geração de energia',
    text: 'Após os procedimentos de conexão e liberação, o sistema começa a gerar energia.',
  },
]

export const faqs = [
  {
    question: 'Como funciona a energia solar fotovoltaica?',
    answer:
      'Os módulos fotovoltaicos captam a luz do sol e a convertem em energia elétrica. Em sistemas conectados à rede, a energia gerada é utilizada no imóvel e os excedentes podem ser injetados na rede, gerando créditos conforme as regras aplicáveis.',
  },
  {
    question: 'Quando não tem sol, fico sem energia?',
    answer:
      'Em sistemas conectados à rede convencionais, o imóvel continua conectado à distribuidora. À noite, a energia é consumida da rede, com compensações de créditos quando disponíveis. Para manter cargas ligadas durante apagões, é necessário avaliar soluções específicas com armazenamento e equipamentos compatíveis.',
  },
  {
    question: 'A conta de luz zera depois da instalação?',
    answer:
      'Não necessariamente. Podem permanecer cobranças como custo de disponibilidade ou demanda, iluminação pública e componentes tarifários aplicáveis. O resultado depende do tipo de ligação, consumo, geração e regras vigentes.',
  },
  {
    question: 'Como saber quantos painéis preciso?',
    answer:
      'O dimensionamento depende principalmente do histórico de consumo em kWh, características do telhado ou área disponível, orientação, sombreamento e tipo de ligação elétrica. Envie sua conta para uma avaliação inicial.',
  },
  {
    question: 'Posso instalar em casa ou na minha empresa?',
    answer:
      'Sim. O sistema pode ser estudado para residências, comércios, empresas e propriedades rurais, respeitando as condições técnicas de cada local.',
  },
]
