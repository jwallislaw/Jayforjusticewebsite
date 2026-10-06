import { useEffect, useRef, useState } from 'react'
import './App.css'
const services = [
  ['Criminal defense', 'Your freedom. Your future.', 'A criminal charge can put everything in question. Start by understanding the charge, the process, and the decisions ahead.'],
  ['Bankruptcy', 'A path forward from debt.', 'When debt feels unmanageable, understanding your options is the first step toward making a plan.'],
  ['Divorce & family law', 'What matters at home.', 'Changes to your family call for careful decisions about your children, your finances, and your next chapter.'],
  ['Traffic tickets', 'Small citation. Real consequences.', 'A ticket can raise questions about your license, your driving record, and what to do before your court date.'],
  ['Employment Law', 'Your work. Your livelihood.', 'Workplace concerns can affect your livelihood and your next steps. Contact Jay For Justice to discuss your situation.'],
]
const servicePaths = ['criminal-defense', 'bankruptcy', 'divorce-family-law', 'traffic-tickets', 'employment-law']
const Arrow = () => <span aria-hidden="true">↗</span>
function BrandLogo() {
  return <><span className="logo-art"><img className="firm-logo" src="/jayforjusticelogo.png" alt="Jay For Justice" width="2172" height="724" /></span><span className="brand-tagline"><span aria-hidden="true">★</span><span>Fighting For What Matters</span><span aria-hidden="true">★</span></span></>
}
function Reveal({ children, className }) {
  const elementRef = useRef(null)
  useEffect(() => {
    const element = elementRef.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    element.classList.add('reveal-ready')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={elementRef} className={className}>{children}</div>
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  useEffect(() => {
    const header = headerRef.current
    const updateHeight = () => document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`)
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const pagePath = window.location.pathname.replace(/\/$/, '')
  const practiceIndex = servicePaths.findIndex(slug => pagePath === `/practice-areas/${slug}`)
  const isAbout = pagePath === '/who-is-jay-for-justice'
  const isResources = pagePath === '/resources'
  const isClientLogin = pagePath === '/client-login'
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" ref={headerRef}>
      <div className="masthead">
        <a className="wordmark" href="/" onClick={closeMenu} aria-label="Jay For Justice home"><BrandLogo /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="/" aria-current={pagePath === '' ? 'page' : undefined} onClick={closeMenu}>Home</a>
          <a href="/who-is-jay-for-justice/" aria-current={isAbout ? 'page' : undefined} onClick={closeMenu}>About</a>
          <a href="/#practice-areas" onClick={closeMenu}>Practice Areas</a>
          <a href="/resources/" aria-current={isResources ? 'page' : undefined} onClick={closeMenu}>Resources</a>
          <a href="/#next-step" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
      <div className="header-bands">
        <div className="firm-band">MEMPHIS, TN</div>
        <div className="contact-band" aria-label="Call or text Jay For Justice"><a href="tel:+19018087777">CALL</a><span aria-hidden="true">|</span><a href="sms:+19018087777">TEXT</a><span className="band-number">901-808-7777</span></div>
        <a className="about-band" href="/client-login/" onClick={closeMenu}>CLIENT MYCASE LOGIN</a>
      </div>
      <nav className="practice-band" aria-label="Practice areas">{services.map(([title], i) => <span className="practice-band-item" key={title}>{i > 0 && <span className="practice-divider" aria-hidden="true">•</span>}<a href={`/practice-areas/${servicePaths[i]}/`} aria-current={practiceIndex === i ? 'page' : undefined} onClick={closeMenu}>{i === 2 ? 'FAMILY LAW' : title.toUpperCase()}</a></span>)}</nav>
    </header>
    {practiceIndex >= 0 ? <PracticePage index={practiceIndex} /> : isAbout ? <AboutJay /> : isResources ? <Resources /> : isClientLogin ? <ClientLogin /> : <Home />}
    <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="/"><BrandLogo /></a><p>Help During Dark Days.<br />Hope for Bright Tomorrows.</p><div className="footer-links"><a href="/who-is-jay-for-justice/">Who is Jay For Justice</a><a href="tel:+19018087777">Call 901-808-7777</a><a href="sms:+19018087777">Text 901-808-7777</a><a href="#main">Back to top ↑</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jay For Justice</span><span>Design preview · Online intake is being prepared</span></div><p className="photo-credits">Memphis skyline: <a href="https://commons.wikimedia.org/wiki/File:Downtown_Memphis.jpg">Mattbeat1981, Wikimedia Commons</a> · CC0. Temporary photography will be replaced as the design develops.</p></footer>

  </>
}

function Home() {
  return (
    <main id="main">
      <section className="home-introduction" id="home" aria-labelledby="hero-title">
        <div className="intro-writing">
          <h1 id="hero-title">Help During Dark Days.</h1>
          <p className="hope-line">HOPE FOR BRIGHT TOMORROWS</p>
          <div className="intro-body"><p>Legal questions can affect your freedom, your family, and your financial future. Understanding your options is a place to begin.</p><p>Jay For Justice brings criminal defense, bankruptcy, family law, traffic tickets, and employment law information together in one place. Explore the area that fits your situation, or call or text the firm to discuss the next step.</p><p>Meet <a href="/who-is-jay-for-justice/">Jay Wallis</a>, explore our <a href="#practice-areas">practice areas</a>, and find a starting point for what comes next.</p></div>
          <a className="button" href="/who-is-jay-for-justice/">WHO IS JAY FOR JUSTICE <Arrow /></a>
        </div>
        <div className="hero-photo"><img src="/jaywallis-memphis-hero.png" alt="Jay Wallis with the Memphis skyline at dusk" width="1536" height="1024" fetchPriority="high" /></div>
      </section>
      <div className="principle-strip"><span aria-hidden="true">★</span><p>When the stakes are personal,<br /><strong>the approach should be thoughtful.</strong></p><span aria-hidden="true">★</span></div>
      <section className="story-section section-shell" id="our-approach" aria-labelledby="story-title">
        <div className="story-copy"><div className="story-heading"><p className="eyebrow">ABOUT JAY FOR JUSTICE</p><h2 id="story-title">A person.<br /><em>Not just a case.</em></h2></div><p>Behind a legal question is a person trying to protect what matters. Jay For Justice starts with the situation in front of you: your freedom, your family, and your future.</p><p>Get to know Jay Wallis and find a starting point for your next step.</p><a className="button" href="/who-is-jay-for-justice/">MEET JAY WALLIS <Arrow /></a></div>
        <Reveal className="story-visual"><div className="story-accent" aria-hidden="true" /><img src="/memphis-skyline.jpg" alt="Downtown Memphis and the Mississippi River" width="1600" height="900" loading="lazy" /><span className="story-photo-label">MEMPHIS, TENNESSEE</span></Reveal>
      </section>
      <section className="practice-showcase" id="practice-areas" aria-labelledby="practice-title"><div className="practice-heading"><p className="eyebrow">FIND YOUR STARTING POINT</p><h2 id="practice-title">Practice Areas</h2></div><div className="practice-cards">{services.map(([title, subtitle], i) => <article className="practice-card" id={`practice-${i + 1}`} key={title}><a className="practice-card-link" href={`/practice-areas/${servicePaths[i]}/`}><span className="practice-star" aria-hidden="true">★</span><span className="practice-card-title">{title}</span><span className="practice-card-subtitle">{subtitle}</span><span className="learn-more">LEARN MORE <Arrow /></span></a></article>)}</div></section>
      <section className="courthouse-callout" aria-labelledby="advocacy-title"><div className="courthouse-content"><p className="eyebrow">JAY FOR JUSTICE</p><h2 id="advocacy-title">Fiercely Advocate<br /><span>for Your Best Future.</span></h2><div className="courthouse-actions"><a className="button" href="tel:+19018087777">CALL ABOUT YOUR SITUATION <Arrow /></a><a className="button button-outline" href="sms:+19018087777">TEXT JAY FOR JUSTICE <Arrow /></a></div></div><p className="courthouse-credit">Shelby County Courthouse · 140 Adams Avenue<br />Photo: <a href="https://commons.wikimedia.org/wiki/File:Shelby_County_Courthouse,_Adams_Avenue,_Memphis,_TN_(53699322755).jpg">Warren LeMay</a> · <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a> · resized and displayed with an overlay</p></section>
      <section className="next-section section-shell" id="next-step" aria-labelledby="next-title"><div><p className="eyebrow">YOUR NEXT STEP</p><h2 id="next-title">Start with<br /><em>your situation.</em></h2></div><div className="next-copy"><p className="large-copy">An inquiry is the beginning of a conversation.</p><ol><li><strong>Tell us what kind of help you need.</strong><span>A brief initial inquiry should be enough to get started. No account required.</span></li><li><strong>The firm reviews your inquiry.</strong><span>Review and conflict screening come before a decision about representation.</span></li><li><strong>Discuss the path forward.</strong><span>Consultation, engagement, and client onboarding are separate steps.</span></li></ol><div className="preview-notice"><strong>Call or text Jay For Justice</strong><a className="contact-phone" href="tel:+19018087777">901-808-7777</a><div className="inline-contact"><a href="tel:+19018087777">Call</a><a href="sms:+19018087777">Text</a></div><p>Call or text to discuss the next step. Online inquiry forms are still being prepared.</p></div><p className="legal-note">Submitting an inquiry does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p></div></section>
    </main>
  )
}

function AboutJay() {
  return <main id="main">
    <section className="hero about-hero section-shell" aria-labelledby="about-title">
      <div className="hero-copy"><p className="eyebrow">MEET JAY WALLIS</p><h1 id="about-title">Who is<br /><em>Jay For Justice?</em></h1><p className="hero-description">Jay Wallis is the attorney behind Jay For Justice.<br />Your freedom. Your family. Your future.</p><div className="hero-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button button-outline" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div></div>
      <figure className="attorney-portrait"><img src="/jaywallisheadshot.JPG" alt="Attorney Jay Wallis" width="1638" height="2048" fetchPriority="high" /><figcaption><span>Jay Wallis</span><small>JAY FOR JUSTICE</small></figcaption></figure>
    </section>
    <section className="about-introduction section-shell" aria-labelledby="about-intro-title"><div><p className="eyebrow">THE PERSON BEHIND THE FIRM</p><h2 id="about-intro-title">Jay Wallis.<br /><em>Jay For Justice.</em></h2></div><div><p className="large-copy">Fighting for what matters.</p><p>Jay For Justice brings criminal defense, bankruptcy, family law, traffic tickets, and employment law information together in one place. Start with the area that fits your situation, or contact the firm to discuss your next step.</p><a className="about-practice-link" href="/#practice-areas">Explore practice areas <Arrow /></a><p className="legal-note">Contacting the firm does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p></div></section>
  </main>
}

function ClientLogin() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Client MyCase Login</h1><p className="large-copy">Client access is being prepared.</p><p>This page will connect to the firm’s client login when it is ready. For now, please call or text Jay For Justice for assistance.</p><div className="holding-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div><a className="return-home" href="/">Return to Home</a></main>
}

function Resources() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Resources</h1><p className="large-copy">Find your starting point.</p><p>Explore the practice areas below or learn about the steps involved in requesting help. More resources will be added as the website develops.</p><div className="resource-links">{services.map(([title], i) => <a key={title} href={`/practice-areas/${servicePaths[i]}/`}>{title} <Arrow /></a>)}<a href="/#next-step">Requesting help: what comes next <Arrow /></a></div></main>
}

function PracticePage({ index }) {
  const [title, subtitle, description] = services[index]
  return <main id="main" className="holding-page section-shell practice-page">
    <p className="eyebrow">JAY FOR JUSTICE · MEMPHIS, TN</p>
    <h1>{title}</h1>
    <p className="large-copy">{subtitle}</p>
    <p>{description}</p>
    <h2>Start with your situation.</h2>
    <p>Call or text Jay For Justice to discuss your concern and the next step. Initial review comes before any decision about representation.</p>
    <div className="holding-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div>
    <p className="legal-note">Contacting the firm does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p>
    <nav className="resource-links" aria-label="Other practice areas">{services.map(([name], i) => i !== index && <a key={name} href={`/practice-areas/${servicePaths[i]}/`}>{name} <Arrow /></a>)}</nav>
    <a className="return-home" href="/#practice-areas">Back to Practice Areas</a>
  </main>
}
