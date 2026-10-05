import { useState } from 'react'
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
  const closeMenu = () => setMenuOpen(false)
  const isAbout = window.location.pathname.replace(/\/$/, '') === '/who-is-jay-for-justice'
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="draft-banner">Website design preview <span>•</span> Website content is being reviewed.</div>
    <header className="site-header">
      <a className="wordmark" href="/" onClick={closeMenu} aria-label="Jay For Justice home"><img className="firm-logo" src="/jayforjusticelogo.png" alt="Jay For Justice — Fighting for What Matters" width="2172" height="724" /></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
      <div className="header-contact"><span>Call or text Jay For Justice</span><a className="header-number" href="tel:+19018087777">901-808-7777</a><div className="contact-actions"><a href="tel:+19018087777">Call <span aria-hidden="true">↗</span></a><a href="sms:+19018087777">Text <span aria-hidden="true">↗</span></a></div></div>
      <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="/#practice-areas" onClick={closeMenu}>Practice areas</a><a href="/who-is-jay-for-justice/" aria-current={isAbout ? 'page' : undefined} onClick={closeMenu}>Who is Jay For Justice</a><a href="/#our-approach" onClick={closeMenu}>Our approach</a>
      </nav>
    </header>
    {isAbout ? <AboutJay /> : <Home />}
    <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="/"><img className="firm-logo" src="/jayforjusticelogo.png" alt="Jay For Justice — Fighting for What Matters" width="2172" height="724" /></a><p>Fighting for what matters.</p><div className="footer-links"><a href="/who-is-jay-for-justice/">Who is Jay For Justice</a><a href="tel:+19018087777">Call 901-808-7777</a><a href="sms:+19018087777">Text 901-808-7777</a><a href="#main">Back to top ↑</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jay For Justice</span><span>Design preview · Online intake is being prepared</span></div></footer>
    <aside className="persistent-contact" aria-label="Call or text Jay For Justice"><span>901-808-7777</span><a href="tel:+19018087777" aria-label="Call Jay For Justice at 901-808-7777">Call</a><a href="sms:+19018087777" aria-label="Text Jay For Justice at 901-808-7777">Text</a></aside>
  </>
}

function Home() {
  return (
    <main id="main">
      <section className="hero section-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">— &nbsp; JAY FOR JUSTICE</p><h1 id="hero-title">Fighting for<br />what <em>matters.</em></h1><p className="hero-description">Your freedom. Your family. Your future.<br />When life gets complicated, a clear next step matters.</p><div className="hero-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button button-outline" href="sms:+19018087777">Text Jay For Justice <Arrow /></a><a className="hero-secondary" href="#practice-areas">Explore practice areas ↓</a></div><p className="hero-footnote">Protection. Preparation. Perspective.</p></div>
        <figure className="attorney-portrait"><img src="/jaywallisheadshot.JPG" alt="Attorney Jay Wallis" width="1638" height="2048" fetchPriority="high" /><figcaption><span>Jay Wallis</span><small>JAY FOR JUSTICE</small></figcaption></figure>
      </section>
      <div className="principle-strip"><span>When the stakes are personal,</span><strong>the approach should be thoughtful.</strong><span className="strip-star" aria-hidden="true">✦</span></div>
      <section className="practice-section section-shell" id="practice-areas" aria-labelledby="practice-title"><div className="section-intro"><p className="eyebrow">HOW WE CAN HELP</p><h2 id="practice-title">Different challenges.<br /><em>One place to start.</em></h2><p>Find the area that fits your situation. You don’t need to have every answer before taking the first step.</p></div><div className="service-list">{services.map(([title, subtitle, description], i) => <details className="service" key={title}><summary><span className="service-number">0{i + 1}</span><span className="service-title">{title}<small>{subtitle}</small></span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-content"><p>{description}</p><a href="#next-step">Understand the next step <Arrow /></a></div></details>)}</div></section>
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
