import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | EdNxt Academy',
  description: 'How EdNxt Academy collects, uses, and safeguards parent and student information in compliance with UAE data protection standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 pb-6 border-b border-slate-200">
            <h1 className="text-3xl sm:text-4xl font-black text-navy">Privacy Policy</h1>
            <p className="text-xs text-slate-500">Last updated: November 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">1. Overview & Commitment</h2>
              <p>
                EdNxt Academy ("EdNxt", "we", "us", or "our") is dedicated to protecting the privacy and personal data of parents, guardians, and students who engage with our educational programmes and website. As a provider of educational services for middle schoolers (Grades 6–8), we take safeguarding and child data privacy with the highest degree of seriousness.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">2. Information We Collect</h2>
              <p>We collect information provided directly by parents during trial bookings and enquiries, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Parent/Guardian full name, email address, and telephone number.</li>
                <li>Student name, current grade/year, curriculum of study, and subject interests.</li>
                <li>Messages, specific learning notes, and preferred communication methods.</li>
                <li>Student academic diagnostic records, homework submissions, and teacher assessments during active enrolments.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">3. How Information is Used</h2>
              <p>Your information is used solely to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule and deliver 1-on-1 trial classes and live group sessions.</li>
                <li>Calibrate student learning pacing and prepare term diagnostic reports.</li>
                <li>Communicate class updates, homework feedback, and term invoices with parents.</li>
                <li>Maintain academic records in compliance with UAE educational regulations.</li>
              </ul>
              <p className="font-semibold text-navy">
                We do not sell, rent, or monetize personal data or student work with advertisers or third parties under any circumstances.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">4. Security & Retention</h2>
              <p>
                We implement industry-standard encryption, strict access controls, and secure database hosting to prevent unauthorized access or disclosure. Personal information is retained only as long as necessary to provide educational instruction and fulfill legal audit obligations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-navy">5. Contact Us</h2>
              <p>
                For privacy inquiries or to request data deletion, contact our Data Protection Officer at{' '}
                <a href="mailto:privacy@ednxt.co" className="text-brand-blue font-semibold hover:underline">
                  privacy@ednxt.co
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
