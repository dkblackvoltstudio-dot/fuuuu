import { motion } from "framer-motion";
import { ArrowUpRight, Check, Layers, Megaphone, Monitor, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { serviceGroups } from "@/data/site";
import { CTASection, PageIntro, usePageMeta } from "@/components/site/SiteChrome";

export default function Services() {
  usePageMeta(
    "Services and starting prices",
    "Explore Hinton Evolution Tech’s complete directory of web, branding, technical, advertising, SEO, and marketing services."
  );

  const orbitChips = [
    { icon: <Monitor size={22} strokeWidth={2} />, className: "orbit-chip-tl", label: "Web & UI Design" },
    { icon: <ShoppingCart size={22} strokeWidth={2} />, className: "orbit-chip-tr", label: "E-Commerce Solutions" },
    { icon: <Layers size={22} strokeWidth={2} />, className: "orbit-chip-bl", label: "Full-Stack Software" },
    { icon: <Megaphone size={22} strokeWidth={2} />, className: "orbit-chip-br", label: "Digital Growth & Marketing" },
  ];

  return (
    <main>
      <PageIntro
        eyebrow="SERVICE DIRECTORY"
        title={
          <>
            Everything your next<br />
            <span className="highlight-underline">digital move</span> needs.
          </>
        }
        text="From your first website to a complete digital presence, explore our services and clear starting prices below."
        orbitChips={orbitChips}
      >
        <Link className="button-service-hero" href="/contact">
          Discuss a service <ArrowUpRight size={17} strokeWidth={2.4} />
        </Link>
      </PageIntro>

      <section className="service-directory">
        <div className="site-container">
          <div className="catalog-note">
            <div className="catalog-note-left">
              <span className="catalog-note-icon-squircle">
                <Layers size={22} color="#ffffff" strokeWidth={2.2} />
              </span>
              <div className="catalog-note-divider" />
              <div className="catalog-note-text">
                <h4>A complete directory, built for easy exploring.</h4>
                <p>Need help choosing? Tell us what you have in mind and we’ll help you find a starting point.</p>
              </div>
            </div>
            <Link className="catalog-ask-button" href="/contact">
              Ask our team <ArrowUpRight size={15} strokeWidth={2.4} />
            </Link>
          </div>

          {serviceGroups.map((group, groupIndex) => (
            <motion.section
              className={`catalog-section catalog-${group.color}`}
              id={group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              key={group.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.06 }}
              transition={{ duration: 0.35, delay: Math.min(groupIndex * 0.035, 0.2) }}
            >
              <div className="catalog-heading">
                <span className="catalog-index">0{groupIndex + 1}</span>
                <div>
                  <h2>{group.name}</h2>
                  <p>{group.intro}</p>
                </div>
              </div>

              <div className="catalog-table">
                <div className="catalog-table-head">
                  <span>SERVICE</span>
                  <span>STARTING PRICE</span>
                  <span aria-hidden="true" />
                </div>
                {group.services.map((service) => (
                  <article
                    className={`catalog-row ${service.detail ? "catalog-row-detail" : ""}`}
                    key={service.name}
                  >
                    <div className="catalog-service">
                      <span className="catalog-check">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      <div>
                        <h3>{service.name}</h3>
                        {service.detail && <p>{service.detail}</p>}
                      </div>
                    </div>
                    <span className="catalog-price">{service.price}</span>
                    <Link
                      className="catalog-link"
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      aria-label={`Enquire about ${service.name}`}
                    >
                      <ArrowUpRight size={17} />
                    </Link>
                  </article>
                ))}
              </div>
            </motion.section>
          ))}

          <div className="price-disclaimer">
            <span>*</span>
            <p>
              All prices shown are starting prices and may vary based on project requirements. GST is extra. Contact us for a scope-specific estimate.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service is right?"
        text="Tell us a little about your goal. We’ll help you identify a sensible next step."
      />
    </main>
  );
}
