'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Lock, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [studentView, setStudentView] = useState<any | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed. Please check credentials.');
      }

      if (data.user.role === 'admin' || data.user.role === 'teacher') {
        router.push('/admin/dashboard');
        router.refresh();
      } else {
        // Student / Parent Portal View
        setStudentView({
          studentName: 'Ethan Jenkins',
          parentName: data.user.name,
          grade: 'Grade 7 / Year 8 (British KS3)',
          activeTerm: 'Term 2 (Week 8)',
          attendance: '100% Attendance',
          nextSession: 'Tomorrow at 5:00 PM (Science Lab: Ecosystems)',
          homeworkStatus: 'Submitted & Graded A',
          latestTeacherNote:
            'Ethan continues to excel in linear algebraic manipulations and active participation during British Science lab inquiries. Next live doubt-clearing session confirmed for Thursday 4:30 PM.',
        });
      }
    } catch (err: any) {
      setMessage(err.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  const fillCredentials = (em: string, pass: string) => {
    setEmail(em);
    setPassword(pass);
    setMessage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 bg-gradient-to-b from-white via-soft-blue/20 to-edbg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {studentView ? (
            /* Student & Parent Portal Active Session */
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card-hover border border-slate-200 space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    EJ
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-navy">Welcome, {studentView.parentName}!</h2>
                    <p className="text-xs text-slate-500">Student: {studentView.studentName} • {studentView.grade}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStudentView(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Log Out
                </button>
              </div>

              {/* Quick Status Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-soft-blue/50 border border-blue-100">
                  <span className="text-xs text-slate-500 font-semibold">Active Term & Schedule</span>
                  <div className="text-lg font-black text-navy mt-1">{studentView.activeTerm}</div>
                  <div className="text-[11px] text-brand-blue font-bold mt-1">{studentView.nextSession}</div>
                </div>

                <div className="p-4 rounded-2xl bg-soft-green/50 border border-emerald-100">
                  <span className="text-xs text-slate-500 font-semibold">Homework & Evaluation</span>
                  <div className="text-lg font-black text-navy mt-1">{studentView.homeworkStatus}</div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-1">{studentView.attendance}</div>
                </div>

                <div className="p-4 rounded-2xl bg-soft-purple/50 border border-purple-100">
                  <span className="text-xs text-slate-500 font-semibold">Upcoming Milestone</span>
                  <div className="text-lg font-black text-navy mt-1">Week 12 Capstone</div>
                  <div className="text-[11px] text-purple-700 font-bold mt-1">AI Prompt & Oratory Showcase</div>
                </div>
              </div>

              {/* Recent Teacher Comments */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Latest Academic Notes from Teacher</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "{studentView.latestTeacherNote}"
                </p>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/packages"
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Manage Term Enrolment & Add Future Skills Bundle →
                </Link>
              </div>
            </div>
          ) : (
            /* Unified Login Form */
            <div className="max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-card-hover border border-slate-200 space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-soft-blue text-brand-blue flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-black text-navy">Login</h1>
                <p className="text-xs text-slate-500">
                  Sign in to access your administrative dashboard or student learning portal.
                </p>
              </div>

              {message && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{message}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-navy">Password</label>
                    <Link
                      href="/admin/reset-password"
                      className="text-[11px] text-brand-blue hover:underline font-semibold"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-lime" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4 text-brand-lime" />
                    </>
                  )}
                </button>
              </form>

              {/* Quick Fill Demo Credentials */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                  Quick Demo Logins (Click to autofill):
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => fillCredentials('admin@gmail.com', 'demo123')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:bg-soft-blue/40 text-left transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-navy">Super Admin</div>
                      <div className="text-[11px] text-slate-500">admin@gmail.com / demo123</div>
                    </div>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-brand-blue">Admin</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => fillCredentials('teacher@gmail.com', 'demo123')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:bg-soft-green/40 text-left transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-navy">Lead Teacher (Faculty)</div>
                      <div className="text-[11px] text-slate-500">teacher@gmail.com / demo123</div>
                    </div>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-emerald-700">Teacher</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => fillCredentials('student@gmail.com', 'demo123')}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:bg-soft-purple/40 text-left transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-navy">Student / Parent Portal</div>
                      <div className="text-[11px] text-slate-500">student@gmail.com / demo123</div>
                    </div>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-purple-700">Student</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
