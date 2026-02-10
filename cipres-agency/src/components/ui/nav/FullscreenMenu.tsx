import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { socialLinks, contactInfo } from '@/config/socialLinks.json';
import { navItems } from '@/config/navItems.json';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useScrollLock } from '@/hooks/useScrollLock';
import { MoveUpRight, X } from 'lucide-react';

export const FullscreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const focusStartRef = useRef<HTMLButtonElement | null>(null);

  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const NUM_SLICES = 8;

  const [currentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Listen for toggle event from Astro
  useEffect(() => {
    const handleToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsOpen(customEvent.detail.isOpen);
    };

    window.addEventListener('toggleMenu', handleToggle as EventListener);
    return () => window.removeEventListener('toggleMenu', handleToggle as EventListener);
  }, []);

  // Focus trap + restore previous focus
  useFocusTrap(isOpen, containerRef);
  // Scroll lock no DOM reload, 0 repaint
  useScrollLock(isOpen);

  // ESC close
  useEffect(() => {
    if (!isOpen) return;

    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [isOpen]);

  // close
  useEffect(() => {
    if (!containerRef.current || !isOpen) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return;

    const tl = gsap.timeline();

    // Initial state
    gsap.set(menuPanelRef.current, { x: '100%' });
    gsap.set(backdropRef.current, { opacity: 0 });
    gsap.set([linksRef.current.filter(Boolean), footerRef.current], { opacity: 0, y: 30 });
    gsap.set(slicesRef.current.filter(Boolean), { scaleX: 1 });

    // 1. Fade in backdrop
    tl.to(backdropRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    // 2. Slide in panel
    tl.to(menuPanelRef.current, {
      x: '0%',
      duration: 0.4,
      ease: 'power3.out',
    }, '-=0.15');

    // 3. Animating slices from top to bottom (revealing content)
    tl.to(slicesRef.current.filter(Boolean), {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.08, // Each slice animates with delay
      ease: 'power2.inOut',
    }, '-=0.3');

    // 4. Fade in content
    tl.to(linksRef.current.filter(Boolean), {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: 'power2.out',
    }, '-=0.4');

    tl.to(footerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.4');

  }, [isOpen]);

  // CLOSING ANIMATION (replace handleClose)
  const handleClose = () => {
    if (!containerRef.current) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setIsOpen(false);
      window.dispatchEvent(new CustomEvent('closeMenu'));
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent('closeMenu'));
      }
    });

    // 1. Fade out content
    tl.to([linksRef.current.filter(Boolean), footerRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.25,
      stagger: 0.03,
      ease: 'power2.in',
    });

    // 2. Animating slices from bottom to top (covering content)
    tl.to(slicesRef.current.filter(Boolean).reverse(), {
      scaleX: 1,
      duration: 0.3,
      stagger: 0.06,
      ease: 'power2.inOut',
    }, '-=0.1');

    // 3. Slide out panel
    tl.to(menuPanelRef.current, {
      x: '100%',
      duration: 0.3,
      ease: 'power3.inOut',
    }, '-=0.3');

    // 4. Fade out backdrop
    tl.to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.inOut',
    }, '-=0.3');
  };

  // BLOCK RETURN IF CLOSED
  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex justify-end h-dvh outline-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
      tabIndex={-1}
    >

      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={menuPanelRef}
        className="relative w-full md:w-[25%] min-w-[300px] h-dvh bg-[#0a0a0a] text-white flex flex-col shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 100 }}>
          {Array.from({ length: NUM_SLICES }).map((_, i) => (
            <div
              key={i}
              ref={(el) => { slicesRef.current[i] = el; }}
              className="absolute w-full bg-secondary"
              style={{
                height: `${100 / NUM_SLICES}%`,
                top: `${(100 / NUM_SLICES) * i}%`,
                transformOrigin: 'left center',
              }}
            />
          ))}
        </div>
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-secondary" />
            <span className="font-grotesk text-base tracking-widest text-muted">
              MENU
            </span>
          </div>

          <button
            onClick={handleClose}
            ref={focusStartRef}
            aria-label="Close menu"
            className="cursor-pointer rounded-full border border-muted p-2 hover:bg-white hover:text-black transition-colors duration-300 group"
          >
            <X className="group-hover:rotate-90 transition-transform duration-300"/>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
          <nav className="flex flex-col gap-1 min-h-full" aria-label="Main navigation">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  ref={(el) => { linksRef.current[index] = el; }}
                  className="group py-4 border-b border-white/10 flex items-start justify-between hover:pl-2 transition-all duration-300"
                  onClick={handleClose}
                >
                  <span
                    className={`font-anton-sc text-4xl md:text-5xl uppercase tracking-wide relative ${isActive ? 'text-secondary' : 'text-accent group-hover:text-white'
                      }`}
                  >
                    {item.title}
                    {isActive && (
                      <span className="absolute top-4.5 -right-6 w-3 h-3 bg-secondary" />
                    )}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <div
          ref={footerRef}
          className="p-6 md:p-8 shrink-0 bg-[#0a0a0a]"
        >
          <div className="flex flex-col gap-8">

            <div className="space-y-1">
              <span className="font-grotesk text-xs text-muted uppercase tracking-wider">
                (Email)
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block font-grotesk text-lg md:text-2xl text-secondary hover:text-white transition-colors break-all"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="space-y-2">
              <span className="font-grotesk text-xs text-muted uppercase tracking-wider">
                (Socials)
              </span>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group text-accent hover:text-white transition-colors font-grotesk text-sm md:text-xl"
                  >
                    {social.label}
                    <span className="ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <MoveUpRight className="text-secondary transition-transform duration-300"/>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
