import React from "react";
import { Product } from "../data/products";
import { X, FileText, CheckCircle2, Tag, MessageSquare, Send, Sparkles, AlertCircle } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello SR Enterprises India, I am interested in inquiring about ${product.name} (${product.category}) for our manufacturing requirements. Please share current specifications, batch availability, and quotation.`
  );

  const whatsappUrl = `https://wa.me/917409940333?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-on-surface/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface w-full max-w-3xl rounded-2xl overflow-hidden ambient-shadow-lg gold-border my-auto relative text-left border border-secondary-gold/40 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-gold/20 bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-gold" />
            <span className="font-label text-xs font-semibold text-secondary-gold uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Top Banner: Image & Quick Specs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low border border-secondary-gold/20 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-label font-semibold px-2.5 py-0.5 rounded-full border border-secondary-gold/40">
                In Stock
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
                {product.name}
              </h2>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {product.description}
              </p>

              {/* Commercial Availability Status */}
              <div className="p-3 bg-surface-container-low rounded-xl border border-secondary-gold/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-on-surface-variant block font-medium">Pricing & Commercials:</span>
                  <span className="text-sm font-bold text-primary">Available on enquiry</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block font-medium">Standard Packaging:</span>
                  <span className="text-xs font-semibold text-primary">{product.packaging}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-headline text-base font-bold text-primary flex items-center gap-2">
                <FileText className="w-4 h-4 text-secondary-gold" />
                <span>Technical Specifications & Standards</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-surface-container-lowest p-4 rounded-xl border border-secondary-gold/20">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-secondary-gold/10 last:border-0 sm:last:border-b-0 px-1">
                    <span className="text-on-surface-variant font-medium">{key}:</span>
                    <span className="font-semibold text-primary text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Applications */}
          <div className="space-y-3">
            <h3 className="font-headline text-base font-bold text-primary flex items-center gap-2">
              <Tag className="w-4 h-4 text-secondary-gold" />
              <span>Common Formulation Applications</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-surface-container text-primary font-medium text-xs border border-secondary-gold/20 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-secondary-gold" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Available Documentation */}
          <div className="space-y-3">
            <h3 className="font-headline text-base font-bold text-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary-gold" />
              <span>Available Batch Documentation (Upon Request)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.availableDocumentation.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-on-surface bg-surface-container-low/60 p-2.5 rounded-lg border border-secondary-gold/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Disclaimer Note */}
          <div className="p-3 bg-surface-container-high/40 rounded-xl text-[11px] text-on-surface-variant flex items-start gap-2 border border-secondary-gold/15">
            <AlertCircle className="w-4 h-4 text-secondary-gold shrink-0 mt-0.5" />
            <span>
              Intended for commercial manufacturing, food processing and formulation use. Specifications and COA are verified per production lot. Samples available for qualified manufacturers.
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-surface-container-low border-t border-secondary-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-on-surface-variant hidden sm:block">
            Direct support: <strong className="text-primary">+91 7409940333</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* WhatsApp Enquiry Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-800 text-white rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-emerald-900 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Quote Request Modal Button */}
            <button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all shadow-sm active:scale-95"
            >
              <Send className="w-4 h-4 text-secondary-gold" />
              <span>Request Details / Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
