type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "WEB DESIGN",
    description: "Design web that fuses aesthetics and functionality. Structure, colors and typography aligned with your brand.",
    tags: ["UI/UX Design", "Responsive", "Prototyping", "Figma"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description: "Clean and optimized code. We create fast, secure and scalable sites using the latest technologies.",
    tags: ["Frontend", "Backend", "Performance", "SEO", "API"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
  },
  {
    number: "03",
    title: "QA Automation",
    description: "Automation-first testing that improves quality, reduces regression effort, and ensures every release is stable.",
    tags: ["Selenium", "Playwright", "Zephyr", "TestNG", "CI/CD"],
    image: "/images/OIP.jpg"
  },
  {
    number: "04",
    title: "Enterprise Resource Planning Solutions",
    description: "ERP consulting and implementation services to help businesses optimize workflows, and integrate systems.",
    tags: ["SAP", "ORACLE", "Integration", "Implementation"],
    image: "/images/ERP.png"
  },
  {
    number: "05",
    title: "Cybersecurity",
    description: "Security-focused solutions that protect your applications, data, and infrastructure with modern compliance-ready architectures.",
    tags: ["Vulnerabilities", "Risk Management", "Compliance", "Cloud Security"],
    image: "/images/CS.png"
  }
];
