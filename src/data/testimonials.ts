export interface Testimonial {
  id: string;
  name: string;
  roleOrCompany: string;
  location: string;
  rating: number;
  review: string;
  date?: string;
  isDemo?: boolean;
}

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Sample Client",
    roleOrCompany: "Sample Nutrition Brand",
    location: "Delhi NCR",
    rating: 5,
    review: "Reliable communication, good product support and smooth coordination for our ingredient requirements.",
    date: "August 2026",
    isDemo: true,
  },
  {
    id: "review-2",
    name: "Sample Client",
    roleOrCompany: "Sample Health Foods Co.",
    location: "Haryana",
    rating: 5,
    review: "Good range of nutraceutical and herbal raw materials. Documentation and product details were provided promptly.",
    date: "July 2026",
    isDemo: true,
  },
  {
    id: "review-3",
    name: "Sample Client",
    roleOrCompany: "Sample Pharma & Wellness",
    location: "Uttar Pradesh",
    rating: 5,
    review: "Professional service and responsive support. We were able to discuss our bulk ingredient requirements efficiently.",
    date: "June 2026",
    isDemo: true,
  },
  {
    id: "review-4",
    name: "Sample Client",
    roleOrCompany: "Sample Sports Nutrition Labs",
    location: "India",
    rating: 5,
    review: "Good experience for sourcing nutrition ingredients. The team was responsive throughout the enquiry process.",
    date: "May 2026",
    isDemo: true,
  },
];
