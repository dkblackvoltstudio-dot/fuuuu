import { useState } from "react";
import { ArrowUpRight, Bed, Calendar, Utensils, Leaf } from "lucide-react";

export function ResortPoolGraphic() {
  return (
    <svg
      viewBox="0 0 680 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover select-none"
      aria-label="Gram Bangla Resort & Restaurant tropical pool and villa landscape"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id="skyResort" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>

        {/* Sun flare */}
        <radialGradient id="sunGlow" cx="20%" cy="15%" r="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#fef08a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
        </radialGradient>

        {/* Terracotta roof tile gradient */}
        <linearGradient id="roofTile" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c2410c" />
          <stop offset="40%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>

        <linearGradient id="roofRidge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        {/* Villa wall gradient */}
        <linearGradient id="villaWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
        </linearGradient>

        {/* Swimming pool crystal blue water */}
        <linearGradient id="poolWater" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="35%" stopColor="#0891b2" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        <linearGradient id="poolDepth" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#075985" stopOpacity="0.9" />
        </linearGradient>

        {/* Pool coping stone edge */}
        <linearGradient id="stoneDeck" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Left darkening vignette for readable hero copy */}
        <linearGradient id="heroVignette" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a190f" stopOpacity="0.88" />
          <stop offset="38%" stopColor="#0b2315" stopOpacity="0.75" />
          <stop offset="58%" stopColor="#0b2315" stopOpacity="0.45" />
          <stop offset="80%" stopColor="#0b2315" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0b2315" stopOpacity="0.0" />
        </linearGradient>

        {/* Foliage soft shadow */}
        <filter id="foliageShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Sky base */}
      <rect width="680" height="380" fill="url(#skyResort)" />
      <rect width="680" height="380" fill="url(#sunGlow)" />

      {/* Distant tropical treeline & hills */}
      <path
        d="M0 160 Q60 140 140 155 T280 148 T420 152 T560 140 T680 150 L680 220 L0 220 Z"
        fill="#047857"
        opacity="0.35"
      />
      <path
        d="M0 170 Q80 155 170 168 T340 162 T510 165 T680 158 L680 240 L0 240 Z"
        fill="#065f46"
        opacity="0.55"
      />

      {/* Midground Lush Palm Trees and Exotic Gardens */}
      <g filter="url(#foliageShadow)">
        {/* Palm tree trunks */}
        <path d="M490 230 Q495 160 515 90" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
        <path d="M535 240 Q530 170 540 100" stroke="#854d0e" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M620 245 Q615 165 605 95" stroke="#78350f" strokeWidth="6.5" strokeLinecap="round" />

        {/* Palm Fronds 1 */}
        <g stroke="#15803d" strokeWidth="3" strokeLinecap="round">
          <path d="M515 90 Q470 70 430 95" />
          <path d="M515 90 Q485 55 460 70" />
          <path d="M515 90 Q515 45 510 60" />
          <path d="M515 90 Q550 55 565 80" />
          <path d="M515 90 Q560 75 575 110" />
          <path d="M515 90 Q540 105 550 135" />
        </g>
        <g stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          <path d="M540 100 Q500 80 470 100" />
          <path d="M540 100 Q535 60 525 80" />
          <path d="M540 100 Q575 70 595 95" />
          <path d="M540 100 Q580 95 590 125" />
        </g>
        {/* Palm Fronds 2 */}
        <g stroke="#14532d" strokeWidth="3.5" strokeLinecap="round">
          <path d="M605 95 Q560 70 530 90" />
          <path d="M605 95 Q590 50 580 70" />
          <path d="M605 95 Q635 60 655 85" />
          <path d="M605 95 Q645 85 660 115" />
          <path d="M605 95 Q625 115 635 140" />
        </g>

        {/* Large Canopy Trees Behind Villa */}
        <ellipse cx="380" cy="150" rx="60" ry="45" fill="#15803d" />
        <ellipse cx="440" cy="140" rx="55" ry="40" fill="#166534" />
        <ellipse cx="330" cy="160" rx="50" ry="35" fill="#14532d" />
      </g>

      {/* Traditional Bungalow / Resort Villa with Terracotta Roof */}
      <g filter="url(#foliageShadow)">
        {/* Main Villa Body */}
        <polygon points="460,225 670,225 670,155 460,155" fill="url(#villaWall)" />

        {/* Main Pitched Roof */}
        <polygon points="440,165 570,95 680,145 670,165" fill="url(#roofTile)" stroke="#7c2d12" strokeWidth="1.5" />
        {/* Secondary Front Gable Roof */}
        <polygon points="475,165 535,115 595,165" fill="#ea580c" stroke="#9a3412" strokeWidth="1.5" />
        <polygon points="495,160 535,122 575,160" fill="url(#roofTile)" />

        {/* Roof ridge decorative lines */}
        <line x1="440" y1="165" x2="680" y2="165" stroke="#431407" strokeWidth="2.5" />
        <line x1="475" y1="165" x2="535" y2="115" stroke="#f97316" strokeWidth="2" />
        <line x1="535" y1="115" x2="595" y2="165" stroke="#c2410c" strokeWidth="2" />

        {/* Villa Verandah Pillars */}
        <rect x="480" y="165" width="8" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
        <rect x="520" y="165" width="8" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
        <rect x="560" y="165" width="8" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
        <rect x="600" y="165" width="8" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />
        <rect x="640" y="165" width="8" height="60" fill="#fef3c7" stroke="#d97706" strokeWidth="0.8" />

        {/* French Doors and Windows behind verandah */}
        <rect x="495" y="178" width="18" height="38" rx="2" fill="#451a03" />
        <rect x="498" y="181" width="12" height="15" rx="1" fill="#fef08a" opacity="0.85" />
        <rect x="535" y="178" width="18" height="38" rx="2" fill="#451a03" />
        <rect x="538" y="181" width="12" height="15" rx="1" fill="#fef08a" opacity="0.85" />
        <rect x="575" y="178" width="18" height="38" rx="2" fill="#451a03" />
        <rect x="578" y="181" width="12" height="15" rx="1" fill="#fef08a" opacity="0.85" />
        <rect x="615" y="178" width="18" height="38" rx="2" fill="#451a03" />
        <rect x="618" y="181" width="12" height="15" rx="1" fill="#fef08a" opacity="0.85" />

        {/* Verandah Floor Deck */}
        <polygon points="460,225 675,225 670,235 450,235" fill="#d97706" />
      </g>

      {/* Tropical Gardens & Floral Shrubs around Villa & Pool Edge */}
      <g>
        <ellipse cx="440" cy="235" rx="30" ry="18" fill="#15803d" />
        <ellipse cx="465" cy="238" rx="25" ry="15" fill="#22c55e" />
        <ellipse cx="420" cy="242" rx="22" ry="14" fill="#166534" />
        <ellipse cx="380" cy="248" rx="28" ry="16" fill="#15803d" />

        {/* Vibrant red tropical flowers (Hibiscus) */}
        <circle cx="435" cy="232" r="4.5" fill="#dc2626" />
        <circle cx="455" cy="236" r="5" fill="#ef4444" />
        <circle cx="475" cy="240" r="4" fill="#f87171" />
        <circle cx="415" cy="244" r="5" fill="#ef4444" />
        <circle cx="375" cy="248" r="4.5" fill="#dc2626" />
      </g>

      {/* Sparkling Resort Swimming Pool */}
      {/* Stone Coping Around Pool */}
      <path
        d="M260 250 L680 240 L680 380 L200 380 Z"
        fill="url(#stoneDeck)"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />

      {/* Pool Basin Water */}
      <path
        d="M275 258 Q460 250 675 248 L675 375 Q460 375 220 375 Z"
        fill="url(#poolWater)"
      />
      <path
        d="M275 258 Q460 250 675 248 L675 375 Q460 375 220 375 Z"
        fill="url(#poolDepth)"
      />

      {/* Pool Ripple Wave Highlights */}
      <g stroke="#ffffff" strokeWidth="1.5" opacity="0.5" strokeLinecap="round">
        <path d="M300 270 Q360 266 420 270 T540 268 T660 270" />
        <path d="M280 290 Q350 285 430 290 T570 287 T670 290" />
        <path d="M260 315 Q340 310 440 315 T590 312 T675 315" />
        <path d="M245 340 Q330 334 430 340 T580 336 T675 340" />
        <path d="M230 362 Q320 356 420 362 T560 358 T675 362" />
      </g>

      {/* Water Caustics / Reflections */}
      <g fill="#ffffff" opacity="0.25">
        <ellipse cx="380" cy="285" rx="35" ry="4" />
        <ellipse cx="490" cy="305" rx="45" ry="5" />
        <ellipse cx="340" cy="330" rx="55" ry="6" />
        <ellipse cx="480" cy="345" rx="60" ry="7" />
        <ellipse cx="610" cy="330" rx="40" ry="5" />
      </g>

      {/* Pool steps */}
      <polygon points="275,258 335,258 325,275 265,275" fill="#38bdf8" opacity="0.6" stroke="#e0f2fe" strokeWidth="0.8" />
      <polygon points="265,275 325,275 315,295 255,295" fill="#0284c7" opacity="0.6" stroke="#e0f2fe" strokeWidth="0.8" />
      <polygon points="255,295 315,295 305,315 245,315" fill="#0369a1" opacity="0.6" stroke="#e0f2fe" strokeWidth="0.8" />

      {/* Foreground Tropical Shrubbery on Left & Corner */}
      <g>
        <ellipse cx="20" cy="350" rx="80" ry="60" fill="#064e3b" />
        <ellipse cx="70" cy="360" rx="70" ry="50" fill="#047857" />
        <ellipse cx="120" cy="370" rx="60" ry="40" fill="#10b981" />
        {/* Palm frond extending into top left */}
        <path d="M0 40 Q80 70 140 120" stroke="#065f46" strokeWidth="4" strokeLinecap="round" />
        <path d="M0 70 Q90 90 160 140" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Heavy readable dark gradient for left hero text overlay */}
      <rect width="680" height="380" fill="url(#heroVignette)" />
    </svg>
  );
}

export function GramBanglaCard() {
  const [isHovered, setIsHovered] = useState(false);
  const targetUrl = "https://www.grambanglaresort.com/";

  return (
    <div className="w-full max-w-[1280px] mx-auto my-12">
      {/* The main Showcase Card */}
      <div className="bg-white border border-[#dce8f8] rounded-3xl p-6 md:p-9 shadow-[0_8px_30px_rgba(15,45,100,0.04)] hover:shadow-[0_16px_45px_rgba(7,87,255,0.08)] transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Project description and link (Matching image_87024418.png layout) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef5ff] border border-[#d9e6ff] text-[#0757ff] text-xs font-bold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0757ff]" />
              HOSPITALITY WEBSITE · PROJECT 02
            </div>

            {/* Title */}
            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#10172e] tracking-tight leading-tight">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0757ff] transition-colors"
              >
                Gram Bangla Resort &amp; Restaurant
              </a>
            </h3>

            {/* Description */}
            <p className="mt-3 text-[#5e6c8d] text-base leading-relaxed">
              A hospitality-focused digital experience to showcase resort facilities, dining options, and guest experiences.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#e2e8f0] my-7" />

            {/* Bottom Row: tag left, link button right */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#10172e] font-semibold text-base">
                <Bed size={20} className="text-[#0757ff]" />
                <span>Resort &amp; restaurant website</span>
              </div>

              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#eef5ff] hover:bg-[#0757ff] text-[#0757ff] hover:text-white border border-[#dbe8fd] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="Visit Gram Bangla Resort & Restaurant website"
              >
                <ArrowUpRight size={22} />
              </a>
            </div>
          </div>

          {/* Right Column: Browser Mockup in Soft Green Frame with 02 index (Matching reference) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="block relative bg-gradient-to-br from-[#ebf7ee] via-[#e5f4ea] to-[#d8efe0] border border-[#d2ecda] rounded-2xl p-4 sm:p-6 overflow-hidden group transition-transform duration-300 hover:scale-[1.01]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                title="Click to visit Gram Bangla Resort & Restaurant website"
              >
                {/* Top-right "DEMO CONCEPT" badge */}
                <div className="absolute top-3.5 right-4 sm:top-4 sm:right-5 z-20 bg-white/95 backdrop-blur-xs border border-slate-200/90 text-slate-600 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
                  DEMO CONCEPT
                </div>

                {/* Browser Window Mockup */}
                <div className="relative bg-white rounded-xl shadow-[0_14px_34px_rgba(15,50,25,0.12)] border border-[#d5e7d9] overflow-hidden">
                  {/* Browser top chrome with 3 dots */}
                  <div className="h-7 bg-[#f8fafc] border-b border-[#edf2f7] flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1]" />
                  </div>

                  {/* Resort Site Header */}
                  <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2 bg-white">
                    {/* Brand logo */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#16a34a] text-white flex items-center justify-center shadow-xs">
                        <Leaf size={14} />
                      </div>
                      <div className="leading-none">
                        <span className="text-[11px] font-black text-slate-900 tracking-tight block">
                          Gram Bangla
                        </span>
                        <span className="text-[7px] font-bold text-slate-400 tracking-wider block">
                          Resort &amp; Restaurant
                        </span>
                      </div>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden sm:flex items-center gap-3.5 text-[10px] font-medium text-slate-600">
                      <span className="text-slate-900 font-bold">Home</span>
                      <span>Rooms</span>
                      <span>Dining</span>
                      <span>Facilities</span>
                      <span>Gallery</span>
                      <span>Contact</span>
                    </div>

                    {/* Book Now button */}
                    <span className="bg-[#14532d] hover:bg-[#166534] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-xs whitespace-nowrap">
                      Book Now
                    </span>
                  </div>

                  {/* Resort Hero Section */}
                  <div className="relative h-[230px] sm:h-[260px] md:h-[280px] w-full overflow-hidden flex items-center">
                    {/* SVG Graphic Background */}
                    <div className="absolute inset-0 z-0">
                      <ResortPoolGraphic />
                    </div>

                    {/* Hero Text Content on Top */}
                    <div className="relative z-10 p-5 sm:p-7 max-w-sm">
                      <span className="text-white/90 text-[11px] sm:text-xs font-medium tracking-wide block mb-1">
                        Welcome to
                      </span>
                      <h4 className="font-black leading-tight drop-shadow-sm">
                        <span className="text-[#fef08a] text-xl sm:text-2xl md:text-[26px] block font-black">
                          Gram Bangla
                        </span>
                        <span className="text-white text-xl sm:text-2xl md:text-[26px] block font-black">
                          Resort &amp; Restaurant
                        </span>
                      </h4>
                      <p className="mt-2 text-white/90 text-[10px] sm:text-[11.5px] leading-relaxed drop-shadow-xs max-w-[280px]">
                        A peaceful getaway with premium stay, delicious food and nature all around.
                      </p>

                      {/* CTAs */}
                      <div className="mt-3.5 flex items-center gap-2 flex-wrap">
                        <span className="bg-[#16a34a] text-white text-[9px] sm:text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                          <Calendar size={11} /> Book Your Stay <Calendar size={11} />
                        </span>
                        <span className="bg-black/30 backdrop-blur-xs border border-white/40 text-white text-[9px] sm:text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <Utensils size={11} /> Explore Dining
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#16a34a] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-green-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Site ↗
                </div>
              </a>

              {/* Number Index Label 02 (Matches bottom-left of card in reference) */}
              <div className="absolute -bottom-7 sm:-bottom-8 left-2 text-slate-800 font-black text-lg sm:text-xl tracking-tight select-none pointer-events-none">
                02
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
