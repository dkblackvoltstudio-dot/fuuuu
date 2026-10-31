import { useState } from "react";
import { ArrowUpRight, AppWindow, Calendar, Stethoscope, Bed, FlaskConical, Ambulance, Building2 } from "lucide-react";

export function Hospital3DGraphic() {
  return (
    <svg
      viewBox="0 0 340 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-md select-none"
      aria-label="Jeevan Astra Hospital 3D building illustration"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="60%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Building main wall gradients */}
        <linearGradient id="wallFront" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <linearGradient id="wallSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        <linearGradient id="wallRoof" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        {/* Window glass gradients */}
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="40%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <linearGradient id="glassLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>

        {/* Cross 3D gradient */}
        <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
        <filter id="crossGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1d4ed8" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Sky / soft background */}
      <rect width="340" height="230" fill="url(#skyGrad)" rx="10" />

      {/* Subtle background clouds */}
      <ellipse cx="60" cy="40" rx="45" ry="14" fill="#ffffff" opacity="0.6" />
      <ellipse cx="280" cy="35" rx="50" ry="16" fill="#ffffff" opacity="0.6" />
      <ellipse cx="140" cy="25" rx="35" ry="10" fill="#ffffff" opacity="0.4" />

      {/* Ground / Pavement */}
      <path d="M0 185 L340 185 L340 230 L0 230 Z" fill="#e2e8f0" />
      <path d="M20 185 L320 185 L340 230 L0 230 Z" fill="#cbd5e1" opacity="0.45" />

      {/* Left building tower (with Medical Cross) */}
      <g filter="url(#softShadow)">
        {/* Left tower front */}
        <path d="M60 70 L145 70 L145 185 L60 185 Z" fill="url(#wallFront)" stroke="#cbd5e1" strokeWidth="1" />
        {/* Left tower top */}
        <path d="M60 70 L75 58 L160 58 L145 70 Z" fill="url(#wallRoof)" stroke="#cbd5e1" strokeWidth="1" />
        {/* Left tower side */}
        <path d="M145 70 L160 58 L160 173 L145 185 Z" fill="url(#wallSide)" />

        {/* Windows on left tower */}
        <g opacity="0.9">
          <rect x="70" y="125" width="28" height="22" rx="2" fill="url(#glassGrad)" />
          <rect x="105" y="125" width="28" height="22" rx="2" fill="url(#glassGrad)" />
          <rect x="70" y="153" width="28" height="22" rx="2" fill="url(#glassGrad)" />
          <rect x="105" y="153" width="28" height="22" rx="2" fill="url(#glassGrad)" />
        </g>

        {/* Big Medical Blue Cross on Left Tower */}
        <g filter="url(#crossGlow)">
          {/* Vertical bar */}
          <rect x="94" y="80" width="16" height="36" rx="3" fill="url(#crossGrad)" />
          {/* Horizontal bar */}
          <rect x="84" y="90" width="36" height="16" rx="3" fill="url(#crossGrad)" />
          {/* Inner highlight */}
          <rect x="96" y="82" width="12" height="32" rx="2" fill="#3b82f6" opacity="0.6" />
          <rect x="86" y="92" width="32" height="12" rx="2" fill="#3b82f6" opacity="0.6" />
        </g>
      </g>

      {/* Right / Main building block */}
      <g filter="url(#softShadow)">
        {/* Main block front */}
        <path d="M145 92 L295 92 L295 185 L145 185 Z" fill="url(#wallFront)" stroke="#cbd5e1" strokeWidth="1" />
        {/* Main block roof */}
        <path d="M145 92 L160 80 L310 80 L295 92 Z" fill="url(#wallRoof)" stroke="#cbd5e1" strokeWidth="1" />
        {/* Main block side */}
        <path d="M295 92 L310 80 L310 173 L295 185 Z" fill="url(#wallSide)" />

        {/* Hospital Signage on fascia */}
        <rect x="156" y="98" width="126" height="18" rx="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text
          x="219"
          y="110"
          fill="#1e293b"
          fontSize="8.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.8"
          textAnchor="middle"
        >
          JEEVAN ASTRA
        </text>
        <text
          x="219"
          y="115"
          fill="#64748b"
          fontSize="4"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="1.2"
          textAnchor="middle"
        >
          HOSPITAL
        </text>

        {/* Windows on main block */}
        <g opacity="0.92">
          {/* Row 1 windows */}
          <rect x="156" y="122" width="26" height="18" rx="2" fill="url(#glassGrad)" />
          <rect x="188" y="122" width="26" height="18" rx="2" fill="url(#glassGrad)" />
          <rect x="220" y="122" width="26" height="18" rx="2" fill="url(#glassGrad)" />
          <rect x="252" y="122" width="26" height="18" rx="2" fill="url(#glassGrad)" />

          {/* Window glints */}
          <line x1="158" y1="124" x2="176" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.45" />
          <line x1="190" y1="124" x2="208" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.45" />
          <line x1="222" y1="124" x2="240" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.45" />
          <line x1="254" y1="124" x2="272" y2="138" stroke="#ffffff" strokeWidth="1" opacity="0.45" />
        </g>

        {/* Ground floor glass entrance canopy */}
        <rect x="178" y="146" width="84" height="39" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        {/* Entrance canopy roof */}
        <path d="M172 146 L268 146 L262 142 L178 142 Z" fill="#94a3b8" />
        <rect x="175" y="145" width="90" height="2" rx="1" fill="#3b82f6" />

        {/* Entrance glass doors */}
        <rect x="204" y="154" width="32" height="31" rx="1" fill="url(#glassLight)" stroke="#94a3b8" strokeWidth="1" />
        <line x1="220" y1="154" x2="220" y2="185" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="184" y="154" width="16" height="24" rx="1" fill="url(#glassGrad)" opacity="0.8" />
        <rect x="240" y="154" width="16" height="24" rx="1" fill="url(#glassGrad)" opacity="0.8" />
      </g>

      {/* Decorative Landscaping (Greenery, shrubs, small trees) */}
      <g>
        {/* Left trees */}
        <ellipse cx="48" cy="180" rx="14" ry="18" fill="#16a34a" />
        <ellipse cx="56" cy="182" rx="11" ry="14" fill="#22c55e" />
        <ellipse cx="42" cy="184" rx="9" ry="11" fill="#15803d" />

        {/* Center shrubs around entrance */}
        <ellipse cx="160" cy="184" rx="9" ry="6" fill="#16a34a" />
        <ellipse cx="170" cy="185" rx="7" ry="5" fill="#22c55e" />
        <ellipse cx="274" cy="184" rx="8" ry="6" fill="#16a34a" />
        <ellipse cx="284" cy="185" rx="9" ry="6" fill="#22c55e" />

        {/* Right trees */}
        <ellipse cx="304" cy="178" rx="14" ry="18" fill="#15803d" />
        <ellipse cx="316" cy="180" rx="12" ry="15" fill="#22c55e" />
        <ellipse cx="298" cy="182" rx="8" ry="10" fill="#16a34a" />
      </g>

      {/* Clean curb and path line */}
      <line x1="20" y1="188" x2="320" y2="188" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
    </svg>
  );
}

export function JeevanAstraCard({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const [isHovered, setIsHovered] = useState(false);
  const targetUrl = "https://jeevan-astra-hospital.vercel.app/";

  return (
    <div className="w-full max-w-[1280px] mx-auto my-8">
      {/* Header section matching reference image */}
      {!hideHeader && (
        <div className="relative mb-10">
          {/* Selected Projects pill badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e5f8] shadow-[0_2px_8px_rgba(0,85,255,0.06)] mb-5 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] shrink-0" />
            <span className="text-xs font-bold tracking-wider text-[#0055ff] uppercase">
              SELECTED PROJECTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0a0f1d] tracking-tight leading-[1.12]">
            Digital experiences built
            <br />
            around{" "}
            <span className="relative inline-block text-[#0055ff]">
              real needs.
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full overflow-visible pointer-events-none"
                height="8"
                viewBox="0 0 250 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6C65 3.5 160 3 248 4.5"
                  stroke="#0055ff"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#596780] text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
            A closer look at digital products designed to make everyday services easier to access.
          </p>

          {/* Horizontal divider line matching reference */}
          <div className="w-full h-px bg-[#e2e8f0] mt-8 sm:mt-10 mb-10" />
        </div>
      )}

      {/* The main Showcase Card */}
      <div className="bg-white border border-[#dce8f8] rounded-3xl p-6 md:p-9 shadow-[0_8px_30px_rgba(15,45,100,0.04)] hover:shadow-[0_16px_45px_rgba(7,87,255,0.08)] transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Browser Mockup in Soft Blue Frame */}
          <div className="lg:col-span-7">
            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="block relative bg-gradient-to-br from-[#edf5fe] to-[#e1effe] border border-[#d4e4fa] rounded-2xl p-4 sm:p-6 overflow-hidden group transition-transform duration-300 hover:scale-[1.01]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              title="Click to visit Jeevan Astra Hospital website"
            >
              {/* Decorative background subtle orbits */}
              <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border border-blue-200/50 pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full border border-blue-200/40 pointer-events-none" />

              {/* Browser Window Mockup */}
              <div className="relative bg-white rounded-xl shadow-[0_12px_32px_rgba(15,45,100,0.12)] border border-[#dbe7f5] overflow-hidden">
                {/* Browser top chrome */}
                <div className="h-7 bg-[#f8fafc] border-b border-[#edf2f7] flex items-center px-3 gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                </div>

                {/* Hospital site header */}
                <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
                  {/* Brand logo */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#0757ff] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      +
                    </div>
                    <div className="leading-none">
                      <span className="text-[10px] font-black text-slate-900 tracking-wider block">
                        JEEVAN ASTRA
                      </span>
                      <span className="text-[7px] font-semibold text-slate-400 tracking-widest block">
                        HOSPITAL
                      </span>
                    </div>
                  </div>

                  {/* Navigation links (hidden on very small screens) */}
                  <div className="hidden sm:flex items-center gap-3 text-[10px] font-medium text-slate-600">
                    <span className="text-slate-900 font-bold">Home</span>
                    <span>Services</span>
                    <span>Doctors</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>

                  {/* Book appointment button */}
                  <span className="bg-[#0757ff] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    Book Appointment
                  </span>
                </div>

                {/* Hospital Hero Section */}
                <div className="p-4 sm:p-5 grid grid-cols-12 gap-3 items-center bg-gradient-to-b from-white to-[#fbfdff]">
                  {/* Left Hero Text */}
                  <div className="col-span-12 sm:col-span-6 pr-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight">
                      Care that
                      <br />
                      <span className="text-[#0757ff]">comes first.</span>
                    </h3>
                    <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">
                      Trusted healthcare services with compassion, modern facilities, and a patient-first approach.
                    </p>

                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span className="bg-[#0757ff] text-white text-[9px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <Calendar size={10} /> Book Appointment
                      </span>
                      <span className="bg-white border border-[#cbdcf5] text-slate-700 text-[9px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Building2 size={10} className="text-[#0757ff]" /> Our Services
                      </span>
                    </div>
                  </div>

                  {/* Right Hospital 3D Graphic */}
                  <div className="col-span-12 sm:col-span-6">
                    <Hospital3DGraphic />
                  </div>
                </div>

                {/* 4 Feature Service Cards at bottom */}
                <div className="grid grid-cols-4 gap-1.5 p-2.5 bg-slate-50/80 border-t border-slate-100">
                  <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center text-center shadow-xs">
                    <Stethoscope size={14} className="text-[#0757ff] mb-1" />
                    <span className="text-[9px] font-bold text-slate-800 leading-tight">OPD Services</span>
                  </div>

                  <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center text-center shadow-xs">
                    <Bed size={14} className="text-[#0757ff] mb-1" />
                    <span className="text-[9px] font-bold text-slate-800 leading-tight">Inpatient Care</span>
                  </div>

                  <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center text-center shadow-xs">
                    <FlaskConical size={14} className="text-[#0757ff] mb-1" />
                    <span className="text-[9px] font-bold text-slate-800 leading-tight">Diagnostics</span>
                  </div>

                  <div className="bg-white p-2 rounded-lg border border-slate-100 flex flex-col items-center text-center shadow-xs">
                    <Ambulance size={14} className="text-[#0757ff] mb-1" />
                    <span className="text-[9px] font-bold text-slate-800 leading-tight">Emergency</span>
                  </div>
                </div>
              </div>

              {/* Hover badge helper */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#0757ff] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-blue-100 opacity-0 group-hover:opacity-100 transition-opacity">
                Live Preview ↗
              </div>
            </a>
          </div>

          {/* Right Column: Project description and link */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef5ff] border border-[#d9e6ff] text-[#0757ff] text-xs font-bold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0757ff]" />
              HEALTHCARE WEBSITE · PROJECT 01
            </div>

            {/* Title */}
            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#10172e] tracking-tight leading-tight">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0757ff] transition-colors"
              >
                Jeevan Astra Hospital
              </a>
            </h3>

            {/* Description */}
            <p className="mt-3 text-[#5e6c8d] text-base leading-relaxed">
              A healthcare-focused digital experience designed to make hospital information and essential services easier to find.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#e2e8f0] my-7" />

            {/* Bottom Row: tag left, link button right */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#10172e] font-semibold text-base">
                <AppWindow size={20} className="text-[#0757ff]" />
                <span>Healthcare website</span>
              </div>

              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#eef5ff] hover:bg-[#0757ff] text-[#0757ff] hover:text-white border border-[#dbe8fd] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="Visit Jeevan Astra Hospital website"
              >
                <ArrowUpRight size={22} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
