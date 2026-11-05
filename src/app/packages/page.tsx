import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackagesSection from '@/components/PackagesSection';
import ClosingCTA from '@/components/ClosingCTA';
import { getAllPackages } from '@/lib/db';
import { HelpCircle, ShieldCheck, Check } from 'lucide-react';

export const metadata = {
  title: 'Course Packages & Tuition | EdNxt Academy',
  description: 'Transparent middle school tuition bundles: Core Bundle (Science + Maths), Future-Skills Bundle (AI + Speech), and Full Bundle (All 4 Streams). AED 2,999/term.',
};

export const revalidate = 0;

export default function PackagesPage() {
  const packages = getAllPackages();

  const faqs = [
    {
      q: 'How long does each academic term last?',
      a: 'Each academic term runs for 12 intensive weeks. An academic year has 3 terms (36 weeks total), perfectly aligned with UAE school holiday breaks.'
    },
    {
      q: 'What is included in the Core Bundle?',
      a: 'The Core Bundle includes 4 live weekly classes (2 Science + 2 Maths), weekly graded homework assignments, one dedicated 1-on-1 doubt clearing slot, and complete diagnostic and term reports.'
    },
    {
      q: 'Can a student try a class before enrolling for the term?',
      a: 'Yes, absolutely! We offer a completely free, zero-obligation 1-on-1 trial class in any of our four learning streams so parents and students can experience our teaching first-hand.'
    },
    {
      q: 'Are class timings flexible for UAE school schedules?',
      a: 'Yes. Classes are scheduled in after-school evening slots (Sunday through Thursday) and weekend morning cohorts to avoid conflicts with day school activities.'
    },
    {
      q: 'Are the AI and Public Speaking courses suitable for beginners?',
      a: 'Yes. Our curriculum is specifically designed from the ground up for middle schoolers (ages 11–14). No prior coding or speech experience is required.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-soft-blue/20 to-edbg border-b border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
              Term-by-Term Enrolment
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight leading-tight">
              Honest, Transparent <span className="highlight-lime">Tuition Packages</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              No hidden admission fees, no multi-year lock-in contracts. Select an academic bundle that suits your child’s goals.
            </p>
          </div>
        </section>

        {/* Pricing Grid Component */}
        <PackagesSection initialPackages={packages as any} />

        {/* FAQs Section */}
        <section className="py-20 bg-edbg border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-black text-navy">Everything You Need to Know</h2>
              <p className="text-sm text-slate-600">
                Clear answers for parents about our terms, tuition, and session structure.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-base font-bold text-navy">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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
