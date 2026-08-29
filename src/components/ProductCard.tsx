import React from "react";
import { Product } from "../data/products";
import { Eye, Send, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onEnquireNow: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onEnquireNow,
}) => {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden ambient-shadow gold-border hover-lift group flex flex-col justify-between text-left transition-all duration-300 border border-secondary-gold/20">
      {/* Product Image Box */}
      <div className="h-48 sm:h-52 overflow-hidden relative bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
          onError={(e) => {
            // Fallback gracefully if an external image fails to load
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />

        {/* Availability Badge */}
        <div className="absolute top-3 right-3 bg-primary/95 text-white backdrop-blur-md px-2.5 py-1 rounded-full font-label text-[10px] tracking-wider uppercase font-semibold border border-secondary-gold/40 shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>In Stock</span>
        </div>

        {/* Quick View Button on Image hover */}
        <button
          onClick={() => onViewDetails(product)}
          className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-label text-xs font-semibold backdrop-blur-[2px]"
          aria-label={`Quick view ${product.name}`}
        >
          <span className="px-3.5 py-1.5 rounded-full bg-surface text-primary shadow-md flex items-center gap-1.5 hover:bg-secondary-fixed transition-colors">
            <Eye className="w-3.5 h-3.5" />
            <span>View Specifications</span>
          </span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Category Tag */}
          <div className="flex items-center justify-between text-xs font-label text-secondary-gold font-semibold tracking-wider uppercase">
            <span className="truncate max-w-[85%]">{product.category}</span>
            <Sparkles className="w-3 h-3 text-secondary-gold shrink-0" />
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-headline text-lg sm:text-xl font-bold text-primary hover:text-primary-container cursor-pointer transition-colors line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="font-body text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Pricing Note */}
          <div className="pt-2 flex items-center justify-between text-xs border-t border-secondary-gold/15">
            <span className="text-on-surface-variant font-medium text-[11px]">Commercial Supply:</span>
            <span className="font-semibold text-primary text-[12px] bg-surface-container px-2 py-0.5 rounded-md border border-secondary-gold/20">
              Available on enquiry
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={() => onViewDetails(product)}
            className="py-2.5 px-3 border border-primary/40 text-primary rounded-lg font-label text-xs font-semibold hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <button
            onClick={() => onEnquireNow(product)}
            className="py-2.5 px-3 bg-primary text-on-primary rounded-lg font-label text-xs font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 group/btn"
          >
            <span>Enquire</span>
            <Send className="w-3 h-3 text-secondary-gold group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
