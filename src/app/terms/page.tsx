import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | EdNxt Academy',
  description: 'Terms of service, academic policies, term enrollment rules, and code of conduct for EdNxt Academy.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 pb-6 border-b border-slate-200">
            <h1 className="text-3xl sm:text-4xl font-black text-navy">Terms and Conditions</h1>
            <p className="text-xs text-slate-500">Effective Date: November 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">1. Educational Services</h2>
              <p>
                EdNxt Academy provides live, instructor-led supplemental education for middle school students in Grades 6 through 8 across CBSE (NCERT) and British Key Stage 3 curricula. Programmes are delivered in three 12-week terms per academic year (36 weeks total), aligned with UAE school calendars.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">2. Free Trial Policy</h2>
              <p>
                Parents may book one (1) complimentary trial class per registered student in any offered learning stream (Science, Mathematics, AI for Students, or Public Speaking). Free trial classes carry zero financial obligation or automatic renewal requirement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">3. Term Enrolment & Tuition Fees</h2>
              <p>
                Tuition fees are structured term-by-term and published transparently in United Arab Emirates Dirhams (AED). Tuition covers 12 weeks of scheduled live classes, weekly graded homework assignments, one weekly doubt-clearing slot, and formal assessment report cards. Payment must be cleared prior to the start of each term.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">4. Syllabus Alignment & Adaptations</h2>
              <p>
                NCERT and British exam boards periodically revise chapter and topic emphases. Topic lists provided on this website reflect standard curricula frameworks. As explicitly noted, the precise syllabus for each cohort will be mutually aligned between the teacher, student, and parent during the Week 0 diagnostic benchmark.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">5. Student Code of Conduct & Academic Integrity</h2>
              <p>
                Students are expected to attend live sessions punctually, participate respectfully, and maintain academic honesty. In AI and project-based streams, students must use artificial intelligence tools responsibly as thought partners rather than substituting their own independent critical thinking.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">6. Intellectual Property & Maintenance Notice</h2>
              <p>
                All proprietary curriculum materials, rubrics, and project worksheets are the intellectual property of EdNxt Academy. This website is Designed and Maintained by{' '}
                <a
                  href="https://webnxt.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  WebNxt
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
