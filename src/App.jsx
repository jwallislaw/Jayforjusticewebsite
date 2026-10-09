import { useEffect, useRef, useState } from 'react'
import './App.css'
const services = [
  ['Criminal Defense', 'Your freedom. Your future.', 'A criminal charge can put everything in question. Start by understanding the charge, the process, and the decisions ahead.'],
  ['Personal Injury', 'Your recovery. Your next step.', 'An injury can affect your health, your work, and your daily life. Contact Jay For Justice to discuss your situation and the next step.'],
  ['Family Law', 'What matters at home.', 'Changes to your family call for careful decisions about your children, your finances, and your next chapter.'],
  ['Employment Law', 'Your work. Your livelihood.', 'Workplace concerns can affect your livelihood and your next steps. Contact Jay For Justice to discuss your situation.'],
  ['Business Litigation & Startups', 'Your business. Your next chapter.', 'Business disputes and the decisions involved in starting a business call for a practical plan. Contact Jay For Justice to discuss your situation and the next step.'],
]
const servicePaths = ['criminal-defense', 'personal-injury', 'divorce-family-law', 'employment-law', 'business-litigation-startups']
const trafficService = ['Traffic Tickets', 'Small citation. Real consequences.', 'A ticket can raise questions about your license, your driving record, and what to do before your court date.']
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
  const [showBrandReveal, setShowBrandReveal] = useState(() => {
    if (window.location.pathname !== '/' || !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    try { return window.sessionStorage.getItem('jay-brand-reveal-seen') !== 'yes' } catch { return true }
  })
  useEffect(() => {
    if (!showBrandReveal) return
    try { window.sessionStorage.setItem('jay-brand-reveal-seen', 'yes') } catch { /* Storage may be unavailable; the reveal still dismisses. */ }
    const timer = window.setTimeout(() => setShowBrandReveal(false), 1450)
    return () => window.clearTimeout(timer)
  }, [showBrandReveal])
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
  const isTrafficTickets = pagePath === '/practice-areas/traffic-tickets'
  const isAbout = pagePath === '/who-is-jay-for-justice'
  const isResources = pagePath === '/resources'
  const isClientLogin = pagePath === '/client-login'
  return <>
    {showBrandReveal && <div className="brand-reveal" aria-hidden="true"><img src="/jayforjusticelogo.png" alt="" width="2172" height="724" /></div>}
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
      <p className="practice-band firm-priorities">Your Freedom. Your Family. Your Business. Your Future.</p>
    </header>
    {isTrafficTickets || practiceIndex >= 0 ? <PracticePage index={practiceIndex} isTraffic={isTrafficTickets} /> : isAbout ? <AboutJay /> : isResources ? <Resources /> : isClientLogin ? <ClientLogin /> : <Home />}
    <nav className="mobile-contact-bar" aria-label="Quick contact and client access"><a href="tel:+19018087777"><span aria-hidden="true">☎</span>Call</a><a href="sms:+19018087777"><span aria-hidden="true">✉</span>Text</a><a href="/client-login/"><span aria-hidden="true">↗</span>Client Login</a></nav>
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
          <div className="intro-body">
            <p>Legal problems affect your family, your work, your freedom, and the life you’re building. Small problems can add up. Big problems can feel overwhelming. Both deserve attention.</p>
            <p>Before becoming a lawyer, Jay Wallis spent more than 20 years navigating real-world challenges—as a father, a business owner, and someone who has been through divorce. That experience helps him understand people, their circumstances, and what matters to them.</p>
            <p>At Jay For Justice, the goal is to help solve problems—big and small. Jay brings practical judgment and out-of-the-box thinking to legal questions, exploring options that fit the person and situation.</p>
            <p className="intro-ending">Learn more about <a href="/who-is-jay-for-justice/">Jay For Justice</a>, explore our <a href="#practice-areas">practice areas</a>, or <a href="tel:+19018087777">call</a> or <a href="sms:+19018087777">text</a> to discuss what comes next.</p>
          </div>
          <nav className="intro-practice-links" aria-label="Explore our practice areas">{services.map(([title], i) => <span key={title}>{i > 0 && <span className="intro-link-divider" aria-hidden="true"> · </span>}<a href={`/practice-areas/${servicePaths[i]}/`}>{title}</a></span>)}</nav>
          <a className="button" href="/who-is-jay-for-justice/">MEET JAY WALLIS <Arrow /></a>
        </div>
        <div className="hero-photo"><img src="/jaywallis-memphis-hero.png" alt="Jay Wallis with the Memphis skyline at dusk" width="1536" height="1024" fetchPriority="high" /></div>
      </section>
      <section className="shield-story section-shell" aria-labelledby="shield-story-title"><img className="shield-story-mark" src="/jayforjusticeshield.jpg" alt="Gold Jay For Justice shield and sword" width="1280" height="1280" loading="lazy" /><div><p className="eyebrow">THE MEANING BEHIND OUR SHIELD</p><h2 id="shield-story-title">Protect what matters.<br /><em>Take thoughtful action.</em></h2><p>Our shield represents protecting what matters to you. Our sword represents the resolve to act—to address small problems before they grow and meet bigger challenges with a thoughtful plan.</p></div></section>
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
  return <main id="main" className="about-page about-page-compact">
    <section className="hero about-hero section-shell" aria-labelledby="about-title">
      <div className="hero-copy">
        <p className="eyebrow">MEET JAY WALLIS</p>
        <h1 id="about-title">A lifelong dream.<br /><em>A purpose shaped by life.</em></h1>
        <p className="hero-description">Father. Business owner. Advocate.<br />Helping people through dark days toward brighter tomorrows.</p>
        <div className="hero-actions"><a className="button" href="#jay-story">Read Jay’s story <Arrow /></a><a className="button button-outline" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a></div>
      </div>
      <figure className="attorney-portrait about-family-photo"><img src="/jay-and-jenna.svg" alt="Jay Wallis and Jenna outside a building with a tiger statue" width="259" height="562" fetchPriority="high" /><figcaption><span>Jay &amp; Jenna</span></figcaption></figure>
    </section>

    <section className="about-story-section section-shell" id="jay-story" aria-labelledby="childhood-title">
      <div><p className="eyebrow">JAY’S WHY</p><h2 id="childhood-title">A voice.<br /><em>A way forward.</em></h2></div>
      <div className="about-story-copy">
        <p>At six years old, Jay was in foster care, unsure why he could not go home to his dad. Lawyers visited, listened, and asked what he wanted. Those encounters sparked his dream of becoming a lawyer.</p>
        <p>Life brought responsibilities first. Jay became a father as a high-school senior. A few years later, his dad, the solo operator of a small locksmith business, died of lung cancer. With a son to raise and two sisters still at home, Jay took over the business. His dad’s drive and work ethic had already become part of who he was.</p>
        <p>He taught himself the work through trade magazines and long days in Georgia junkyards, making keys in the summer heat. As his skills grew, he taught others. Over twenty years, he expanded the locksmith and security business across west central Georgia and east Alabama. His dad’s example stayed with him: work hard, keep learning, and earn trust by following through.</p>
      </div>
    </section>

    <section className="about-promise section-shell" aria-labelledby="promise-title">
      <p className="eyebrow" id="promise-title">A LESSON FROM HIS DAD</p>
      <blockquote><p>“If you tell someone you are going to do something, you do it.”</p></blockquote>
      <p className="about-promise-note">A commitment Jay carried into business and brings to his work with clients.</p>
    </section>

    <section className="about-story-section about-story-tint section-shell" aria-labelledby="justice-story-title">
      <div><p className="eyebrow">THE DRIVE TO SERVE</p><h2 id="justice-story-title">From a dream<br /><em>to doing the work.</em></h2></div>
      <div className="about-story-copy">
        <p>Seeing people go unheard—and the pressure to accept plea agreements simply to end prolonged detention—reinforced Jay’s calling. Working alongside his friends, attorneys Mark Shelnutt and William Kendrick, showed him how steady guidance could help people through dark days toward brighter tomorrows.</p>
        <p>When his son graduated from high school and became a “Navy Nuke,” a nuclear electrical engineer, Jay pursued his own lifelong dream. Building on college courses taken during his years in business, he completed his remaining coursework through Troy University in one year.</p>
        <p>At the University of Memphis Cecil C. Humphreys School of Law, his most meaningful experiences involved serving others: through tax clinics, the Shelby County District Attorney’s Office, and the chambers of a U.S. bankruptcy judge.</p>
        <p>After law school, he worked alongside John Dolan, assisting with cases ranging from minor misdemeanors to first-degree premeditated murder. Across those experiences, what Jay enjoyed most was helping people understand difficult problems and find a path forward.</p>
      </div>
    </section>

    <section className="about-values section-shell" aria-labelledby="justice-title">
      <div className="about-values-heading"><p className="eyebrow">HOW WE WORK TOGETHER</p><h2 id="justice-title">Your situation.<br /><em>A thoughtful plan.</em></h2><p>Good counsel starts with listening and honest communication. Together, we identify what matters, discuss realistic options, and decide how to move forward.</p></div>
      <div className="about-values-grid">
        <article><h3>Be heard.</h3><p>Jay listens to your account, your concerns, and your goals to understand whether he can help.</p></article>
        <article><h3>Understand your options.</h3><p>He studies the facts and explains the choices, challenges, and limits in plain language.</p></article>
        <article><h3>Prepare for the next step.</h3><p>The plan should fit your circumstances, whether it involves negotiation or preparing for trial.</p></article>
        <article><h3>Work together.</h3><p>Honesty, realistic expectations, and follow-through give the work a solid foundation.</p></article>
      </div>
    </section>

    <aside className="about-reading-quote about-justice-quote section-shell" aria-label="Jay on justice"><blockquote>“Justice is for everyone.”</blockquote><p>Jay Wallis</p></aside>

    <section className="about-story-section about-justice-meaning section-shell" aria-labelledby="justice-meaning-title">
      <div><p className="eyebrow">WHAT JUSTICE MEANS TO JAY</p><h2 id="justice-meaning-title">Fairness.<br /><em>A voice. A future.</em></h2></div>
      <div className="about-story-copy">
        <p>To Jay, justice means everyone has the opportunity to be heard and treated fairly. It belongs to people who have been hurt or wronged, and to people accused of doing wrong.</p>
        <p>When someone has made a mistake, accountability should leave room for rehabilitation, help, and guidance. When someone disputes an accusation, their voice and the evidence deserve careful attention and a fair hearing.</p>
        <p>That belief guides Jay For Justice: understand the person, examine the facts, and work toward a fair outcome that gives them a path forward.</p>
      </div>
    </section>

    <section className="about-story-section about-contact section-shell" aria-labelledby="about-contact-title">
      <div><p className="eyebrow">START A CONVERSATION</p><h2 id="about-contact-title">Help during dark days.<br /><em>Hope for brighter tomorrows.</em></h2></div>
      <div className="about-story-copy"><p>You do not have to have every answer before reaching out. Tell Jay what you are facing and what matters to you. Together, you can discuss your options and whether he can help.</p><p>Call or text to arrange an appointment and a time to talk.</p><div className="holding-actions"><a className="button" href="tel:+19018087777" aria-label="Call 901-808-7777 to schedule an appointment">Schedule an appointment <Arrow /></a><a className="button" href="sms:+19018087777">Text to request a time <Arrow /></a></div><p className="legal-note">Contacting the firm does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p></div>
    </section>

    <section className="about-shield section-shell" aria-labelledby="about-shield-title">
      <img src="/jayforjusticeshield.jpg" alt="The gold Jay For Justice shield and sword" width="1280" height="1280" loading="lazy" />
      <div><p className="eyebrow">THE MEANING BEHIND OUR SHIELD</p><h2 id="about-shield-title">Protect what matters.<br /><em>Be ready to act.</em></h2><p>The shield represents protecting your freedom, family, business, and future. The sword represents the preparation and resolve to act when needed.</p><p>Protection first. Thoughtful action. A commitment to what matters to you.</p></div>
    </section>
  </main>
}

function ClientLogin() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Client MyCase Login</h1><p className="large-copy">Client access is being prepared.</p><p>This page will connect to the firm’s client login when it is ready. For now, please call or text Jay For Justice for assistance.</p><div className="holding-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div><a className="return-home" href="/">Return to Home</a></main>
}

function Resources() {
  return <main id="main" className="holding-page section-shell"><p className="eyebrow">JAY FOR JUSTICE</p><h1>Resources</h1><p className="large-copy">Find your starting point.</p><p>Explore the practice areas below or learn about the steps involved in requesting help. More resources will be added as the website develops.</p><div className="resource-links">{services.map(([title], i) => <a key={title} href={`/practice-areas/${servicePaths[i]}/`}>{title} <Arrow /></a>)}<a href="/#next-step">Requesting help: what comes next <Arrow /></a></div></main>
}

function PracticePage({ index, isTraffic = false }) {
  const [title, subtitle, description] = isTraffic ? trafficService : services[index]
  return <main id="main" className="holding-page section-shell practice-page">
    <p className="eyebrow">JAY FOR JUSTICE · MEMPHIS, TN</p>
    <h1>{title}</h1>
    <p className="large-copy">{subtitle}</p>
    <p>{description}</p>
    {index === 0 && <section className="criminal-traffic" aria-labelledby="traffic-title"><h2 id="traffic-title">Traffic Tickets</h2><p>{trafficService[2]}</p><a className="about-practice-link" href="/practice-areas/traffic-tickets/">Explore Traffic Tickets <Arrow /></a></section>}
    {isTraffic && <p className="traffic-parent"><a href="/practice-areas/criminal-defense/">Part of Criminal Defense <Arrow /></a></p>}
    <h2>Start with your situation.</h2>
    <p>Call or text Jay For Justice to discuss your concern and the next step. Initial review comes before any decision about representation.</p>
    <div className="holding-actions"><a className="button" href="tel:+19018087777">Call 901-808-7777 <Arrow /></a><a className="button" href="sms:+19018087777">Text Jay For Justice <Arrow /></a></div>
    <p className="legal-note">Contacting the firm does not establish an attorney-client relationship. Avoid sharing confidential details until the firm provides instructions.</p>
    <nav className="resource-links" aria-label="Other practice areas">{services.map(([name], i) => i !== index && <a key={name} href={`/practice-areas/${servicePaths[i]}/`}>{name} <Arrow /></a>)}</nav>
    <a className="return-home" href="/#practice-areas">Back to Practice Areas</a>
  </main>
}
