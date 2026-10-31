import { useMemo, useState } from "react";
import { ArrowRight, Calendar, Check, Coins, CreditCard, Headphones, Info, Layers, Monitor, Rocket, ShieldCheck, Wallet, Zap } from "lucide-react";
import { Link } from "wouter";
import { websitePackages } from "@/data/site";

type PaymentMode = "once" | "emi";

const formatMoney = (amount: number) =>
  `₹${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(amount))}`;

interface PaymentCalculatorProps {
  initialPackage?: string;
  selectedPackage?: string;
  onSelectPackage?: (name: string) => void;
  className?: string;
  id?: string;
}

export function PaymentCalculator({
  initialPackage,
  selectedPackage: controlledPackage,
  onSelectPackage,
  className = "",
  id = "calculator",
}: PaymentCalculatorProps) {
  const [internalName, setInternalName] = useState(() => {
    if (initialPackage) return initialPackage;
    if (typeof window !== "undefined") {
      const param = new URLSearchParams(window.location.search).get("package");
      if (param) {
        const found = websitePackages.find((p) => p.name.toLowerCase() === param.toLowerCase());
        if (found) return found.name;
      }
    }
    return websitePackages[0].name;
  });

  const selectedName = controlledPackage ?? internalName;
  const setSelectedName = (name: string) => {
    if (onSelectPackage) {
      onSelectPackage(name);
    } else {
      setInternalName(name);
    }
  };

  const [mode, setMode] = useState<PaymentMode>("once");

  const selected = useMemo(
    () => websitePackages.find((item) => item.name === selectedName) ?? websitePackages[0],
    [selectedName]
  );

  const advanceRate = mode === "once" ? 0.3 : 0.45;
  const upfront = selected.price * advanceRate;
  const remaining = selected.price - upfront;
  const monthly = remaining / 6;

  // Icon mapping for packages
  const getPackageIcon = (name: string, isActive: boolean) => {
    const iconClass = isActive ? "text-white" : "text-slate-400";
    if (name === "Essential") return <Monitor className={iconClass} size={22} />;
    if (name === "Growth") return <Layers className={iconClass} size={22} />;
    return <Rocket className={iconClass} size={22} />;
  };

  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#1e293b] p-6 sm:p-8 lg:p-10 shadow-2xl ${className}`}
      style={{
        background:
          "radial-gradient(circle at 85% 15%, rgba(0, 102, 255, 0.22) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(14, 165, 233, 0.12) 0%, transparent 50%), #060d1b",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Heading, Step 1, Step 2 */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Main Section Header */}
            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight"
                style={{ color: "#ffffff" }}
              >
                Make the numbers{" "}
                <span className="relative inline-block text-[#38bdf8]" style={{ color: "#38bdf8" }}>
                  clear.
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full overflow-visible pointer-events-none"
                    height="12"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 2 8 C 30 2, 70 2, 98 7"
                      stroke="#38bdf8"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p
                className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed"
                style={{ color: "#cbd5e1" }}
              >
                Calculate your investment for the selected package and choose a payment route that works for you.
              </p>
            </div>

            {/* Step 1: Select Your Package */}
            <div className="mt-8">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                <Layers className="text-[#38bdf8]" size={19} />
                <span>1. Select Your Package</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3.5">
                {websitePackages.map((pkg) => {
                  const isActive = selectedName === pkg.name;
                  return (
                    <button
                      key={pkg.name}
                      type="button"
                      onClick={() => setSelectedName(pkg.name)}
                      className={`relative rounded-xl p-4 sm:p-5 text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-br from-[#0055d4] to-[#003db5] border-2 border-[#38bdf8] shadow-[0_0_24px_rgba(56,189,248,0.38)]"
                          : "bg-[#0b1426]/80 border border-slate-800/90 hover:border-slate-700 hover:bg-[#0f1b34]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        {getPackageIcon(pkg.name, isActive)}
                        {isActive && (
                          <span className="w-5 h-5 rounded-full bg-[#0084ff] border-2 border-white flex items-center justify-center text-white shadow-sm">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        )}
                      </div>
                      <div className="mt-4">
                        <span className="block text-white font-semibold text-sm sm:text-base">
                          {pkg.name}
                        </span>
                        <span className="block text-white font-bold text-xl sm:text-2xl mt-0.5 tracking-tight font-mono-nums">
                          {formatMoney(pkg.price)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose a Payment Option */}
            <div className="mt-7">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                <CreditCard className="text-[#38bdf8]" size={19} />
                <span>2. Choose a Payment Option</span>
              </div>

              <div className="flex flex-col gap-3 mt-3.5">
                {/* One-time payment */}
                <button
                  type="button"
                  onClick={() => setMode("once")}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    mode === "once"
                      ? "bg-[#08152e] border-2 border-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.32)]"
                      : "bg-[#0b1426]/70 border border-slate-800/90 hover:border-slate-700 hover:bg-[#0f1b34]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        mode === "once"
                          ? "bg-blue-950/80 border border-blue-800/70 text-[#38bdf8]"
                          : "bg-slate-800/60 border border-slate-700/60 text-slate-400"
                      }`}
                    >
                      <Wallet size={19} />
                    </div>
                    <div>
                      <span className="block text-white font-semibold text-sm sm:text-base">
                        One-time payment
                      </span>
                      <span className="block text-slate-400 text-xs sm:text-sm mt-0.5">
                        30% advance, balance after project completion
                      </span>
                    </div>
                  </div>

                  <div className="ml-3 flex-shrink-0">
                    {mode === "once" ? (
                      <span className="w-6 h-6 rounded-full bg-[#0066ff] border-2 border-white flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,102,255,0.8)]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full border-2 border-slate-600 block"></span>
                    )}
                  </div>
                </button>

                {/* 6-month EMI option */}
                <button
                  type="button"
                  onClick={() => setMode("emi")}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    mode === "emi"
                      ? "bg-[#08152e] border-2 border-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.32)]"
                      : "bg-[#0b1426]/70 border border-slate-800/90 hover:border-slate-700 hover:bg-[#0f1b34]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        mode === "emi"
                          ? "bg-blue-950/80 border border-blue-800/70 text-[#38bdf8]"
                          : "bg-slate-800/60 border border-slate-700/60 text-slate-400"
                      }`}
                    >
                      <Calendar size={19} />
                    </div>
                    <div>
                      <span className="block text-white font-semibold text-sm sm:text-base">
                        6-month EMI option
                      </span>
                      <span className="block text-slate-400 text-xs sm:text-sm mt-0.5">
                        45% advance, remaining across 6 months
                      </span>
                    </div>
                  </div>

                  <div className="ml-3 flex-shrink-0">
                    {mode === "emi" ? (
                      <span className="w-6 h-6 rounded-full bg-[#0066ff] border-2 border-white flex items-center justify-center text-white shadow-[0_0_12px_rgba(0,102,255,0.8)]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full border-2 border-slate-600 block"></span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: "Your Payment Plan" Card */}
        <div className="lg:col-span-5 flex">
          <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#0b1730] to-[#070e20] border border-slate-700/60 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
            {/* Ambient luminous glow wave in top-right */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-sky-500/25 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-[#38bdf8] text-xs font-semibold w-fit">
                <Coins size={14} />
                <span>Your Payment Plan</span>
              </div>

              {/* Package Title & Price */}
              <div className="flex items-start justify-between gap-4 mt-5">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    style={{ color: "#ffffff" }}
                  >
                    {selected.name} Package
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1" style={{ color: "#cbd5e1" }}>
                    {selected.tagline}.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#38bdf8] tracking-tight font-mono-nums">
                    {formatMoney(selected.price)}
                  </span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3.5 my-6">
                {mode === "once" ? (
                  <>
                    <div className="flex items-center justify-between py-2.5 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                          %
                        </span>
                        <span className="text-slate-300 text-sm font-medium">30% Advance</span>
                      </div>
                      <span className="text-white text-lg sm:text-xl font-bold tracking-tight font-mono-nums">
                        {formatMoney(upfront)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                          <Wallet size={14} />
                        </span>
                        <span className="text-slate-300 text-sm font-medium">
                          Remaining Balance (70%)
                        </span>
                      </div>
                      <span className="text-white text-lg sm:text-xl font-bold tracking-tight font-mono-nums">
                        {formatMoney(remaining)}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between py-2.5 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                          %
                        </span>
                        <span className="text-slate-300 text-sm font-medium">45% Advance</span>
                      </div>
                      <span className="text-white text-lg sm:text-xl font-bold tracking-tight font-mono-nums">
                        {formatMoney(upfront)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                          <Calendar size={14} />
                        </span>
                        <div>
                          <span className="text-slate-300 text-sm font-medium block">
                            Monthly EMI (6 months)
                          </span>
                          <span className="text-slate-500 text-xs">
                            Remaining 55%: {formatMoney(remaining)}
                          </span>
                        </div>
                      </div>
                      <span className="text-white text-lg sm:text-xl font-bold tracking-tight font-mono-nums">
                        {formatMoney(monthly)}
                        <span className="text-xs font-normal text-slate-400">/mo</span>
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Action Button */}
              <Link
                href={`/contact?service=${encodeURIComponent(`${selected.name} website package`)}&plan=${mode}`}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#0052d4] hover:from-[#0070f3] hover:to-[#005be0] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,102,255,0.4)] transition-all hover:shadow-[0_12px_28px_rgba(0,102,255,0.55)] active:scale-[0.99]"
              >
                <span>Enquire about this plan</span>
                <ArrowRight size={18} />
              </Link>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 mt-4 text-slate-400 text-xs leading-relaxed">
                <Info size={15} className="flex-shrink-0 mt-0.5 text-slate-400" />
                <p>
                  Estimate excludes GST. Final scope, due dates, and payment terms are confirmed in the project proposal.
                </p>
              </div>
            </div>

            {/* Bottom 4 Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-[#38bdf8] flex-shrink-0" size={20} />
                <div className="text-xs leading-tight font-medium">
                  <span className="text-slate-200 block">Secure</span>
                  <span className="text-slate-400">Payment</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="text-[#38bdf8] flex-shrink-0" size={20} />
                <div className="text-xs leading-tight font-medium">
                  <span className="text-slate-200 block">Flexible</span>
                  <span className="text-slate-400">Options</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="text-[#38bdf8] flex-shrink-0" size={20} />
                <div className="text-xs leading-tight font-medium">
                  <span className="text-slate-200 block">Clear</span>
                  <span className="text-slate-400">Breakdown</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Headphones className="text-[#38bdf8] flex-shrink-0" size={20} />
                <div className="text-xs leading-tight font-medium">
                  <span className="text-slate-200 block">Project</span>
                  <span className="text-slate-400">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
