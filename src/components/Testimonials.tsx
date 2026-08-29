import React from "react";
import { Testimonial } from "../data/testimonials";
import { Star, MessageSquareQuote, Plus, Sparkles } from "lucide-react";

interface TestimonialsProps {
  testimonials: Testimonial[];
  onOpenReviewModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  onOpenReviewModal,
}) => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-surface-container-low/50 relative overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-label font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-secondary-gold" />
            <span>Trusted Sourcing Partner</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-primary leading-tight">
            What Our Clients Say
          </h2>

          <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto">
            Trusted by businesses looking for reliable nutraceutical, herbal and sports nutrition raw materials.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-surface p-6 rounded-2xl ambient-shadow border-t-4 border-primary/40 flex flex-col justify-between hover-lift transition-all text-left border-x border-b border-secondary-gold/20 relative group"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-secondary-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary-gold text-secondary-gold"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-xs sm:text-sm text-on-surface italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="mt-6 pt-4 border-t border-secondary-gold/15 flex items-center justify-between">
                <div>
                  <h4 className="font-headline text-sm font-bold text-primary">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-on-surface-variant font-medium">
                    {item.roleOrCompany} • {item.location}
                  </p>
                </div>
                {item.isDemo && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant uppercase tracking-wider font-semibold">
                    Demo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Share Experience Banner */}
        <div className="mt-14 max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-surface border border-secondary-gold/30 ambient-shadow text-center space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary mx-auto">
            <MessageSquareQuote className="w-6 h-6 text-secondary-gold" />
          </div>

          <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary">
            Have Worked With SR Enterprises India?
          </h3>

          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto">
            We value your business and continuous feedback. Share your experience regarding product quality, lead times, and support.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenReviewModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all hover-lift shadow-sm"
            >
              <Plus className="w-4 h-4 text-secondary-gold" />
              <span>Submit a Review</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
