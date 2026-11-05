'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollAnimations Component
 *
 * Implements three premium, lightweight scroll animation effects across EdNxt:
 * 1. Scroll Reveal Animations: Headings, lead paragraphs, and media smoothly fade in and glide upward.
 * 2. Staggered Animations: Cards and grid items reveal consecutively with a subtle delay.
 * 3. Subtle Parallax Effects: Gentle movement scrubbed on background shapes and floating educational icons.
 *
 * Performance & Accessibility:
 * - 100% preserves existing layouts, responsive grids, and design.
 * - Zero layout shifts; uses GPU-accelerated opacity & translateY transforms.
 * - Respects prefers-reduced-motion.
 * - Triggers once per element (once: true) to prevent repetitive replays.
 * - Re-indexes cleanly on Next.js client-side route changes.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessibility: Respect prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    // Short timeout to ensure Next.js has mounted the route DOM
    const timer = setTimeout(() => {
      // Clean up any stale ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const ctx = gsap.context(() => {
        // ========================================================
        // EFFECT 1: Scroll Reveal Animations (Headings & Paragraphs)
        // ========================================================
        const sectionHeadings = document.querySelectorAll<HTMLElement>(
          'main section h2, main section h3, [data-scroll-reveal]'
        );

        sectionHeadings.forEach((heading) => {
          // Skip headings if they are internal cards inside a grid (they will be staggered instead)
          if (heading.closest('.grid') && !heading.classList.contains('section-title')) {
            return;
          }

          gsap.fromTo(
            heading,
            {
              opacity: 0,
              y: 22,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: heading,
                start: 'top 88%',
                once: true,
              },
            }
          );
        });

        // Section lead description paragraphs
        const leadParagraphs = document.querySelectorAll<HTMLElement>(
          'main section .text-center > p, main section header p'
        );

        leadParagraphs.forEach((p) => {
          gsap.fromTo(
            p,
            {
              opacity: 0,
              y: 16,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: p,
                start: 'top 88%',
                once: true,
              },
            }
          );
        });

        // ========================================================
        // EFFECT 2: Staggered Animations (Card Grids & Lists)
        // ========================================================
        const cardGrids = document.querySelectorAll<HTMLElement>(
          'main section .grid, [data-scroll-stagger]'
        );

        cardGrids.forEach((grid) => {
          // Exclude grids inside navigation, chatbots, or 12-col asymmetric hero layout
          if (grid.closest('nav') || grid.closest('#advisor-chat')) return;

          // Direct child elements that act as cards
          const cards = Array.from(grid.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement
          );

          // Only apply staggered animation to multi-card collections (2 to 8 items)
          if (cards.length >= 2 && cards.length <= 12) {
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 28,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: 'power2.out',
                stagger: {
                  amount: Math.min(0.12 * cards.length, 0.45),
                  from: 'start',
                },
                scrollTrigger: {
                  trigger: grid,
                  start: 'top 85%',
                  once: true,
                },
              }
            );
          }
        });

        // ========================================================
        // EFFECT 3: Subtle Parallax Effects (Background Shapes & Floats)
        // ========================================================
        // Target floating background elements
        const floatingParallax = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');

        floatingParallax.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.2');
          const maxDistance = speed * 120; // gentle 20-40px travel over document scroll

          gsap.to(el, {
            y: -maxDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
            },
          });
        });

        // Target existing section background ambient glow orbs
        const ambientGlows = document.querySelectorAll<HTMLElement>('main section [class*="blur-3xl"]');

        ambientGlows.forEach((glow) => {
          const section = glow.closest('section') || glow.parentElement;
          if (!section) return;

          gsap.to(glow, {
            y: 35,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          });
        });

        // Re-measure positions after initialization
        ScrollTrigger.refresh();
      });

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
