import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Calculator, Bot, Mic, Check } from 'lucide-react';

const STREAMS = [
  {
    id: 'science',
    title: 'Science',
    tagline: 'Explore Biology, Chemistry, Physics and more.',
    description: 'Hands-on inquiry-driven science that demystifies natural phenomena, cellular life, forces, and molecular reactions.',
    icon: '🔬',
    href: '/courses/science',
    themeBg: 'bg-soft-blue',
    accentColor: 'text-brand-blue',
    borderColor: 'border-blue-200/70',
    badgeText: 'Academic Core',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    bullets: [
      'CBSE NCERT & British KS3 aligned',
      'Virtual experiments & lab inquiry',
      'Biology, Chemistry & Physics integration',
      'Two 60-min interactive sessions weekly'
    ]
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    tagline: 'Build problem-solving and logical-thinking skills.',
    description: 'Transform anxiety into mathematical fluency through visual conceptual models, algebraic foundations, and spatial geometry.',
    icon: '📐',
    href: '/courses/mathematics',
    themeBg: 'bg-soft-green',
    accentColor: 'text-emerald-600',
    borderColor: 'border-emerald-200/70',
    badgeText: 'Academic Core',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
    bullets: [
      'Arithmetic, Algebra, Geometry & Data',
      'Step-by-step problem dissection',
      'Pythagoras, Equations & Cartesian graphs',
      'Weekly homework with 1-on-1 doubt clearing'
    ]
  },
  {
    id: 'ai-for-students',
    title: 'AI for Students',
    tagline: 'Learn to use AI tools responsibly and creatively.',
    description: 'Equip students with real-world AI literacy: effective prompting, research using Gemini Notebooks, and critical ethical evaluation.',
    icon: '🤖',
    href: '/courses/ai-for-students',
    themeBg: 'bg-soft-purple',
    accentColor: 'text-purple-600',
    borderColor: 'border-purple-200/70',
    badgeText: 'Future-Ready Skill',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    bullets: [
      'Prompt writing & persona engineering',
      'Gemini Notebooks for research synthesis',
      'Responsible AI, bias detection & integrity',
      'Hands-on project presentations & capstones'
    ]
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    tagline: 'Speak with confidence and inspire others.',
    description: 'Cultivate commanding vocal projection, persuasive debate structure, and the presence to deliver inspiring TED-style keynotes.',
    icon: '🎙️',
    href: '/courses/public-speaking',
    themeBg: 'bg-soft-orange',
    accentColor: 'text-amber-700',
    borderColor: 'border-amber-200/70',
    badgeText: 'Leadership Accelerator',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
    bullets: [
      'Level 1: Confident Voice (Posture & Breath)',
      'Level 2: Persuasive Speaker & Debate',
      'Level 3: Leader, Orator & TED-style Talk',
      'Video playback & structured rubric feedback'
    ]
  }
];

export default function LearningStreamsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
            Holistic Middle School Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
            Four Powerful <span className="highlight-lime">Learning Streams</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Designed specifically for Grades 6–8 to blend core academic excellence with essential future-ready skills that traditional classrooms often miss.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STREAMS.map((stream) => (
            <div
              key={stream.id}
              className={`rounded-3xl border ${stream.borderColor} ${stream.themeBg}/40 p-6 flex flex-col justify-between card-hover-effect bg-white`}
            >
              <div>
                {/* Image & Header */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={stream.imageUrl}
                    alt={stream.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-navy shadow-xs">
                    {stream.badgeText}
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center text-xl">
                    {stream.icon}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-extrabold text-navy mb-1.5 flex items-center gap-2">
                  <span>{stream.title}</span>
                </h3>
                <p className={`text-xs font-bold ${stream.accentColor} mb-3`}>
                  {stream.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {stream.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {stream.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className={`w-3.5 h-3.5 ${stream.accentColor} shrink-0 mt-0.5`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href={stream.href}
                className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-50 hover:bg-navy hover:text-white text-navy border border-slate-200 transition-all group`}
              >
                <span>View Full Syllabus</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-lime group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
