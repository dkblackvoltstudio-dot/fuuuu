import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, AppWindow, Award, BadgeCheck, BarChart3, Blocks, CircleHelp, Code2, Layers, MapPin, Monitor, MousePointer2, Paintbrush, Rocket, Search, Smartphone, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { websitePackages } from "@/data/site";
import { BrandMark, CTASection, SectionHeading, usePageMeta } from "@/components/site/SiteChrome";

const highlights = [
  { icon: AppWindow, title: "Websites that work", text: "Purposeful business sites, online stores, and bespoke web platforms." },
  { icon: Smartphone, title: "Apps & software", text: "Useful digital products designed around how your people work." },
  { icon: TrendingUp, title: "Marketing that connects", text: "Brand, search, social, and campaigns that meet your next goal." },
];
const capabilities = [
  { n: "01", icon: Code2, title: "Plan with purpose", copy: "We start by understanding the business, the audience, and the problem the technology needs to solve." },
  { n: "02", icon: Paintbrush, title: "Design for people", copy: "Clear experiences, thoughtful details, and responsive interfaces across the screens that matter." },
  { n: "03", icon: Blocks, title: "Build and support", copy: "A practical path from first concept through development, launch, and ongoing care." },
];

export default function Home() {
  usePageMeta("Digital solutions for growing businesses", "Hinton Evolution Tech is a Durgapur digital partner for websites, apps, software, branding, and marketing.");
  return <main>
    <section className="home-hero"><div className="site-container hero-grid">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <span className="eyebrow"><MapPin size={13} style={{ display: "inline", verticalAlign: "middle" }} /> DURGAPUR-BASED DIGITAL PARTNER</span>
        <h1>Digital built around <span>your next move.</span></h1>
        <div style={{ width: "95px", height: "3px", background: "linear-gradient(90deg, var(--blue), transparent)", borderRadius: "2px", marginBottom: "22px" }} aria-hidden="true"></div>
        <p>Websites, apps, software, and marketing—brought together by one hands-on team that makes the complicated feel clear.</p>
        <div className="hero-actions"><Link className="button" href="/contact">Let’s talk about your project <ArrowRight size={17} /></Link><Link className="button button-outline" href="/services">Explore services <ArrowUpRight size={16} /></Link></div>
        <div className="hero-proof"><span className="proof-mark"><BadgeCheck size={16} /></span><span>From first idea to launch and beyond</span><span className="proof-divider"></span><span className="proof-mark"><MapPin size={16} /></span><span>Based in Durgapur, West Bengal</span></div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
        <div className="hero-image-frame">
          <img src="/hero.jpg" alt="Hinton Evolution Tech digital studio illustration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <span className="image-corner image-corner-top"></span>
          <span className="image-corner image-corner-bottom"></span>
        </div>
        <div className="visual-index">H/E <i></i> 01</div>
      </motion.div>
    </div>
    <div className="hero-foot site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span>INDEPENDENT THINKING. PRACTICAL EXECUTION.</span>
        <span style={{ width: "240px", borderTop: "1px solid #cbd5e1", display: "inline-block" }}></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span style={{ color: "var(--blue)", fontWeight: "800" }}>01 — 04</span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "24px", height: "3px", background: "var(--blue)", borderRadius: "2px" }}></span>
          <span style={{ width: "12px", height: "3px", background: "#d0dfef", borderRadius: "2px" }}></span>
          <span style={{ width: "12px", height: "3px", background: "#d0dfef", borderRadius: "2px" }}></span>
          <span style={{ width: "12px", height: "3px", background: "#d0dfef", borderRadius: "2px" }}></span>
        </div>
      </div>
    </div>
    </section>

    <section className="service-strip section-pad"><div className="site-container">
      <div className="strip-heading">
        <span style={{ color: "var(--navy)", fontWeight: "800", fontSize: "15px", letterSpacing: ".05em" }}>ONE PARTNER, THE WHOLE DIGITAL PICTURE</span>
        <Link className="text-link" href="/services">View the full directory <ArrowUpRight size={16} /></Link>
      </div>
      <div className="highlight-grid">
        {highlights.map(({ icon: Icon, title, text }, index) => (
          <motion.div className="highlight-card" key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }}>
            <span className="highlight-icon"><Icon size={24} /></span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <Link href="/services" aria-label={`Explore ${title}`}><ArrowUpRight size={18} /></Link>
          </motion.div>
        ))}
      </div>
    </div></section>

    <section className="pricing-section" id="website-packages">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-intro">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="21" height="21">
                <path d="m12 3 9 5-9 5-9-5 9-5Z"/>
                <path d="m3 12 9 5 9-5"/>
                <path d="m3 16 9 5 9-5"/>
              </svg>
              <span>WEBSITE PACKAGES</span>
            </div>
            <h2>A good place to <span>begin.</span></h2>
            <p>
              Straightforward starting points for businesses ready to build or
              <br className="desktop-break" />
              refresh their online presence.
            </p>
          </div>
          <Link
            href="/pricing"
            className="payment-button"
          >
            Explore payment options
            <span className="arrow">→</span>
          </Link>
        </div>

        <div className="pricing-grid">
          <Link href="/pricing?package=Essential" className="pricing-card">
            <div className="card-top">
              <span className="package-number">01</span>
              <div className="package-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="13" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
            </div>
            <h3>Essential</h3>
            <p className="package-description">A confident first step online</p>
            <div className="price-divider"></div>
            <div className="price-row">
              <span className="price">₹20,000</span>
              <span className="starting-price">starting price</span>
            </div>
            <span className="card-arrow">↗</span>
          </Link>

          <Link href="/pricing?package=Growth" className="pricing-card featured">
            <div className="card-top">
              <span className="package-number">02</span>
              <span className="popular-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="9" r="6"/>
                  <path d="m9 14-1 7 4-2 4 2-1-7"/>
                  <path d="m10 9 1.5 1.5L14 8"/>
                </svg>
                MOST CHOSEN
              </span>
            </div>
            <div className="featured-icon package-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="13" width="4" height="8" rx="1"/>
                <rect x="10" y="8" width="4" height="13" rx="1"/>
                <rect x="17" y="3" width="4" height="18" rx="1"/>
              </svg>
            </div>
            <h3>Growth</h3>
            <p className="package-description">More room to stand out</p>
            <div className="price-divider"></div>
            <div className="price-row">
              <span className="price">₹40,000</span>
              <span className="starting-price">starting price</span>
            </div>
            <span className="card-arrow">↗</span>
          </Link>

          <Link href="/pricing?package=Scale" className="pricing-card">
            <div className="card-top">
              <span className="package-number">03</span>
              <div className="package-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14 5c3-2 6-2 7-2 0 1 0 4-2 7l-6 6-5-5 6-6Z"/>
                  <path d="m8 11-4 1-2 5 6-1"/>
                  <path d="m13 16-1 4-5 2 1-6"/>
                  <circle cx="16" cy="8" r="1.5"/>
                </svg>
              </div>
            </div>
            <h3>Scale</h3>
            <p className="package-description">A bigger digital foundation</p>
            <div className="price-divider"></div>
            <div className="price-row">
              <span className="price">₹80,000</span>
              <span className="starting-price">starting price</span>
            </div>
            <span className="card-arrow">↗</span>
          </Link>
        </div>

        <div className="pricing-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 11v5M12 7h.01"/>
          </svg>
          <span className="note-divider"></span>
          <p>
            A separate website package lineup for choosing a payment plan.
            Final scope and pricing depend on your requirements; GST extra.
          </p>
        </div>


      </div>
    </section>

    <section className="approach-section section-pad"><div className="site-container">
      <div className="approach-layout">
        <div className="approach-lead">
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "14px" }}>
            <span className="eyebrow"><Layers size={13} style={{ display: "inline", verticalAlign: "middle" }} /> HOW WE WORK</span>
            <span style={{ width: "160px", borderTop: "1px solid #cbd5e1", display: "inline-block" }}></span>
          </div>
          <h2>Good technology should make moving forward feel <span style={{ color: "var(--blue)" }}>simpler.</span></h2>
          <div style={{ width: "110px", height: "3px", background: "linear-gradient(90deg, var(--blue), transparent)", borderRadius: "2px", marginBottom: "22px" }} aria-hidden="true"></div>
          <p>We bring design, development, and marketing into one conversation—so the pieces work together, and the next step feels clear.</p>
          <Link href="/about" className="text-link" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Meet the team <ArrowUpRight size={16} /></Link>
        </div>
        <div className="approach-list">
          {capabilities.map(({ n, icon: Icon, title, copy }) => (
            <article className="approach-item" key={n}>
              <span className="approach-number">{n}</span>
              <span style={{ width: "1px", height: "36px", background: "#dbe3ef" }}></span>
              <span className="approach-icon-box"><Icon size={24} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <ArrowUpRight className="approach-arrow-icon" size={18} />
            </article>
          ))}
        </div>
      </div>
    </div></section>

    <section className="local-section"><div className="site-container local-inner">
      <div style={{ marginBottom: "32px" }}>
        <BrandMark light />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "14px" }}>
        <div className="local-badge"><Search size={16} /> <span>ROOTED IN DURGAPUR</span></div>
        <span style={{ width: "220px", borderTop: "1px solid rgba(255,255,255,0.25)", display: "inline-block" }}></span>
      </div>
      <h2>Local understanding.<br /><span>Digital reach.</span></h2>
      <p>Hinton Evolution Tech works with businesses looking for a thoughtful digital partner—right here in Durgapur and wherever your customers are.</p>
      <Link href="/contact" className="button button-white">Meet us in Durgapur <ArrowRight size={16} /></Link>
      <Sparkles className="local-spark" size={32} />
    </div></section>
    <CTASection title="Let’s make your next move a digital one." />
  </main>;
}
