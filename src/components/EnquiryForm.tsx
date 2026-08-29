import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Building, User, FileText } from "lucide-react";

interface EnquiryFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialProduct = "",
  onSuccess,
}) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productsRequired, setProductsRequired] = useState(initialProduct);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductsRequired(initialProduct);
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !productsRequired) return;

    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => onSuccess(), 2500);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*New B2B Enquiry - SR Enterprises India*\n` +
      `*Name:* ${name || "N/A"}\n` +
      `*Company:* ${company || "N/A"}\n` +
      `*Phone:* ${phone || "N/A"}\n` +
      `*Email:* ${email || "N/A"}\n` +
      `*Products Required:* ${productsRequired || "N/A"}\n` +
      `*Message / Specs:* ${message || "Please share quotation and COA."}`
    );
    window.open(`https://wa.me/917409940333?text=${text}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-surface p-8 sm:p-10 rounded-2xl ambient-shadow border border-secondary-gold/40 text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-700" />
        </div>
        <h3 className="font-headline text-2xl font-bold text-primary">
          Enquiry Received Successfully!
        </h3>
        <p className="font-body text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to <strong>SR Enterprises India</strong>. Our team will review your product requirement (<strong>{productsRequired}</strong>) and share specifications and quotation promptly.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleSendViaWhatsApp}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-800 text-white rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Forward directly on WhatsApp</span>
          </button>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setCompany("");
              setPhone("");
              setEmail("");
              setProductsRequired("");
              setMessage("");
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-surface-container text-primary rounded-lg font-label text-xs sm:text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-6 sm:p-8 rounded-2xl ambient-shadow gold-border space-y-4 text-left border border-secondary-gold/30"
    >
      <div className="border-b border-secondary-gold/20 pb-4 mb-2">
        <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary">
          Request Commercial Quote & Specifications
        </h3>
        <p className="text-xs sm:text-sm text-on-surface-variant">
          Fill in your batch requirement below or connect with us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block font-label text-xs font-semibold text-primary mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-secondary-gold absolute left-3 top-3" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-label text-xs font-semibold text-primary mb-1">
            Company / Brand Name
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-secondary-gold absolute left-3 top-3" />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Nutraceuticals"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-label text-xs font-semibold text-primary mb-1">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-secondary-gold absolute left-3 top-3" />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-label text-xs font-semibold text-primary mb-1">
            Business Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-secondary-gold absolute left-3 top-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="procurement@company.com"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Products Required */}
      <div>
        <label className="block font-label text-xs font-semibold text-primary mb-1">
          Products / Ingredients Required <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <FileText className="w-4 h-4 text-secondary-gold absolute left-3 top-3" />
          <input
            type="text"
            required
            value={productsRequired}
            onChange={(e) => setProductsRequired(e.target.value)}
            placeholder="e.g. Creatine Monohydrate (200 Mesh), Ashwagandha Extract 5%, Whey Isolate"
            className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Message / Quantity */}
      <div>
        <label className="block font-label text-xs font-semibold text-primary mb-1">
          Estimated Quantity & Specific Requirements
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mention estimated batch quantity (e.g. 50 kg, 500 kg), target mesh, COA requirements, or delivery location..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-gold/30 bg-surface-container-low text-on-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          className="w-full sm:flex-1 py-3 bg-primary text-on-primary rounded-lg font-label text-sm font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 group"
        >
          <span>Send Enquiry</span>
          <Send className="w-4 h-4 text-secondary-gold group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={handleSendViaWhatsApp}
          className="w-full sm:w-auto px-5 py-3 bg-emerald-800 text-white rounded-lg font-label text-sm font-semibold hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Quick WhatsApp</span>
        </button>
      </div>

      <p className="text-[11px] text-on-surface-variant text-center pt-1">
        * No spam guarantee. We respect B2B confidentiality for all formulation inquiries.
      </p>
    </form>
  );
};
