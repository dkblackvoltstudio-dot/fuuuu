import { useState } from "react";
import {
  ArrowRight,
  Check,
  Headphones,
  Info,
  Layers,
  Monitor,
  Rocket,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";
import { Link } from "wouter";
import { websitePackages } from "@/data/site";
import { CTASection, usePageMeta } from "@/components/site/SiteChrome";
import { PaymentCalculator } from "@/components/pricing/PaymentCalculator";

function startingPackage() {
  if (typeof window !== "undefined") {
    const requested = new URLSearchParams(window.location.search).get("package");
    if (requested) {
      const found = websitePackages.find(
        (item) => item.name.toLowerCase() === requested.toLowerCase()
      );
      if (found) return found.name;
    }
  }
  return "Growth";
}

export default function Pricing() {
  const [selectedName, setSelectedName] = useState(startingPackage);

  usePageMeta(
    "Website packages and pricing",
    "Compare Hinton Evolution Tech’s ₹20,000, ₹40,000, and ₹80,000 website package starting points and calculate one-time or six-month EMI payment options."
  );

  const handleSelect = (pkgName: string) => {
    setSelectedName(pkgName);
    const calculatorEl = document.getElementById("calculator");
    if (calculatorEl) {
      calculatorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#f8faff] min-h-screen">
      {/* Hero Section matching reference image */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[#e9effa]">
        {/* Soft decorative background glow */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(83, 148, 255, 0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(65, 130, 255, 0.14) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          {/* Eyebrow badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf2ff] text-[#0757ff] text-[12px] sm:text-[13px] font-bold tracking-wider uppercase border border-[#d9e6ff]/70 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0757ff]" />
              <span>WEBSITE PACKAGES & PRICING</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0e192f] tracking-tight leading-[1.12]">
            A clear path to{" "}
            <span className="relative inline-block text-[#0757ff]">
              get started.
              <svg
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                height="12"
                viewBox="0 0 240 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C55 2.5 185 2 238 9"
                  stroke="#0757ff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-base sm:text-lg text-[#5e6c8d] max-w-3xl leading-relaxed">
            Choose the package that feels closest to your plans. Final scope is agreed before work begins.
          </p>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 mt-10 items-stretch">
            {/* Card 1: Essential */}
            <div
              className={`rounded-3xl bg-white p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                selectedName === "Essential"
                  ? "border-2 border-[#0757ff] shadow-[0_10px_35px_rgba(7,87,255,0.12)]"
                  : "border-[#e0e9f6] shadow-[0_4px_20px_rgba(15,44,89,0.04)] hover:border-[#b8d2fa] hover:shadow-[0_12px_32px_rgba(15,44,89,0.08)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b] text-base font-bold tracking-tight">01</span>
                  <div className="w-14 h-14 rounded-2xl bg-[#edf4ff] text-[#0757ff] flex items-center justify-center">
                    <Monitor className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold text-[#0e192f] mt-3">Essential</h2>
                <p className="text-[#5e6c8d] text-[15px] mt-1">A confident first step online.</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#0e192f] tracking-tight">
                    ₹20,000
                  </span>
                  <span className="text-[#64748b] text-sm font-normal">starting price</span>
                </div>

                <div className="mt-6 space-y-3.5">
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Modern, mobile-friendly website</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Up to 5 pages (e.g., Home, About, Services, Contact)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Basic SEO setup</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect("Essential")}
                className={`mt-8 w-full py-3.5 px-6 rounded-xl font-semibold text-[15px] flex items-center justify-between transition-all ${
                  selectedName === "Essential"
                    ? "bg-[#0757ff] text-white shadow-md shadow-blue-500/25 hover:bg-[#0047e6]"
                    : "border border-[#93c5fd] bg-white text-[#0757ff] hover:bg-[#eff6ff]"
                }`}
              >
                <span>Select this package</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card 2: Growth (Featured / Popular) */}
            <div
              className="rounded-3xl bg-white p-7 sm:p-8 border-2 border-[#0757ff] shadow-[0_10px_35px_rgba(7,87,255,0.12)] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_16px_45px_rgba(7,87,255,0.18)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#0757ff] text-base font-bold tracking-tight">02</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0757ff] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    <span>POPULAR</span>
                  </div>
                </div>

                <div className="flex items-start justify-between mt-3">
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#0e192f]">Growth</h2>
                    <p className="text-[#5e6c8d] text-[15px] mt-1">More room to stand out.</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#edf4ff] text-[#0757ff] flex items-center justify-center shrink-0">
                    <Layers className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#0e192f] tracking-tight">
                    ₹40,000
                  </span>
                  <span className="text-[#64748b] text-sm font-normal">starting price</span>
                </div>

                <div className="mt-6 space-y-3.5">
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Feature-rich business website</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Up to 10–15 pages</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Advanced SEO & performance optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Contact / enquiry integration</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect("Growth")}
                className="mt-8 w-full py-3.5 px-6 rounded-xl bg-[#0757ff] hover:bg-[#0047e6] text-white font-semibold text-[15px] flex items-center justify-between transition-all shadow-md shadow-blue-500/25"
              >
                <span>Select this package</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card 3: Scale */}
            <div
              className={`rounded-3xl bg-white p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                selectedName === "Scale"
                  ? "border-2 border-[#0757ff] shadow-[0_10px_35px_rgba(7,87,255,0.12)]"
                  : "border-[#e0e9f6] shadow-[0_4px_20px_rgba(15,44,89,0.04)] hover:border-[#b8d2fa] hover:shadow-[0_12px_32px_rgba(15,44,89,0.08)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748b] text-base font-bold tracking-tight">03</span>
                  <div className="w-14 h-14 rounded-2xl bg-[#edf4ff] text-[#0757ff] flex items-center justify-center">
                    <Rocket className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold text-[#0e192f] mt-3">Scale</h2>
                <p className="text-[#5e6c8d] text-[15px] mt-1">A bigger digital foundation.</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#0e192f] tracking-tight">
                    ₹80,000
                  </span>
                  <span className="text-[#64748b] text-sm font-normal">starting price</span>
                </div>

                <div className="mt-6 space-y-3.5">
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Custom, feature-rich website</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>15+ pages with advanced features</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Integrations (booking, payment, CRM, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[15px] text-[#334155] leading-snug">
                    <Check className="w-4 h-4 text-[#0757ff] stroke-[2.8] shrink-0 mt-0.5" />
                    <span>Higher performance & scalability</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect("Scale")}
                className={`mt-8 w-full py-3.5 px-6 rounded-xl font-semibold text-[15px] flex items-center justify-between transition-all ${
                  selectedName === "Scale"
                    ? "bg-[#0757ff] text-white shadow-md shadow-blue-500/25 hover:bg-[#0047e6]"
                    : "border border-[#93c5fd] bg-white text-[#0757ff] hover:bg-[#eff6ff]"
                }`}
              >
                <span>Select this package</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Info note */}
          <div className="mt-8 flex items-start sm:items-center gap-2.5 text-[14px] text-[#5e6c8d]">
            <Info className="w-5 h-5 text-[#0757ff] shrink-0 mt-0.5 sm:mt-0" />
            <p>
              These are website-development starting points. They are separate from the service directory packages and prices. Final prices may vary with project requirements; GST is extra.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="mt-8 rounded-2xl bg-[#edf4ff]/70 border border-[#dce8fb] py-4 px-6 sm:px-10 flex items-center justify-between flex-wrap gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0757ff]" />
              <span className="font-semibold text-[#1e293b] text-[15px]">Secure & Reliable</span>
            </div>
            <div className="hidden lg:block w-[1px] h-6 bg-[#cbdcf7]" />
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-[#0757ff]" />
              <span className="font-semibold text-[#1e293b] text-[15px]">Mobile Responsive</span>
            </div>
            <div className="hidden lg:block w-[1px] h-6 bg-[#cbdcf7]" />
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-[#0757ff]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span className="font-semibold text-[#1e293b] text-[15px]">Fast & Optimized</span>
            </div>
            <div className="hidden lg:block w-[1px] h-6 bg-[#cbdcf7]" />
            <div className="flex items-center gap-3">
              <Headphones className="w-5 h-5 text-[#0757ff]" />
              <span className="font-semibold text-[#1e293b] text-[15px]">Ongoing Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section className="section-pad pt-12 pb-20">
        <div className="site-container">
          <div id="calculator">
            <PaymentCalculator selectedPackage={selectedName} onSelectPackage={setSelectedName} />
          </div>

          <div className="catalog-price-link mt-12">
            <span>Looking for individual service rates?</span>
            <Link className="text-link" href="/services">
              See all services and starting prices <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s find the right fit for your project."
        text="Share your goals and we can talk through scope, pricing, and a payment plan."
      />
    </main>
  );
}
