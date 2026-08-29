import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Product Catalogue", href: "#products" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Quality & Documentation", href: "#quality" },
    { label: "Client Reviews", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const productCategories = [
    { label: "Sports Nutrition Ingredients", href: "#products" },
    { label: "Protein Ingredients (WPI, WPC, Pea)", href: "#products" },
    { label: "Vitamins & Minerals", href: "#products" },
    { label: "Standardized Herbal Extracts", href: "#products" },
    { label: "Botanical & Ayurvedic Powders", href: "#products" },
    { label: "Flavours & Sweeteners", href: "#products" },
    { label: "Functional & Specialty Actives", href: "#products" },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-secondary-gold/25 pt-16 pb-8 text-left">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-secondary-gold/20">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary-gold font-headline font-bold text-lg shadow-sm border border-secondary-gold/40">
                <span>SR</span>
              </div>
              <span className="font-headline text-xl font-bold text-primary tracking-tight">
                SR Enterprises India
              </span>
            </div>

            <p className="font-label text-xs font-semibold text-secondary-gold tracking-wider uppercase">
              Nutraceutical • Herbal • Sports Nutrition Raw Materials
            </p>

            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
              Trusted Indian supplier of high-purity raw materials, standardized herbal extracts, protein isolates, and functional ingredients for food, dietary supplement, and pharmaceutical manufacturing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-primary font-medium">
              <span className="px-2.5 py-1 rounded-md bg-surface-container border border-secondary-gold/20 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary-gold" />
                <span>COA & MSDS Supported</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-container border border-secondary-gold/20 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
                <span>Bulk Sourcing Partner</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-label text-xs font-bold text-primary tracking-wider uppercase border-b border-secondary-gold/20 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-body text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-label text-xs font-bold text-primary tracking-wider uppercase border-b border-secondary-gold/20 pb-2">
              Ingredient Categories
            </h4>
            <ul className="space-y-2">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Direct Contact snippet */}
            <div className="pt-3 space-y-1.5 text-xs text-on-surface border-t border-secondary-gold/15">
              <a href="tel:7409940333" className="block hover:text-primary font-semibold">
                📞 +91 7409940333 (Sagar Rana, Proprietor)
              </a>
              <a href="mailto:srenterprisesindia463@gmail.com" className="block hover:text-primary text-on-surface-variant">
                ✉️ srenterprisesindia463@gmail.com
              </a>
              <p className="text-on-surface-variant">
                📍 Delhi NCR, India (Pan-India Logistics)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & B2B Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="text-center md:text-left">
            © 2026 <strong>SR Enterprises India</strong>. All Rights Reserved. Delhi NCR, India.
          </p>

          <p className="text-center md:text-right text-[11px] max-w-xl text-on-surface-variant/80">
            Disclaimer: Products supplied are commercial raw materials for further processing, manufacturing, and formulation. Not intended as finished consumer medicine or for direct diagnosis/treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};
