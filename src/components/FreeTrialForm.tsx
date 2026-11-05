'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, Loader2, Send, Sparkles } from 'lucide-react';

export default function FreeTrialForm() {
  const searchParams = useSearchParams();
  const initialStream = searchParams.get('stream') || '';
  const initialBundle = searchParams.get('bundle') || '';

  const [formData, setFormData] = useState({
    parent_name: '',
    email: '',
    phone: '',
    student_name: '',
    grade: 'Grade 6 / Year 7',
    curriculum: 'CBSE (NCERT Aligned)',
    interested_stream: initialStream || (initialBundle ? initialBundle.replace(/-/g, ' ') : 'Science'),
    preferred_contact_method: 'WhatsApp',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.parent_name.trim()) errors.parent_name = 'Parent name is required';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.student_name.trim()) errors.student_name = 'Student name is required';
    if (!formData.grade) errors.grade = 'Please select your child’s grade';
    if (!formData.curriculum) errors.curriculum = 'Please select a curriculum';
    if (!formData.interested_stream) errors.interested_stream = 'Please choose a learning stream for the trial';

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/free-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      setSuccessMessage(data.message || 'Free trial class successfully booked!');
      setFormData({
        parent_name: '',
        email: '',
        phone: '',
        student_name: '',
        grade: 'Grade 6 / Year 7',
        curriculum: 'CBSE (NCERT Aligned)',
        interested_stream: 'Science',
        preferred_contact_method: 'WhatsApp',
        message: ''
      });
      setFieldErrors({});
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80">
      {successMessage ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-soft-green text-emerald-600 flex items-center justify-center mx-auto mb-2 animate-bounce-slow">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-navy">Free Trial Confirmed!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {successMessage}
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-md mx-auto text-xs text-slate-500">
            A confirmation has been logged in our admissions portal. Our academic coordinator will contact you via {formData.preferred_contact_method || 'WhatsApp'} to schedule the exact live slot.
          </div>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors mt-4"
          >
            Book Another Trial Class
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Parent Information */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              1. Parent / Guardian Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Parent Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.parent_name}
                  onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                    fieldErrors.parent_name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {fieldErrors.parent_name && (
                  <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.parent_name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                    fieldErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Phone Number (with Country Code)
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Preferred Contact Method
                </label>
                <select
                  value={formData.preferred_contact_method}
                  onChange={(e) => setFormData({ ...formData, preferred_contact_method: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Student & Academic Pathway */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              2. Student & Academic Stream
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Student Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ethan Jenkins"
                  value={formData.student_name}
                  onChange={(e) => setFormData({ ...formData, student_name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                    fieldErrors.student_name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {fieldErrors.student_name && (
                  <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.student_name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Student Grade / Year <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  <option value="Grade 6 / Year 7">Grade 6 (British Year 7)</option>
                  <option value="Grade 7 / Year 8">Grade 7 (British Year 8)</option>
                  <option value="Grade 8 / Year 9">Grade 8 (British Year 9)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Curriculum Pathway <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.curriculum}
                  onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  <option value="CBSE (NCERT Aligned)">CBSE (NCERT Aligned)</option>
                  <option value="British Curriculum (KS3)">British Curriculum (KS3)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">
                  Stream for Free Trial <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.interested_stream}
                  onChange={(e) => setFormData({ ...formData, interested_stream: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  <option value="Science">Science (Biology, Chemistry, Physics)</option>
                  <option value="Mathematics">Mathematics & Problem Solving</option>
                  <option value="AI for Students">AI for Students (Prompting & Notebooks)</option>
                  <option value="Public Speaking">Public Speaking & Debate</option>
                  <option value="Core Bundle">Core Bundle (Science + Maths)</option>
                  <option value="Future-Skills Bundle">Future-Skills Bundle (AI + Speech)</option>
                  <option value="Full Bundle">Full Bundle (All 4 Streams)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Additional Notes */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-bold text-navy mb-1.5">
              Additional Notes or Specific Learning Goals (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your child's current strengths, subjects they want to improve in, or preferred day/time for the trial class..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-black text-base bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-brand-lime" />
                  <span>Submitting Trial Request...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-brand-lime" />
                  <span>Confirm Free Trial Booking</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2.5">
              🔒 We respect parent privacy. Your details are never shared with third parties.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
