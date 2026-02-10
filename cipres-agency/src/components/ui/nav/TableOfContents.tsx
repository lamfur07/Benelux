import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  menuText?: string;
  onThisPageText?: string;
}

export default function TableOfContents({ 
  headings, 
  menuText = 'Menu',
  onThisPageText = 'On this page'
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Filter only h2 headings
  const h2Headings = headings.filter((heading) => heading.depth === 2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    // Observe all h2 elements
    const headingElements = h2Headings.map((heading) =>
      document.getElementById(heading.slug)
    );

    headingElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      headingElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [h2Headings]);

  useEffect(() => {
    const handleScroll = () => {
      const contentSection = document.querySelector('.project-content');
      if (contentSection) {
        const rect = contentSection.getBoundingClientRect();
        setIsSticky(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  if (h2Headings.length === 0) return null;

  return (
    <nav
      className={`relative ${isSticky ? 'md:sticky md:top-[100px]' : ''}`}
      aria-label="Table of contents"
    >
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-expanded={isOpen}
      >
        <span>{menuText}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      {/* Navigation List */}
      <div className={`mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <h3 className="mb-4 hidden text-base lg:text-lg uppercase tracking-wider font-space-grotesk text-white lg:block">
          {onThisPageText}
        </h3>
        <ul className="space-y-2">
          {h2Headings.map((heading) => (
            <li key={heading.slug}>
              <button
                onClick={() => scrollToHeading(heading.slug)}
                className={`block w-full border-l-2 py-2 pl-4 text-left text-lg transition-all cursor-pointer ${
                  activeId === heading.slug
                    ? 'border-secondary text-accent opacity-100'
                    : 'border-transparent text-white/70 hover:text-secondary hover:opacity-100'
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
