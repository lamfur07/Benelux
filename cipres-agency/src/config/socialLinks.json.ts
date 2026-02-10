import { Instagram, Linkedin, Twitter, Facebook, type Icon as IconType } from '@lucide/astro';

export type SocialLink = {
  icon?: typeof IconType;
  href: string;
  label: string;
};

export type ContactInfo = {
  address: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
  phone: string;
  workingHours: string;
  workingDays: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'X' },
];


export const contactInfo: ContactInfo = {
  address: {
    street: "202-7101 North Cicero Avenue",
    city: "Lincolnwood, IL 60712", 
    country: "United States",
  },
  email: "projects@tniprofessionals.com",
  phone: "(+1) 773 500 6305",
  workingHours: "Monday - Friday | 9AM - 6PM",
  workingDays: "Sat-Sun: Closed",
};
