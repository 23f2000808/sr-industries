import React, { useState, useMemo } from "react";
import { Product, CATEGORIES, PRODUCTS_DATA } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Search, Sparkles, Filter, X, ArrowRight, PackageSearch } from "lucide-react";

interface ProductSectionProps {
  onViewProductDetails: (product: Product) => void;
  onEnquireProduct: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onViewProductDetails,
  onEnquireProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Filter products based on active category & search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.categoryKey === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        item.applications.some((a) => a.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    setVisibleCount(12); // reset page count
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setVisibleCount(12);
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface-container-lowest relative"
      id="products"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-label font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
            <span>Digital Raw Materials Catalogue</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight">
            Explore Our Product Portfolio
          </h2>

          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
            Browse our extensive range of high-quality nutraceutical, herbal, and sports nutrition raw materials. Sourced to stringent specifications for B2B manufacturing.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="space-y-6 mb-10">
          {/* Search Input Box */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-secondary-gold absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search raw materials (e.g. Creatine, Ashwagandha, Whey Isolate, Vitamin C, Curcumin)..."
                className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-secondary-gold/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface text-on-surface text-sm font-medium placeholder:text-on-surface-variant/60 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1.5 rounded-full hover:bg-surface-container text-on-surface-variant"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-4 py-2 rounded-full font-label text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm scale-102"
                      : "bg-surface text-on-surface-variant hover:text-primary hover:bg-surface-container border border-secondary-gold/20"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? "bg-secondary-gold text-white"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant px-2 pt-1 border-t border-secondary-gold/15">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-secondary-gold" />
              <span>
                Showing <strong className="text-primary">{displayedProducts.length}</strong> of{" "}
                <strong className="text-primary">{filteredProducts.length}</strong> items
                {selectedCategory !== "all" && (
                  <span>
                    {" "}in{" "}
                    <strong className="text-secondary-gold">
                      {CATEGORIES.find((c) => c.key === selectedCategory)?.name}
                    </strong>
                  </span>
                )}
              </span>
            </div>

            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="text-primary font-semibold hover:underline flex items-center gap-1 text-xs"
              >
                <span>Reset All Filters</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProductDetails}
                onEnquireNow={onEnquireProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-surface p-12 rounded-2xl ambient-shadow text-center max-w-md mx-auto space-y-4 border border-secondary-gold/30">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mx-auto">
              <PackageSearch className="w-8 h-8 text-secondary-gold" />
            </div>
            <h3 className="font-headline text-xl font-bold text-primary">No Matching Ingredients Found</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              We couldn't find any products matching "{searchQuery}". We also source specialized custom ingredients upon direct request.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleClearFilters}
                className="px-5 py-2 rounded-lg bg-surface-container text-primary font-label text-xs font-semibold hover:bg-surface-container-high transition-colors"
              >
                Clear Search
              </button>
              <button
                onClick={() => onEnquireProduct({
                  id: "custom-query",
                  name: searchQuery || "Custom Requirement",
                  category: "Specialty Sourcing",
                  categoryKey: "other-nutraceuticals",
                  shortDescription: "Custom requested ingredient",
                  description: "",
                  applications: [],
                  availableDocumentation: [],
                  packaging: "",
                  inStock: true,
                  image: "",
                  tags: [],
                })}
                className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm"
              >
                Enquire for "{searchQuery || 'Custom Ingredient'}"
              </button>
            </div>
          </div>
        )}

        {/* Load More / View Full Catalog Action */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-surface text-primary border border-primary/80 rounded-lg font-label text-sm font-semibold hover:bg-surface-container transition-all hover-lift shadow-sm group"
            >
              <span>Load More Ingredients ({filteredProducts.length - displayedProducts.length} remaining)</span>
              <ArrowRight className="w-4 h-4 text-secondary-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
