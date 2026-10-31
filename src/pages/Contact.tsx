import { useState, type FormEvent, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
  Mail,
  MapPin,
  PenLine,
  Phone,
  Send,
  User,
  ChevronDown,
} from "lucide-react";
import { contact } from "@/data/site";
import { usePageMeta } from "@/components/site/SiteChrome";

const addressQuery = encodeURIComponent(contact.address);
const mapQuery = encodeURIComponent("29th St & Harshabardhan Rd, A-Zone, Durgapur, West Bengal 713204, India");

export default function Contact() {
  usePageMeta(
    "Contact Hinton Evolution Tech",
    "Reach our team in Durgapur for websites, software, apps, and digital growth. Call, email, or prepare a project enquiry in Gmail."
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const requestedService = params.get("service");
      if (requestedService) {
        setService(requestedService);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !service || !message.trim()) {
      setError("Please fill in all required fields marked with *");
      return;
    }

    setError("");
    const subject = `Project Enquiry: ${service} — ${name.trim()}`;
    const body = [
      "Hello Hinton Evolution Tech team,",
      "",
      "I would like to discuss a project with your team:",
      "",
      `• Name: ${name.trim()}`,
      `• Email: ${email.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Service of interest: ${service}`,
      "",
      "Project Details:",
      message.trim(),
      "",
      "Looking forward to hearing from you.",
    ].join("\n");

    const to = contact.emails.join(",");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);

    // Try opening Gmail web composer
    const opened = window.open(gmailUrl, "_blank");
    if (!opened) {
      // Fallback to mailto if popup blocked
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-800 relative overflow-hidden font-sans">
      {/* Ambient background curved shapes matching reference image */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[480px] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 520 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-70"
        >
          <path
            d="M520 0H140C140 0 170 120 280 180C390 240 450 360 520 420V0Z"
            fill="url(#ambient-blue-tr)"
          />
          <defs>
            <linearGradient
              id="ambient-blue-tr"
              x1="520"
              y1="0"
              x2="200"
              y2="350"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b9d6fd" stopOpacity="0.8" />
              <stop offset="0.6" stopColor="#dbeafe" stopOpacity="0.45" />
              <stop offset="1" stopColor="#eff6ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className="absolute bottom-0 left-0 w-[420px] h-[360px] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 420 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-60"
        >
          <path
            d="M0 360V120C80 140 180 200 240 280C280 330 310 360 420 360H0Z"
            fill="url(#ambient-blue-bl)"
          />
          <defs>
            <linearGradient
              id="ambient-blue-bl"
              x1="0"
              y1="360"
              x2="300"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#c3dcfe" stopOpacity="0.75" />
              <stop offset="0.5" stopColor="#dbeafe" stopOpacity="0.35" />
              <stop offset="1" stopColor="#f8faff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Section matching reference image pixel-for-pixel */}
      <section className="relative z-10 pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Badge, Headline, Info items, WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-start">

            {/* Pill Badge: HERE TO HELP */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f1fd] border border-[#d2e4fc] text-[#0062ff] text-[11px] font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0062ff]" />
                HERE TO HELP
              </span>
            </div>

            {/* Headline with curved underline under "team." */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-3">
              Reach our{" "}
              <span className="relative inline-block text-[#0062ff]">
                team.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 overflow-visible"
                  viewBox="0 0 130 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C42 2 88 2 128 9"
                    stroke="#0062FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-[14px] sm:text-[14.5px] leading-relaxed max-w-md mb-8">
              Choose the way that works for you. For a more detailed project enquiry, use the form and we'll prepare a Gmail draft with your details.
            </p>

            {/* 4 Contact Info Items */}
            <div className="divide-y divide-slate-200/70 border-t border-b border-slate-200/70">
              
              {/* Item 1: VISIT US */}
              <div className="py-4.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#eff5ff] text-[#0062ff] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={19} className="stroke-[2.2]" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">
                    VISIT US
                  </span>
                  <p className="text-[13.5px] font-medium text-slate-800 leading-snug mt-1 max-w-xs">
                    {contact.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0062ff] hover:underline mt-1.5"
                  >
                    Get directions <ArrowUpRight size={14} className="stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Item 2: CALL US */}
              <div className="py-4.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#eff5ff] text-[#0062ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={19} className="stroke-[2.2]" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">
                    CALL US
                  </span>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <a
                      href="tel:+919832727520"
                      className="text-[14px] font-bold text-slate-900 hover:text-[#0062ff] transition-colors"
                    >
                      +91 9832727520
                    </a>
                    <a
                      href="tel:+918001891036"
                      className="text-[14px] font-bold text-slate-900 hover:text-[#0062ff] transition-colors"
                    >
                      +91 8001891036
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 3: EMAIL */}
              <div className="py-4.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#eff5ff] text-[#0062ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={19} className="stroke-[2.2]" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">
                    EMAIL
                  </span>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <a
                      href="mailto:hintonevolutionbusiness@gmail.com"
                      className="text-[13.5px] font-medium text-slate-900 hover:text-[#0062ff] transition-colors"
                    >
                      hintonevolutionbusiness@gmail.com
                    </a>
                    <a
                      href="mailto:info.tech@hintonevolution.com"
                      className="text-[13.5px] font-medium text-slate-900 hover:text-[#0062ff] transition-colors"
                    >
                      info.tech@hintonevolution.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Item 4: PROJECT ENQUIRIES */}
              <div className="py-4.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#eff5ff] text-[#0062ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={19} className="stroke-[2.2]" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">
                    PROJECT ENQUIRIES
                  </span>
                  <p className="text-[13px] text-slate-600 leading-relaxed mt-1 max-w-sm">
                    Tell us about the service you're interested in and what you'd like to achieve.
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp Pill Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/919832727520"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-[#edfdf4] border border-[#a7f3d0] text-[#15803d] text-[13.5px] font-semibold hover:bg-[#dcfce7] hover:border-[#86efac] transition-all shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#16a34a]"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Message us on WhatsApp</span>
                <span className="text-sm">↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Large White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.25rem] p-7 sm:p-9 lg:p-10 shadow-[0_20px_60px_rgba(20,50,110,0.06)] border border-slate-100 relative z-10">
              
              {/* Header inside card */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0062ff] text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
                  <Mail size={24} className="stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Tell us about your project
                  </h2>
                  <p className="text-[13.5px] text-slate-500 mt-1">
                    We'll make it easy to take the next step.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Row 1: Your name & Email address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your name */}
                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-[#f8fafc] border border-slate-200/90 rounded-xl px-3.5 py-3 focus-within:border-[#0062ff] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <User size={18} className="text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya Das"
                        required
                        className="w-full bg-transparent border-0 p-0 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-[#f8fafc] border border-slate-200/90 rounded-xl px-3.5 py-3 focus-within:border-[#0062ff] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <Mail size={18} className="text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full bg-transparent border-0 p-0 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone number & Service you're interested in */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone number */}
                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center bg-[#f8fafc] border border-slate-200/90 rounded-xl px-3.5 py-3 focus-within:border-[#0062ff] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <Phone size={18} className="text-slate-400 mr-2.5 shrink-0" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your best contact number"
                        required
                        className="w-full bg-transparent border-0 p-0 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Service you're interested in */}
                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                      Service you're interested in <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center bg-[#f8fafc] border border-slate-200/90 rounded-xl px-3.5 py-3 focus-within:border-[#0062ff] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                      <Layers size={18} className="text-slate-400 mr-2.5 shrink-0 pointer-events-none" />
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="w-full bg-transparent border-0 p-0 text-[13.5px] text-slate-900 focus:outline-none focus:ring-0 appearance-none pr-6 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <optgroup label="Website Packages">
                          <option value="Essential website package">Essential Package (₹20,000)</option>
                          <option value="Growth website package">Growth Package (₹40,000)</option>
                          <option value="Scale website package">Scale Package (₹80,000)</option>
                        </optgroup>
                        <optgroup label="Web & Digital Services">
                          <option value="Starter Website">Starter Website (₹25,000)</option>
                          <option value="Business Website">Business Website (₹45,000)</option>
                          <option value="Premium Corporate">Premium Corporate (₹90,000)</option>
                          <option value="E-commerce Development">E-commerce Development (₹45,000)</option>
                          <option value="Landing Page Design">Landing Page Design (₹8,000)</option>
                          <option value="Website Redesign">Website Redesign (₹15,000)</option>
                        </optgroup>
                        <optgroup label="Software & Branding">
                          <option value="Custom Web / App Software">Custom Web / Mobile App</option>
                          <option value="Brand Identity & Design">Brand Identity & Design</option>
                          <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        </optgroup>
                        <option value="General consultation">General consultation / Other</option>
                      </select>
                      <ChevronDown
                        size={17}
                        className="text-slate-700 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: What would you like to build? */}
                <div>
                  <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                    What would you like to build? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-start bg-[#f8fafc] border border-slate-200/90 rounded-xl p-3.5 focus-within:border-[#0062ff] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <PenLine size={18} className="text-slate-400 mr-2.5 mt-0.5 shrink-0" />
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="A few details about your goals, timeline, or questions..."
                      required
                      className="w-full bg-transparent border-0 p-0 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 resize-y min-h-[110px]"
                    />
                  </div>
                </div>

                {/* Error & Success notices */}
                {error && (
                  <p className="text-xs text-red-600 font-medium">{error}</p>
                )}
                {sent && (
                  <p className="text-xs text-emerald-700 font-medium">
                    Draft prepared! Opening Gmail now. You can review and hit send.
                  </p>
                )}

                {/* CTA Button: Prepare enquiry in Gmail */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#0062ff] hover:bg-[#0052e0] active:scale-[0.99] text-white font-semibold py-3.5 sm:py-4 px-6 rounded-2xl flex items-center justify-between shadow-[0_10px_25px_rgba(0,98,255,0.28)] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Send size={18} className="stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
                    <span className="text-[14.5px] sm:text-[15px]">Prepare enquiry in Gmail</span>
                  </div>
                  <ArrowRight size={20} className="stroke-[2.2] transition-transform group-hover:translate-x-1" />
                </button>

                {/* Footnote under button */}
                <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-relaxed pt-2">
                  Your details are placed in a Gmail draft addressed to{" "}
                  <a
                    href="mailto:hintonevolutionbusiness@gmail.com"
                    className="text-[#0062ff] font-medium hover:underline"
                  >
                    hintonevolutionbusiness@gmail.com
                  </a>{" "}
                  and{" "}
                  <a
                    href="mailto:info.tech@hintonevolution.com"
                    className="text-[#0062ff] font-medium hover:underline"
                  >
                    info.tech@hintonevolution.com
                  </a>
                  . You can review and send it from your Gmail account.
                </p>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Map Section in Durgapur */}
      <section className="bg-white border-t border-slate-200/70 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-wider uppercase mb-2">
                <MapPin size={12} className="text-[#0062ff]" />
                FIND US IN DURGAPUR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Let's connect, nearby.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-slate-600">
              <MapPin size={16} className="text-[#0062ff] shrink-0" />
              <span>{contact.address}</span>
            </div>
          </div>

          <div className="h-[380px] rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
            <iframe
              title="Google Map showing Hinton Evolution Tech at 29/24 Harsha Bardhan Road, Durgapur"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full border-0"
            />
            <a
              className="absolute bottom-4 right-4 bg-white hover:bg-slate-50 text-[#0062ff] font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 inline-flex items-center gap-1.5 transition-all"
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
