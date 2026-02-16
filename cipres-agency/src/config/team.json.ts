export type SocialPlatform = 'linkedin' | 'instagram' | 'twitter';

export type Social = {
  platform: SocialPlatform;
  url: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials: Social[];
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Ayesha Sufyan',
    role: 'CEO, Co-FOUNDER',
    image: '/images/team/audrey.webp',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/' },
      { platform: 'twitter', url: 'https://www.twitter.com/' },
    ],
  },
  {
    name: 'Muhammad Sufyan',
    role: 'CTO, Co-FOUNDER',
    image: '/images/team/Sufyan.jpeg',
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/' },
      { platform: 'instagram', url: 'https://www.instagram.com/' },
      { platform: 'twitter', url: 'https://www.twitter.com/' },
    ]
  }
  // {
  //   name: 'Mohammad Uzair Bawany',
  //   role: 'Technical Projects Lead',
  //   image: '/images/team/ethan.webp',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  //     { platform: 'instagram', url: 'https://www.instagram.com/' },
  //     { platform: 'twitter', url: 'https://www.twitter.com/' },
  //   ],
  // },
  // {
  //   name: 'Arsal Arif',
  //   role: 'Procurement Lead',
  //   image: '/images/team/audrey.webp',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  //     { platform: 'instagram', url: 'https://www.instagram.com/' },
  //     { platform: 'twitter', url: 'https://www.twitter.com/' },
  //   ],
  // },
  // {
  //   name: 'Muhammad Gigani',
  //   role: 'Partnerships Manager',
  //   image: '/images/team/audrey.webp',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  //     { platform: 'instagram', url: 'https://www.instagram.com/' },
  //     { platform: 'twitter', url: 'https://www.twitter.com/' },
  //   ],
  // },
  // {
  //   name: 'Zayyan',
  //   role: 'Cybersecurity Lead',
  //   image: '/images/team/audrey.webp',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  //     { platform: 'instagram', url: 'https://www.instagram.com/' },
  //     { platform: 'twitter', url: 'https://www.twitter.com/' },
  //   ],
  // },
  // {
  //   name: 'Ibrahim Ali Khan',
  //   role: 'ERP Solutions Lead',
  //   image: '/images/team/audrey.webp',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://www.linkedin.com/' },
  //     { platform: 'instagram', url: 'https://www.instagram.com/' },
  //     { platform: 'twitter', url: 'https://www.twitter.com/' },
  //   ]
  // }
];

import { Linkedin, Instagram, Twitter } from '@lucide/astro'; // o tus iconos

export const getSocialIcon = (platform: SocialPlatform) => {
  const icons = {
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
  };
  return icons[platform];
};
