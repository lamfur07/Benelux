export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Muhammad Ahmed',
    role: 'CTO',
    company: 'Avicenna AI',
    quote:
      'TNI transformed our vision into a powerful, real-world AI platform that truly understands the needs of modern healthcare. Their expertise in intelligent automation and natural language systems helped us deliver meaningful impact for both doctors and patients. The team combined technical excellence with strategic insight, making them an invaluable partner in bringing Avicena to life.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Valeria Mendoza',
    role: 'Director of Infrastructure and Security',
    company: 'Cybersecurity Inc.',
    quote:
      'TNI demonstrated exceptional expertise and professionalism throughout our security transformation initiative. Their team took the time to understand our environment and delivered a well-structured, phased deployment that significantly strengthened our overall security posture without disrupting our operations.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Marica Sanchez',
    role: 'Supervisor',
    company: 'Shipyards',
    quote:
      'TNI brought a new level of discipline and scalability to our QA process. Their automation framework significantly reduced manual effort while increasing our confidence in every release through continuous regression testing. What was once a reactive, time-consuming process is now a proactive and reliable system that supports our enterprise growth.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop',
  },
];