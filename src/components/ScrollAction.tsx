'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function ScrollAction() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const showScrollTopRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && progressBarRef.current) {
          const ratio = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }

        const isOver300 = window.scrollY > 300;
        if (isOver300 !== showScrollTopRef.current) {
          showScrollTopRef.current = isOver300;
          setShowScrollTop(isOver300);
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 1. Top Reading Scroll Progress Bar - High-performance GPU scaleX transform, 0 reflows */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-200/20"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-brand-blue via-brand-lime to-brand-blue origin-left will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* 2. Floating Action Controls (Appears on Scroll) */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 40 }}
      >
        {/* Floating Fast Trial Pill */}
        <Link
          href="/free-trial"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white text-xs font-bold shadow-card-hover hover:bg-navy-dark hover:scale-105 border border-white/20 transition-all duration-200 group"
          title="Book your 1-on-1 free trial session"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-lime group-hover:rotate-12 transition-transform" />
          <span>Book Free Trial</span>
          <span className="text-[10px] bg-brand-blue text-white px-2 py-0.5 rounded-full font-semibold">
            1-on-1
          </span>
        </Link>

        {/* Back To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-white text-navy border border-slate-200/90 shadow-card-hover hover:bg-navy hover:text-white hover:border-navy flex items-center justify-center transition-all duration-200 hover:-translate-y-1 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </>
  );
}
