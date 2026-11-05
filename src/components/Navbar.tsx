'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  User,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  announcementText?: string;
  isAnnouncementActive?: boolean;
}

export default function Navbar({
  announcementText = '🚀 Spring Term Enrolment Open! Book your free 1-on-1 trial class today.',
  isAnnouncementActive = true
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [curriculumDropdown, setCurriculumDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCurriculumDropdown(false);
    setCoursesDropdown(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Announcement Bar */}
      {isAnnouncementActive && (
        <div className="bg-navy-dark text-white px-4 py-2 text-center text-xs md:text-sm font-medium flex items-center justify-center gap-2 border-b border-navy-light/40">
          <span>{announcementText}</span>
          <Link
            href="/free-trial"
            className="inline-flex items-center gap-1 font-semibold text-brand-lime hover:underline ml-1"
          >
            Claim Class <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100' : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div
                className="relative h-10 sm:h-11 w-40 sm:w-48 transition-transform group-hover:scale-102"
                style={{ maxWidth: '190px', maxHeight: '44px' }}
              >
                <img
                  src="/logo-light.svg"
                  alt="EdNxt Logo"
                  width={175}
                  height={40}
                  className="h-10 sm:h-11 w-auto object-contain"
                  style={{ maxHeight: '44px', width: 'auto', display: 'block' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/' ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                }`}
              >
                Home
              </Link>

              {/* Curriculum Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCurriculumDropdown(true)}
                onMouseLeave={() => setCurriculumDropdown(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                    pathname.startsWith('/curriculum') ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                  }`}
                  aria-expanded={curriculumDropdown}
                >
                  Curriculum
                  <ChevronDown className={`w-4 h-4 transition-transform ${curriculumDropdown ? 'rotate-180 text-brand-blue' : 'text-slate-400'}`} />
                </button>

                {curriculumDropdown && (
                  <div className="absolute top-full left-0 w-80 rounded-3xl bg-white shadow-card-hover border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/curriculum"
                      className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-soft-blue/80 border border-slate-200/80 transition-all text-xs font-black text-navy mb-2 group"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-blue" />
                        <span>Interactive Curriculum Gateway</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                    </Link>

                    <Link
                      href="/curriculum/cbse"
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-soft-blue/60 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-xs">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-navy flex items-center gap-1.5">
                          CBSE Curriculum
                          <span className="text-[10px] bg-blue-100 text-brand-blue px-2 py-0.5 rounded-full font-bold">Grades 6–8</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                          NCERT-aligned Science & Maths syllabi with term breakdown and lab experiments.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/curriculum/british"
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl hover:bg-soft-green/60 transition-all group mt-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-navy flex items-center gap-1.5">
                          British Curriculum (KS3)
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Years 7–9</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                          National Curriculum for England Key Stage 3 foundation for future GCSE boards.
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Courses Mega-Dropdown with "View All Courses" at Top & 3-4 Line Descriptions */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdown(true)}
                onMouseLeave={() => setCoursesDropdown(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                    pathname.startsWith('/courses') ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                  }`}
                  aria-expanded={coursesDropdown}
                >
                  Courses
                  <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdown ? 'rotate-180 text-brand-blue' : 'text-slate-400'}`} />
                </button>

                {coursesDropdown && (
                  <div className="absolute top-full -left-20 w-[580px] rounded-3xl bg-white shadow-card-hover border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Top "View All Courses" Action Banner */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-soft-blue via-white to-soft-green border border-blue-100 mb-3">
                      <div>
                        <div className="text-xs font-bold text-navy flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-brand-blue" />
                          <span>Complete Educational Streams for Grades 6–8</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Academic rigor in Science & Maths + Future-ready AI & Public Speaking
                        </div>
                      </div>
                      <Link
                        href="/courses"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs bg-navy text-white hover:bg-navy-dark shadow-xs transition-all hover:translate-x-0.5"
                      >
                        <span>View All Courses</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-lime" />
                      </Link>
                    </div>

                    {/* All 4 Courses with 3-4 Line Descriptions & 2D Animations */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Science */}
                      <Link
                        href="/courses/science"
                        className="p-3.5 rounded-2xl hover:bg-soft-blue/50 border border-transparent hover:border-blue-200/60 transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xl group-hover:scale-115 transition-transform">🔬</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-brand-blue">
                              Academic Core
                            </span>
                          </div>
                          <div className="font-extrabold text-sm text-navy group-hover:text-brand-blue transition-colors">
                            Science Mastery
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                            A deep conceptual journey through Biology, Chemistry, and Physics. Designed to cultivate scientific inquiry, analytical problem solving, and hands-on laboratory thinking for middle schoolers.
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore Science Syllabus</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>

                      {/* Mathematics */}
                      <Link
                        href="/courses/mathematics"
                        className="p-3.5 rounded-2xl hover:bg-soft-green/50 border border-transparent hover:border-emerald-200/60 transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xl group-hover:scale-115 transition-transform">📐</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              Academic Core
                            </span>
                          </div>
                          <div className="font-extrabold text-sm text-navy group-hover:text-emerald-700 transition-colors">
                            Mathematics & Logic
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                            Transform math anxiety into mathematical intuition. Guides students from fundamental arithmetic to abstract algebraic expressions, geometric proofs, coordinate geometry, and data probability.
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore Maths Syllabus</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>

                      {/* AI for Students */}
                      <Link
                        href="/courses/ai-for-students"
                        className="p-3.5 rounded-2xl hover:bg-soft-purple/50 border border-transparent hover:border-purple-200/60 transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xl group-hover:scale-115 transition-transform">🤖</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                              Future-Ready
                            </span>
                          </div>
                          <div className="font-extrabold text-sm text-navy group-hover:text-purple-700 transition-colors">
                            AI for Students
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                            Equip middle schoolers with foundational Artificial Intelligence literacy. Master prompt engineering, Gemini Notebooks research synthesis, meeting notes, automated presentations, and digital ethics.
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] font-bold text-purple-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore AI Studio</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>

                      {/* Public Speaking */}
                      <Link
                        href="/courses/public-speaking"
                        className="p-3.5 rounded-2xl hover:bg-soft-orange/50 border border-transparent hover:border-amber-200/60 transition-all duration-200 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xl group-hover:scale-115 transition-transform">🎙️</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                              Leadership
                            </span>
                          </div>
                          <div className="font-extrabold text-sm text-navy group-hover:text-amber-800 transition-colors">
                            Public Speaking & Debate
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                            Transform self-consciousness into commanding presence. Covers 3 levels: overcoming stage anxiety, vocal variety, parliamentary debating rebuttals, and delivering an inspiring 5-minute TED-style keynote.
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] font-bold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore Speech Lab</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/about' ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                }`}
              >
                About
              </Link>

              <Link
                href="/packages"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/packages' ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                }`}
              >
                Packages
              </Link>

              <Link
                href="/contact"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/contact' ? 'text-brand-blue font-bold' : 'text-slate-700 hover:text-navy'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop Action Buttons: "Login" (unified) + "Free Trial" */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/parent-login"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-brand-blue px-3 py-2 transition-colors"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>Login</span>
              </Link>

              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-brand-lime" />
                <span>Free Trial</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/free-trial"
                className="px-3 py-1.5 rounded-full text-xs font-bold bg-navy text-white shadow-xs"
              >
                Free Trial
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                pathname === '/' ? 'bg-soft-blue text-brand-blue font-bold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Curriculum</span>
              <Link href="/curriculum" className="text-xs font-bold text-brand-blue hover:underline">
                View All Gateway →
              </Link>
            </div>
            <Link
              href="/curriculum"
              className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-slate-50 rounded-lg"
            >
              • Interactive Curriculum Hub
            </Link>
            <Link
              href="/curriculum/cbse"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              • CBSE Curriculum (Grades 6–8)
            </Link>
            <Link
              href="/curriculum/british"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              • British Curriculum (Years 7–9 KS3)
            </Link>

            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Courses
              </span>
              <Link href="/courses" className="text-xs font-bold text-brand-blue hover:underline">
                View All Courses →
              </Link>
            </div>
            <Link
              href="/courses/science"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              🔬 Science (Biology, Chemistry, Physics)
            </Link>
            <Link
              href="/courses/mathematics"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              📐 Mathematics (Logic & Problem Solving)
            </Link>
            <Link
              href="/courses/ai-for-students"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              🤖 AI for Students (Prompting & Notebooks)
            </Link>
            <Link
              href="/courses/public-speaking"
              className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              🎙️ Public Speaking & Debate
            </Link>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-semibold text-slate-700"
              >
                About Us
              </Link>
              <Link
                href="/packages"
                className="block px-3 py-2 text-base font-semibold text-slate-700"
              >
                Course Packages
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-semibold text-slate-700"
              >
                Contact Us
              </Link>
              <Link
                href="/parent-login"
                className="block px-3 py-2 text-base font-semibold text-navy flex items-center gap-2"
              >
                <User className="w-4 h-4 text-brand-blue" />
                <span>Login</span>
              </Link>
              <Link
                href="/free-trial"
                className="block w-full text-center py-3 rounded-xl font-bold bg-navy text-white mt-2 shadow-soft"
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
