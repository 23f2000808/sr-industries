import React from "react";
import { Check, ShieldCheck, Target, Award, ArrowUpRight, Compass, Users } from "lucide-react";

interface AboutProps {
  onEnquireClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onEnquireClick }) => {
  const pillars = [
    {
      title: "Quality Sourcing",
      desc: "Carefully vetted raw ingredients with verified active compounds and strict batch-to-batch consistency.",
      icon: ShieldCheck,
    },
    {
      title: "Reliable Supply Continuity",
      desc: "Robust sourcing networks and buffer inventory to prevent supply disruptions for your production lines.",
      icon: Compass,
    },
    {
      title: "Comprehensive Documentation",
      desc: "Full transparency with COA, specifications, technical sheets and safety data for every shipment.",
      icon: Award,
    },
    {
      title: "Responsive Customer Support",
      desc: "Direct communication with our team for quick quotes, sample requests, and technical queries.",
      icon: Users,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low/60 relative overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Overview */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label font-semibold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-secondary-gold" />
              <span>About SR Enterprises India</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-primary leading-tight">
              Your Trusted Partner for <span className="text-secondary-gold italic font-normal">Quality</span> Raw Materials
            </h2>

            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              <strong>SR Enterprises India</strong> is a dedicated B2B raw materials supplier serving manufacturers, formulation scientists, and wellness brands across India. We specialize in sourcing and supplying high-performance nutraceutical ingredients, botanical extracts, sports nutrition components, and functional food additives.
            </p>

            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Led by Proprietor <strong>Sagar Rana</strong>, our Delhi NCR operation bridges the gap between reliable ingredient producers and fast-growing Indian nutrition brands. Whether you need single drum trial batches or multi-ton commercial quantities, we provide the specification assurance and timely dispatch your business demands.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {[
                "Bulk requirements accommodated with tailored dispatch schedules",
                "Complete documentation support including batch COA and specifications",
                "Broad portfolio across 8 specialized nutritional categories",
                "Central dispatch hub in Delhi NCR connecting major Indian industrial corridors",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onEnquireClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label text-sm font-semibold hover:bg-primary-container transition-all hover-lift shadow-sm"
              >
                <span>Discuss Your Sourcing Needs</span>
                <ArrowUpRight className="w-4 h-4 text-secondary-gold" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Value Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface p-6 rounded-2xl ambient-shadow gold-border hover-lift flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary-fixed transition-colors duration-300 mb-4 border border-secondary-gold/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline text-lg font-bold text-primary mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-secondary-gold/15 flex items-center justify-between text-[11px] font-semibold text-secondary-gold uppercase tracking-wider">
                    <span>B2B Reliability</span>
                    <span className="text-primary font-bold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
