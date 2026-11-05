'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_CURRICULA, ACADEMIC_FRAMEWORK, GRADE_MAPPINGS } from '@/lib/curriculumData';
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Layers,
  FileText,
  Search,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Flame,
  Award,
  Zap
} from 'lucide-react';

export default function CurriculumOverviewSection() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'CBSE' | 'British'>('CBSE');
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(0);
  const [selectedTerm, setSelectedTerm] = useState<1 | 2 | 3>(1);
  const [subjectFilter, setSubjectFilter] = useState<'All' | 'Science' | 'Mathematics'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPathwayGuide, setShowPathwayGuide] = useState(false);

  const activeGradeObj = GRADE_MAPPINGS[selectedGradeIndex];
  const activeGradeName = selectedCurriculum === 'CBSE' ? activeGradeObj.cbseGrade : activeGradeObj.britishYear;

  // Filter topics for the active view and search query
  const filteredTopics = useMemo(() => {
    return ALL_CURRICULA.filter((t) => {
      // Basic curriculum & grade match
      if (t.curriculum !== selectedCurriculum) return false;
      if (t.grade !== activeGradeName) return false;
      if (t.term !== selectedTerm) return false;

      // Subject filter
      if (subjectFilter !== 'All' && t.subject !== subjectFilter) return false;

      // Search query filter (searches across term title, chapter titles, subtopics, and practicals)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = t.termTitle.toLowerCase().includes(q);
        const matchesSubject = t.subject.toLowerCase().includes(q);
        const matchesChapters = t.topics.some(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            (c.practicalActivity && c.practicalActivity.toLowerCase().includes(q)) ||
            (c.subtopics && c.subtopics.some((st) => st.toLowerCase().includes(q)))
        );
        return matchesTitle || matchesSubject || matchesChapters;
      }

      return true;
    });
  }, [selectedCurriculum, activeGradeName, selectedTerm, subjectFilter, searchQuery]);

  return (
    <section className="py-20 bg-gradient-to-b from-edbg via-white to-edbg border-y border-slate-200/60" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with 2D animated pill */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-blue text-brand-blue text-xs font-black uppercase tracking-wider shadow-xs hover:scale-105 transition-transform duration-200">
            <Layers className="w-3.5 h-3.5 text-brand-blue" />
            <span>Interactive Academic Framework & Syllabi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
            Clear, Transparent <span className="highlight-lime">Curriculum Pathways</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Aligned with UAE school terms. Explore complete topic breakdowns, weekly milestones, and hands-on laboratory practicals across CBSE and British KS3.
          </p>

          {/* First-Time Visitor Explainer Toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowPathwayGuide(!showPathwayGuide)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white text-navy border border-slate-200 shadow-soft hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              <HelpCircle className="w-4 h-4 text-brand-blue" />
              <span>{showPathwayGuide ? 'Hide First-Time Pathway Guide' : 'First time visiting? Understand the Grade Mapping & Syllabi'}</span>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showPathwayGuide ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* First-Time Visitor Interactive Guide Modal/Card */}
        {showPathwayGuide && (
          <div className="mb-10 bg-gradient-to-r from-soft-blue via-white to-soft-green rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-card-hover animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-navy flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-blue" />
                  <span>How the EdNxt Academic Pathway Works</span>
                </h3>
                <span className="text-xs font-bold text-slate-500">UAE Academic Year Alignment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Middle school is the decisive window where basic numeracy and memory give way to abstract proofs, scientific inquiry, and structured rhetoric. We offer dual international tracks with identical academic rigour:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-xs">
                  <div className="flex items-center gap-2 font-black text-sm text-navy mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                    <span>CBSE Pathway (NCERT Aligned)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prepares students for CBSE Board foundation excellence. Focuses on deep conceptual clarity, step-by-step problem derivation, and NCERT exemplar questions.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-xs">
                  <div className="flex items-center gap-2 font-black text-sm text-emerald-950 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>British Curriculum (Key Stage 3)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for Year 7, 8, and 9 students transitioning towards GCSEs. Emphasizes scientific inquiry, working scientifically, and mathematical modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Master Control Deck: Pathway Toggle, Grade Selector, Search & Filters */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card-hover border border-slate-200/90 mb-8 space-y-6">
          {/* Row 1: Curriculum Track & Dual Mapping Pill */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            {/* Curriculum Pathway Toggle */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-full lg:w-auto shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setSelectedCurriculum('CBSE');
                  setSearchQuery('');
                }}
                className={`flex-1 lg:flex-initial px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedCurriculum === 'CBSE'
                    ? 'bg-navy text-white shadow-soft scale-102'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-200/60'
                }`}
              >
                <span>CBSE (NCERT Aligned)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCurriculum('British');
                  setSearchQuery('');
                }}
                className={`flex-1 lg:flex-initial px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  selectedCurriculum === 'British'
                    ? 'bg-navy text-white shadow-soft scale-102'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-200/60'
                }`}
              >
                <span>British Curriculum (KS3)</span>
              </button>
            </div>

            {/* Live Dual Grade Mapping Pill */}
            <div className="flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 bg-soft-green text-emerald-900 rounded-2xl border border-emerald-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Equivalent Grade Mapping:</span>
                <strong className="text-emerald-950 font-extrabold text-sm">
                  {activeGradeObj.cbseGrade} ⟷ {activeGradeObj.britishYear}
                </strong>
                <span className="text-emerald-700 text-xs hidden sm:inline">({activeGradeObj.ageGroup})</span>
              </div>
            </div>
          </div>

          {/* Row 2: Grade Selector Cards with 3D Depth Hover */}
          <div>
            <div className="text-xs font-bold text-navy uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Select Student Grade Level:</span>
              <span className="text-slate-400 font-normal">Ages 11–14 Middle School</span>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {GRADE_MAPPINGS.map((mapping, idx) => {
                const label = selectedCurriculum === 'CBSE' ? mapping.cbseGrade : mapping.britishYear;
                const subLabel = selectedCurriculum === 'CBSE' ? `British ${mapping.britishYear}` : `CBSE ${mapping.cbseGrade}`;
                const isSelected = selectedGradeIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGradeIndex(idx)}
                    className={`p-4 rounded-2xl text-center border-2 transition-all duration-200 relative group overflow-hidden ${
                      isSelected
                        ? 'border-brand-blue bg-gradient-to-b from-soft-blue/60 to-white text-navy font-bold shadow-soft scale-102'
                        : 'border-slate-200/80 hover:border-slate-300 text-slate-600 bg-slate-50/50 hover:bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue" />
                    )}
                    <div className="text-base sm:text-xl font-black text-navy">{label}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                      <span>{subLabel}</span>
                      <span className="text-[10px] text-slate-400">• {mapping.ageGroup}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Term Selector & Timeline */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <span className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                <span>Academic Terms (36 Weeks Total):</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">12 Weeks per Term • UAE Aligned</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {([1, 2, 3] as const).map((t) => {
                const isTermSelected = selectedTerm === t;
                const termWeeks = t === 1 ? 'Weeks 1–12 (Autumn)' : t === 2 ? 'Weeks 13–24 (Winter/Spring)' : 'Weeks 25–36 (Summer)';

                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTerm(t)}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 text-left ${
                      isTermSelected
                        ? 'bg-navy text-white border-navy shadow-soft'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-extrabold uppercase tracking-wider ${isTermSelected ? 'text-brand-lime' : 'text-brand-blue'}`}>
                        Term {t}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${isTermSelected ? 'bg-navy-light text-slate-200' : 'bg-slate-200 text-slate-600'}`}>
                        12 Weeks
                      </span>
                    </div>
                    <div className="text-sm font-bold mt-1">
                      {t === 1 ? 'Foundations & Diagnostic' : t === 2 ? 'Synthesis & Mid-Term' : 'Mastery & Capstone'}
                    </div>
                    <div className={`text-[11px] mt-0.5 ${isTermSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {termWeeks}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Search Bar & Subject Filter Tabs for Scalability */}
          <div className="pt-2 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Subject Filter Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-500 shrink-0 mr-1">Filter Subject:</span>
              {(['All', 'Science', 'Mathematics'] as const).map((subj) => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSubjectFilter(subj)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    subjectFilter === subj
                      ? 'bg-brand-blue text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {subj === 'All' ? 'All Subjects' : subj}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. Algebra, Light, Cells)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-navy"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Topic Display Cards */}
        {filteredTopics.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 mb-10 shadow-soft space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="text-base font-bold text-navy">No curriculum topics match your filter.</div>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try clearing your search query or switching to "All Subjects" to view the complete topic syllabus.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSubjectFilter('All');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {filteredTopics.map((topicItem) => {
              const isScience = topicItem.subject === 'Science';

              return (
                <div
                  key={topicItem.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-card-hover border border-slate-200/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Topic Card Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isScience ? 'bg-soft-blue text-brand-blue' : 'bg-soft-green text-emerald-800'
                          }`}>
                            {topicItem.subject}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {topicItem.grade}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-navy group-hover:text-brand-blue transition-colors">
                          {topicItem.termTitle}
                        </h3>
                      </div>
                      <div className="px-3 py-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600 shrink-0">
                        {topicItem.duration}
                      </div>
                    </div>

                    {/* Topic Chapters */}
                    <div className="space-y-4">
                      {topicItem.topics.map((ch, chIdx) => (
                        <div
                          key={chIdx}
                          className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100/90 hover:bg-white hover:border-slate-200 transition-all shadow-xs"
                        >
                          <h4 className="text-sm font-extrabold text-navy flex items-start gap-2">
                            <span className="w-5 h-5 rounded-lg bg-soft-blue text-brand-blue flex items-center justify-center text-xs shrink-0 mt-0.5 font-black">
                              {chIdx + 1}
                            </span>
                            <span>{ch.title}</span>
                          </h4>
                          <p className="text-xs text-slate-600 mt-1.5 ml-7 leading-relaxed">
                            {ch.description}
                          </p>
                          {ch.subtopics && (
                            <ul className="mt-2.5 ml-7 space-y-1">
                              {ch.subtopics.map((st, sIdx) => (
                                <li key={sIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                  <span>{st}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {ch.practicalActivity && (
                            <div className="mt-3 ml-7 text-[11px] font-bold text-emerald-800 bg-soft-green/90 border border-emerald-200/60 px-3 py-1 rounded-xl inline-flex items-center gap-1.5">
                              <span>🔬 Practical / Lab:</span>
                              <span className="font-semibold text-emerald-950">{ch.practicalActivity}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Assessment Milestones */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold text-navy mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Term Assessment Milestones:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {topicItem.assessments.map((ass, aIdx) => (
                          <span
                            key={aIdx}
                            className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-xl font-medium"
                          >
                            {ass}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link to Subject Page */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/courses/${topicItem.subject.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-xs font-bold text-brand-blue hover:text-navy inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Full {topicItem.subject} Programme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/free-trial"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark shadow-xs transition-colors"
                    >
                      Book Free Trial
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Academic Framework Summary Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card-hover border border-slate-200/90 mb-8">
          <h3 className="text-lg font-black text-navy mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-blue" />
            <span>Academic Framework Overview</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-soft-blue/50 border border-blue-100 hover:shadow-xs transition-all">
              <strong className="text-navy font-bold block mb-1">Session Structure</strong>
              <p className="text-slate-600">Science & Maths: Two 60-min live classes weekly + weekly homework + 1 doubt clearing slot.</p>
            </div>
            <div className="p-4 rounded-2xl bg-soft-green/50 border border-emerald-100 hover:shadow-xs transition-all">
              <strong className="text-navy font-bold block mb-1">Future-Skills Format</strong>
              <p className="text-slate-600">AI & Public Speaking: One 60–75 min studio workshop weekly with project-based capstones.</p>
            </div>
            <div className="p-4 rounded-2xl bg-soft-purple/50 border border-purple-100 hover:shadow-xs transition-all">
              <strong className="text-navy font-bold block mb-1">Assessment Milestones</strong>
              <p className="text-slate-600">Week 0 diagnostic, Week 6 concept checkpoint, Week 12 comprehensive assessment.</p>
            </div>
            <div className="p-4 rounded-2xl bg-soft-orange/50 border border-amber-100 hover:shadow-xs transition-all">
              <strong className="text-navy font-bold block mb-1">Term & Calendar</strong>
              <p className="text-slate-600">3 terms per year, 12 weeks each (36 weeks total), aligned with UAE school terms.</p>
            </div>
          </div>
        </div>

        {/* Mandatory Syllabus Disclaimer */}
        <div className="rounded-2xl bg-amber-50/90 border border-amber-200/80 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Important Syllabus Disclaimer:</strong> {ACADEMIC_FRAMEWORK.ncertDisclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
