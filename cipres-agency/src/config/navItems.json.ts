import { House, Mail, Folder, Info, type Icon as IconType } from "@lucide/astro";

export type NavItem = {
  title: string;
  href: string;
  icon?: typeof IconType;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: House },
  { title: "Projects", href: "/projects", icon: Folder },
  { title: "About Us", href: "/about", icon: Info },
  { title: "Contact Us", href: "/contact", icon: Mail },
];

export const footerOtherItems: NavItem[] = [
  { title: "Term of Use", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQ", href: "/contact/#faq" },
];
