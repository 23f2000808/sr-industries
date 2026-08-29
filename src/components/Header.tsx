import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for nav highlighting
      const sections = ["home", "about", "products", "why-choose-us", "quality", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Products", href: "#products", id: "products" },
    { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
    { label: "Quality", href: "#quality", id: "quality" },
    { label: "Reviews", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top micro bar for corporate B2B presence */}
      <div className="bg-primary text-white/90 text-xs py-1.5 px-4 hidden sm:block border-b border-primary-light/40">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-secondary-fixed">
              <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
              <span>B2B Raw Material Supplier • Nutraceutical • Herbal • Sports Nutrition</span>
            </span>
          </div>
          <div className="flex items-center gap-5 text-[11px] text-white/80">
            <a href="tel:7409940333" className="hover:text-secondary-fixed flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-secondary-gold" />
              <span>+91 7409940333</span>
            </a>
            <span className="text-white/30">•</span>
            <a href="mailto:srenterprisesindia463@gmail.com" className="hover:text-secondary-fixed flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-secondary-gold" />
              <span>srenterprisesindia463@gmail.com</span>
            </a>
            <span className="text-white/30">•</span>
            <span>Delhi NCR, India</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-header shadow-sm border-b border-secondary-gold/20 py-3"
            : "bg-surface/95 backdrop-blur-md border-b border-secondary/20 py-4"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 w-full max-w-[1280px] mx-auto">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary-gold font-headline font-bold text-lg shadow-sm border border-secondary-gold/40 group-hover:scale-105 transition-transform duration-300">
              <span>SR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight leading-tight group-hover:text-primary-container transition-colors">
                SR Enterprises India
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-secondary-gold uppercase font-body">
                Raw Materials Supplier
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-label text-[13px] tracking-wide transition-all duration-200 py-1 relative ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary font-medium"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary-gold rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all duration-200 shadow-sm hover:shadow active:scale-95 group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-secondary-gold group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-primary p-2 rounded-lg hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-secondary/30 px-6 py-5 shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-primary text-on-primary font-semibold"
                      : "text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              ))}
              <div className="pt-3 border-t border-secondary/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 bg-primary text-on-primary rounded-lg font-label text-sm font-semibold text-center hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-secondary-gold" />
                </button>
                <div className="text-center text-xs text-on-surface-variant flex flex-col gap-1 pt-1">
                  <a href="tel:7409940333" className="font-semibold text-primary">
                    📞 +91 7409940333
                  </a>
                  <span>📍 Delhi NCR, India</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
