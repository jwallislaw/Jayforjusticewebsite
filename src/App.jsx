import { useEffect, useRef, useState } from 'react'
import './App.css'
const services = [
  ['Criminal defense', 'Your freedom. Your future.', 'A criminal charge can put everything in question. Start by understanding the charge, the process, and the decisions ahead.'],
  ['Bankruptcy', 'A path forward from debt.', 'When debt feels unmanageable, understanding your options is the first step toward making a plan.'],
  ['Divorce & family law', 'What matters at home.', 'Changes to your family call for careful decisions about your children, your finances, and your next chapter.'],
  ['Traffic tickets', 'Small citation. Real consequences.', 'A ticket can raise questions about your license, your driving record, and what to do before your court date.'],
]
const Arrow = () => <span aria-hidden="true">↗</span>
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
  const isAbout = pagePath === '/who-is-jay-for-justice'
  const isResources = pagePath === '/resources'
  const isClientLogin = pagePath === '/client-login'
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" ref={headerRef}>
      <div className="masthead">
        <a className="wordmark" href="/" onClick={closeMenu} aria-label="Jay For Justice home"><img className="firm-logo" src="/jayforjusticelogo.png" alt="Jay For Justice — Fighting for What Matters" width="2172" height="724" /></a>
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
      <div className="practice-band">CRIMINAL DEFENSE <span>•</span> BANKRUPTCY <span>•</span> FAMILY LAW <span>•</span> TRAFFIC TICKETS</div>
    </header>
    {isAbout ? <AboutJay /> : isResources ? <Resources /> : isClientLogin ? <ClientLogin /> : <Home />}
    <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="/"><img className="firm-logo" src="/jayforjusticelogo.png" alt="Jay For Justice — Fighting for What Matters" width="2172" height="724" /></a><p>Help During Dark Days.<br />Hope for Bright Tomorrows.</p><div className="footer-links"><a href="/who-is-jay-for-justice/">Who is Jay For Justice</a><a href="tel:+19018087777">Call 901-808-7777</a><a href="sms:+19018087777">Text 901-808-7777</a><a href="#main">Back to top ↑</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jay For Justice</span><span>Design preview · Online intake is being prepared</span></div></footer>

  </>
}

function Home() {
  return (
    <main id="main">
      <section className="home-introduction" id="home" aria-labelledby="hero-title">
        <div className="intro-photo"><img src="/jaywallisheadshot.JPG" alt="Attorney Jay Wallis" width="1638" height="2048" fetchPriority="high" /></div>
        <div className="intro-writing">
          <h1 id="hero-title">Help During Dark Days.</h1>
          <p className="hope-line">HOPE FOR BRIGHT TOMORROWS</p>
          <div className="intro-body"><p>Legal questions can affect your freedom, your family, and your financial future. Understanding your options is a place to begin.</p><p>Jay For Justice brings criminal defense, bankruptcy, family law, and traffic-ticket information together in one place. Explore the area that fits your situation, or call or text the firm to discuss the next step.</p><p>Meet <a href="/who-is-jay-for-justice/">Jay Wallis</a>, explore our <a href="#practice-areas">practice areas</a>, and find a starting point for what comes next.</p></div>
          <a className="button" href="/who-is-jay-for-justice/">WHO IS JAY FOR JUSTICE <Arrow /></a>
        </div>
      </section>
      <div className="principle-strip"><span>When the stakes are personal,</span><strong>the approach should be thoughtful.</strong><span className="strip-star" aria-hidden="true">✦</span></div>
      <section className="practice-section section-shell" id="practice-areas" aria-labelledby="practice-title"><div className="section-intro"><p className="eyebrow">HOW WE CAN HELP</p><h2 id="practice-title">Different challenges.<br /><em>One place to start.</em></h2><p>Find the area that fits your situation. You don’t need to have every answer before taking the first step.</p></div><div className="service-list">{services.map(([title, subtitle, description], i) => <details className="service" id={`practice-${i + 1}`} key={title}><summary><span className="service-number">0{i + 1}</span><span className="service-title">{title}<small>{subtitle}</small></span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-content"><p>{description}</p><a href="#next-step">Understand the next step <Arrow /></a></div></details>)}</div></section>
      <section className="approach-section section-shell" id="our-approach" aria-labelledby="approach-title"><div><p className="eyebrow">THE JAY FOR JUSTICE APPROACH</p><h2 id="approach-title">A steady hand.<br /><em>A prepared mind.</em></h2></div><div className="approach-copy"><p className="large-copy">Good decisions begin with a clear understanding of what’s at stake.</p><p>Our direction is simple: listen carefully, prepare thoughtfully, and explain the next step in plain language. The focus stays on the people behind the legal questions.</p><div className="approach-values"><div><span>01 / PROTECTION</span><p>Focus on what matters to you.</p></div><div><span>02 / PREPARATION</span><p>Make room for informed decisions.</p></div><div><span>03 / COMMUNICATION</span><p>Bring clarity to the process.</p></div></div></div></section>
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
    <section className="about-introduction section-shell" aria-labelledby="about-intro-title"><div><p className="eyebrow">THE PERSON BEHIND THE FIRM</p><h2 id="about-intro-title">Jay Wallis.<br /><em>Jay For Justice.</em></h2></div><div><p className="large-copy">Fighting for what matters.</p><p>Jay For Justice brings criminal defense, bankruptcy, family law, and traffic-ticket information together in one place. Start with the area that fits your situation, or contact the firm to discuss your next step.</p><a className="about-practice-link" href="/#practice-areas">Explore practice areas <Arrow /></a><p className="legal-note">Contacting the firm does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p></div></section>
  </main>
}

function ClientLogin() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Client MyCase Login</h1><p className="large-copy">Client access is being prepared.</p><p>This page will connect to the firm’s client login when it is ready. For now, please call or text Jay For Justice for assistance.</p><div className="holding-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div><a className="return-home" href="/">Return to Home</a></main>
}

function Resources() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Resources</h1><p className="large-copy">Find your starting point.</p><p>Explore the practice areas below or learn about the steps involved in requesting help. More resources will be added as the website develops.</p><div className="resource-links">{services.map(([title], i) => <a key={title} href={`/#practice-${i + 1}`}>{title} <Arrow /></a>)}<a href="/#next-step">Requesting help: what comes next <Arrow /></a></div></main>
}
