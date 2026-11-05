import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 pt-16 pb-8 border-t border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-light/40">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/logo-dark.svg"
                alt="EdNxt Logo"
                width={175}
                height={40}
                className="h-10 w-auto"
                style={{ maxHeight: '40px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Build Strong Foundations. Prepare for Tomorrow. A dedicated, rigorous learning programme for Grades 6–8 across CBSE and British Key Stage 3.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Dubai Knowledge Park, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="mailto:admissions@ednxt.co" className="hover:text-white transition-colors">
                  admissions@ednxt.co
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="tel:+97142345678" className="hover:text-white transition-colors">
                  +971 4 234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Curricula Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">Curriculum</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/curriculum" className="text-brand-lime font-bold hover:underline transition-colors flex items-center gap-1">
                  <span>Interactive Curriculum Hub</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link href="/curriculum/cbse" className="hover:text-brand-lime transition-colors">
                  CBSE (NCERT Aligned)
                </Link>
              </li>
              <li>
                <Link href="/curriculum/british" className="hover:text-brand-lime transition-colors">
                  British Curriculum (KS3)
                </Link>
              </li>
              <li>
                <Link href="/curriculum/cbse#grade-6" className="text-slate-400 hover:text-white transition-colors text-xs">
                  • Grade 6 / Year 7 Syllabus
                </Link>
              </li>
              <li>
                <Link href="/curriculum/cbse#grade-7" className="text-slate-400 hover:text-white transition-colors text-xs">
                  • Grade 7 / Year 8 Syllabus
                </Link>
              </li>
              <li>
                <Link href="/curriculum/cbse#grade-8" className="text-slate-400 hover:text-white transition-colors text-xs">
                  • Grade 8 / Year 9 Syllabus
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning Streams Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">Learning Streams</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/science" className="hover:text-brand-lime transition-colors">
                  Science Mastery
                </Link>
              </li>
              <li>
                <Link href="/courses/mathematics" className="hover:text-brand-lime transition-colors">
                  Mathematics & Logic
                </Link>
              </li>
              <li>
                <Link href="/courses/ai-for-students" className="hover:text-brand-lime transition-colors flex items-center gap-1.5">
                  AI for Students
                  <span className="text-[10px] bg-brand-blue text-white px-1.5 py-0.2 rounded font-semibold">New</span>
                </Link>
              </li>
              <li>
                <Link href="/courses/public-speaking" className="hover:text-brand-lime transition-colors">
                  Public Speaking & Debate
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-lime transition-colors">
                  Course Packages & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Portals */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">Explore & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-lime transition-colors">
                  About EdNxt
                </Link>
              </li>
              <li>
                <Link href="/free-trial" className="hover:text-brand-lime transition-colors">
                  Book Free Trial Class
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-brand-lime transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-lime transition-colors">
                  Contact Admissions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-lime transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-lime transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Disclaimer */}
        <div className="py-6 border-b border-navy-light/30 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Curriculum Disclaimer:</strong> NCERT has been revising textbooks. The chapter lists are at topic level. The actual syllabus will be decided based on mutual agreement between the student and the teacher.
          </p>
        </div>

        {/* Bottom Bar with Mandatory Exact Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} EdNxt Academy. All rights reserved. Honest, transparent middle-school education.
          </div>

          {/* EXACT TEXT REQUIREMENT: Only "WebNxt" must link to https://webnxt.co/ */}
          <div>
            Designed and Maintained by{' '}
            <a
              href="https://webnxt.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-brand-lime underline decoration-brand-lime/60 hover:decoration-brand-lime transition-colors"
            >
              WebNxt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
