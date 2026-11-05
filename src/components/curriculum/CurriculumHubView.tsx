'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import {
  ALL_CURRICULA,
  ACADEMIC_FRAMEWORK,
  GRADE_MAPPINGS
} from '@/lib/curriculumData';
import {
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  FlaskConical,
  Compass,
  Search,
  ChevronDown,
  ChevronUp,
  Award,
  ShieldCheck,
  Check,
  ExternalLink,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function CurriculumHubView() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'CBSE' | 'British'>('CBSE');
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(0);
  const [selectedTerm, setSelectedTerm] = useState<1 | 2 | 3>(1);
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Science' | 'Mathematics'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const currentGradeMapping = GRADE_MAPPINGS[selectedGradeIndex];
  const currentGradeLabel =
    selectedCurriculum === 'CBSE'
      ? currentGradeMapping.cbseGrade
      : currentGradeMapping.britishYear;

  const filteredTopics = ALL_CURRICULA.filter((t) => {
    const matchCurr = t.curriculum === selectedCurriculum;
    const matchGrade = t.grade.toLowerCase().includes(currentGradeLabel.toLowerCase());
    const matchTerm = t.term === selectedTerm;
    const matchSubject = selectedSubject === 'All' || t.subject === selectedSubject;

    const matchesSearch =
      searchQuery === '' ||
      t.termTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.topics.some(
        (sub) =>
          sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchCurr && matchGrade && matchTerm && matchSubject && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-soft-blue/20 to-edbg border-b border-slate-200/60 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-navy uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
              <span>Interactive Middle School Curriculum Gateway</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-tight">
              Academic Excellence: <span className="highlight-lime">Grades 6–8</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive 36-week dual-pathway curriculum for CBSE (NCERT-aligned) and British Key Stage 3. Designed to build deep conceptual stamina and future-ready skills.
            </p>

            {/* Equivalent Grade Mapping Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2">
              {GRADE_MAPPINGS.map((gm, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedGradeIndex(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedGradeIndex === idx
                      ? 'bg-navy text-white border-navy shadow-soft-lg scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className={selectedGradeIndex === idx ? 'text-brand-lime' : 'text-brand-blue'}>
                      {gm.stage}
                    </span>
                    <span className={selectedGradeIndex === idx ? 'text-slate-300' : 'text-slate-400'}>
                      {gm.ageGroup}
                    </span>
                  </div>
                  <div className="text-sm font-black mt-1">
                    {gm.cbseGrade} ↔ {gm.britishYear}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 36-Week Framework Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200/80 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-black text-navy flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-blue" />
                  <span>The 36-Week Academic Framework (3 Terms per Year)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  12 weeks per term • Aligned with UAE school terms (Sep–Dec, Jan–Mar, Apr–Jun)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold border border-blue-100">
                  2 Live Classes / Wk + Doubt Clinic
                </span>
              </div>
            </div>

            {/* Assessment Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 relative overflow-hidden">
                <div className="w-2 h-full bg-brand-blue absolute left-0 top-0" />
                <span className="text-[10px] font-black text-brand-blue uppercase tracking-wider block pl-2">
                  Week 0
                </span>
                <h4 className="text-xs font-bold text-navy pl-2">Diagnostic Baseline</h4>
                <p className="text-[11px] text-slate-500 pl-2 leading-relaxed">
                  Identifies specific knowledge gaps before the term starts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 relative overflow-hidden">
                <div className="w-2 h-full bg-amber-500 absolute left-0 top-0" />
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block pl-2">
                  Week 6
                </span>
                <h4 className="text-xs font-bold text-navy pl-2">Mid-Term Checkpoint</h4>
                <p className="text-[11px] text-slate-500 pl-2 leading-relaxed">
                  Concept mastery quiz & problem-solving evaluation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 relative overflow-hidden">
                <div className="w-2 h-full bg-emerald-500 absolute left-0 top-0" />
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider block pl-2">
                  Week 12
                </span>
                <h4 className="text-xs font-bold text-navy pl-2">Summative Capstone</h4>
                <p className="text-[11px] text-slate-500 pl-2 leading-relaxed">
                  Final comprehensive evaluation & practical project.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 relative overflow-hidden">
                <div className="w-2 h-full bg-purple-500 absolute left-0 top-0" />
                <span className="text-[10px] font-black text-purple-600 uppercase tracking-wider block pl-2">
                  Post-Term
                </span>
                <h4 className="text-xs font-bold text-navy pl-2">Parent Report Card</h4>
                <p className="text-[11px] text-slate-500 pl-2 leading-relaxed">
                  1-on-1 counselor consultation & growth trajectory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NCERT Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Important Syllabus Disclaimer:</strong> {ACADEMIC_FRAMEWORK.ncertDisclaimer}
            </div>
          </div>
        </section>

        {/* Interactive Explorer */}
        <section className="py-6 pb-20 bg-edbg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Control Deck */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-soft border border-slate-200 space-y-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Curriculum Toggle */}
                <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedCurriculum('CBSE')}
                    className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedCurriculum === 'CBSE'
                        ? 'bg-navy text-white shadow-soft'
                        : 'text-slate-600 hover:text-navy'
                    }`}
                  >
                    <span>🏛️ CBSE (NCERT Aligned)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCurriculum('British')}
                    className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      selectedCurriculum === 'British'
                        ? 'bg-navy text-white shadow-soft'
                        : 'text-slate-600 hover:text-navy'
                    }`}
                  >
                    <span>🇬🇧 British Curriculum (KS3)</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics, chapters, labs..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                {/* Grade Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-1">Grade:</span>
                  {GRADE_MAPPINGS.map((gm, idx) => {
                    const label = selectedCurriculum === 'CBSE' ? gm.cbseGrade : gm.britishYear;
                    const isActive = selectedGradeIndex === idx;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedGradeIndex(idx)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-brand-blue text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Term Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-1">Term:</span>
                  {[1, 2, 3].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTerm(t as 1 | 2 | 3)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedTerm === t
                          ? 'bg-navy text-brand-lime shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      Term {t} (Wks 1–12)
                    </button>
                  ))}
                </div>

                {/* Subject Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-1">Subject:</span>
                  {(['All', 'Science', 'Mathematics'] as const).map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setSelectedSubject(sub)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedSubject === sub
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTopics.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                            module.subject === 'Science'
                              ? 'bg-soft-blue text-brand-blue'
                              : 'bg-soft-green text-emerald-800'
                          }`}
                        >
                          {module.subject === 'Science' ? (
                            <FlaskConical className="w-4 h-4" />
                          ) : (
                            <Compass className="w-4 h-4" />
                          )}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-navy">{module.subject}</span>
                          <span className="text-[11px] text-slate-400 block">{module.duration}</span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                        Term {module.term}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-navy leading-snug">
                      {module.termTitle}
                    </h3>

                    {/* Topics Accordion */}
                    <div className="space-y-3">
                      {module.topics.map((t, idx) => {
                        const topicKey = `${module.id}-${idx}`;
                        const isExpanded = expandedTopicId === topicKey;

                        return (
                          <div
                            key={idx}
                            onClick={() => toggleExpand(topicKey)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                              isExpanded
                                ? 'bg-soft-blue/30 border-blue-200'
                                : 'bg-slate-50/70 hover:bg-slate-100/70 border-slate-100'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="text-xs font-bold text-navy">
                                {idx + 1}. {t.title}
                              </div>
                              <button type="button" className="text-slate-400">
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            </div>

                            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                              {t.description}
                            </p>

                            {isExpanded && (
                              <div className="mt-3 pt-3 border-t border-slate-200/60 space-y-2 animate-in fade-in duration-200">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                  Subtopics Covered:
                                </div>
                                <ul className="space-y-1">
                                  {t.subtopics.map((st, sidx) => (
                                    <li
                                      key={sidx}
                                      className="text-[11px] text-slate-700 flex items-start gap-1.5"
                                    >
                                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{st}</span>
                                    </li>
                                  ))}
                                </ul>

                                {t.practicalActivity && (
                                  <div className="p-2 rounded-xl bg-soft-green/80 border border-emerald-200 text-[11px] text-emerald-900 font-semibold flex items-center gap-1.5 mt-2">
                                    <span>🔬 Lab Activity:</span>
                                    <span>{t.practicalActivity}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {module.capstone && (
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs">
                        <strong className="text-amber-900 font-bold block mb-0.5 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-600" />
                          Term Capstone Project:
                        </strong>
                        <span className="text-amber-800 text-[11px] leading-relaxed">
                          {module.capstone}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={module.subject === 'Science' ? '/courses/science' : '/courses/mathematics'}
                      className="text-xs font-bold text-brand-blue hover:text-navy flex items-center gap-1.5"
                    >
                      <span>View {module.subject} Stream</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/free-trial"
                      className="px-4 py-1.5 rounded-full text-xs font-bold bg-navy text-white hover:bg-brand-blue shadow-xs transition-colors"
                    >
                      Trial Class
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
