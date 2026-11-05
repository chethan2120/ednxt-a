'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  Sparkles,
  FlaskConical,
  Compass,
  Cpu,
  Mic,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  Target,
  Award
} from 'lucide-react';

type TabKey = 'science' | 'mathematics' | 'ai' | 'speaking';

interface TabData {
  id: TabKey;
  number: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
  curriculum: string;
  headline: string;
  developmentalFocus: string;
  image: string;
  imageAlt: string;
  riskTitle: string;
  riskDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  pillars: {
    title: string;
    description: string;
    badge: string;
  }[];
  courseLink: string;
  accentColor: string;
  badgeBg: string;
}

const TABS: TabData[] = [
  {
    id: 'science',
    number: '01',
    name: 'Science',
    tagline: 'Empirical Inquiry & Lab Intuition',
    icon: FlaskConical,
    badge: 'Empirical Deduction & Inquiries',
    curriculum: 'CBSE Grades 6–8 • British KS3 Years 7–9',
    headline: 'Bridging Concrete Nature Observation to Abstract Scientific Deduction',
    developmentalFocus:
      'In middle school, science transitions from descriptive nature studies to atomic chemistry, cellular biology, and quantitative physics. Without hands-on experimentation, students resort to memorizing definitions without understanding underlying causality.',
    image: '/slider/science.svg',
    imageAlt: 'EdNxt Science & Empirical Inquiry Emblem',
    riskTitle: 'The Middle School Risk: Rote Memorization Trap',
    riskDescription:
      'Students cram facts for unit tests without grasping the scientific method. When high school introduces complex equations and GCSE/CBSE laboratory practicals, anxiety skyrockets.',
    solutionTitle: 'The EdNxt Solution: Hypothesis-Driven Labs',
    solutionDescription:
      'Two 60-minute live interactive sessions weekly with virtual simulations, variable testing, and error-margin analysis so students understand the "why" behind natural laws.',
    pillars: [
      {
        title: 'Virtual Lab Experiments',
        description: 'Controlled interactive simulations for chemistry reactions, ray optics, and cell structures.',
        badge: '2 Live Labs / Wk'
      },
      {
        title: 'Rigorous Curricular Mapping',
        description: 'Complete term-by-term alignment with NCERT revised topics and British KS3 modules.',
        badge: 'Term 1–3 Syllabi'
      },
      {
        title: 'Scientific Method Journal',
        description: 'Students learn to formulate hypotheses, isolate independent variables, and document errors.',
        badge: 'Term Capstone'
      }
    ],
    courseLink: '/courses/science',
    accentColor: '#2563EB',
    badgeBg: 'bg-soft-blue text-brand-blue border-blue-200'
  },
  {
    id: 'mathematics',
    number: '02',
    name: 'Mathematics',
    tagline: 'The Conceptual & Algebraic Leap',
    icon: Compass,
    badge: 'Abstract Logic & Analytical Rigour',
    curriculum: 'CBSE Grades 6–8 • British KS3 Years 7–9',
    headline: 'Conquering the Cognitive Shift from Arithmetic to Abstract Symbols',
    developmentalFocus:
      'Grades 6–8 present the steepest conceptual leap in standard school mathematics. Numbers are replaced by variables, algebraic formulas, Cartesian geometry, and algebraic equations.',
    image: '/slider/maths.svg',
    imageAlt: 'EdNxt Mathematics & Logical Rigour Emblem',
    riskTitle: 'The Middle School Risk: The Math Confidence Slump',
    riskDescription:
      'Children who thrived on mechanical arithmetic often hit a wall in Grade 7 when required to manipulate abstract unknowns, leading to permanent math anxiety.',
    solutionTitle: 'The EdNxt Solution: Concrete-Representational-Abstract (CRA)',
    solutionDescription:
      'We anchor every algebraic concept first in concrete physical models, then visual geometric proofs, before introducing shorthand symbolic algorithms.',
    pillars: [
      {
        title: 'CRA Conceptual Framework',
        description: 'From visual algebra tiles to Cartesian graphs before touching abstract formulas.',
        badge: 'Zero Rote Learning'
      },
      {
        title: 'Dedicated Doubt Clinics',
        description: 'Weekly 1-on-1 problem-solving slots to ensure zero accumulated foundational gaps.',
        badge: '1 Slot Weekly'
      },
      {
        title: 'Real-World Modeling Capstone',
        description: 'Term-end financial algebra, budgeting equations, and geometric architecture models.',
        badge: 'Week 12 Capstone'
      }
    ],
    courseLink: '/courses/mathematics',
    accentColor: '#102B50',
    badgeBg: 'bg-soft-green text-emerald-800 border-emerald-200'
  },
  {
    id: 'ai',
    number: '03',
    name: 'AI for Students',
    tagline: 'Applied AI & Creative Synthesis',
    icon: Cpu,
    badge: 'Future-Ready Technological Literacy',
    curriculum: 'EdNxt Applied Tech Stream • Grades 6–8',
    headline: 'Transforming Passive Screen Consumers into Active Technology Commanders',
    developmentalFocus:
      'Middle schoolers spend hours on digital devices. Rather than merely consuming social algorithms, they need to learn how artificial intelligence operates, how to engineer effective prompts, and how to detect automated bias.',
    image: '/slider/ai.svg',
    imageAlt: 'EdNxt Applied AI & Future Technologies Emblem',
    riskTitle: 'The Middle School Risk: Unsupervised Copy-Paste Dependency',
    riskDescription:
      'Students use generative AI blindly to bypass homework, eroding critical thinking and falling prey to technological hallucinations without verifying primary sources.',
    solutionTitle: 'The EdNxt Solution: Prompt Engineering & Ethical Verification',
    solutionDescription:
      'We teach students to use AI as a high-powered research collaborator—using Gemini Notebooks, structured prompt templates, and strict citation audits.',
    pillars: [
      {
        title: 'Prompt Architecture',
        description: 'Mastering role-task-context prompts, few-shot prompting, and iterative refinement.',
        badge: 'Practical Skills'
      },
      {
        title: 'Gemini Notebooks Synthesis',
        description: 'Organizing research sources, summarizing dense scientific papers, and creating study guides.',
        badge: 'Research Mastery'
      },
      {
        title: 'Ethical AI Capstone',
        description: 'Original term project utilizing AI for research with full transparent fact-checking logs.',
        badge: 'Ethics Certified'
      }
    ],
    courseLink: '/courses/ai-for-students',
    accentColor: '#7C3AED',
    badgeBg: 'bg-soft-purple text-purple-900 border-purple-200'
  },
  {
    id: 'speaking',
    number: '04',
    name: 'Public Speaking',
    tagline: 'Vocal Poise & Rhetorical Confidence',
    icon: Mic,
    badge: 'Executive Presence & Debate Mastery',
    curriculum: 'Speaking Levels 1, 2 & 3 • Confident Voice to Orator',
    headline: 'Forging Unshakable Vocal Confidence Before Teenage Self-Consciousness Takes Root',
    developmentalFocus:
      'Adolescent social awareness peaks between ages 11–14. If fear of judgment or public stage fright is not addressed during middle school, it frequently ossifies into lifelong speech anxiety (glossophobia).',
    image: '/slider/speaking.svg',
    imageAlt: 'EdNxt Public Speaking & Rhetoric Emblem',
    riskTitle: 'The Middle School Risk: Adolescent Social Withdrawal',
    riskDescription:
      'Children shrink from class presentations, group discussions, and leadership roles, limiting their academic and extracurricular trajectory.',
    solutionTitle: 'The EdNxt Solution: 3-Level Scaffolded Rhetoric',
    solutionDescription:
      'Level 1 (Confident Voice) builds diaphragmatic projection and body language; Level 2 (Persuasive Speaker) teaches AREI debate logic; Level 3 (Leader & Orator) masters TED-style keynotes.',
    pillars: [
      {
        title: 'AREI Debate Logic',
        description: 'Structuring arguments with Assertion, Reasoning, Evidence, and Impact.',
        badge: 'Debate Framework'
      },
      {
        title: 'Vocal Variety & Body Poise',
        description: 'Pacing, pitch modulation, eye contact, and eliminating filler words under pressure.',
        badge: 'Speech Drills'
      },
      {
        title: '3-Minute TED Keynote',
        description: 'Live capstone speech evaluated on official rubrics with peer review and video feedback.',
        badge: 'Live Showcase'
      }
    ],
    courseLink: '/courses/public-speaking',
    accentColor: '#D97706',
    badgeBg: 'bg-soft-orange text-amber-900 border-amber-200'
  }
];

export default function MiddleSchoolSignificanceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('science');
  const [activeAdvantageTab, setActiveAdvantageTab] = useState<'ednxt' | 'traditional'>('ednxt');

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section className="py-20 bg-edbg border-t border-slate-200/60 relative overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ============================================================
            SECTION HEADER
           ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-navy uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5 text-brand-blue" />
            <span>The Critical Window • Grades 6–8 (Ages 11–14)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
            Why Grades 6–8 <span className="highlight-lime">Define Lifelong Success</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Educational cognitive research confirms: middle school is when intellectual stamina, logical deduction, and verbal poise are permanently forged. Select a stream to explore the developmental shift:
          </p>
        </div>

        {/* ============================================================
            INTERACTIVE VERTICAL TABS COMPONENT
           ============================================================ */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-card-hover border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* --------------------------------------------------------
                LEFT SIDE: Four Interactive Vertical Tabs
               -------------------------------------------------------- */}
            <div
              className="lg:col-span-5 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none"
              role="tablist"
              aria-label="EdNxt Middle School Learning Streams"
            >
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 min-w-[240px] sm:min-w-0 border ${
                      isActive
                        ? 'bg-navy text-white shadow-soft-lg border-navy translate-x-0 lg:translate-x-1.5'
                        : 'bg-slate-50/80 hover:bg-slate-100/80 text-slate-700 border-slate-200/70 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Icon circle */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-white/15 text-brand-lime shadow-inner'
                            : 'bg-white text-navy shadow-xs border border-slate-200/60'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Headings */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-black tracking-wider ${
                              isActive ? 'text-brand-lime' : 'text-slate-400'
                            }`}
                          >
                            {tab.number}
                          </span>
                          <span className="text-xs font-bold text-slate-400 hidden sm:inline">•</span>
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wider truncate ${
                              isActive ? 'text-slate-200' : 'text-slate-500'
                            }`}
                          >
                            {tab.name === 'Science' || tab.name === 'Mathematics' ? 'Core Academic' : 'Future Skill'}
                          </span>
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-black tracking-tight truncate ${
                            isActive ? 'text-white' : 'text-navy'
                          }`}
                        >
                          {tab.name}
                        </h3>
                        <p
                          className={`text-xs truncate ${
                            isActive ? 'text-slate-200' : 'text-slate-500'
                          }`}
                        >
                          {tab.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Active chevron pill indicator */}
                    <div className="shrink-0 flex items-center">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-brand-lime text-navy shadow-xs'
                            : 'bg-transparent text-slate-300 group-hover:text-slate-400'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 font-bold" />
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Informative side note for parents */}
              <div className="hidden lg:block mt-2 p-4 rounded-2xl bg-soft-blue/40 border border-blue-100 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-navy flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                  <span>The EdNxt Integrated Model</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Middle school success requires balancing academic mastery in Science & Math with future-ready verbal poise and AI ethics.
                </p>
              </div>
            </div>

            {/* --------------------------------------------------------
                RIGHT SIDE: Dynamic Content Panel with Smooth Animation
               -------------------------------------------------------- */}
            <div
              key={currentTab.id}
              role="tabpanel"
              id={`panel-${currentTab.id}`}
              aria-labelledby={`tab-${currentTab.id}`}
              className="lg:col-span-7 bg-edbg rounded-2xl p-5 sm:p-7 border border-slate-200/90 space-y-6 animate-in fade-in slide-in-from-right-3 duration-250"
            >
              {/* Header Badge & Title */}
              <div className="space-y-3 pb-5 border-b border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${currentTab.badgeBg}`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentTab.badge}</span>
                  </span>

                  <span className="text-[11px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                    {currentTab.curriculum}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-navy tracking-tight leading-snug">
                      {currentTab.headline}
                    </h3>
                  </div>

                  {/* Circular Stream Emblem preview */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-1 border border-slate-200 shadow-soft self-center sm:self-auto">
                    <img
                      src={currentTab.image}
                      alt={currentTab.imageAlt}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentTab.developmentalFocus}
                </p>
              </div>

              {/* The Risk vs EdNxt Approach Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* The Risk */}
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{currentTab.riskTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentTab.riskDescription}
                  </p>
                </div>

                {/* The EdNxt Solution */}
                <div className="p-4 rounded-2xl bg-soft-green/70 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{currentTab.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentTab.solutionDescription}
                  </p>
                </div>
              </div>

              {/* 3 Pillars / Key Program Attributes */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                  Key Program Attributes
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentTab.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5 hover:border-brand-blue/40 transition-colors"
                    >
                      <span className="text-[10px] font-bold text-brand-blue bg-soft-blue px-2 py-0.5 rounded-md inline-block">
                        {pillar.badge}
                      </span>
                      <h4 className="text-xs font-bold text-navy leading-tight">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <Link
                  href={currentTab.courseLink}
                  className="text-xs font-bold text-brand-blue hover:text-navy hover:underline flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore Detailed {currentTab.name} Curriculum & Syllabus</span>
                </Link>

                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold bg-navy text-white hover:bg-brand-blue shadow-soft transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Free 1-on-1 Trial Class</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM COMPARISON SWITCHER: EdNxt Academy vs Traditional
           ============================================================ */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-navy">
                The EdNxt Advantage: Side-by-Side Comparison
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                See why forward-thinking parents choose an integrated academy over fragmented private tutoring.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveAdvantageTab('ednxt')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeAdvantageTab === 'ednxt' ? 'bg-navy text-white shadow-soft' : 'text-slate-600 hover:text-navy'
                }`}
              >
                EdNxt Academy
              </button>
              <button
                type="button"
                onClick={() => setActiveAdvantageTab('traditional')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeAdvantageTab === 'traditional' ? 'bg-navy text-white shadow-soft' : 'text-slate-600 hover:text-navy'
                }`}
              >
                Traditional Centers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Curriculum Rigor</div>
              <div className="text-xs sm:text-sm font-bold text-navy">
                {activeAdvantageTab === 'ednxt' ? 'Verified CBSE & British KS3 Syllabi' : 'Generic worksheets with no board alignment'}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeAdvantageTab === 'ednxt'
                  ? 'Aligned precisely with school exams and official textbook revisions with mutual pacing agreement.'
                  : 'Random problem sheets with no continuity across academic school terms.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Future-Ready Skills</div>
              <div className="text-xs sm:text-sm font-bold text-navy">
                {activeAdvantageTab === 'ednxt' ? 'AI for Students + Public Speaking' : 'None — Strict test cramming only'}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeAdvantageTab === 'ednxt'
                  ? 'Teaches modern AI prompting, Gemini Notebooks, and parliamentary debating capstones.'
                  : 'Completely ignores verbal articulation and technological literacy.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Transparency & Reporting</div>
              <div className="text-xs sm:text-sm font-bold text-navy">
                {activeAdvantageTab === 'ednxt' ? 'Week 0, 6 & 12 Structured Reports' : 'Subjective verbal feedback only'}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeAdvantageTab === 'ednxt'
                  ? 'Parents receive diagnostic scorecards, weekly attendance, and detailed 1-on-1 consultations.'
                  : 'Parents are left in the dark until report card day at school.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
