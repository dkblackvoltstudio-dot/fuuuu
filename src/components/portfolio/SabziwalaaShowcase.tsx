import { useState } from "react";
import { ArrowUpRight, ShoppingCart, Search, User, Leaf } from "lucide-react";

export function VeggieBasketGraphic() {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-md select-none"
      aria-label="Sabziwalaa farm-fresh vegetables in a woven wicker basket"
    >
      <defs>
        {/* Soft lime curved backdrop gradient */}
        <radialGradient id="limeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="70%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </radialGradient>

        {/* Wicker basket weave gradients */}
        <linearGradient id="basketBase" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        <linearGradient id="basketRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* Red tomato / pepper gradient */}
        <radialGradient id="redTomato" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="30%" stopColor="#ef4444" />
          <stop offset="75%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </radialGradient>

        {/* Yellow bell pepper gradient */}
        <radialGradient id="yellowPepper" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#facc15" />
          <stop offset="80%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </radialGradient>

        {/* Green bell pepper gradient */}
        <radialGradient id="greenPepper" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="45%" stopColor="#22c55e" />
          <stop offset="85%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>

        {/* Broccoli gradient */}
        <radialGradient id="broccoliGrad" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#166534" />
        </radialGradient>

        {/* Carrot gradient */}
        <linearGradient id="carrotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        {/* Cabbage gradient */}
        <radialGradient id="cabbageGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="45%" stopColor="#4ade80" />
          <stop offset="85%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>

        {/* Shadows */}
        <filter id="basketShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#14532d" floodOpacity="0.25" />
        </filter>
        <filter id="veggieShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Decorative Organic Lime Backdrop Blob */}
      <path
        d="M170 30 C250 15, 310 70, 315 150 C320 220, 260 265, 180 260 C120 255, 130 180, 140 120 C145 70, 120 40, 170 30 Z"
        fill="url(#limeGlow)"
        opacity="0.85"
      />

      {/* Floating fresh leaves */}
      <g filter="url(#veggieShadow)">
        <path d="M40 85 C30 70, 45 60, 55 68 C62 74, 52 90, 40 85 Z" fill="#22c55e" />
        <path d="M45 72 L49 80" stroke="#15803d" strokeWidth="0.8" />

        <path d="M285 65 C275 55, 290 45, 298 52 C304 58, 295 72, 285 65 Z" fill="#4ade80" />

        <path d="M70 230 C58 225, 65 210, 78 215 C88 220, 82 235, 70 230 Z" fill="#16a34a" />
        <path d="M260 235 C250 240, 245 228, 255 222 C265 218, 270 232, 260 235 Z" fill="#22c55e" />
      </g>

      {/* Behind basket: Leafy greens / Spinach / Celery tops */}
      <g filter="url(#veggieShadow)">
        {/* Big crisp leafy greens on left */}
        <path
          d="M70 120 C60 80, 100 65, 115 95 C125 70, 155 75, 145 110 C155 85, 180 95, 170 125 C140 145, 90 140, 70 120 Z"
          fill="#15803d"
        />
        <path
          d="M85 115 C78 85, 110 75, 120 98 C130 80, 150 82, 142 112 Z"
          fill="#22c55e"
          opacity="0.85"
        />
        {/* Veins */}
        <path d="M95 125 Q110 100 115 85" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M125 125 Q135 105 140 90" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Fresh Carrots sticking out */}
      <g filter="url(#veggieShadow)">
        <polygon points="120,105 135,100 105,65 98,70" fill="url(#carrotGrad)" />
        <line x1="102" y1="67" x2="88" y2="45" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="68" x2="94" y2="42" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <line x1="104" y1="67" x2="108" y2="46" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Yellow Bell Pepper (Center-Back) */}
      <g filter="url(#veggieShadow)">
        {/* Pepper lobes */}
        <ellipse cx="190" cy="115" rx="28" ry="32" fill="url(#yellowPepper)" />
        <ellipse cx="208" cy="118" rx="20" ry="28" fill="url(#yellowPepper)" />
        <ellipse cx="174" cy="118" rx="18" ry="28" fill="url(#yellowPepper)" />
        {/* Green stem */}
        <path d="M190 85 C192 78, 198 75, 202 76" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" />
        {/* Gloss highlight */}
        <ellipse cx="182" cy="104" rx="7" ry="14" fill="#ffffff" opacity="0.45" transform="rotate(-15 182 104)" />
      </g>

      {/* Fresh Savoy Cabbage / Lettuce Head (Left-Mid) */}
      <g filter="url(#veggieShadow)">
        <circle cx="105" cy="150" r="32" fill="url(#cabbageGrad)" />
        <path d="M85 140 C95 125, 125 130, 120 150" stroke="#bbf7d0" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M90 160 C105 170, 130 160, 125 145" stroke="#bbf7d0" strokeWidth="2" fill="none" opacity="0.8" />
      </g>

      {/* Emerald Broccoli Head (Right-Mid) */}
      <g filter="url(#veggieShadow)">
        <ellipse cx="230" cy="155" rx="18" ry="16" fill="url(#broccoliGrad)" />
        <ellipse cx="245" cy="148" rx="15" ry="15" fill="url(#broccoliGrad)" />
        <ellipse cx="220" cy="145" rx="15" ry="14" fill="url(#broccoliGrad)" />
        <ellipse cx="235" cy="135" rx="14" ry="12" fill="url(#broccoliGrad)" />
        {/* Curd texture dots */}
        <circle cx="228" cy="144" r="2.5" fill="#86efac" opacity="0.7" />
        <circle cx="238" cy="142" r="2" fill="#86efac" opacity="0.7" />
        <circle cx="222" cy="152" r="2" fill="#86efac" opacity="0.7" />
        <circle cx="242" cy="152" r="2.2" fill="#86efac" opacity="0.7" />
      </g>

      {/* Ripe Plump Red Tomatoes & Red Bell Pepper (Front-Center) */}
      <g filter="url(#veggieShadow)">
        {/* Big Front Red Pepper */}
        <ellipse cx="165" cy="160" rx="26" ry="24" fill="url(#redTomato)" />
        <ellipse cx="182" cy="162" rx="20" ry="22" fill="url(#redTomato)" />
        <ellipse cx="148" cy="162" rx="18" ry="20" fill="url(#redTomato)" />
        {/* Pepper stem */}
        <path d="M165 138 C166 132, 172 130, 175 131" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
        {/* Pepper gloss */}
        <ellipse cx="158" cy="152" rx="6" ry="12" fill="#ffffff" opacity="0.5" transform="rotate(-20 158 152)" />

        {/* Juicy Red Tomato Left */}
        <circle cx="132" cy="165" r="17" fill="url(#redTomato)" />
        {/* Tomato calyx star */}
        <path d="M132 150 L130 154 L126 152 L129 155 L125 158 L130 157 L132 161 L134 157 L139 158 L135 155 L138 152 L134 154 Z" fill="#15803d" />
        <ellipse cx="128" cy="160" rx="4" ry="8" fill="#ffffff" opacity="0.45" transform="rotate(-30 128 160)" />

        {/* Juicy Red Tomato Right */}
        <circle cx="198" cy="168" r="16" fill="url(#redTomato)" />
        <path d="M198 153 L196 157 L192 155 L195 158 L191 161 L196 160 L198 164 L200 160 L205 161 L201 158 L204 155 L200 157 Z" fill="#15803d" />
        <ellipse cx="195" cy="163" rx="4" ry="7" fill="#ffffff" opacity="0.45" transform="rotate(-25 195 163)" />
      </g>

      {/* The Wicker Basket (Classic Hand-Woven Harvest Rattan Basket) */}
      <g filter="url(#basketShadow)">
        {/* Basket Body */}
        <path
          d="M75 175 C80 235, 100 255, 160 255 C220 255, 240 235, 245 175 Z"
          fill="url(#basketBase)"
        />

        {/* Woven horizontal wicker ridges */}
        <path d="M82 188 C100 200, 220 200, 238 188" stroke="#f59e0b" strokeWidth="4.5" fill="none" opacity="0.75" />
        <path d="M86 204 C105 216, 215 216, 234 204" stroke="#f59e0b" strokeWidth="4.5" fill="none" opacity="0.75" />
        <path d="M92 220 C110 230, 210 230, 228 220" stroke="#f59e0b" strokeWidth="4.5" fill="none" opacity="0.75" />
        <path d="M102 236 C120 244, 200 244, 218 236" stroke="#f59e0b" strokeWidth="4" fill="none" opacity="0.7" />

        {/* Woven vertical cross-stitches */}
        <g stroke="#78350f" strokeWidth="2.5" opacity="0.6">
          <line x1="100" y1="180" x2="110" y2="242" />
          <line x1="120" y1="180" x2="128" y2="248" />
          <line x1="140" y1="180" x2="144" y2="252" />
          <line x1="160" y1="180" x2="160" y2="254" />
          <line x1="180" y1="180" x2="176" y2="252" />
          <line x1="200" y1="180" x2="192" y2="248" />
          <line x1="220" y1="180" x2="210" y2="242" />
        </g>

        {/* Thick braided wicker rim */}
        <ellipse cx="160" cy="175" rx="86" ry="12" fill="url(#basketRim)" stroke="#78350f" strokeWidth="1.5" />
        {/* Braided twist highlights on rim */}
        <g stroke="#fde68a" strokeWidth="2.2" strokeLinecap="round" opacity="0.8">
          <line x1="90" y1="174" x2="98" y2="177" />
          <line x1="106" y1="174" x2="114" y2="177" />
          <line x1="122" y1="174" x2="130" y2="177" />
          <line x1="138" y1="174" x2="146" y2="177" />
          <line x1="154" y1="174" x2="162" y2="177" />
          <line x1="170" y1="174" x2="178" y2="177" />
          <line x1="186" y1="174" x2="194" y2="177" />
          <line x1="202" y1="174" x2="210" y2="177" />
          <line x1="218" y1="174" x2="226" y2="177" />
        </g>
      </g>

      {/* Surface ground shadow */}
      <ellipse cx="160" cy="265" rx="80" ry="10" fill="#14532d" opacity="0.2" filter="url(#basketShadow)" />
    </svg>
  );
}

export function SabziwalaaCard() {
  const [isHovered, setIsHovered] = useState(false);
  const targetUrl = "https://sabziwalaa-two.vercel.app/";

  return (
    <div className="w-full max-w-[1280px] mx-auto my-12">
      {/* The main Showcase Card */}
      <div className="bg-white border border-[#dce8f8] rounded-3xl p-6 md:p-9 shadow-[0_8px_30px_rgba(15,45,100,0.04)] hover:shadow-[0_16px_45px_rgba(7,87,255,0.08)] transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Browser Mockup in Soft Green Frame with 03 index (Matching image_87024418.png layout) */}
          <div className="lg:col-span-7">
            <div className="relative">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="block relative bg-gradient-to-br from-[#ebf7ee] via-[#e5f4ea] to-[#d8efe0] border border-[#d2ecda] rounded-2xl p-4 sm:p-6 overflow-hidden group transition-transform duration-300 hover:scale-[1.01]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                title="Click to visit Sabziwalaa website"
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

                  {/* Sabziwalaa Site Header */}
                  <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2 bg-white">
                    {/* Brand logo */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#16a34a] text-white flex items-center justify-center shadow-xs">
                        <Leaf size={14} />
                      </div>
                      <span className="text-xs font-black text-slate-900 tracking-tight">
                        Sabziwalaa
                      </span>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden sm:flex items-center gap-3.5 text-[10px] font-medium text-slate-600">
                      <span className="text-[#16a34a] font-bold border-b border-[#16a34a] pb-0.5">
                        Home
                      </span>
                      <span>Shop</span>
                      <span>Categories</span>
                      <span>Offers</span>
                      <span>About</span>
                    </div>

                    {/* Right-side icon actions: Search, Cart (0), User */}
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <Search size={14} className="hover:text-[#16a34a] cursor-pointer" />
                      <div className="relative cursor-pointer">
                        <ShoppingCart size={15} className="hover:text-[#16a34a]" />
                        <span className="absolute -top-1.5 -right-2 bg-[#16a34a] text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                          0
                        </span>
                      </div>
                      <User size={15} className="hover:text-[#16a34a] cursor-pointer" />
                    </div>
                  </div>

                  {/* Sabziwalaa Hero Section */}
                  <div className="p-4 sm:p-6 grid grid-cols-12 gap-3 items-center bg-gradient-to-b from-white to-[#f9fef9]">
                    {/* Left Hero Text */}
                    <div className="col-span-12 sm:col-span-7 pr-1">
                      <h4 className="text-xl sm:text-2xl md:text-[28px] font-black text-slate-900 leading-[1.15] tracking-tight">
                        Fresh Groceries
                        <br />
                        at <span className="text-[#16a34a]">Your Doorstep</span>
                      </h4>
                      <p className="mt-2 text-[10.5px] sm:text-[12px] text-slate-500 leading-relaxed max-w-[280px]">
                        Farm-fresh vegetables, fruits and daily essentials delivered with care.
                      </p>

                      <div className="mt-4 flex items-center gap-2 flex-wrap">
                        <span className="bg-[#16a34a] hover:bg-[#15803d] text-white text-[10px] sm:text-[11px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                          Shop Now →
                        </span>
                        <span className="bg-white border border-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium px-3.5 py-1.5 rounded-full shadow-xs">
                          Explore Categories
                        </span>
                      </div>
                    </div>

                    {/* Right Veggie Harvest Basket Illustration */}
                    <div className="col-span-12 sm:col-span-5 flex justify-center">
                      <div className="w-[180px] sm:w-[210px] md:w-[230px]">
                        <VeggieBasketGraphic />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#16a34a] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-green-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit Site ↗
                </div>
              </a>

              {/* Number Index Label 03 (Matches bottom-left of card in reference) */}
              <div className="absolute -bottom-7 sm:-bottom-8 left-2 text-slate-800 font-black text-lg sm:text-xl tracking-tight select-none pointer-events-none">
                03
              </div>
            </div>
          </div>

          {/* Right Column: Project description and link (Matching reference) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef5ff] border border-[#d9e6ff] text-[#0757ff] text-xs font-bold tracking-wider uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0757ff]" />
              E-COMMERCE WEBSITE · PROJECT 03
            </div>

            {/* Title */}
            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#10172e] tracking-tight leading-tight">
              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0757ff] transition-colors"
              >
                Sabziwalaa
              </a>
            </h3>

            {/* Description */}
            <p className="mt-3 text-[#5e6c8d] text-base leading-relaxed">
              A grocery-oriented digital shopping experience focused on product discovery and convenient online ordering.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#e2e8f0] my-7" />

            {/* Bottom Row: tag left, link button right */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#10172e] font-semibold text-base">
                <ShoppingCart size={20} className="text-[#0757ff]" />
                <span>Grocery shopping experience</span>
              </div>

              <a
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-[#eef5ff] hover:bg-[#0757ff] text-[#0757ff] hover:text-white border border-[#dbe8fd] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                aria-label="Visit Sabziwalaa website"
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
