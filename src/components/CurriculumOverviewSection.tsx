'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Calendar,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Award,
  Layers,
  FileText
} from 'lucide-react';

export default function CurriculumOverviewSection() {
  const [activeGradeIndex, setActiveGradeIndex] = useState(0);

  const gradeTiers = [
    {
      gradeCbse: 'Grade 6',
      gradeBritish: 'Year 7',
      age: 'Ages 11–12',
      focus: 'Foundational Inquiry & Conceptual Bridging',
      description:
        'Smooth transition from primary to middle school. Cementing arithmetic, fractions, living organisms, and computational logic with zero learning anxiety.',
      scienceHighlight: 'Matter, Food Systems & Light Shadows',
      mathHighlight: 'Integers, Fractions & Introductory Algebra',
      skillHighlight: 'Block Coding & Voice Projection Fundamentals',
    },
    {
      gradeCbse: 'Grade 7',
      gradeBritish: 'Year 8',
      age: 'Ages 12–13',
      focus: 'Deepening Rigour & Abstract Reasoning',
      description:
        'Building intellectual stamina. Advancing into algebraic expressions, rational numbers, cellular biology, chemical reactions, and prompt design.',
      scienceHighlight: 'Heat, Acids/Bases & Respiration in Organisms',
      mathHighlight: 'Linear Equations, Rational Numbers & Geometry',
      skillHighlight: 'Machine Learning Models & Persuasive Debating',
    },
    {
      gradeCbse: 'Grade 8',
      gradeBritish: 'Year 9',
      age: 'Ages 13–14',
      focus: 'High School Readiness & Real-World Capstones',
      description:
        'Preparing students to enter Grade 9 / IGCSE / ICSE with confidence. Independent investigation, quadratic logic, micro-organisms, and ethics in AI.',
      scienceHighlight: 'Force, Pressure, Cell Structure & Combustion',
      mathHighlight: 'Exponents, Factorisation & Data Handling',
      skillHighlight: 'Full AI Capstone Project & Keynote Speech Showcase',
    },
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 relative overflow-hidden bg-white/70 backdrop-blur-sm border-y border-slate-100">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-blue border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            Transparent Curriculum Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5">
            Structured for Clarity.{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-blue">Designed for Real Mastery.</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-lime/50 -rotate-1 -z-0 rounded" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Parents deserve 100% clarity about what their children learn every term. We align rigorously to national and international standards, breaking middle school down into progressive, confidence-building milestones.
          </p>
        </div>

        {/* 3 Executive Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Dual International Alignment */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-navy text-white shadow-sm">
                <Compass className="w-3.5 h-3.5 text-brand-lime" />
                Two Global Boards
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-105 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Dual International Alignment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Direct cross-mapping between <strong className="text-navy">CBSE (NCERT rationalized)</strong> and <strong className="text-navy">British KS3 (National Curriculum)</strong>. Zero knowledge gaps whether preparing for Indian boards or UK GCSE pathways.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>CBSE Grade 6–8 ⟷ British Year 7–9 mapping</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Aligned with latest rationalized NCERT textbooks</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Seamless school exam syllabus synchronization</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="text-xs font-bold text-brand-blue flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Standardised syllabus progression <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: 36-Week Structured Cadence */}
          <div className="relative bg-white rounded-3xl p-8 border border-blue-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ring-2 ring-brand-blue/10">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-lime text-navy shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-navy" />
                36-Week Academic Flow
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-lime-50 border border-lime-200 flex items-center justify-center text-navy mb-6 group-hover:scale-105 transition-transform">
                <Calendar className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                36-Week Structured Cadence
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Three 12-week terms organized so concepts build sequentially. No panic-driven cramming before school exams — each week focuses on deep understanding and timely revision.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span><strong className="text-navy">Week 0:</strong> Baseline Diagnostic Assessment</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span><strong className="text-navy">Week 6:</strong> Formative Mid-Term Checkpoint</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span><strong className="text-navy">Week 12:</strong> Capstone Showcase & Parent Report</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="text-xs font-bold text-brand-blue flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Predictable weekly timetable <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Inquiry & Practical Labs */}
          <div className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-navy text-white shadow-sm">
                <FlaskConical className="w-3.5 h-3.5 text-brand-lime" />
                Applied Learning
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-6 group-hover:scale-105 transition-transform">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Inquiry & Hands-On Labs
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We believe concepts stick when students test them. Every topic combines solid theory with practical labs, visual proofs, and real-world projects that students present with pride.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Concrete-Representational-Abstract (CRA) Maths</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Virtual PhET Science Labs & Observation Logs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>AI Prompt Engineering & Live Speech Capstones</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <span className="text-xs font-bold text-brand-blue flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Practical learning evidence <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Grade-by-Grade Progression Selector (Fast visual preview) */}
        <div className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Fast Grade Glance</span>
              <h4 className="text-xl font-black text-navy mt-1">What Your Child Masters by Grade</h4>
            </div>
            {/* Grade Switcher Tabs */}
            <div className="inline-flex p-1 bg-white rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
              {gradeTiers.map((tier, idx) => (
                <button
                  key={tier.gradeCbse}
                  onClick={() => setActiveGradeIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeGradeIndex === idx
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                  }`}
                >
                  {tier.gradeCbse} / {tier.gradeBritish}
                </button>
              ))}
            </div>
          </div>

          {/* Active Grade Preview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-100/70 text-brand-blue text-xs font-bold">
                  {gradeTiers[activeGradeIndex].age}
                </span>
                <span className="text-xs text-slate-500 font-medium">36 Weeks Structured Syllabus</span>
              </div>
              <h5 className="text-lg font-bold text-navy">
                {gradeTiers[activeGradeIndex].focus}
              </h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                {gradeTiers[activeGradeIndex].description}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Science Highlight */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Science Focus
                </div>
                <div className="text-xs font-semibold text-navy leading-snug">
                  {gradeTiers[activeGradeIndex].scienceHighlight}
                </div>
              </div>

              {/* Math Highlight */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                  Mathematics Focus
                </div>
                <div className="text-xs font-semibold text-navy leading-snug">
                  {gradeTiers[activeGradeIndex].mathHighlight}
                </div>
              </div>

              {/* Future Skills Highlight */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700 mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  AI & Oratory Focus
                </div>
                <div className="text-xs font-semibold text-navy leading-snug">
                  {gradeTiers[activeGradeIndex].skillHighlight}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NCERT & Curriculum Transparency Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-10 flex items-start gap-3.5 max-w-4xl mx-auto">
          <FileText className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="font-semibold text-amber-950">Curriculum Fidelity Guarantee:</strong> EdNxt syllabi strictly follow rationalized NCERT textbooks for CBSE and the statutory Key Stage 3 national frameworks for British curricula. No outdated chapters, no guesswork. Every term is synchronized with what your child is tested on in school.
          </div>
        </div>

        {/* Primary Call to Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/curriculum"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-navy text-white font-bold text-base hover:bg-brand-blue shadow-lg hover:shadow-glow-blue transition-all duration-300 group"
          >
            <span>Explore Complete Term-by-Term Syllabus</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-brand-lime" />
          </Link>

          <Link
            href="/free-trial"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-navy font-bold text-base border-2 border-slate-200 hover:border-brand-lime hover:bg-soft-green/30 shadow-sm transition-all duration-300"
          >
            <span>Book a Free Diagnostic Trial</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
