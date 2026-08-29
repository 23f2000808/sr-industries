import React from "react";
import { MessageSquarePlus, FileSliders, FlaskConical, Truck, ArrowRight, Sparkles } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Share Your Requirement",
      desc: "Submit your ingredient name, required specifications, estimated batch quantity, and delivery timeline.",
      icon: MessageSquarePlus,
    },
    {
      step: "02",
      title: "Specification Discussion",
      desc: "Our team verifies availability, standard parameters, mesh requirements, and shares competitive commercial quotes.",
      icon: FileSliders,
    },
    {
      step: "03",
      title: "Sample & Documentation Review",
      desc: "Review batch-specific COA, technical specification sheets, and trial evaluation samples where needed.",
      icon: FlaskConical,
    },
    {
      step: "04",
      title: "Bulk Supply & Dispatch",
      desc: "Prompt order packaging, safe dispatch from Delhi NCR hub, and seamless delivery across your Indian manufacturing units.",
      icon: Truck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low/60 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
            <span>How We Work</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-primary leading-tight">
            Streamlined 4-Step Sourcing Process
          </h2>

          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
            From initial specification alignment to final warehouse delivery, we make bulk raw material procurement transparent and efficient.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-surface p-6 sm:p-7 rounded-2xl ambient-shadow gold-border hover-lift flex flex-col justify-between text-left group relative border border-secondary-gold/20"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-secondary-gold font-headline font-bold text-base shadow-sm border border-secondary-gold/30">
                    {item.step}
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-secondary-fixed transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-headline text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-secondary-gold/15 flex items-center justify-between text-[11px] font-semibold text-secondary-gold uppercase tracking-wider">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-secondary-gold hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
