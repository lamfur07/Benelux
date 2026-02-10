import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import type { CollectionEntry } from 'astro:content';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  projects: CollectionEntry<'projects'>[];
}

export const ProjectsList = ({ projects }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectItems = gsap.utils.toArray<HTMLElement>('.project-item');

      projectItems.forEach((item, i) => {
        // Trigger for change active index
        ScrollTrigger.create({
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveIndex(prev => (prev === i ? prev : i)),
          onEnterBack: () => setActiveIndex(prev => (prev === i ? prev : i)),
        });

        // Image scaling effect - grows as it enters, shrinks as it leaves
        const img = item.querySelector('.scale-wrapper');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 0.6 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'center center',
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            img,
            { scale: 1 },
            {
              scale: 0.6,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'center center',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-primary text-accent min-h-dvh">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column - Sticky */}
        <div className="lg:w-2/5 lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Counter Number - Slot machine animation */}
            <div className="hidden lg:block overflow-hidden h-36 mb-12">
              <div
                className="transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${activeIndex * 144}px)` }}
              >
                {projects.map((_, idx) => (
                  <div key={idx} className="h-36 flex items-start">
                    <span className="text-9xl font-anton-sc leading-none text-accent">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-9xl font-anton-sc leading-none text-secondary">.</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Menu */}
            <nav className="space-y-4">
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => {
                    const element = document.getElementById(`project-${idx}`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`flex items-center gap-4 transition-all duration-300 cursor-pointer hover:text-accent/70 ${idx === activeIndex ? 'text-accent' : 'text-accent/30'
                    }`}
                >
                  <span
                    className={`h-px bg-current transition-all duration-300 ${idx === activeIndex ? 'w-10' : 'w-5'
                      }`}
                  />
                  <span className="text-sm font-space-grotesk uppercase tracking-widest text-left">
                    {project.data.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Section - Project Info */}
          <div className="mt-auto pt-12 hidden lg:block">
            {/* Title - Slot machine animation */}
            <div className="overflow-hidden h-20 mb-4">
              {/* <div
                className="transition-transform duration-700 ease-out flex flex-col"
                style={{ transform: `translateY(-${activeIndex * 80}px)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="h-20 flex items-center flex-shrink-0">
                    <h2 className="font-bold font-space-grotesk whitespace-nowrap"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
                      {project.data.title}
                    </h2>
                  </div>
                ))}
              </div> */}

              <div
                className="transition-transform duration-700 ease-out flex flex-col"
                style={{ transform: `translateY(-${activeIndex * 80}px)` }}
              >
                {projects.map((project) => {
                  // 1. Check if the title is long (e.g., more than 10 characters)
                  const isLongTitle = project.data.title.length > 10;

                  return (
                    <div key={project.id} className="h-20 flex items-center flex-shrink-0">
                      <h2 
                        className={`
                          font-bold font-space-grotesk whitespace-nowrap
                          ${/* 2. If long, use smaller text (3xl/4xl). If short, use big text (5xl/6xl) */ ''}
                          ${isLongTitle ? 'text-3xl lg:text-4xl' : 'text-5xl lg:text-6xl'}
                        `}
                      >
                        {project.data.title}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description - Fade */}
            <div className="relative h-16">
              {projects.map((project, idx) => (
                <p
                  key={project.id}
                  className={`absolute inset-0 text-accent/70 text-base transition-opacity duration-500 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {project.data.description}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Images */}
        <div className="lg:w-3/5 space-y-8 lg:space-y-40 py-0 lg:py-24">
          {projects.map((project, idx) => (
            <div key={project.id} id={`project-${idx}`} className="project-item">
              <div className="relative overflow-hidden rounded-xl">
                {/* Use a wrapper for the scaling effect */}
                <div className="scale-wrapper w-full lg:h-[600px] h-[400px] relative origin-center">
                  <img
                    src={project.data.image}
                    alt={project.data.title}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Glassmorphism Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                    <a href={`/projects/${project.id}`} className="backdrop-blur-xl bg-black/40 p-4 lg:p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 hover:bg-black/50">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white text-lg lg:text-xl font-medium">{project.data.title}</span>
                          <span className="text-white/40">/</span>
                          <span className="text-white/60 text-sm">{project.data.category}</span>
                        </div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-rotate-45">
                        <ArrowRight />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
