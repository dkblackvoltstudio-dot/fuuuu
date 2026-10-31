export const contact = {
  address: "29/24 Harsha Bardhan Road, A-Zone, Durgapur 04, West Bengal, India",
  phones: ["+91 9832727520", "+91 8001891036"],
  emails: ["hintonevolutionbusiness@gmail.com", "info.tech@hintonevolution.com"],
  whatsapp: "918001891036",
};

export const websitePackages = [
  {
    name: "Essential",
    price: 20000,
    tagline: "A confident first step online.",
    details: "A clear, mobile-friendly website foundation for a business ready to grow its digital presence.",
    features: [
      "Modern, mobile-friendly website",
      "Up to 5 pages (e.g., Home, About, Services, Contact)",
      "Basic SEO setup",
    ],
  },
  {
    name: "Growth",
    price: 40000,
    tagline: "More room to stand out.",
    details: "A richer business website experience with flexible content and stronger customer journeys.",
    features: [
      "Feature-rich business website",
      "Up to 10–15 pages",
      "Advanced SEO & performance optimization",
      "Contact / enquiry integration",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: 80000,
    tagline: "A bigger digital foundation.",
    details: "A tailored, feature-forward build for ambitious businesses ready for a more capable platform.",
    features: [
      "Custom, feature-rich website",
      "15+ pages with advanced features",
      "Integrations (booking, payment, CRM, etc.)",
      "Higher performance & scalability",
    ],
  },
];

export type Service = { name: string; price: string; detail?: string };
export type ServiceGroup = { name: string; intro: string; color: string; services: Service[] };

export const serviceGroups: ServiceGroup[] = [
  { name: "Website Development Packages", intro: "Business-ready website foundations, from the first launch to a larger corporate presence.", color: "blue", services: [
    { name: "Starter Website", price: "₹25,000", detail: "Up to 8 pages; mobile responsive design; contact form & WhatsApp integration; basic SEO & SSL; Google Maps & social integration; speed optimization; 1 month support." },
    { name: "Business Website", price: "₹45,000", detail: "Everything in Starter; up to 20 pages & advanced UI/UX; blog & dynamic CMS; Google Analytics & Search Console; lead forms & security setup; advanced speed optimization; 3 months support." },
    { name: "Premium Corporate", price: "₹90,000", detail: "Everything in Business; unlimited pages & custom design; distributor/dealer portal; optional multi-language; HR/career portal & corporate forms; advanced SEO & premium security; 6 months support." },
  ] },
  { name: "Additional Web Services", intro: "Practical improvements and specialist website builds for every stage of business.", color: "sky", services: [
    { name: "Landing Page Design", price: "₹8,000" }, { name: "Website Redesign", price: "₹15,000" }, { name: "Website Speed Optimization", price: "₹7,500" }, { name: "WordPress Website Development", price: "₹20,000" }, { name: "E-commerce Development", price: "₹45,000" }, { name: "Shopify Development", price: "₹35,000" },
  ] },
  { name: "Branding & Creative", intro: "Make your brand memorable and consistent across every customer touchpoint.", color: "violet", services: [
    { name: "Logo Design", price: "₹5,000" }, { name: "Brand Identity Design", price: "₹20,000" }, { name: "Business Card Design", price: "₹2,000" }, { name: "Brochure Design", price: "₹8,000" }, { name: "Graphic Design", price: "₹2,500 onwards" },
  ] },
  { name: "Development & Technical Services", intro: "Thoughtful product engineering, integrations, hosting, and ongoing technical care.", color: "green", services: [
    { name: "Custom Web Development", price: "₹60,000" }, { name: "Application Development", price: "₹1,20,000" }, { name: "Mobile App Development", price: "₹1,80,000" }, { name: "UI/UX Design", price: "₹20,000" }, { name: "Payment Gateway Integration", price: "₹8,000" }, { name: "Content Management Setup", price: "₹10,000" }, { name: "Domain Registration & Setup", price: "₹2,000/year" }, { name: "Web Hosting", price: "₹4,000/year" }, { name: "Site Maintenance", price: "₹3,000/month" },
  ] },
  { name: "Social Media & Content", intro: "Consistent, polished creative for the channels your audience uses.", color: "orange", services: [{ name: "Social Media Post Design", price: "₹500/post" }] },
  { name: "Advertising", intro: "Campaign setup and management that keeps your paid presence intentional.", color: "red", services: [
    { name: "Google Ads Management", price: "₹15,000/month" }, { name: "Meta Ads Management", price: "₹15,000/month" }, { name: "Meta Campaign Management", price: "₹20,000/month" }, { name: "Meta Business Suite Setup", price: "₹5,000" },
  ] },
  { name: "SEO & Analytics", intro: "Build a stronger foundation for local discovery, measurement, and conversion.", color: "indigo", services: [
    { name: "SEO Audit", price: "₹8,000" }, { name: "Website Audit", price: "₹5,000" }, { name: "Local Search Analysis", price: "₹5,000" }, { name: "Search Engine Optimization", price: "₹15,000/month" }, { name: "Google Business Profile Setup", price: "₹5,000" }, { name: "Search Console Setup", price: "₹3,000" }, { name: "Google Analytics (GA4) Setup", price: "₹3,500" }, { name: "Google Tag Manager Setup", price: "₹3,500" }, { name: "Conversion Rate Optimization", price: "₹15,000" },
  ] },
  { name: "Digital Marketing", intro: "Connected marketing support across social, email, automation, and reputation.", color: "teal", services: [
    { name: "Digital Marketing", price: "₹20,000/month" }, { name: "Social Media Marketing", price: "₹15,000/month" }, { name: "Email Marketing", price: "₹10,000/month" }, { name: "Marketing Automation", price: "₹25,000" }, { name: "Lead Generation", price: "₹20,000/month" }, { name: "Online Reputation Management", price: "₹15,000/month" }, { name: "Digital Marketing Consulting", price: "₹10,000/session" },
  ] },
  { name: "B2B Business Services", intro: "Practical support for business-to-business growth and digital decision-making.", color: "purple", services: [
    { name: "Business-to-Business Service", price: "Custom quote" }, { name: "Telemarketing", price: "₹25,000/month" }, { name: "E-commerce Consulting", price: "₹20,000" }, { name: "Corporate Website Consultation", price: "₹10,000" },
  ] },
];

export const allServices = serviceGroups.flatMap((group) => group.services.map((service) => ({ ...service, category: group.name })));
