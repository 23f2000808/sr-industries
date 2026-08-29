import React from "react";
import { Sparkles, Layers, FileCheck, Boxes, Truck, Headphones, CheckCircle2 } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      number: "01",
      title: "Premium Quality Ingredients",
      description:
        "Standardized active compounds, verified purity levels, and strict microbial parameters ensuring dependable formulation outcomes.",
    },
    {
      icon: Layers,
      number: "02",
      title: "Wide Product Range",
      description:
        "Comprehensive one-stop raw material portfolio covering sports nutrition, herbal extracts, protein isolates, vitamins, and minerals.",
    },
    {
      icon: FileCheck,
      number: "03",
      title: "COA & Specifications Provided",
      description:
        "Transparent batch analysis, Certificate of Analysis (COA), MSDS, and detailed technical specification sheets for regulatory compliance.",
    },
    {
      icon: Boxes,
      number: "04",
      title: "Bulk Orders Accepted",
      description:
        "Flexible procurement volumes ranging from trial drums to recurring commercial scale container shipments with predictable lead times.",
    },
    {
      icon: Truck,
      number: "05",
      title: "Pan India Supply",
      description:
        "Strategic central distribution from Delhi NCR connected to major pharmaceutical and food manufacturing clusters across all states.",
    },
    {
      icon: Headphones,
      number: "06",
      title: "Responsive Customer Support",
      description:
        "Direct communication with knowledgeable sourcing coordinators for rapid pricing, samples, and specification inquiries.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface-container-low/50 relative overflow-hidden"
      id="why-choose-us"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondary-gold" />
            <span>Why Work With Us</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-primary leading-tight">
            Built for B2B Reliability & Formulation Excellence
          </h2>

          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
            We partner with manufacturers and brands who refuse to compromise on ingredient integrity, documentation clarity, and dispatch timelines.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-surface p-7 sm:p-8 rounded-2xl ambient-shadow gold-border hover-lift transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                {/* Background Accent watermark */}
                <span className="absolute top-4 right-5 text-4xl font-headline font-bold text-secondary-gold/15 select-none pointer-events-none group-hover:text-secondary-gold/25 transition-colors">
                  {item.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary-gold transition-colors duration-300 border border-secondary-gold/25 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-secondary-gold/15 flex items-center gap-2 text-[11px] font-label font-semibold text-secondary-gold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold" />
                  <span>SR Enterprises Assurance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
