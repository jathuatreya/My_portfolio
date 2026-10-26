// --------------------------------------
// ⭐ TESTIMONIALS & ENDORSEMENTS
// --------------------------------------

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    name: "Dr. A. Thanikaparan",
    role: "Founder & Chief Doctor – Dishan Siddha Ayurvedha Skin Care Clinic",
    quote:
      "Jathushan designed and developed our clinic's web application with remarkable dedication and medical precision. Patient appointments and treatment showcases run smoothly, and our patient outreach expanded tremendously.",
  },
  {
    name: "S. Pavishan Sivakumaran",
    role: "Civil Engineer & Structural Consultant – UK",
    quote:
      "Jathushan developed an exceptional, modern portfolio showcasing my civil engineering projects in the UK. His technical expertise in Next.js, aesthetic UI sense, and swift delivery exceeded every expectation.",
  },
  {
    name: "Kularaj",
    role: "Managing Director – Vinngam Guest House",
    quote:
      "Jathushan created an elegant digital showcase and reservation experience for Vinngam Guest House. The website is lightning-fast, beautifully designed, and has noticeably elevated our hospitality brand.",
  },
  {
    name: "Dr. Logehan",
    role: "Medical Officer & Healthcare Consultant",
    quote:
      "Collaborating with Jathushan was a first-class experience. He translated complex clinical requirements into an intuitive, user-friendly portal with great reliability and attention to data integrity.",
  },
  {
    name: "Dr. Mayooran",
    role: "Medical Practitioner & Wellness Advisor",
    quote:
      "Jathushan stands out for his technical excellence, communication, and deep commitment to quality. He delivered a fast, beautifully responsive platform and offered outstanding support throughout.",
  },
  {
    name: "Mathumithan",
    role: "Tech Entrepreneur & Enterprise Client",
    quote:
      "A talented full-stack engineer who genuinely understands business logic and scalability. Jathushan delivered our automated systems ahead of schedule with spotless code architecture.",
  },
 
] as const;
