import { useEffect, useRef } from 'react';

export function useScrollLock(active: boolean) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (!active) return;

    // save scroll position
    scrollY.current = window.scrollY;

    // save scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // get scrollable element
    const scrollContainer = document.documentElement;

    // apply lock styles
    scrollContainer.style.setProperty('overflow', 'hidden');
    scrollContainer.style.setProperty('height', '100vh');
    
    // compensate scrollbar to avoid jump
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // prevent scroll with events (to ensure total compatibility)
    const preventDefault = (e: Event) => {
      const target = e.target as HTMLElement;
      // allow scroll inside the menu (element with role="dialog")
      const isInsideDialog = target.closest('[role="dialog"]');
      if (!isInsideDialog) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // add listeners to prevent scroll
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      // remove listeners
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);

      // restore styles
      scrollContainer.style.removeProperty('overflow');
      scrollContainer.style.removeProperty('height');
      document.body.style.paddingRight = '';

      // restore scroll position
      window.scrollTo(0, scrollY.current);
    };
  }, [active]);
}
