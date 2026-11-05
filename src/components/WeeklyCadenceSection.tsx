'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  BookOpen,
  MessageSquare,
  Award,
  Video
} from 'lucide-react';

export default function WeeklyCadenceSection() {
  const [selectedStream, setSelectedStream] = useState<'academic' | 'future'>('academic');

  const roadmapSteps = [
    {
      phase: 'Phase 1',
      week: 'Week 0',
      title: 'Diagnostic Benchmark',
      icon: '🎯',
      desc: '1-on-1 baseline assessment to identify knowledge gaps, comfort with abstract reasoning, and learning pace.'
    },
    {
      phase: 'Phase 2',
      week: 'Weeks 1–5',
      title: 'Core Concept Mastery',
      icon: '🧠',
      desc: 'Two 60-min live sessions weekly + weekly homework graded within 48h + dedicated 1-on-1 doubt clearing slot.'
    },
    {
      phase: 'Phase 3',
      week: 'Week 6',
      title: 'Mid-Term Checkpoint',
      icon: '📊',
      desc: 'Formative evaluation assessing retention, problem-solving speed, and adjusting syllabus pacing if needed.'
    },
    {
      phase: 'Phase 4',
      week: 'Weeks 7–11',
      title: 'Advanced & Capstone Lab',
      icon: '🔬',
      desc: 'Deep multi-step problem solving, experimental lab analysis, prompt portfolios, and debate rebuttals.'
    },
    {
      phase: 'Phase 5',
      week: 'Week 12',
      title: 'Capstone & Parent Report',
      icon: '🏆',
      desc: 'Live capstone presentations, comprehensive end-of-term written report, and 1-on-1 parent consultation.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-green text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Structured 36-Week Learning Cycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight leading-tight">
            How Learning Actually Happens at <span className="highlight-lime">EdNxt</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No guesswork. Every academic term follows a proven 12-week pedagogical rhythm with scheduled diagnostic checks, continuous feedback, and live capstones.
          </p>
        </div>

        {/* 5-Step Animated Term Lifecycle Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-edbg border border-slate-200/80 shadow-soft card-hover-effect flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-2 rounded-xl bg-white border border-slate-100 shadow-xs group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy text-white">
                    {step.week}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">{step.phase}</div>
                  <h3 className="text-sm font-black text-navy mt-0.5">{step.title}</h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-blue">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Documented Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Weekly Cadence Simulator */}
        <div className="bg-gradient-to-r from-navy via-navy-dark to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-card-hover">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-navy-light/40">
            <div>
              <span className="text-xs font-bold text-brand-lime uppercase tracking-wider block">
                Weekly Student Schedule Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                A Predictable, Student-Friendly Routine
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1.5 bg-navy rounded-2xl border border-navy-light/60">
              <button
                type="button"
                onClick={() => setSelectedStream('academic')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedStream === 'academic'
                    ? 'bg-brand-blue text-white shadow-soft'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🔬 Science & Mathematics
              </button>
              <button
                type="button"
                onClick={() => setSelectedStream('future')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedStream === 'future'
                    ? 'bg-brand-lime text-navy shadow-soft'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                🤖 AI & Public Speaking
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {selectedStream === 'academic' ? (
              <>
                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <Video className="w-4 h-4" />
                    <span>Live Class Session 1 (60 Min)</span>
                  </div>
                  <div className="text-base font-bold text-white">Interactive Concept Discovery</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Socratic inquiry, formula derivations, and live problem breakdowns. Small cohorts (max 8–10 students).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <Video className="w-4 h-4" />
                    <span>Live Class Session 2 (60 Min)</span>
                  </div>
                  <div className="text-base font-bold text-white">Exam Application & Problem Solving</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Solving past school exam questions, higher-order thinking puzzles, and multi-step word problems.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <MessageSquare className="w-4 h-4" />
                    <span>1-on-1 Doubt Slot + Graded Homework</span>
                  </div>
                  <div className="text-base font-bold text-white">Individualized Feedback</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Weekly homework marked with line-by-line teacher feedback + 20-minute 1-on-1 doubt clearing.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <Sparkles className="w-4 h-4" />
                    <span>Hands-On Studio Lab (75 Min)</span>
                  </div>
                  <div className="text-base font-bold text-white">Prompting, Notebooks & Debates</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Students use real generative AI models to build study guides, while speakers practice live table topics.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <Video className="w-4 h-4" />
                    <span>Video Playback & Peer Feedback</span>
                  </div>
                  <div className="text-base font-bold text-white">Constructive Rubric Scoring</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Students review recorded speaking rounds, analyze posture and pauses, and conduct ethical AI audits.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-navy border border-navy-light/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-lime">
                    <Award className="w-4 h-4" />
                    <span>Term Capstone Defense</span>
                  </div>
                  <div className="text-base font-bold text-white">Youth Summit & AI Showcase</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every student completes and defends a real working capstone project before peers and academic mentors.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-navy-light/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-300">
              Timings: After-school weekday evening slots & Saturday morning batches available.
            </span>
            <Link
              href="/free-trial"
              className="px-6 py-2.5 rounded-full font-bold text-xs bg-brand-lime text-navy hover:bg-brand-lime-hover shadow-glow-lime transition-all"
            >
              Experience a Session (Free Trial) →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
