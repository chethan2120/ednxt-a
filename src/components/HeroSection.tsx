'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  BarChart3,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function HeroSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const heroFaqs = [
    {
      q: 'Which curriculum is right for my child: CBSE or British KS3?',
      a: 'We support both seamlessly! CBSE Grade 6 maps to British Year 7, Grade 7 to Year 8, and Grade 8 to Year 9. Both pathways share our dedicated future-skills streams (AI & Public Speaking).'
    },
    {
      q: 'How does the 100% Free Trial class work?',
      a: 'Parents select any stream (Science, Maths, AI, or Speech). Your child attends a live 45-minute 1-on-1 session with a mentor + diagnostic benchmark. Zero payment or commitment required.'
    },
    {
      q: 'What is the weekly schedule and live class duration?',
      a: 'Science & Maths feature two 60-minute live sessions weekly + weekly homework + 1 dedicated doubt-clearing slot. AI & Public Speaking feature one 60–75 minute studio session weekly.'
    },
    {
      q: 'Are classes interactive or pre-recorded videos?',
      a: '100% live and interactive in small cohorts. Teachers call on students, ask Socratic questions, review homework live, and provide immediate personalized feedback.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden pt-2 pb-14 lg:pt-4 lg:pb-20 bg-gradient-to-b from-white via-soft-blue/20 to-edbg">
      {/* Decorative Subtle Background Orbs */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-brand-lime/15 via-soft-blue/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left pt-1">
            {/* Top Grade Badge - Tightened spacing */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue border border-blue-200/60 text-brand-blue text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>Dedicated Middle School Programmes • Grades 6–8</span>
            </div>

            {/* Headline with required text and highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.12] tracking-tight">
              Build <span className="highlight-lime">Strong Foundations</span>.<br />
              Prepare for <span className="text-brand-blue">Tomorrow</span>.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A complete learning programme for Grades 6–8 — <strong className="text-navy font-semibold">Academic Excellence + Future-Ready Skills</strong>. Aligned with CBSE and British KS3 curricula.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/free-trial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-base bg-navy text-white hover:bg-navy-dark shadow-soft-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 text-brand-lime" />
              </Link>

              <Link
                href="/curriculum/cbse"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-white text-navy border-2 border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-all shadow-xs"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Our Programmes</span>
              </Link>
            </div>

            {/* Required Feature Indicators */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-soft-green text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Dual Pathway</div>
                  <div className="text-xs font-bold text-navy">CBSE & British Curriculum</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-soft-purple text-purple-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Comprehensive</div>
                  <div className="text-xs font-bold text-navy">Four Powerful Streams</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-full bg-soft-blue text-brand-blue flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Continuous Tracking</div>
                  <div className="text-xs font-bold text-navy">Assessments & Reports</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Natural Educational Photography & Trust Badges (5 cols on lg) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 rounded-4xl bg-gradient-to-tr from-brand-blue/20 to-brand-lime/30 blur-2xl opacity-60 -z-10" />

              {/* Main Card with Student Photo */}
              <div className="rounded-3xl overflow-hidden shadow-card-hover border-4 border-white bg-white">
                <div className="relative h-80 sm:h-96 lg:h-[400px] w-full bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
                    alt="Middle school students actively learning together in a bright, modern classroom"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />

                  {/* Floating Bottom Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-soft flex items-center justify-between border border-white/60">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 h-9 rounded-xl bg-soft-green flex items-center justify-center text-emerald-600 font-black text-base shrink-0">
                        1:1
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-navy truncate">Zero-Risk Free Trial</div>
                        <div className="text-[11px] text-slate-500 truncate">Pick any stream • No payment required</div>
                      </div>
                    </div>
                    <Link
                      href="/free-trial"
                      className="px-3.5 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-bold hover:bg-brand-blue-dark transition-colors shrink-0 ml-2"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Top Floating Feature Pill */}
              <div className="hidden sm:flex absolute -top-3 left-3 sm:left-4 bg-white py-2 px-3.5 rounded-2xl shadow-soft border border-slate-100 items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand-lime/40 text-navy font-black flex items-center justify-center text-xs">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Academic + Future-Ready</div>
                  <div className="text-[10px] text-slate-500">Science • Maths • AI • Speech</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Quick FAQ Module ("Parents Ask Most - Fast Answers") */}
        <div className="mt-12 pt-8 border-t border-slate-200/70">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-navy">Parents Ask Most — Quick Answers</h3>
                  <p className="text-xs text-slate-500">Instant answers before booking your free trial class</p>
                </div>
              </div>
              <Link
                href="/packages"
                className="text-xs font-bold text-brand-blue hover:text-navy inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View All FAQs & Tuition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {heroFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden transition-all duration-200 hover:border-brand-blue/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-navy hover:text-brand-blue transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-white text-slate-400 text-xs flex items-center justify-center font-bold shrink-0 border border-slate-200">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        activeFaq === idx ? 'rotate-180 text-brand-blue' : ''
                      }`}
                    />
                  </button>

                  {activeFaq === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
