import React from "react";
import { FileText, CheckCircle2, ShieldCheck, ArrowRight, FileSpreadsheet, Beaker, ShieldAlert } from "lucide-react";

interface QualitySectionProps {
  onRequestDoc: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onRequestDoc }) => {
  const docList = [
    {
      title: "Certificate of Analysis (COA)",
      desc: "Batch-specific analytical data verifying assay percentage, active marker compounds, and purity parameters.",
      icon: FileSpreadsheet,
    },
    {
      title: "Product Specifications & Standards",
      desc: "Defined physical, chemical, and organoleptic limits including mesh size, moisture content, and solubility.",
      icon: FileText,
    },
    {
      title: "Technical & Safety Information (MSDS)",
      desc: "Material Safety Data Sheets outlining safe handling, storage conditions, and toxicological summaries.",
      icon: ShieldAlert,
    },
    {
      title: "Sample Evaluation for Formulators",
      desc: "Lab-scale trial samples provided for testing viscosity, solubility, masking, and bench testing prior to bulk order.",
      icon: Beaker,
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface relative overflow-hidden"
      id="quality"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-secondary-gold/30">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-secondary-gold/40 text-secondary-fixed text-xs font-label font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary-gold" />
                <span>Quality & Technical Support</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
                Complete Batch Documentation & Specification Support
              </h2>

              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                In the nutraceutical and herbal industry, product safety and regulatory adherence begin with transparent raw material documentation. We ensure our manufacturing clients have access to accurate, lot-verified technical data for every ingredient supplied.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Batch-specific Certificate of Analysis provided with every commercial dispatch",
                  "Standardized testing for active phytochemicals & assay percentages",
                  "Material Safety Data Sheets (MSDS) & technical spec sheets upon request",
                  "Sample provision for pilot formulation trials & lab validations",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-secondary-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onRequestDoc}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-secondary-gold text-primary-dark rounded-lg font-label text-sm font-bold hover:bg-secondary-fixed transition-all hover-lift shadow-lg active:scale-95 group"
                >
                  <span>Request Product Documentation</span>
                  <ArrowRight className="w-4 h-4 text-primary-dark group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: 4 Document Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {docList.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/95 text-on-surface p-5 sm:p-6 rounded-2xl shadow-md border border-secondary-gold/30 hover:bg-white transition-all text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-headline text-base font-bold text-primary mb-1.5">
                        {doc.title}
                      </h3>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-secondary-gold/15 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold" />
                      <span>Available on Request</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
