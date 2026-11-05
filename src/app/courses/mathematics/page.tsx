import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ALL_CURRICULA, ACADEMIC_FRAMEWORK } from '@/lib/curriculumData';
import { Check, ArrowRight, Calculator, Clock, Calendar, AlertCircle, Compass } from 'lucide-react';

export const metadata = {
  title: 'Mathematics Problem Solving | Grades 6–8 & British Years 7–9 | EdNxt',
  description: 'Master arithmetic, algebra, geometry, and data handling. Two live classes weekly + doubt clearing. Aligned with CBSE and British KS3.',
};

export default function MathematicsCoursePage() {
  const mathTopics = ALL_CURRICULA.filter((t) => t.subject === 'Mathematics');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Course Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-green/30 to-edbg border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-green text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Academic Core Stream • Problem Solving & Logic
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight tracking-tight">
                  Mathematics & <span className="highlight-lime">Logical Thinking</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Turn math anxiety into genuine mathematical fluency. We build deep conceptual understanding across numbers, algebra, geometry, and data analysis for <strong className="text-navy font-semibold">CBSE Grades 6–8</strong> and <strong className="text-navy font-semibold">British KS3 Years 7–9</strong>.
                </p>

                {/* Session Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Clock className="w-4 h-4 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-navy">2 x 60-Min Classes</div>
                    <div className="text-[11px] text-slate-500">Live, problem-solving weekly</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Calendar className="w-4 h-4 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-navy">3 Terms / 36 Weeks</div>
                    <div className="text-[11px] text-slate-500">Structured progress tracking</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Compass className="w-4 h-4 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-navy">1-on-1 Doubt Slot</div>
                    <div className="text-[11px] text-slate-500">Weekly personalised help</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/free-trial?stream=Mathematics"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Free Trial Maths Class</span>
                    <ArrowRight className="w-4 h-4 text-brand-lime" />
                  </Link>
                  <Link
                    href="/packages"
                    className="w-full sm:w-auto px-6 py-4 rounded-full font-bold text-sm bg-white text-navy border border-slate-200 hover:border-brand-blue flex items-center justify-center"
                  >
                    <span>View Pricing Bundles</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-card-hover border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80"
                    alt="Geometry, compass, and mathematical formulas"
                    className="w-full h-80 sm:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Mathematics Syllabus */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-navy">Complete Mathematics Syllabus by Term</h2>
              <p className="text-sm text-slate-600">
                Detailed breakdowns covering every chapter across CBSE and British KS3 curricula.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mathTopics.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl p-6 sm:p-8 bg-edbg border border-slate-200/80 shadow-soft space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        {item.curriculum} • {item.grade}
                      </span>
                      <h3 className="text-lg font-black text-navy mt-0.5">{item.termTitle}</h3>
                    </div>
                    <span className="text-xs bg-white px-3 py-1 rounded-full font-semibold text-slate-600 shadow-xs">
                      {item.duration}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {item.topics.map((ch, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100">
                        <div className="text-sm font-bold text-navy flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-soft-green text-emerald-700 text-xs flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span>{ch.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 ml-7">{ch.description}</p>
                        {ch.subtopics && (
                          <div className="mt-2 ml-7 flex flex-wrap gap-1.5">
                            {ch.subtopics.map((s, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <strong className="text-navy">Pedagogy:</strong> {item.learningApproach}
                    </div>
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
