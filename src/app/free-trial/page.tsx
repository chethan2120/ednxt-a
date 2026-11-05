import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeTrialForm from '@/components/FreeTrialForm';
import { Sparkles, CheckCircle, ShieldCheck, Clock, Award } from 'lucide-react';

export const metadata = {
  title: 'Book a Free Trial Class | EdNxt Academy',
  description: 'Experience an interactive 1-on-1 trial class in Science, Maths, AI, or Public Speaking. Zero obligation, diagnostic baseline included.',
};

export default function FreeTrialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 bg-gradient-to-b from-white via-soft-blue/20 to-edbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Obligation • 100% Free</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-navy leading-tight tracking-tight">
                Experience an <span className="highlight-lime">EdNxt Trial Class</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Before making any commitment, we invite you and your child to experience our teaching methodology firsthand. Pick any learning stream — Science, Maths, AI, or Public Speaking.
              </p>

              {/* What happens in trial box */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-4">
                <h3 className="text-sm font-bold text-navy uppercase tracking-wider">
                  What Happens in Your Free Trial:
                </h3>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>1-on-1 Interactive Session:</strong> A 45-minute live class with a subject mentor to gauge conceptual comfort.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Diagnostic Benchmark:</strong> Quick 15-minute diagnostic to identify foundational strengths and gap areas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Academic Consultation:</strong> A 10-minute debrief with parents explaining the child's learning roadmap.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0" />
                <div>
                  <strong className="text-navy font-bold block">Parent Privacy Guarantee</strong>
                  <span>Your contact details are strictly used to coordinate class timings. We never sell data.</span>
                </div>
              </div>
            </div>

            {/* Right Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading trial form...</div>}>
                <FreeTrialForm />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
