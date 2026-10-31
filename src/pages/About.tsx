import { motion } from "framer-motion";
import { ArrowRight, Compass, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { CTASection, PageIntro, SectionHeading, usePageMeta } from "@/components/site/SiteChrome";

const principles = [
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Clarity before complexity",
    text: "We start with what you need to achieve, then shape a digital approach around it.",
  },
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    title: "Build for real people",
    text: "Useful websites and software should feel intuitive to the people using them.",
  },
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Thoughtful from start to finish",
    text: "Good work comes from clear communication, considered details, and care beyond launch.",
  },
];

export default function About() {
  usePageMeta("About the team", "Meet the leadership behind Hinton Evolution Tech, your Durgapur-based partner for web, software, app, and marketing services.");
  return <main><PageIntro eyebrow="ABOUT HINTON EVOLUTION TECH" title={<>Technology with a<br /><span>human point of view.</span></>} text="We help businesses move ideas forward with digital experiences that are considered, practical, and built around the people who use them." />
    <section className="about-story"><div className="site-container story-grid"><div className="story-stamp"><span className="story-stamp-bar"></span><div className="stamp-rings"></div><span className="stamp-mark">H<span>/</span>E</span><div className="stamp-subtext"><span>BUILDING</span><span>DIGITAL EXPERIENCES <i className="dash">—</i></span></div></div><div className="story-copy"><span className="eyebrow"><i></i>OUR COMPANY</span><h2>One connected team for<br />your digital journey.</h2><p>Hinton Evolution Tech brings website development, app development, software, and digital marketing together under one roof. That means your brand, product, and customer experience can move in the same direction.</p></div></div></section>
    <section className="leadership-section">
      <div className="site-container">
        <div className="leadership-header">
          <span className="eyebrow"><i></i>THE PEOPLE BEHIND THE WORK</span>
          <h2>Leadership that brings<br />ideas <span className="highlight-underline">to life.</span></h2>
          <p>A close-knit digital team, led by people focused on thoughtful solutions and hands-on execution.</p>
        </div>
        <div className="leader-grid">
          <motion.article className="leader-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="leader-card-left">
              <div className="leader-avatar leader-avatar-blue">
                <span className="avatar-ring"></span>
                <span>TB</span>
              </div>
              <span className="leader-divider"></span>
              <div className="leader-info">
                <span className="leader-role">FOUNDER</span>
                <h3>Tamajit Banerjee</h3>
                <p>Guiding the company’s direction and its focus on bringing practical digital solutions to business.</p>
              </div>
            </div>
            <span className="leader-badge">01</span>
          </motion.article>

          <motion.article className="leader-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <div className="leader-card-left">
              <div className="leader-avatar leader-avatar-navy">
                <span className="avatar-ring"></span>
                <span>DK</span>
              </div>
              <span className="leader-divider"></span>
              <div className="leader-info">
                <span className="leader-role">CEO & LEAD DEVELOPER</span>
                <h3>Debashis Khan</h3>
                <p>Leading delivery and technical development, connecting the product vision with practical engineering.</p>
              </div>
            </div>
            <span className="leader-badge">02</span>
          </motion.article>
        </div>
        <div className="leadership-note-wrap">
          <span className="note-line"></span>
          <p>Leadership profiles are presented without stock portraits; names and roles supplied by Hinton Evolution Tech.</p>
          <span className="note-line"></span>
        </div>
      </div>
    </section>
    <section className="values-section">
      <div className="site-container values-layout">
        <div className="values-lead">
          <span className="eyebrow"><i></i>WHAT WE BELIEVE</span>
          <h2>Good partnerships<br />make good work<br /><span className="highlight-underline">possible.</span></h2>
          <p>We believe the best digital work feels considered on the outside—and works dependably on the inside.</p>
          <Link href="/contact" className="values-cta">Get to know us <ArrowRight size={18} /></Link>
        </div>
        <div className="values-divider" aria-hidden="true"></div>
        <div className="values-list">
          {principles.map(({ icon: Icon, title, text }, index) => (
            <article className="value-row" key={title}>
              <span className="value-index">0{index + 1}</span>
              <span className="value-icon"><Icon size={26} /></span>
              <span className="value-item-divider" aria-hidden="true"></span>
              <div className="value-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="about-quote"><div className="site-container about-quote-inner"><Sparkles size={20} /><p>“We bring the different pieces together—so your digital presence feels like one thoughtful experience.”</p><span>HINTON EVOLUTION TECH</span></div></section><CTASection title="Have a goal in mind? Let’s talk it through." /></main>;
}
