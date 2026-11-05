import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ALL_CURRICULA, ACADEMIC_FRAMEWORK } from '@/lib/curriculumData';
import { Check, ArrowRight, Sparkles, BookOpen, Clock, Calendar, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Science Mastery | Grades 6–8 & British Years 7–9 | EdNxt',
  description: 'In-depth Biology, Chemistry, and Physics tuition aligned with CBSE (NCERT) and British KS3. Two live classes weekly + doubt support.',
};

export default function ScienceCoursePage() {
  const scienceTopics = ALL_CURRICULA.filter((t) => t.subject === 'Science');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Course Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-blue/30 to-edbg border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
                  Academic Core Stream • Biology, Chemistry & Physics
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight tracking-tight">
                  Science <span className="highlight-lime">Mastery</span> for Middle School
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cultivate scientific curiosity, analytical deduction, and deep conceptual understanding across Biology, Chemistry, and Physics. Fully aligned with both <strong className="text-navy font-semibold">CBSE NCERT</strong> and <strong className="text-navy font-semibold">British KS3</strong> standards.
                </p>

                {/* Session Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Clock className="w-4 h-4 text-brand-blue mb-1" />
                    <div className="text-xs font-bold text-navy">2 x 60-Min Classes</div>
                    <div className="text-[11px] text-slate-500">Live, interactive weekly</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Calendar className="w-4 h-4 text-emerald-600 mb-1" />
                    <div className="text-xs font-bold text-navy">3 Terms / 36 Weeks</div>
                    <div className="text-[11px] text-slate-500">Aligned with UAE calendar</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Sparkles className="w-4 h-4 text-purple-600 mb-1" />
                    <div className="text-xs font-bold text-navy">1-on-1 Doubt Slot</div>
                    <div className="text-[11px] text-slate-500">Dedicated weekly support</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/free-trial?stream=Science"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Free Trial Science Class</span>
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
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                    alt="Science experiments and lab glassware"
                    className="w-full h-80 sm:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Syllabus by Grade and Term */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-navy">Complete Science Syllabus by Term</h2>
              <p className="text-sm text-slate-600">
                Transparent and detailed. Explore the exact topics, laboratory skills, and assessment schedule across both pathways.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Syllabus Note:</strong> {ACADEMIC_FRAMEWORK.ncertDisclaimer}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scienceTopics.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl p-6 sm:p-8 bg-edbg border border-slate-200/80 shadow-soft space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <div>
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
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
                          <span className="w-5 h-5 rounded-full bg-soft-blue text-brand-blue text-xs flex items-center justify-center font-bold">
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
                        {ch.practicalActivity && (
                          <div className="mt-2 ml-7 text-[11px] font-semibold text-emerald-700 bg-soft-green px-2 py-0.5 rounded inline-block">
                            🔬 Practical: {ch.practicalActivity}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <strong className="text-navy">Approach:</strong> {item.learningApproach}
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
