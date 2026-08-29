import React from "react";
import { MapPin, Navigation, Truck, Building2 } from "lucide-react";

export const LocationSection: React.FC = () => {
  const hubs = [
    { zone: "North India", cities: "Delhi NCR, Haryana, Punjab, Himachal Pradesh, Uttarakhand, Uttar Pradesh" },
    { zone: "West India", cities: "Gujarat (Ahmedabad, Vadodara), Maharashtra (Mumbai, Pune, Nashik)" },
    { zone: "South India", cities: "Telangana (Hyderabad), Karnataka (Bengaluru), Tamil Nadu (Chennai, Coimbatore)" },
    { zone: "Central & East", cities: "Madhya Pradesh (Indore), West Bengal (Kolkata), Odisha, Bihar" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-surface-container-low/40 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 ambient-shadow gold-border border border-secondary-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label font-semibold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-secondary-gold" />
                <span>Pan India Reach</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Serving Clients Across India from Delhi NCR
              </h2>

              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Headquartered strategically in <strong>Delhi NCR</strong>, SR Enterprises India operates an agile commercial dispatch network supplying pharmaceutical, nutraceutical, dietary supplement, and herbal extraction plants nationwide.
              </p>

              <div className="space-y-3 pt-1">
                {hubs.map((hub, idx) => (
                  <div key={idx} className="p-3 bg-surface-container-low rounded-xl border border-secondary-gold/15 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-headline text-xs font-bold text-primary">{hub.zone}</h4>
                      <p className="text-[11px] text-on-surface-variant">{hub.cities}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Map Visual Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary via-primary-container to-primary-dark p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-secondary-gold/40 flex flex-col justify-between">
                {/* Visual grid / route lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#b4975a_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary-gold animate-bounce" />
                    <span className="font-headline font-bold text-base text-white">
                      Central Dispatch Hub: Delhi NCR
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-gold text-primary font-bold text-[10px] uppercase tracking-wider">
                    Operational
                  </span>
                </div>

                {/* Logistics Highlight Cards */}
                <div className="relative z-10 grid grid-cols-2 gap-3 my-auto py-4">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-left">
                    <Truck className="w-5 h-5 text-secondary-gold mb-1.5" />
                    <h5 className="font-headline text-sm font-bold text-white">Full Truckload & Part Load</h5>
                    <p className="text-[11px] text-white/75 mt-0.5">Commercial transport partners with live tracking.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-left">
                    <Building2 className="w-5 h-5 text-secondary-gold mb-1.5" />
                    <h5 className="font-headline text-sm font-bold text-white">Pharma & Food Clusters</h5>
                    <p className="text-[11px] text-white/75 mt-0.5">Regular dispatches to formulation hubs.</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-white/80 border-t border-white/15 pt-3">
                  <span>Fast transit schedules</span>
                  <span className="font-semibold text-secondary-fixed">Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
