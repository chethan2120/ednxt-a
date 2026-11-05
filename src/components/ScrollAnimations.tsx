'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollAnimations Component (High-Performance Compositor Edition)
 *
 * Implements silky-smooth, native 60/120fps scroll reveal and staggered animations
 * across EdNxt using native browser IntersectionObserver and GPU-accelerated CSS transforms.
 *
 * Performance Advantages:
 * - 0 main-thread scroll event listeners (zero scroll jank or friction)
 * - 0 layout shifts (elements maintain exact flow dimensions)
 * - Uses GPU compositor translate3d & opacity transitions
 * - Elements are unobserved immediately upon entering (zero ongoing CPU/GPU overhead)
 * - Respects prefers-reduced-motion
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's accessibility motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.querySelectorAll('.scroll-reveal, .scroll-stagger-item').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Set up high-performance IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px', // triggers just as element approaches visible area
        threshold: 0.05,
      }
    );

    // 1. Tag and observe Section Headings & Lead Paragraphs
    const headings = document.querySelectorAll<HTMLElement>(
      'main section h2, main section h3, [data-scroll-reveal]'
    );
    headings.forEach((heading) => {
      if (heading.closest('.grid')) return; // cards handle their own heading
      heading.classList.add('scroll-reveal');
      observer.observe(heading);
    });

    const leadParagraphs = document.querySelectorAll<HTMLElement>(
      'main section .text-center > p, main section header p'
    );
    leadParagraphs.forEach((p) => {
      p.classList.add('scroll-reveal');
      observer.observe(p);
    });

    // 2. Tag and observe Cards in Grids for Staggered Reveal
    const grids = document.querySelectorAll<HTMLElement>(
      'main section .grid, [data-scroll-stagger]'
    );

    grids.forEach((grid) => {
      if (grid.closest('nav') || grid.closest('#advisor-chat')) return;

      const cards = Array.from(grid.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement
      );

      // Apply staggered indexing to multi-card collections (2 to 12 items)
      if (cards.length >= 2 && cards.length <= 12) {
        cards.forEach((card, idx) => {
          card.classList.add('scroll-stagger-item');
          card.style.setProperty('--stagger-idx', String(Math.min(idx, 6)));
          observer.observe(card);
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
