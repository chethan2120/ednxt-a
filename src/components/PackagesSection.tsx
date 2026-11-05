import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getAllPackages } from '@/lib/db';

interface PackageItem {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  streams_included: string;
  price_aed: number;
  billing_period: string;
  features: string;
  is_popular: number;
  is_published: number;
}

export default function PackagesSection({ initialPackages }: { initialPackages?: PackageItem[] }) {
  // If not passed as props, we fetch from database
  let packages: PackageItem[] = initialPackages || [];
  if (!packages || packages.length === 0) {
    try {
      packages = getAllPackages() as PackageItem[];
    } catch (e) {
      // Fallback
      packages = [
        {
          id: 1,
          slug: 'core-bundle',
          name: 'Core Bundle',
          subtitle: 'Academic Foundations in Science & Mathematics',
          streams_included: JSON.stringify(['Science', 'Mathematics']),
          price_aed: 2999,
          billing_period: 'per term',
          features: JSON.stringify([
            'CBSE (NCERT) or British (KS3) alignment',
            '4 Live Sessions / Week (2 Science + 2 Maths)',
            'Weekly graded homework with detailed feedback',
            '1 Dedicated Doubt-Clearing Slot every week',
            'Diagnostic Assessment at Week 0',
            'Mid-Term Checkpoint at Week 6',
            'Comprehensive Term Report & Parent Consultation'
          ]),
          is_popular: 0,
          is_published: 1
        },
        {
          id: 2,
          slug: 'future-skills-bundle',
          name: 'Future-Skills Bundle',
          subtitle: 'Applied AI & Executive Public Speaking',
          streams_included: JSON.stringify(['AI for Students', 'Public Speaking']),
          price_aed: 2999,
          billing_period: 'per term',
          features: JSON.stringify([
            'Hands-on AI Studio (Prompting, Gemini Notebooks, Agents)',
            'Executive Public Speaking, Debate & Presentation Mastery',
            '2 Live Sessions / Week (1 AI + 1 Speaking)',
            'Project-Based Learning with Capstone Presentations',
            'Small interactive cohorts for maximum speaking time',
            'Video-recorded speech review with rubric feedback',
            'Official EdNxt Capstone Project Certificate'
          ]),
          is_popular: 1,
          is_published: 1
        },
        {
          id: 3,
          slug: 'full-bundle',
          name: 'Full Bundle',
          subtitle: 'Complete Academic Excellence + Future-Ready Skills',
          streams_included: JSON.stringify(['Science', 'Mathematics', 'AI for Students', 'Public Speaking']),
          price_aed: 4999,
          billing_period: 'per term',
          features: JSON.stringify([
            'All Four Streams: Science, Maths, AI & Public Speaking',
            '6 Live Sessions / Week for total holistic development',
            'Complete CBSE or British KS3 Syllabus Coverage',
            'Priority 1-on-1 Academic & Project Mentorship',
            'All Weekly Homework, Diagnostic & Mid-term Evaluations',
            'Live Capstone Showcase & Speech Summit Participation',
            'Comprehensive Parent Dashboard & Bi-weekly Progress Sync'
          ]),
          is_popular: 0,
          is_published: 1
        }
      ];
    }
  }

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-green text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Simple, Transparent Term Tuition
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
            Comprehensive <span className="highlight-lime">Course Packages</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Choose the right combination for your child. All bundles include 12 weeks of live instruction, weekly homework, regular assessments, and dedicated parent reporting.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isPopular = pkg.is_popular === 1;
            const features: string[] = typeof pkg.features === 'string' ? JSON.parse(pkg.features) : pkg.features;
            const streams: string[] = typeof pkg.streams_included === 'string' ? JSON.parse(pkg.streams_included) : pkg.streams_included;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-navy text-white shadow-card-hover border-2 border-brand-lime ring-4 ring-brand-lime/20 transform lg:-translate-y-2'
                    : 'bg-white text-navy shadow-soft border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-lime text-navy px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-navy" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Subtitle */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-black ${isPopular ? 'text-white' : 'text-navy'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Included Streams Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {streams.map((s, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${
                          isPopular
                            ? 'bg-navy-light text-brand-lime border border-brand-lime/30'
                            : 'bg-soft-blue text-brand-blue border border-blue-200/50'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-slate-200/40">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-base font-bold ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        AED
                      </span>
                      <span className={`text-4xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-navy'}`}>
                        {pkg.price_aed.toLocaleString()}
                      </span>
                      <span className={`text-xs ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        /{pkg.billing_period}
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      12 Weeks per Term • Includes all class materials & doubt support
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      What’s Included:
                    </div>
                    <ul className="space-y-2.5">
                      {features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? 'text-brand-lime' : 'text-brand-blue'
                            }`}
                          />
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enrolment / Free Trial CTA */}
                <div>
                  <Link
                    href={`/free-trial?bundle=${pkg.slug}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all ${
                      isPopular
                        ? 'bg-brand-lime text-navy hover:bg-brand-lime-hover shadow-md'
                        : 'bg-navy text-white hover:bg-navy-dark shadow-soft'
                    }`}
                  >
                    <span>Book Free Trial in this Bundle</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="text-center mt-3">
                    <span className={`text-[11px] ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      Zero commitment • Free diagnostic assessment
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tuition Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <strong className="text-navy font-bold block text-sm">Transparent Tuition Policy</strong>
              <span>No hidden registration fees or lock-in contracts. Term fees are invoiced term-by-term.</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="font-bold text-brand-blue hover:text-navy underline whitespace-nowrap"
          >
            Need a customised schedule? Contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}
