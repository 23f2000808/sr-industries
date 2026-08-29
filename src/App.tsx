import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProductSection } from "./components/ProductSection";
import { ProductModal } from "./components/ProductModal";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { QualitySection } from "./components/QualitySection";
import { ProcessSection } from "./components/ProcessSection";
import { Testimonials } from "./components/Testimonials";
import { ReviewModal } from "./components/ReviewModal";
import { ContactSection } from "./components/ContactSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { Product } from "./data/products";
import { INITIAL_TESTIMONIALS, Testimonial } from "./data/testimonials";
import { MessageSquare, ArrowUp } from "lucide-react";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<string>("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Handle scroll for back-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setEnquiryProduct(productName);
    }
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleEnquireProduct = (product: Product) => {
    setSelectedProduct(null);
    setEnquiryProduct(`${product.name} (${product.category})`);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRequestDocumentation = () => {
    setEnquiryProduct("Product Documentation (COA & Specifications Request)");
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddReview = (newReview: Omit<Testimonial, "id" | "isDemo">) => {
    const reviewItem: Testimonial = {
      ...newReview,
      id: `review-${Date.now()}`,
      isDemo: false,
    };
    setTestimonials((prev) => [reviewItem, ...prev]);
    showToast("Review submitted successfully! Thank you for your feedback.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body selection:bg-primary/20 selection:text-primary">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-[90] max-w-md bg-primary text-white px-5 py-3.5 rounded-xl shadow-2xl border border-secondary-gold/40 flex items-center gap-3 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary-gold animate-ping" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Sticky Header Navigation */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById("products");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onContactClick={() => handleOpenEnquiry()}
        />

        {/* 2. About Us Section */}
        <About onEnquireClick={() => handleOpenEnquiry()} />

        {/* 3. Product Catalogue Section */}
        <ProductSection
          onViewProductDetails={handleViewProductDetails}
          onEnquireProduct={handleEnquireProduct}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Quality & Batch Documentation */}
        <QualitySection onRequestDoc={handleRequestDocumentation} />

        {/* 6. 4-Step Sourcing Workflow */}
        <ProcessSection />

        {/* 7. Client Reviews & Experience */}
        <Testimonials
          testimonials={testimonials}
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
        />

        {/* 8. Contact / Let's Discuss Your Requirement */}
        <ContactSection initialProduct={enquiryProduct} />

        {/* 9. Location / Serving Across India */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireProduct}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />

      {/* Floating Quick WhatsApp Floating Button */}
      <a
        href="https://wa.me/917409940333?text=Hello%20SR%20Enterprises%20India,%20I%20would%20like%20to%20enquire%20about%20raw%20materials%20pricing%20and%20specifications."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 p-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-xl hover-lift flex items-center justify-center border-2 border-white transition-transform active:scale-95 group"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute right-full mr-3 bg-on-surface text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-22 right-6 z-40 w-11 h-11 rounded-full bg-surface text-primary hover:bg-surface-container shadow-md border border-secondary-gold/40 flex items-center justify-center transition-all hover-lift"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
export default App;
