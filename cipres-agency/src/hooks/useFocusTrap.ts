import { useEffect, useRef } from "react";

export function useFocusTrap(active: boolean, containerRef: any) {
  const prevFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    // save the element that had the focus
    prevFocused.current = document.activeElement as HTMLElement;

    // selector to get all focusable elements
    const selector =
      'a[href]:not([disabled]):not([aria-hidden="true"]), ' +
      'button:not([disabled]):not([aria-hidden="true"]), ' +
      'textarea:not([disabled]):not([aria-hidden="true"]), ' +
      'input:not([disabled]):not([aria-hidden="true"]), ' +
      'select:not([disabled]):not([aria-hidden="true"]), ' +
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"]), ' +
      '[contenteditable]:not([contenteditable="false"]):not([aria-hidden="true"])';

    // get focusable elements
    const getFocusableElements = (): HTMLElement[] => {
      const elements = Array.from(
        containerRef.current.querySelectorAll(selector)
      ) as HTMLElement[];

      return elements.filter((el) => {
        // Excluir elementos que no son visibles
        const style = getComputedStyle(el);
        return (
          el.offsetParent !== null &&
          style.visibility !== 'hidden' &&
          style.display !== 'none' &&
          !el.hasAttribute('inert')
        );
      });
    };

    const focusableElements = getFocusableElements();

    // focus the first focusable element
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // handler for tab trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if we are in the first, go to the last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: if we are in the last, go to the first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);

      // restore focus to the previous element
      if (prevFocused.current && typeof prevFocused.current.focus === 'function') {
        prevFocused.current.focus();
      }
    };
  }, [active, containerRef]);
}
