import React from "react";
import { EnquiryForm } from "./EnquiryForm";
import { Phone, Mail, MapPin, MessageSquare, Sparkles, UserCheck, Clock } from "lucide-react";

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct }) => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
            <span>Connect With Us</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-primary leading-tight">
            Let's Discuss Your Requirement
          </h2>

          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
            Get in touch directly with our commercial team for ingredient availability, customized batch specifications, samples, and pan-India dispatch details.
          </p>
        </div>

        {/* Contact Layout: Info Column + Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Company & Proprietor Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Proprietor Card */}
            <div className="bg-primary text-white p-7 sm:p-8 rounded-2xl ambient-shadow border border-secondary-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary-gold border border-secondary-gold/30">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-white">
                      Sagar Rana
                    </h3>
                    <p className="text-xs text-secondary-fixed font-semibold tracking-wider uppercase font-label">
                      Proprietor • SR Enterprises India
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
                  Dedicated point of contact for raw material procurement, price agreements, sample approvals, and custom specifications.
                </p>

                {/* Direct CTA Buttons */}
                <div className="pt-3 grid grid-cols-2 gap-3">
                  <a
                    href="tel:7409940333"
                    className="py-2.5 px-3 bg-white text-primary rounded-lg font-label text-xs font-bold hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/917409940333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-700 text-white rounded-lg font-label text-xs font-bold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Details Cards */}
            <div className="bg-surface-container-low p-6 sm:p-7 rounded-2xl gold-border space-y-4">
              <h4 className="font-headline text-base font-bold text-primary border-b border-secondary-gold/20 pb-3">
                Business Contact Information
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <a
                  href="tel:7409940333"
                  className="flex items-start gap-3 text-on-surface hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary-gold transition-colors shrink-0 mt-0.5 border border-secondary-gold/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant font-medium block">Phone / Mobile</span>
                    <span className="font-bold text-primary group-hover:underline">+91 7409940333</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:srenterprisesindia463@gmail.com"
                  className="flex items-start gap-3 text-on-surface hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary-gold transition-colors shrink-0 mt-0.5 border border-secondary-gold/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant font-medium block">Official Inquiries</span>
                    <span className="font-bold text-primary break-all group-hover:underline">
                      srenterprisesindia463@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-on-surface">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shrink-0 mt-0.5 border border-secondary-gold/20">
                    <MapPin className="w-4 h-4 text-secondary-gold" />
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant font-medium block">Operations Hub</span>
                    <span className="font-bold text-primary">Delhi NCR, India</span>
                    <span className="text-xs text-on-surface-variant block mt-0.5">Serving clients & manufacturing plants across India</span>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex items-start gap-3 text-on-surface pt-1 border-t border-secondary-gold/15">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary shrink-0 mt-0.5 border border-secondary-gold/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant font-medium block">Support Hours</span>
                    <span className="font-semibold text-primary">Monday – Saturday: 9:30 AM – 7:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm initialProduct={initialProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};
