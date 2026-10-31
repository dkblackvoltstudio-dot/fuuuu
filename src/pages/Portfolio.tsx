import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { CTASection, usePageMeta } from "@/components/site/SiteChrome";
import { FeaturedProjectsShowcase } from "@/components/portfolio/FeaturedProjectsShowcase";

export default function Portfolio() {
  usePageMeta(
    "Digital experiences built around real needs | Portfolio",
    "Explore digital products and web experiences by Hinton Evolution Tech, including Jeevan Astra Hospital, Gram Bangla Resort & Restaurant, and Sabziwalaa."
  );

  return (
    <main className="bg-[#fcfdfd]">
      {/* Primary Section matching user reference screenshots 1:1 */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="site-container">
          <FeaturedProjectsShowcase />

          {/* Portfolio CTA box */}
          <div className="mt-14 bg-gradient-to-r from-[#f0f6ff] to-[#e8f2fe] border border-[#d6e5fa] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-[#0757ff] block mb-2">
                YOUR IDEA COULD BE NEXT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10172e] tracking-tight">
                Have something in mind?
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-lg">
                Let’s talk through your goals and the kind of experience you want to create for your users.
              </p>
            </div>

            <Link
              href="/contact"
              className="button whitespace-nowrap self-start sm:self-auto"
            >
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s create work that feels like yours."
        text="Bring us an idea, an opportunity, or a problem worth solving."
      />
    </main>
  );
}
