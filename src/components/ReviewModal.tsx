import React, { useState } from "react";
import { Testimonial } from "../data/testimonials";
import { X, Star, Sparkles, Send, CheckCircle2 } from "lucide-react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Omit<Testimonial, "id" | "isDemo">) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !review) return;

    onSubmitReview({
      name,
      roleOrCompany: company || "Nutraceutical Client",
      location: location || "India",
      rating,
      review,
      date: "Just now",
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setCompany("");
      setLocation("");
      setRating(5);
      setReview("");
      onClose();
    }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-on-surface/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface w-full max-w-lg rounded-2xl p-6 sm:p-8 ambient-shadow-lg gold-border relative text-left border border-secondary-gold/40 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary">Thank You!</h3>
            <p className="font-body text-sm text-on-surface-variant max-w-sm mx-auto">
              Your review has been submitted successfully and added to the client experience showcase.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-label font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-secondary-gold" />
                <span>Client Feedback</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary">
                Share Your Experience
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                We value your partnership. Help other nutrition formulators and brands learn about working with SR Enterprises India.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block font-label text-xs font-semibold text-primary mb-1.5">
                  Rating:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 text-secondary-gold focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? "fill-secondary-gold text-secondary-gold"
                            : "text-outline-variant"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-primary ml-2">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block font-label text-xs font-semibold text-primary mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Company / Brand Name */}
              <div>
                <label className="block font-label text-xs font-semibold text-primary mb-1">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. PureNutra Formulations"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block font-label text-xs font-semibold text-primary mb-1">
                  Location / State
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Delhi NCR / Gujarat"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block font-label text-xs font-semibold text-primary mb-1">
                  Your Review / Experience <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share details about product quality, batch documentation, dispatch speed, or communication..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="text-[11px] text-on-surface-variant">
                * Note: Submissions are displayed on this client demonstration website.
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-on-primary rounded-lg font-label text-sm font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Submit Review</span>
                <Send className="w-4 h-4 text-secondary-gold" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
