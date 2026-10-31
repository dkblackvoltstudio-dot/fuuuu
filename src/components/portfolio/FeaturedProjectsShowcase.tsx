import { JeevanAstraCard } from "./JeevanAstraShowcase";
import { GramBanglaCard } from "./GramBanglaShowcase";
import { SabziwalaaCard } from "./SabziwalaaShowcase";

export { JeevanAstraCard } from "./JeevanAstraShowcase";
export { GramBanglaCard } from "./GramBanglaShowcase";
export { SabziwalaaCard } from "./SabziwalaaShowcase";

export function FeaturedProjectsShowcase() {
  return (
    <section className="w-full">
      {/* Primary Section Header matching reference image (image_1a7d4e43.png) */}
      <div className="w-full max-w-[1280px] mx-auto relative">
        {/* Subtle decorative background ambient curve matching reference top corner */}
        <div
          className="absolute -top-12 -right-8 w-96 h-96 rounded-full pointer-events-none select-none opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(0, 85, 255, 0.07) 0%, rgba(220, 235, 255, 0.03) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Selected Projects pill badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#d6e5f8] shadow-[0_2px_8px_rgba(0,85,255,0.06)] mb-5 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] shrink-0" />
          <span className="text-xs font-bold tracking-wider text-[#0055ff] uppercase">
            SELECTED PROJECTS
          </span>
        </div>

        {/* Main Title with brand accent and hand-drawn style blue underline */}
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

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-[#596780] text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          A closer look at digital products designed to make everyday services easier to access.
        </p>

        {/* Horizontal divider line matching reference */}
        <div className="w-full h-px bg-[#e2e8f0] mt-8 sm:mt-10 mb-10 md:mb-12" />
      </div>

      {/* Project 01: Jeevan Astra Hospital */}
      <div className="w-full mb-10 md:mb-14">
        <JeevanAstraCard hideHeader />
      </div>

      {/* Project 02: Gram Bangla Resort & Restaurant */}
      <div className="w-full mb-10 md:mb-14">
        <GramBanglaCard />
      </div>

      {/* Project 03: Sabziwalaa */}
      <div className="w-full mb-10 md:mb-14">
        <SabziwalaaCard />
      </div>
    </section>
  );
}
