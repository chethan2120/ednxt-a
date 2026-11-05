import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ClosingCTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden text-white">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-lime/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-dark border border-navy-light text-brand-lime text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Child’s Learning Journey</span>
        </div>

        {/* Required Headline */}
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Ready to get <span className="text-brand-lime">started</span>?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Give your middle-schooler the academic foundation and future-ready skills they need. Book an obligation-free 1-on-1 trial class today.
        </p>

        {/* Required Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/free-trial"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-base bg-brand-lime text-navy hover:bg-brand-lime-hover shadow-glow-lime transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 text-navy" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-navy-dark text-white border border-navy-light/60 hover:bg-navy-light transition-all"
          >
            <span>Speak With An Advisor</span>
          </Link>
        </div>

        {/* 3 Quick Guarantees */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            <span>100% Free 1-on-1 Trial Class</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            <span>Diagnostic Benchmark Included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            <span>No Credit Card or Commitment Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
