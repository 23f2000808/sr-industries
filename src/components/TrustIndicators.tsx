import React from "react";
import { Sparkles, FileText, Boxes, Truck } from "lucide-react";

export const TrustIndicators: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Premium Quality Raw Materials",
      description: "Tested for high purity & standardized actives",
    },
    {
      icon: FileText,
      title: "COA & Specifications",
      description: "Batch test reports & technical data sheets",
    },
    {
      icon: Boxes,
      title: "Bulk Orders Accepted",
      description: "Reliable commercial volumes & flexible batch sizes",
    },
    {
      icon: Truck,
      title: "Pan India Supply",
      description: "Fast, dependable logistics from Delhi NCR hub",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-secondary-gold/25 bg-surface-container-low/40 rounded-2xl px-4 sm:px-8">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-surface transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-3 text-secondary-gold group-hover:bg-primary group-hover:text-secondary-fixed transition-colors duration-300 shadow-sm border border-secondary-gold/20">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h4 className="font-label text-xs sm:text-sm font-bold text-primary mb-1 tracking-tight">
                {item.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
