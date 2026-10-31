import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, ArrowUpRight, ChevronDown, Code2, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { contact } from "@/data/site";

const nav = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Pricing", "/pricing"], ["Contact", "/contact"]] as const;

export function BrandMark({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand-lockup ${light ? "brand-lockup-light" : ""}`} aria-label="Hinton Evolution Tech home"><img src="/logo.webp" alt="Hinton Evolution Tech logo" style={{ width: "42px", height: "42px", borderRadius: "10px", objectFit: "cover" }} /><span className="brand-words"><strong>HINTON <b>EVOLUTION</b></strong><small>TECHNOLOGY THAT MOVES YOU</small></span></Link>;
}

export function SiteHeader() {
  const [path] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return <><div className="topline"><div className="site-container topline-inner"><div style={{ display: "flex", alignItems: "center", gap: "24px" }}><span>Digital ideas, built in <b>Durgapur.</b></span><span style={{ width: "220px", borderTop: "1px solid #2a3e5c", display: "inline-block" }}></span></div><span className="topline-contact"><a href={`tel:${contact.phones[0].replace(/\s+/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><Phone size={13} /> {contact.phones[0]}</a><i>|</i><a href="https://wa.me/918001891036" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><MessageCircle size={13} /> WhatsApp: +91 8001891036</a><i>|</i><a href="mailto:info.tech@hintonevolution.com" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}><Mail size={13} /> info.tech@hintonevolution.com</a></span></div></div><header className="site-header"><div className="site-container header-inner"><BrandMark /><nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Main navigation">{nav.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${path === href ? "nav-link-active" : ""}`}>{label}</Link>)}<Link href="/contact?service=Website%20enquiry" className="button button-small nav-cta">Let’s talk <ArrowUpRight size={15} /></Link></nav><button className="mobile-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header></>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-main"><div className="footer-brand"><BrandMark light /><p>Thoughtful digital experiences for businesses ready to move forward.</p><a className="footer-mail" href={`mailto:${contact.emails[0]}`}>{contact.emails[0]} <ArrowUpRight size={14} /></a></div><div className="footer-column"><span className="footer-label">Explore</span>{nav.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="footer-column"><span className="footer-label">What we do</span><Link href="/services">Websites & e-commerce</Link><Link href="/services">Apps & software</Link><Link href="/services">Branding & creative</Link><Link href="/services">Digital marketing</Link></div><div className="footer-column footer-address"><span className="footer-label">Find us</span><p>{contact.address}</p><a href={`tel:${contact.phones[0].replace(/\s+/g, "")}`}>{contact.phones[0]}</a><a href={`tel:${contact.phones[1].replace(/\s+/g, "")}`}>{contact.phones[1]}</a><Link className="footer-maplink" href="/contact">Visit our contact page <ArrowRight size={14} /></Link></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Hinton Evolution Tech</span><span>All prices are starting prices. GST extra.</span><a href="#top">Back to top ↑</a></div></footer>;
}

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
  orbitChips,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
  orbitChips?: Array<{
    icon: ReactNode;
    className: string;
    label?: string;
  }>;
}) {
  return (
    <section className="page-intro">
      <div className="site-container page-intro-inner">
        <div>
          <span className="eyebrow"><i></i>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
        <div className="intro-orbit" aria-hidden="true">
          <span className="orbit-ambient-glow"></span>
          <span className="orbit-pulse-wave orbit-wave-1"></span>
          <span className="orbit-pulse-wave orbit-wave-2"></span>
          <span className="orbit-ring orbit-ring-one"></span>
          <span className="orbit-ring orbit-ring-two"></span>
          <div className="orbit-track orbit-track-outer">
            <span className="orbit-dot orbit-dot-one"></span>
          </div>
          <div className="orbit-track orbit-track-inner">
            <span className="orbit-dot orbit-dot-two"></span>
          </div>
          <span className="orbit-core">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
            </svg>
          </span>
          {orbitChips?.map((chip, idx) => (
            <span key={idx} className={`orbit-chip ${chip.className}`} title={chip.label || "Service capability"}>
              {chip.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="page-intro-divider">
        <span className="intro-divider-bar"></span>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, subtitle }: { eyebrow?: string; title: string; text?: string; subtitle?: string }) {
  const desc = text || subtitle;
  return <div className="section-heading">{eyebrow && <span className="eyebrow"><i></i>{eyebrow}</span>}<h2>{title}</h2>{desc && <p>{desc}</p>}</div>;
}

export function CTASection({ title, text }: { title: string; text?: string }) {
  return <section className="cta-band"><div className="site-container cta-band-inner"><div className="cta-copy"><h2>{title}</h2><p>{text || "Whether you’re launching something new or building on what you have, we’re here to help make it clear and capable."}</p></div><div className="cta-action"><Link className="button button-white" href="/contact">Let’s talk about your project <ArrowRight size={17} /></Link></div></div><div className="cta-decoration" aria-hidden="true"></div></section>;
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Hinton Evolution Tech`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);
}
