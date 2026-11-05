import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import WhyUsSection from '@/components/WhyUsSection';
import Link from 'next/link';
import { Target, Heart, Sparkles, BookOpen, CheckCircle, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | EdNxt Academy',
  description: 'Learn about EdNxt’s vision for middle-school education (Grades 6–8): Academic rigor in Science & Maths paired with future-ready AI and Public Speaking.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-blue/20 to-edbg border-b border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
              Our Founding Mission
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight leading-tight">
              Honest Education for <span className="highlight-lime">Middle Schoolers</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              EdNxt was created around one core belief: Grades 6 to 8 are the most formative intellectual years of a child’s life. What they master today shapes their confidence for tomorrow.
            </p>
          </div>
        </section>

        {/* Why EdNxt Exists Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>The Middle School Dilemma</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
                  Bridging Rote Learning and <span className="text-brand-blue">Tomorrow’s Skills</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Most tuition centers focus exclusively on textbook cramming for tests, neglecting communication and modern technology. Meanwhile, coding bootcamps often teach superficial syntax without strengthening foundational science and mathematics.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong className="text-navy font-semibold">EdNxt unites both worlds.</strong> We provide rigorous, syllabus-aligned preparation for CBSE (NCERT) and British Key Stage 3, while equipping students with practical prompt engineering, research synthesis with Gemini Notebooks, and commanding public speaking skills.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-soft-blue/60 border border-blue-100">
                    <div className="text-2xl font-black text-navy mb-1">Grades 6–8</div>
                    <div className="text-xs text-slate-600">Tailored exclusively for ages 11–14</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-soft-green/60 border border-emerald-100">
                    <div className="text-2xl font-black text-navy mb-1">4 Streams</div>
                    <div className="text-xs text-slate-600">Science, Maths, AI & Public Speaking</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-card-hover border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Students collaborating positively in an educational workspace"
                    className="w-full h-96 sm:h-[420px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us: Detailed Matrix & 6 Differentiators */}
        <WhyUsSection />

        {/* Our 4 Core Pillars of Trust */}
        <section className="py-20 bg-edbg border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-black text-navy">Our Guiding Educational Values</h2>
              <p className="text-sm text-slate-600">
                As a new brand, our promise to parents is absolute transparency, genuine teaching care, and observable academic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-soft-blue text-brand-blue flex items-center justify-center font-bold text-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-navy">Honest Messaging</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We never fabricate years of experience or make unverified claims. We let our structured curriculum, rigorous diagnostics, and trial classes speak for themselves.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-soft-green text-emerald-600 flex items-center justify-center font-bold text-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-navy">Dedicated Care & Small Cohorts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every child learns differently. We keep cohorts intimate so teachers know every student by name and track their exact strengths and misconceptions.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-soft-purple text-purple-600 flex items-center justify-center font-bold text-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-navy">Future-Ready Relevance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI and public speaking are not afterthoughts or superficial electives. They are built systematically across three terms with capstone showcases.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-soft-orange text-amber-700 flex items-center justify-center font-bold text-lg">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-navy">Measured Milestones</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Week 0 diagnostic benchmarks, Week 6 mid-term checkpoints, and Week 12 comprehensive evaluations with written parent consultations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
