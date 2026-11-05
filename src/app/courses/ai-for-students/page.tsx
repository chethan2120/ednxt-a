import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ALL_CURRICULA } from '@/lib/curriculumData';
import { Bot, Sparkles, BookOpen, Clock, FileText, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'AI for Students | Grades 6–8 | EdNxt',
  description: 'Future-ready AI skills: Prompt engineering, Gemini Notebooks for research, automated presentations, ethics and capstone projects for middle schoolers.',
};

export default function AIForStudentsPage() {
  const aiTopics = ALL_CURRICULA.filter((t) => t.subject === 'AI for Students');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-purple/30 to-edbg border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-purple text-purple-700 text-xs font-bold uppercase tracking-wider">
                  Future-Ready Skills Stream • Grades 6–8
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight tracking-tight">
                  Applied <span className="highlight-lime">AI for Students</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Move beyond mindless consumption to active creation. Students master the foundational literacy of modern Artificial Intelligence: writing precise prompts, synthesizing complex research using <strong className="text-navy font-semibold">Gemini Notebooks</strong>, generating dynamic visual presentations, and applying strict ethical safeguards.
                </p>

                {/* Session Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Clock className="w-4 h-4 text-purple-600 mb-1" />
                    <div className="text-xs font-bold text-navy">60–75 Min Studio</div>
                    <div className="text-[11px] text-slate-500">Hands-on live lab weekly</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <FileText className="w-4 h-4 text-purple-600 mb-1" />
                    <div className="text-xs font-bold text-navy">Project-Based</div>
                    <div className="text-[11px] text-slate-500">Real working portfolios</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Sparkles className="w-4 h-4 text-purple-600 mb-1" />
                    <div className="text-xs font-bold text-navy">Term Capstone</div>
                    <div className="text-[11px] text-slate-500">Live student showcase</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/free-trial?stream=AI%20for%20Students"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Free Trial AI Studio</span>
                    <ArrowRight className="w-4 h-4 text-brand-lime" />
                  </Link>
                  <Link
                    href="/packages"
                    className="w-full sm:w-auto px-6 py-4 rounded-full font-bold text-sm bg-white text-navy border border-slate-200 hover:border-brand-blue flex items-center justify-center"
                  >
                    <span>View Future-Skills Bundle</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-card-hover border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80"
                    alt="Student experimenting with AI technology and laptops"
                    className="w-full h-80 sm:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Required Program Competencies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-navy">What Students Build in the AI Programme</h2>
              <p className="text-sm text-slate-600">
                A structured 36-week curriculum taking middle schoolers from basic mechanics to autonomous agent workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-soft-blue/40 border border-blue-200/70 space-y-3">
                <span className="text-2xl">🧠</span>
                <h3 className="text-base font-black text-navy">1. AI Fundamentals</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understand how neural networks, tokens, and transformers operate under the hood. Machine learning vs rule-based programming.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-soft-green/40 border border-emerald-200/70 space-y-3">
                <span className="text-2xl">✍️</span>
                <h3 className="text-base font-black text-navy">2. Prompt Writing Mastery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Master the 4-part prompt framework: Persona, Task, Context, and Format. Zero-shot vs few-shot and prompt iteration.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-soft-purple/40 border border-purple-200/70 space-y-3">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-base font-black text-navy">3. Responsible AI & Ethics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spot hallucinations, understand training data bias, protect personal data privacy, and maintain academic honor codes.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-soft-orange/40 border border-amber-200/70 space-y-3">
                <span className="text-2xl">💡</span>
                <h3 className="text-base font-black text-navy">4. Project Brainstorming</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use generative models for creative divergent thinking, SCAMPER ideation, and turning raw curiosity into structured plans.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200/70 space-y-3">
                <span className="text-2xl">📚</span>
                <h3 className="text-base font-black text-navy">5. Gemini Notebooks for Research</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upload multiple PDFs, historical archives, and scientific reports into Gemini Notebooks to synthesize verified study guides.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/70 space-y-3">
                <span className="text-2xl">📝</span>
                <h3 className="text-base font-black text-navy">6. Meeting Notes & Action Plans</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Convert spoken project discussions and rough brainstorms into structured action items, task matrices, and executive summaries.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200/70 space-y-3 md:col-span-2 lg:col-span-3">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h3 className="text-base font-black text-navy">7. Dynamic AI Presentations & Capstones</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Learn to use generative tools to script slide narratives, structure visual hierarchy, create relevant diagrams, and present capstone solutions before a panel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Term-by-Term Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {aiTopics.map((termItem) => (
                <div
                  key={termItem.id}
                  className="rounded-3xl p-6 bg-edbg border border-slate-200/80 shadow-soft flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="pb-3 border-b border-slate-200/60">
                      <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                        Term {termItem.term} (12 Weeks)
                      </span>
                      <h4 className="text-base font-black text-navy mt-1">{termItem.termTitle}</h4>
                    </div>

                    <div className="space-y-3">
                      {termItem.topics.map((t, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white border border-slate-100 text-xs">
                          <strong className="text-navy font-bold block mb-1">{t.title}</strong>
                          <p className="text-slate-600 text-[11px]">{t.description}</p>
                          {t.practicalActivity && (
                            <div className="mt-2 text-[10px] font-bold text-purple-700 bg-soft-purple px-2 py-0.5 rounded inline-block">
                              Studio: {t.practicalActivity}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {termItem.capstone && (
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
                      <strong className="text-navy font-bold block">Capstone:</strong>
                      <span>{termItem.capstone}</span>
                    </div>
                  )}
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
