'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Award,
  CheckCircle,
  FileText,
  User,
  Calendar,
  Sparkles,
  BarChart,
  Info,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ProgressSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-edbg to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
            Continuous Transparency & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
            How Parents Track <span className="highlight-lime">Learning Progress</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Never wonder how your child is performing. Every week, term, and assessment milestone is documented in our comprehensive Parent Progress Portal.
          </p>
        </div>

        {/* Illustrative Sample Dashboard Visual */}
        <div className="relative rounded-3xl bg-navy-dark text-white p-6 sm:p-10 shadow-card-hover border border-slate-800 overflow-hidden mb-12">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

          {/* Sample Dashboard Top Header */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-navy-light/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-black text-lg">
                EK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-white">Student: Ethan K.</h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-lime/20 text-brand-lime font-bold border border-brand-lime/30">
                    Grade 7 / Year 8
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Curriculum: British KS3 • Stream: Full Bundle • Term 2 (Week 8 of 12)
                </p>
              </div>
            </div>

            {/* Illustrative Marker Notice */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-amber-300 text-xs font-semibold border border-amber-300/30">
              <Info className="w-4 h-4 shrink-0" />
              <span>Sample Dashboard — Illustrative Data</span>
            </div>
          </div>

          {/* Sample Metrics Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {/* Overall Progress */}
            <div className="bg-navy p-5 rounded-2xl border border-navy-light/60">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Overall Syllabus Progress</span>
                <span className="text-brand-lime font-bold">78%</span>
              </div>
              <div className="text-2xl font-black text-white mb-2">78% Complete</div>
              <div className="w-full h-2 rounded-full bg-navy-dark overflow-hidden">
                <div className="h-full bg-brand-lime rounded-full w-[78%]" />
              </div>
              <div className="text-[11px] text-slate-400 mt-2">Term 2: 18 of 24 core topics mastered</div>
            </div>

            {/* Assessment Performance */}
            <div className="bg-navy p-5 rounded-2xl border border-navy-light/60">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Assessment Average</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-white mb-2">89% <span className="text-xs text-emerald-400 font-normal">(Grade A)</span></div>
              <div className="w-full h-2 rounded-full bg-navy-dark overflow-hidden">
                <div className="h-full bg-brand-blue rounded-full w-[89%]" />
              </div>
              <div className="text-[11px] text-slate-400 mt-2">Week 6 Checkpoint: 92/100</div>
            </div>

            {/* Attendance & Participation */}
            <div className="bg-navy p-5 rounded-2xl border border-navy-light/60">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Live Attendance</span>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-white mb-2">100%</div>
              <div className="w-full h-2 rounded-full bg-navy-dark overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
              </div>
              <div className="text-[11px] text-slate-400 mt-2">16 of 16 live sessions attended</div>
            </div>

            {/* Capstone Milestone */}
            <div className="bg-navy p-5 rounded-2xl border border-navy-light/60">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>AI Capstone Status</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-black text-white mb-2">Draft Approved</div>
              <div className="w-full h-2 rounded-full bg-navy-dark overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full w-[65%]" />
              </div>
              <div className="text-[11px] text-slate-400 mt-2">Gemini Notebooks research completed</div>
            </div>
          </div>

          {/* 2-Column Split: Detailed Learning Progress & Personalised Insights */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Subject Mastery Breakdown (7 cols) */}
            <div className="lg:col-span-7 bg-navy p-6 rounded-2xl border border-navy-light/60 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BarChart className="w-4 h-4 text-brand-blue" />
                <span>Stream-by-Stream Learning Progress</span>
              </h4>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Science (Ecosystems & Chemical Energetics)</span>
                    <span className="text-brand-lime">88%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Mathematics (Cartesian Coordinates & Indices)</span>
                    <span className="text-brand-lime">92%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-dark rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>AI for Students (Gemini Notebooks & Prompt Design)</span>
                    <span className="text-brand-lime">84%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-dark rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full w-[84%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Public Speaking (Persuasive Debating & Rebuttals)</span>
                    <span className="text-brand-lime">86%</span>
                  </div>
                  <div className="w-full h-2 bg-navy-dark rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[86%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Personalised Insights & Teacher Feedback (5 cols) */}
            <div className="lg:col-span-5 bg-navy p-6 rounded-2xl border border-navy-light/60 space-y-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-lime" />
                  <span>Personalised Academic Insights</span>
                </h4>
                <div className="mt-3 p-3.5 rounded-xl bg-navy-dark border border-navy-light/40 text-xs text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white mb-1">Teacher Observation (Week 8):</p>
                  "Ethan has shown outstanding mastery of linear graphs and Hooke’s Law. In Public Speaking, his rebuttals have become far more structured using the AREI framework. Recommendation: Practice 2 more prompt variations for his AI sustainability capstone."
                </div>
              </div>

              {/* Download Parent Report CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-navy-light/40">
                <div className="text-[11px] text-slate-400">
                  Official PDF Term Report ready after Week 12
                </div>
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-navy hover:bg-slate-100 transition-colors"
                  onClick={() => alert('Sample illustrative report preview: Formal diagnostic scorecards and teacher rubrics are generated after every term!')}
                >
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Summary of Reporting Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-soft-blue text-brand-blue flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              1
            </div>
            <h4 className="text-base font-black text-navy mb-2">Week 0 Diagnostic Baseline</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every student starts with a benchmark test to identify knowledge gaps and calibrate live session pacing to their exact needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-soft-green text-emerald-600 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              2
            </div>
            <h4 className="text-base font-black text-navy mb-2">Week 6 Mid-Term Checkpoint</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formative checkpoints evaluate concept retention and provide immediate course corrections before end-of-term evaluations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-soft-purple text-purple-600 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
              3
            </div>
            <h4 className="text-base font-black text-navy mb-2">Week 12 Comprehensive Report</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Parents receive a comprehensive written report with rubric scores, teacher commentary, and a 1-on-1 consultation session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
