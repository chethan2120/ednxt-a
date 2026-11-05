import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClosingCTA from '@/components/ClosingCTA';
import Link from 'next/link';
import { ALL_CURRICULA, PUBLIC_SPEAKING_RUBRIC } from '@/lib/curriculumData';
import { Mic, Sparkles, Award, Clock, ArrowRight, Video, Users, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Public Speaking & Leadership | Grades 6–8 | EdNxt',
  description: 'Conquer stage fright, master debate rebuttals, and deliver inspiring TED-style talks. Level 1 (Confident Voice), Level 2 (Persuasive Speaker), Level 3 (Leader & Orator).',
};

export default function PublicSpeakingPage() {
  const speakingTopics = ALL_CURRICULA.filter((t) => t.subject === 'Public Speaking');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-orange/30 to-edbg border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-orange text-amber-800 text-xs font-bold uppercase tracking-wider">
                  Leadership Accelerator Stream • Grades 6–8
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight tracking-tight">
                  Public Speaking & <span className="highlight-lime">Debate Mastery</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Turn self-consciousness into commanding stage presence. We guide students through three progressive levels: from overcoming stage anxiety and vocal projection, to parliamentary debate rebuttals and delivering an inspiring 5-minute <strong className="text-navy font-semibold">TED-style keynote</strong>.
                </p>

                {/* Session Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Clock className="w-4 h-4 text-amber-700 mb-1" />
                    <div className="text-xs font-bold text-navy">60–75 Min Speech Lab</div>
                    <div className="text-[11px] text-slate-500">Weekly speaking practice</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Video className="w-4 h-4 text-amber-700 mb-1" />
                    <div className="text-xs font-bold text-navy">Video Replay & Rubric</div>
                    <div className="text-[11px] text-slate-500">Constructive peer feedback</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <Award className="w-4 h-4 text-amber-700 mb-1" />
                    <div className="text-xs font-bold text-navy">Youth Summit Capstone</div>
                    <div className="text-[11px] text-slate-500">Live audience keynote</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/free-trial?stream=Public%20Speaking"
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Free Trial Speech Lab</span>
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
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80"
                    alt="Confident student speaking into a podium microphone"
                    className="w-full h-80 sm:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Progressive Levels Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-black text-navy">Three Progressive Speaking Levels</h2>
              <p className="text-sm text-slate-600">
                Mapped to middle-school cognitive and social maturity, from Grade 6 to Grade 8.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Level 1 Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-soft-blue/30 border border-blue-200/80 shadow-soft flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="pb-3 border-b border-blue-200/60">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Level 1 • Grade 6 / Year 7
                    </span>
                    <h3 className="text-xl font-black text-navy mt-1">Confident Voice</h3>
                    <p className="text-xs text-slate-600 mt-1">Overcoming anxiety & owning the room</p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Physiology of stage fright & diaphragmatic breathwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>The "Power Stance" & eye contact triangles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Vocal pitch modulation, elimination of filler words ("um", "like")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Storytelling arc: Hook, Challenge, Transformation, Lesson</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-200/60">
                  <div className="text-[11px] font-bold text-brand-blue uppercase tracking-wider mb-1">
                    Level 1 Capstone:
                  </div>
                  <div className="text-xs font-bold text-navy">
                    "My Passion, My Voice" 3-minute speech delivered live before peers.
                  </div>
                </div>
              </div>

              {/* Level 2 Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-soft-green/30 border border-emerald-200/80 shadow-soft flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="pb-3 border-b border-emerald-200/60">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      Level 2 • Grade 7 / Year 8
                    </span>
                    <h3 className="text-xl font-black text-navy mt-1">Persuasive Speaker</h3>
                    <p className="text-xs text-slate-600 mt-1">Argumentation, rhetoric & debating</p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Aristotle’s pillars: Ethos, Pathos, and Logos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>The AREI framework: Assertion, Reasoning, Evidence, Impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Table Topics impromptu PREP method (Point, Reason, Example, Point)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Parliamentary debate roles & spotting logical fallacies</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-200/60">
                  <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Level 2 Capstone:
                  </div>
                  <div className="text-xs font-bold text-navy">
                    The Great Middle School Debate with constructive cross-examination.
                  </div>
                </div>
              </div>

              {/* Level 3 Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-soft-orange/30 border border-amber-200/80 shadow-soft flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="pb-3 border-b border-amber-200/60">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      Level 3 • Grade 8 / Year 9
                    </span>
                    <h3 className="text-xl font-black text-navy mt-1">Leader and Orator</h3>
                    <p className="text-xs text-slate-600 mt-1">Executive presence & TED-style talks</p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>Leadership communication: Vision casting & inspiring action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>Crisis management & Acknowledge-Answer-Bridge executive Q&A</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>Panel moderation: Guiding dialogues & asking incisive questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>TED-Style Talk architecture & minimal slide visual storytelling</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-200/60">
                  <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1">
                    Level 3 Capstone:
                  </div>
                  <div className="text-xs font-bold text-navy">
                    5-Minute EdNxt Youth Summit TED-Style Keynote before a live panel.
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Rubric Table */}
            <div className="bg-edbg rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
              <h3 className="text-lg font-black text-navy mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                <span>Our 4-Part Evaluation Rubric</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PUBLIC_SPEAKING_RUBRIC.map((rubric, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/60">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <strong className="text-navy font-bold">{rubric.criterion}</strong>
                      <span className="text-amber-800 font-bold bg-soft-orange px-2 py-0.5 rounded text-[11px]">
                        {rubric.weight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{rubric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
