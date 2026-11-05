'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = 'Message must be at least 5 characters long';
    }

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccessMessage(data.message || 'Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFieldErrors({});
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80">
      {successMessage ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-soft-green text-emerald-600 flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-navy">Message Received!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {successMessage}
          </p>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold hover:bg-navy-dark transition-colors mt-4"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. David Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                  fieldErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {fieldErrors.name && (
                <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.name}</p>
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Phone Number (Optional)
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
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Enquiry about Grade 7 Science Schedule"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                  fieldErrors.subject ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {fieldErrors.subject && (
                <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.subject}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="How can our academic team help you today? Ask questions about teachers, curriculum pathways, class timings, or custom packages..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                fieldErrors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
              }`}
            />
            {fieldErrors.message && (
              <p className="text-[11px] text-rose-600 mt-1 font-semibold">{fieldErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-brand-lime" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-brand-lime" />
                <span>Send Message to Admissions</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
