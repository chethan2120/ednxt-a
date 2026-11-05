'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Brain,
  Compass,
  Award,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  BookOpen
} from 'lucide-react';

export default function WhyUsSection() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'pillars'>('matrix');

  const comparisonRows = [
    {
      feature: 'Grades 6–8 Specialized Focus',
      traditional: 'Generic K–12 one-size-fits-all model',
      edtech: 'Unsupervised recorded videos with low completion',
      ednxt: '100% focused on middle-school intellectual transitions',
    },
    {
      feature: 'Curriculum Synchronization',
      traditional: 'Delayed or disconnected from school terms',
      edtech: 'Generic overseas syllabus with no UAE alignment',
      ednxt: 'Parallel UAE school term alignment (CBSE NCERT & British KS3)',
    },
    {
      feature: 'Future Skills (AI & Oratory)',
      traditional: 'Ignored or treated as weekend hobby add-ons',
      edtech: 'Basic superficial drag-and-drop games',
      ednxt: 'Systematic 3-term stream: Prompting, Gemini research & TED talks',
    },
    {
      feature: 'Cohort Density & Care',
      traditional: 'Crowded halls of 25–40 passive students',
      edtech: 'Zero personal human interaction or live questioning',
      ednxt: 'Intimate cohorts (max 6–8) with dedicated 1-on-1 doubt slots',
    },
    {
      feature: 'Milestone Tracking',
      traditional: 'Only quarterly memorization test marks',
      edtech: 'Automated multiple-choice quiz scores',
      ednxt: 'Week 0 Diagnostic, Week 6 Checkpoint & Week 12 Capstone report',
    },
    {
      feature: 'Parent Transparency',
      traditional: 'Only brief annual parent-teacher conferences',
      edtech: 'Automated notification emails easily overlooked',
      ednxt: 'Comprehensive written term insights & direct educator feedback',
    },
  ];

  const differentiators = [
    {
      number: '01',
      title: 'Built Exclusively for the Middle School Leap',
      icon: Brain,
      color: 'bg-soft-blue text-brand-blue border-blue-200',
      description:
        'Ages 11–14 represent the vital transition from concrete thinking to abstract conceptual logic. We don’t dilute our methodology across kindergarten or university prep.',
    },
    {
      number: '02',
      title: 'Dual Curriculum Precision',
      icon: BookOpen,
      color: 'bg-soft-green text-emerald-800 border-emerald-200',
      description:
        'Full mastery of NCERT CBSE and British Key Stage 3 frameworks. Grade 6 / Year 7, Grade 7 / Year 8, and Grade 8 / Year 9 syllabi are respected and systematically mapped.',
    },
    {
      number: '03',
      title: 'Responsible AI & Digital Command',
      icon: Sparkles,
      color: 'bg-soft-purple text-purple-700 border-purple-200',
      description:
        'Instead of banning or fearing AI, we teach middle schoolers prompt engineering, Gemini Notebook synthesis, structured brainstorming, and strict ethical fact-checking.',
    },
    {
      number: '04',
      title: 'Stage Presence Before High School',
      icon: Users,
      color: 'bg-soft-orange text-amber-800 border-amber-200',
      description:
        'Public speaking anxiety solidifies in early adolescence if left unaddressed. Our 3-level progressive rhetoric studio develops articulation, poise, and impromptu speaking.',
    },
    {
      number: '05',
      title: 'No Long-Term Traps or Gimmicks',
      icon: ShieldCheck,
      color: 'bg-soft-blue text-navy border-blue-200',
      description:
        'No multi-year non-refundable lock-ins. We operate on transparent 12-week terms with honest milestones, clear pricing, and a complimentary 1-on-1 diagnostic trial.',
    },
    {
      number: '06',
      title: 'Scientific Method Over Memorization',
      icon: Target,
      color: 'bg-soft-green text-emerald-900 border-emerald-200',
      description:
        'We replace mindless formula regurgitation with inquiry-driven labs, hypothesis formulation, real-world data analysis, and mathematical proofs.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/60" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Why Choose EdNxt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
            Why Parents Choose <span className="highlight-lime">EdNxt</span> Over Traditional Tuitions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We reimagined middle-school education from first principles: combining the academic rigor of Science and Mathematics with the transformative future skills of AI and Public Speaking.
          </p>

          {/* Toggle View Tabs */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl gap-2 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('matrix')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'matrix'
                  ? 'bg-navy text-white shadow-soft'
                  : 'text-slate-600 hover:text-navy'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pillars')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pillars'
                  ? 'bg-navy text-white shadow-soft'
                  : 'text-slate-600 hover:text-navy'
              }`}
            >
              Our 6 Differentiators
            </button>
          </div>
        </div>

        {/* Tab 1: Comparison Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-5 text-xs font-extrabold text-navy uppercase tracking-wider w-1/4">
                      Educational Dimension
                    </th>
                    <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      Traditional Tuition Centers
                    </th>
                    <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      Generic EdTech Apps
                    </th>
                    <th className="p-5 text-xs font-extrabold text-brand-blue uppercase tracking-wider w-1/4 bg-soft-blue/40 border-l-2 border-brand-blue">
                      ✨ The EdNxt Advantage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 font-bold text-navy">
                        {row.feature}
                      </td>
                      <td className="p-5 text-slate-500">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-5 text-slate-500">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{row.edtech}</span>
                        </div>
                      </td>
                      <td className="p-5 font-semibold text-navy bg-soft-blue/20 border-l-2 border-brand-blue">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                          <span>{row.ednxt}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Experience the difference firsthand in a zero-pressure trial session.</span>
              <Link
                href="/free-trial"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark transition-all inline-flex items-center gap-1.5"
              >
                <span>Book 1-on-1 Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-lime" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2: 6 Core Differentiators */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.number}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black border ${diff.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-200 group-hover:text-brand-blue/30 transition-colors">
                        {diff.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-navy group-hover:text-brand-blue transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
                    <span>Designed for Grades 6–8</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
