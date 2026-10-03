import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  Heart,
  InstagramLogo,
  List,
  Sparkle,
  X,
} from '@phosphor-icons/react'

const whatsapp = 'https://wa.me/5511967239439?text=Ol%C3%A1%2C%20ACSRAIZES!%20Quero%20montar%20uma%20mesa%20especial.'
const instagram = 'https://www.instagram.com/acsraizes?stkn=MWlmbHl2NTdya3hwMw=='
const imageUrl = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`

const values = [
  ['Acolhimento & Afeto', 'A mesa como lugar de fortalecer vínculos e criar laços profundos.'],
  ['Excelência & Curadoria', 'Cada peça é escolhida, conservada e higienizada com cuidado minucioso.'],
  ['Sofisticação Sem Complicação', 'Elegância e beleza com a praticidade que toda celebração merece.'],
  ['Inclusão & Versatilidade', 'Do café em família à grande festa, com o mesmo carinho e qualidade.'],
  ['Respeito às Raízes', 'Valorizamos tradições, histórias e as conexões humanas ao redor da mesa.'],
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? undefined : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  )
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="ACSRAIZES, início">
      <span className="brand-mark">acs</span>
      <span>raizes</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const close = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Navegação principal">
        <Brand />
        <div className="desktop-nav">
          <a href="#acervo">Acervo</a>
          <a href="#sobre">Nossa essência</a>
          <a href="#como-funciona">Como funciona</a>
        </div>
        <a className="button button-small desktop-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Abrir menu" aria-expanded={open}>
          <List size={25} weight="regular" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            >
              <button onClick={() => setOpen(false)} aria-label="Fechar menu"><X size={25} /></button>
              <a href="#acervo" onClick={() => setOpen(false)}>Acervo</a>
              <a href="#sobre" onClick={() => setOpen(false)}>Nossa essência</a>
              <a href="#como-funciona" onClick={() => setOpen(false)}>Como funciona</a>
              <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell" id="inicio">
          <Reveal className="hero-copy">
            <p className="eyebrow">Acervo de mesa posta</p>
            <h1>Celebrações que criam <em>raízes.</em></h1>
            <p className="hero-text">Peças escolhidas com afeto para transformar encontros em memórias inesquecíveis.</p>
            <div className="hero-actions">
              <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
                Montar minha mesa <ArrowRight size={18} weight="bold" />
              </a>
              <a className="text-link" href="#acervo">Conhecer o acervo</a>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.08}>
            <div className="hero-image-wrap">
              <img src={imageUrl('5752.jpg')} alt="Mesa posta com louças verdes e estampa de limões" fetchPriority="high" />
            </div>
            <div className="floating-note">
              <Heart size={19} weight="fill" />
              <span>Curadoria feita<br />para o seu momento</span>
            </div>
          </Reveal>
        </section>

        <section className="statement shell" aria-label="Propósito">
          <Reveal>
            <p>Mais do que compor mesas, criamos o cenário para aquilo que realmente importa: <strong>estar junto.</strong></p>
          </Reveal>
        </section>

        <section className="collection section shell" id="acervo">
          <Reveal className="section-heading">
            <h2>Uma mesa para cada história</h2>
            <p>Louças, sousplats, guardanapos e detalhes versáteis para encontros íntimos ou grandes celebrações.</p>
          </Reveal>
          <div className="gallery-grid">
            <Reveal className="gallery-item gallery-large"><img src={imageUrl('5801.jpg')} alt="Composição de mesa com louças estampadas com limões" loading="lazy" /></Reveal>
            <Reveal className="gallery-item gallery-tall" delay={0.06}><img src={imageUrl('5900.jpg')} alt="Lugar à mesa em azul-marinho e branco" loading="lazy" /></Reveal>
            <Reveal className="gallery-item" delay={0.1}><img src={imageUrl('5825.jpg')} alt="Detalhe de composição floral em tons de vermelho" loading="lazy" /></Reveal>
          </div>
        </section>

        <section className="process section" id="como-funciona">
          <div className="shell process-grid">
            <Reveal className="process-copy">
              <h2>Sofisticação sem complicação</h2>
              <p>Você compartilha a ocasião e nós ajudamos a encontrar a composição que traduz o seu encontro.</p>
              <a className="text-link dark-link" href={whatsapp} target="_blank" rel="noreferrer">Começar pelo WhatsApp <ArrowRight size={17} /></a>
            </Reveal>
            <div className="steps" aria-label="Etapas do atendimento">
              {[
                ['01', 'Conte sobre a celebração', 'Data, número de pessoas e o estilo que você imagina.'],
                ['02', 'Escolha sua composição', 'Curadoria de peças para criar uma mesa harmônica e única.'],
                ['03', 'Celebre com tranquilidade', 'Tudo pronto para você viver o encontro e guardar a memória.'],
              ].map(([number, title, text], index) => (
                <Reveal className="step" delay={index * 0.07} key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about section shell" id="sobre">
          <Reveal className="about-image"><img src={imageUrl('5945.jpg')} alt="Fundadora da ACSRAIZES sorrindo" loading="lazy" /></Reveal>
          <Reveal className="about-copy">
            <Sparkle size={28} weight="duotone" />
            <h2>O encontro é a nossa raiz</h2>
            <p className="lead">Nascemos para valorizar a convivência e celebrar as conexões humanas ao redor da mesa.</p>
            <p>Nossa visão é ser a principal escolha para celebrações marcantes, com inovação constante e uma curadoria impecável.</p>
          </Reveal>
        </section>

        <section className="values section shell">
          <Reveal className="values-title"><h2>O que colocamos à mesa</h2></Reveal>
          <div className="values-list">
            {values.map(([title, text], index) => (
              <Reveal className="value" delay={index * 0.04} key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="closing shell">
          <img src={imageUrl('5829.jpg')} alt="Montagem cuidadosa de uma mesa posta" loading="lazy" />
          <div className="closing-overlay" />
          <Reveal className="closing-content">
            <h2>Qual memória vamos criar juntos?</h2>
            <p>Conte sua ideia. A gente cuida dos detalhes para ela ganhar lugar à mesa.</p>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Montar minha mesa <ArrowRight size={18} weight="bold" /></a>
          </Reveal>
        </section>
      </main>

      <footer className="footer shell">
        <Brand />
        <p>Encontros com afeto, beleza e significado.</p>
        <div className="social-links">
          <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram da ACSRAIZES"><InstagramLogo size={22} /></a>
          <a href={whatsapp} target="_blank" rel="noreferrer">(11) 96723-9439</a>
        </div>
      </footer>
    </>
  )
}

export default App
