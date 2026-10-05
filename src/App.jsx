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
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="draft-banner">Website design preview <span>•</span> Content and contact information are being reviewed.</div>
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Jay For Justice home">JAY <span>FOR</span> JUSTICE<small>LAW FIRM</small></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
      <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="#practice-areas" onClick={closeMenu}>Practice areas</a><a href="#our-approach" onClick={closeMenu}>Our approach</a><a className="header-cta" href="#next-step" onClick={closeMenu}>Your next step <Arrow /></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero section-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow">— &nbsp; JAY FOR JUSTICE</p><h1 id="hero-title">Fighting for<br />what <em>matters.</em></h1><p className="hero-description">Your freedom. Your family. Your future.<br />When life gets complicated, a clear next step matters.</p><a className="button" href="#practice-areas">Find your starting point <Arrow /></a><p className="hero-footnote">Protection. Preparation. Perspective.</p></div>
        <div className="hero-art" aria-hidden="true"><div className="art-frame"><div className="art-arch"><i /><i /><i /><i /></div><div className="art-horizon" /><span className="art-initial">J</span><div className="art-caption">A CLEAR PATH<br /><em>forward.</em></div></div><span className="art-note">BUILT ON PREPARATION</span></div>
      </section>
      <div className="principle-strip"><span>When the stakes are personal,</span><strong>the approach should be thoughtful.</strong><span className="strip-star" aria-hidden="true">✦</span></div>
      <section className="practice-section section-shell" id="practice-areas" aria-labelledby="practice-title"><div className="section-intro"><p className="eyebrow">HOW WE CAN HELP</p><h2 id="practice-title">Different challenges.<br /><em>One place to start.</em></h2><p>Find the area that fits your situation. You don’t need to have every answer before taking the first step.</p></div><div className="service-list">{services.map(([title, subtitle, description], i) => <details className="service" key={title}><summary><span className="service-number">0{i + 1}</span><span className="service-title">{title}<small>{subtitle}</small></span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-content"><p>{description}</p><a href="#next-step">Understand the next step <Arrow /></a></div></details>)}</div></section>
      <section className="approach-section section-shell" id="our-approach" aria-labelledby="approach-title"><div><p className="eyebrow">THE JAY FOR JUSTICE APPROACH</p><h2 id="approach-title">A steady hand.<br /><em>A prepared mind.</em></h2></div><div className="approach-copy"><p className="large-copy">Good decisions begin with a clear understanding of what’s at stake.</p><p>Our direction is simple: listen carefully, prepare thoughtfully, and explain the next step in plain language. The focus stays on the people behind the legal questions.</p><div className="approach-values"><div><span>01 / PROTECTION</span><p>Focus on what matters to you.</p></div><div><span>02 / PREPARATION</span><p>Make room for informed decisions.</p></div><div><span>03 / COMMUNICATION</span><p>Bring clarity to the process.</p></div></div></div></section>
      <section className="next-section section-shell" id="next-step" aria-labelledby="next-title"><div><p className="eyebrow">YOUR NEXT STEP</p><h2 id="next-title">Start with<br /><em>your situation.</em></h2></div><div className="next-copy"><p className="large-copy">An inquiry is the beginning of a conversation.</p><ol><li><strong>Tell us what kind of help you need.</strong><span>A brief initial inquiry should be enough to get started. No account required.</span></li><li><strong>The firm reviews your inquiry.</strong><span>Review and conflict screening come before a decision about representation.</span></li><li><strong>Discuss the path forward.</strong><span>Consultation, engagement, and client onboarding are separate steps.</span></li></ol><div className="preview-notice"><strong>Contact options are being prepared.</strong><p>This preview does not accept inquiries. Please use the current website for contact information.</p><a href="https://jayforjustice.com">Visit the current Jay For Justice website <Arrow /></a></div><p className="legal-note">Submitting an inquiry does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="#home">JAY <span>FOR</span> JUSTICE<small>LAW FIRM</small></a><p>Fighting for what matters.</p><a href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jay For Justice</span><span>Design preview · Not a live intake service</span></div></footer>
  </>
}
