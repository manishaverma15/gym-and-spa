export interface FooterLink {
  label: string;
  href: string;
}

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const programLinks: FooterLink[] = [
  { label: "Strength Training", href: "/programs/strength" },
  { label: "Yoga & Meditation", href: "/programs/yoga" },
  { label: "Cardio & HIIT", href: "/programs/cardio" },
  { label: "Spa & Recovery", href: "/programs/spa" },
];
