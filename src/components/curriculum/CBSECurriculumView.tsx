'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ALL_CURRICULA, ACADEMIC_FRAMEWORK, GRADE_MAPPINGS } from '@/lib/curriculumData';
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
  AlertCircle,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function CBSECurriculumView() {
  const [selectedGrade, setSelectedGrade] = useState<'Grade 6' | 'Grade 7' | 'Grade 8'>('Grade 6');
  const [selectedTerm, setSelectedTerm] = useState<1 | 2 | 3>(1);
  const [subjectFilter, setSubjectFilter] = useState<'All' | 'Science' | 'Mathematics'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);

  const gradeIndex = selectedGrade === 'Grade 6' ? 0 : selectedGrade === 'Grade 7' ? 1 : 2;
  const gradeMapping = GRADE_MAPPINGS[gradeIndex];

  const cbseTopics = ALL_CURRICULA.filter((t) => {
    const isCBSE = t.curriculum === 'CBSE';
    const isGrade = t.grade === selectedGrade;
    const isTerm = t.term === selectedTerm;
    const isSubject = subjectFilter === 'All' || t.subject === subjectFilter;

    const matchesSearch =
      searchQuery === '' ||
      t.termTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.topics.some(
        (sub) =>
          sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return isCBSE && isGrade && isTerm && isSubject && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-soft-blue/20 to-edbg border-b border-slate-200/60 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
              <span>National Council of Educational Research and Training (NCERT)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight leading-tight">
              CBSE Curriculum: <span className="highlight-lime">Grades 6–8</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Complete term-by-term syllabus for Science and Mathematics. Structured around 3 terms, 12 weeks each (36 weeks total), perfectly aligned with UAE school calendars.
            </p>

            {/* Quick switcher to British */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="text-xs text-slate-500 font-semibold">Equivalent Mapping:</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-navy shadow-xs">
                {gradeMapping.cbseGrade} ⟷ British {gradeMapping.britishYear} ({gradeMapping.ageGroup})
              </span>
              <Link
                href="/curriculum/british"
                className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1"
              >
                <span>Switch to British KS3 Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* NCERT Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Important Syllabus Disclaimer:</strong> {ACADEMIC_FRAMEWORK.ncertDisclaimer}
            </div>
          </div>
        </section>

        {/* Interactive Explorer Bar */}
        <section className="py-8 bg-edbg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-soft border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Grade Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-1">Select Grade:</span>
                  {(['Grade 6', 'Grade 7', 'Grade 8'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGrade(g)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedGrade === g
                          ? 'bg-navy text-white shadow-soft'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                {/* Term Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-1">Term:</span>
                  {[1, 2, 3].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTerm(t as 1 | 2 | 3)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedTerm === t
                          ? 'bg-brand-blue text-white shadow-xs'
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
                  {(['All', 'Science', 'Mathematics'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSubjectFilter(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        subjectFilter === s
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search CBSE topics..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cbseTopics.map((module) => (
                <div
                  key={module.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft flex flex-col justify-between"
                >
                  <div className="space-y-4">
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
                          <span className="text-[11px] text-slate-400 block">{module.grade} • {module.duration}</span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">
                        Term {module.term}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-navy">{module.termTitle}</h3>

                    {/* Topics List with Drawer */}
                    <div className="space-y-2.5">
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
                      className="text-xs font-bold text-brand-blue hover:text-navy flex items-center gap-1"
                    >
                      <span>Explore Course Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/free-trial?curriculum=cbse&grade=${module.grade}&stream=${module.subject}`}
                      className="px-4 py-1.5 rounded-full text-xs font-bold bg-navy text-white hover:bg-brand-blue transition-colors"
                    >
                      Book Trial Class
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
