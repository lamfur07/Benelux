import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { services } from '@/config/services.json';
import asteriskGif from '/gifs/asterisk.gif?url';

export default function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      ctx.current?.revert();
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!containerRef.current || isMobile) return;

    ctx.current = gsap.context(() => {
      const rows = containerRef.current?.querySelectorAll('.service-row');
      if (!rows) return;

      const targetRow = rows[index];
      const otherRows = Array.from(rows).filter((_, i) => i !== index);

      // Synchronized timeline to avoid jumps
      const tl = gsap.timeline({
        defaults: {
          ease: 'power1.inOut',
          duration: 0.8
        }
      });

      // TARGET ROW - Synchronized
      tl.to(targetRow.querySelector('.service-number'), {
        fontSize: '96px',
        color: '#a9a9a9',
        fontWeight: 400,
        overwrite: true
      }, 0)

        .to(targetRow.querySelector('.service-dot'), {
          opacity: 1,
          scale: 1,
          ease: 'back.out(1.2)',
          overwrite: true
        }, 0.15)

        .to(targetRow.querySelector('.service-image-container'), {
          width: 280,
          height: 180,
          opacity: 1,
          marginLeft: '1.5rem',
          marginRight: '1.5rem',
          overwrite: true
        }, 0)

        .to(targetRow.querySelector('.service-img'), {
          scale: 1,
          filter: 'grayscale(0%)',
          overwrite: true
        }, 0.1)

        .to(targetRow.querySelector('.service-title'), {
          y: -3,
          overwrite: true
        }, 0.1)

        // Description and tags appear together and quickly
        .to(targetRow.querySelector('.service-desc-content'), {
          opacity: 1,
          y: 0,
          duration: 0.4,
          overwrite: true
        }, 0.2)

        .to(targetRow.querySelector('.service-desc-container'), {
          height: "auto",
          paddingTop: '0.75rem',
          duration: 0.4,
          overwrite: true
        }, 0.2);

      // OTHER ROWS - Soft and simultaneous collapse
      otherRows.forEach(row => {
        tl.to(row.querySelector('.service-number'), {
          fontSize: '48px',
          color: 'rgba(169, 169, 169, 0.3)',
          fontWeight: 300,
          overwrite: true
        }, 0)

          .to(row.querySelector('.service-dot'), {
            opacity: 0,
            scale: 0.5,
            overwrite: true
          }, 0)

          .to(row.querySelector('.service-image-container'), {
            width: 0,
            height: 0,
            opacity: 0,
            marginLeft: 0,
            marginRight: 0,
            overwrite: true
          }, 0)

          .to(row.querySelector('.service-img'), {
            scale: 1.1,
            filter: 'grayscale(100%)',
            overwrite: true
          }, 0)

          .to(row.querySelector('.service-title'), {
            y: 0,
            overwrite: true
          }, 0)

          .to(row.querySelector('.service-desc-content'), {
            opacity: 0,
            y: -10,
            duration: 0.3,
            overwrite: true
          }, 0)

          .to(row.querySelector('.service-desc-container'), {
            height: 0,
            paddingTop: 0,
            duration: 0.3,
            overwrite: true
          }, 0);
      });

    }, containerRef);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || isMobile) return;

    ctx.current = gsap.context(() => {
      const rows = containerRef.current?.querySelectorAll('.service-row');
      if (!rows) return;

      rows.forEach(row => {
        gsap.to(row.querySelector('.service-number'), {
          fontSize: '48px',
          color: 'rgba(169, 169, 169, 0.5)',
          fontWeight: 300,
          duration: 1,
          ease: 'power1.out',
          overwrite: true
        });

        gsap.to(row.querySelector('.service-dot'), {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: true
        });

        gsap.to(row.querySelector('.service-image-container'), {
          width: 0,
          height: 0,
          opacity: 0,
          marginLeft: 0,
          marginRight: 0,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: true
        });

        gsap.to(row.querySelector('.service-img'), {
          scale: 1.1,
          filter: 'grayscale(100%)',
          duration: 0.6,
          ease: 'power2.out',
          overwrite: true
        });

        gsap.to(row.querySelector('.service-title'), {
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: true
        });

        gsap.to(row.querySelector('.service-desc-container'), {
          height: 0,
          paddingTop: 0,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: true,
        });
      });
    }, containerRef);
  };

  return (
    <div ref={containerRef} className="flex flex-col w-full" onMouseLeave={handleMouseLeave}>
      {services.map((service, index) => (
        <div
          key={service.number}
          className={`service-row border-t border-accent/10 transition-all duration-500 ${!isMobile ? 'cursor-pointer' : ''}`}
          {...(!isMobile && { onMouseEnter: () => handleMouseEnter(index) })}
        >
          <div className="flex flex-col md:flex-row w-full items-center py-10 md:py-12 px-2 md:px-8 relative overflow-hidden gap-8 md:gap-12">

            {/* Number with Red Dot - Desktop only */}
            <div className="hidden md:flex items-end md:w-48 shrink-0">
              <span className="service-number font-space-grotesk text-xl md:text-5xl text-muted font-light leading-none">
                {service.number}
              </span>
              <span className="service-dot w-3 h-3 bg-secondary leading-none opacity-0 scale-50 ml-3 mb-3" />
            </div>

            {/* Center Image Container - Initially hidden/collapsed */}
            <div className="service-image-container hidden md:flex w-0 h-0 opacity-0 overflow-hidden rounded-xl relative shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="service-img w-full h-full object-cover scale-110"
                style={{ filter: 'grayscale(100%)' }}
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1 justify-center z-10">

              {/* Title - Desktop only */}
              <h3 className="service-title hidden md:flex items-center font-space-grotesk text-2xl md:text-4xl space-x-2 tracking-wide text-accent">
                <span>{service.title}</span>
                <img src={asteriskGif} alt="" className="h-auto w-8 md:w-12 object-contain" />
              </h3>

              {/* Description Container - Height 0 initially, hidden on mobile */}
              <div className="service-desc-container hidden md:block h-0 overflow-hidden pt-0">
                <div className="service-desc-content opacity-0 -translate-y-[15px]">
                  <p className="font-poppins text-muted text-sm md:text-base max-w-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-accent-foreground border border-accent/15 text-base font-space-grotesk text-accent/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile View - Static */}
              <div className="block md:hidden">
                {/* Number - Mobile at top */}
                <div className="flex items-end justify-start mb-6">
                  <span className="font-space-grotesk text-5xl text-muted/50 font-light leading-none">
                    {service.number}
                  </span>
                </div>

                {/* Title - Mobile */}
                <h3 className="service-title flex items-center font-space-grotesk text-2xl space-x-2 tracking-wide text-accent mb-6">
                  <span>{service.title}</span>
                  <img src={asteriskGif} alt="" className="h-auto w-8 object-contain" />
                </h3>

                <p className="font-poppins text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="md:hidden block overflow-hidden rounded-xl my-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-accent/20 text-xs font-space-grotesk text-accent/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      ))}
      <div className="border-t border-accent/10"></div>
    </div>
  );
}
