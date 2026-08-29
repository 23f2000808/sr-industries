import React from "react";
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Award, Sparkles } from "lucide-react";
import { TrustIndicators } from "./TrustIndicators";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 overflow-hidden" id="home">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container gold-border shadow-sm max-w-full">
              <Sparkles className="w-4 h-4 text-secondary-gold shrink-0" />
              <span className="font-label text-xs sm:text-xs font-semibold text-primary tracking-wide truncate">
                Quality Ingredients • Reliable Supply • COA & Specifications Available
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-primary leading-[1.12] tracking-tight">
              Premium Raw Materials for <span className="text-primary-container italic font-normal">Nutrition</span>, Wellness & <span className="text-secondary-gold">Herbal Products</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Reliable sourcing of nutraceutical, herbal, sports nutrition and functional ingredients for manufacturers, brands and businesses across India.
            </p>

            {/* Key feature micro bullets */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-on-surface font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-gold shrink-0" />
                <span>50+ Tested Raw Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-gold shrink-0" />
                <span>Bulk Supply & Commercial Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-gold shrink-0" />
                <span>Batch COA & MSDS Provided</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary-gold shrink-0" />
                <span>Fast Pan-India Logistics</span>
              </div>
            </div>

            {/* Hero CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-on-primary rounded-lg font-label text-sm font-semibold hover:bg-primary-container transition-all duration-200 hover-lift shadow-md active:scale-95 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-secondary-gold group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-surface text-primary border border-primary/80 rounded-lg font-label text-sm font-semibold hover:bg-surface-container transition-all duration-200 hover-lift shadow-sm active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:h-[480px] rounded-2xl overflow-hidden ambient-shadow gold-border bg-surface-container-low group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHuM2onSwvL-R1q_Kf6DodUgqbFnKE6XgedEVFfQsG2RpoPl03tFXUaoRWr-PNAg07m2dzcnhpWvfuA0bR6iFMgmR0HbnlK70FsVdBUW05K7ApFTghiwAbnzF58LDUkYSRNjGq2Dm_zoQB61HfgueHVVEuPdRfq48r_iVl9gLaoFaB00FGj0yMkBLU5anR-E06vt840K0zzavpS7cjMO0wfpo5nkS0JRc-ceJe5YcHkWjtjc8BOOc"
                alt="High Purity Nutraceutical & Sports Nutrition Raw Materials"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent" />

              {/* Floating Quality Stamp */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card gold-border shadow-lg text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary-gold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-primary">Standardized & Tested Grade</h4>
                    <p className="text-xs text-on-surface-variant">Sourced for formulators, brand owners & contract manufacturers.</p>
                  </div>
                </div>
              </div>

              {/* Verified Tag Top Left */}
              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-[11px] font-label font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-secondary-gold/40">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary-gold" />
                <span>B2B Commercial Sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Highlights Strip */}
      <TrustIndicators />
    </section>
  );
};
