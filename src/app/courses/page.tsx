import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Clock, Calendar, Check, Compass } from 'lucide-react';
import { getAllCourses } from '@/lib/db';

export const metadata = {
  title: 'All Educational Courses & Streams | Grades 6–8 | EdNxt',
  description: 'Explore all 4 learning streams: Science Mastery, Mathematics Problem Solving, AI for Students, and Public Speaking. CBSE and British KS3 aligned.',
};

export const revalidate = 60;

export default function AllCoursesPage() {
  const courses = getAllCourses();

  const streams = [
    {
      id: 'science',
      title: 'Science Mastery',
      stream: 'Science',
      badge: 'Academic Core',
      icon: '🔬',
      tagline: 'Explore Biology, Chemistry, Physics and more.',
      desc: 'A deep conceptual and experimental journey through Biology, Chemistry, and Physics. Cultivates scientific inquiry, analytical problem solving, and hands-on laboratory thinking for middle schoolers.',
      weekly: 'Two 60-min interactive live sessions weekly + dedicated doubt-clearing slot',
      curricula: 'CBSE (NCERT) & British Curriculum (KS3)',
      grades: 'Grades 6–8 (Years 7–9)',
      href: '/courses/science',
      color: 'blue',
      bgLight: 'bg-soft-blue/50',
      border: 'border-blue-200',
      highlights: [
        'Integrated Biology, Chemistry & Physics syllabus',
        'Virtual experiments & observational lab notebooks',
        'Direct alignment with CBSE NCERT and British KS3 benchmarks'
      ]
    },
    {
      id: 'mathematics',
      title: 'Mathematics & Logic',
      stream: 'Mathematics',
      badge: 'Academic Core',
      icon: '📐',
      tagline: 'Build problem-solving and logical-thinking skills.',
      desc: 'Transform math anxiety into mathematical intuition. Guides students from fundamental arithmetic to abstract algebraic expressions, geometric proofs, coordinate geometry, and data probability.',
      weekly: 'Two 60-min interactive live sessions weekly + weekly homework',
      curricula: 'CBSE (NCERT) & British Curriculum (KS3)',
      grades: 'Grades 6–8 (Years 7–9)',
      href: '/courses/mathematics',
      color: 'emerald',
      bgLight: 'bg-soft-green/50',
      border: 'border-emerald-200',
      highlights: [
        'CRA (Concrete-Representational-Abstract) pedagogy',
        'Mastery of equations, geometry proofs & Cartesian graphing',
        'Dedicated 1-on-1 doubt clearing slot every week'
      ]
    },
    {
      id: 'ai-for-students',
      title: 'AI for Students',
      stream: 'AI for Students',
      badge: 'Future-Ready Skill',
      icon: '🤖',
      tagline: 'Learn to use AI tools responsibly and creatively.',
      desc: 'Equip middle-school students with foundational literacy in Artificial Intelligence. Learn prompt engineering, Gemini Notebooks for research, automated presentations, and responsible digital ethics.',
      weekly: 'One 60–75-minute hands-on studio workshop weekly + Capstone showcase',
      curricula: 'Integrated for CBSE & British KS3 students',
      grades: 'Grades 6–8 (Years 7–9)',
      href: '/courses/ai-for-students',
      color: 'purple',
      bgLight: 'bg-soft-purple/50',
      border: 'border-purple-200',
      highlights: [
        'The 4-part prompt formula: Persona, Task, Context, Format',
        'Using Gemini Notebooks for synthesising research papers',
        'Critical ethics: Identifying hallucinations, bias & honor codes'
      ]
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking & Debate',
      stream: 'Public Speaking',
      badge: 'Leadership Accelerator',
      icon: '🎙️',
      tagline: 'Speak with confidence and inspire others.',
      desc: 'Transform self-conscious students into articulate, magnetic communicators. From overcoming stage fright and vocal projection to parliamentary debate rebuttals and inspirational TED-style keynotes.',
      weekly: 'One 60–75-minute interactive speech lab weekly + Video feedback',
      curricula: 'Level 1 (Confident Voice), Level 2 (Persuasive), Level 3 (Leader & Orator)',
      grades: 'Grades 6–8 (Years 7–9)',
      href: '/courses/public-speaking',
      color: 'amber',
      bgLight: 'bg-soft-orange/50',
      border: 'border-amber-200',
      highlights: [
        'Vocal projection, diaphragmatic breathing & eliminating filler words',
        'Aristotle’s pillars (Ethos, Pathos, Logos) & AREI debate arguments',
        'EdNxt Youth Summit 5-minute TED-style keynote capstone'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-soft-blue/20 to-edbg border-b border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grades 6–8 Educational Programmes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight leading-tight">
              All Courses & <span className="highlight-lime">Learning Streams</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our four dedicated programmes blending core academic rigor with essential future-ready skills. Available as individual subjects or bundled packages.
            </p>
          </div>
        </section>

        {/* 4 Courses In-Depth Grid with 2D Animations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {streams.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-3xl p-6 sm:p-8 border ${s.border} ${s.bgLight} shadow-soft flex flex-col justify-between card-hover-effect transition-all duration-300 hover:shadow-card-hover bg-white`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-2xl bg-slate-50 border border-slate-100 shadow-xs">
                          {s.icon}
                        </span>
                        <div>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {s.badge}
                          </span>
                          <h2 className="text-xl font-black text-navy mt-0.5">{s.title}</h2>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{s.grades}</span>
                    </div>

                    <p className="text-xs font-bold text-brand-blue">{s.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <div className="text-slate-500">
                        <strong className="text-navy">Curricula:</strong> {s.curricula}
                      </div>
                      <div className="text-slate-500">
                        <strong className="text-navy">Weekly Cadence:</strong> {s.weekly}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-navy uppercase tracking-wider">Key Highlights:</div>
                      {s.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-brand-blue group"
                    >
                      <span>View Term-by-Term Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-blue transition-all" />
                    </Link>

                    <Link
                      href={`/free-trial?stream=${encodeURIComponent(s.stream)}`}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark shadow-soft transition-all"
                    >
                      Book Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Bundles Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-navy via-navy-dark to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-hover">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lime text-navy text-xs font-black uppercase tracking-wider">
                  Bundle & Save
                </div>
                <h3 className="text-2xl font-black text-white">Save with Comprehensive Course Bundles</h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Enrol in our Core Bundle (Science + Maths), Future-Skills Bundle (AI + Public Speaking), or Full Bundle (All 4 Streams) from AED 2,999/term.
                </p>
              </div>
              <Link
                href="/packages"
                className="px-6 py-3.5 rounded-2xl font-black text-xs bg-brand-lime text-navy hover:bg-brand-lime-hover shadow-md whitespace-nowrap"
              >
                Explore Bundles & Tuition →
              </Link>
            </div>
          </div>
        </section>

        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
