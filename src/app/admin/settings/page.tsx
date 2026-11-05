'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Save, AlertCircle, Loader2, Check, DollarSign, Bell, Mail, Home } from 'lucide-react';

interface PackageItem {
  id: number;
  slug: string;
  name: string;
  price_aed: number;
  is_popular: number;
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/settings');
      if (!res.ok) throw new Error('Failed to load settings');
      const data = await res.json();
      setSettings(data.settings || {});
      setPackages(data.packages || []);
    } catch (err: any) {
      console.error(err);
      setMessage({ text: 'Error loading website settings', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSettingChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handlePackagePriceChange = (id: number, newPrice: number) => {
    setPackages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price_aed: newPrice } : p))
    );
  };

  const handlePackagePopularToggle = (id: number) => {
    setPackages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_popular: p.is_popular === 1 ? 0 : 1 } : p))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings, packages })
      });

      if (!res.ok) throw new Error('Failed to save settings');

      setMessage({ text: 'Website settings and bundle pricing updated successfully!', type: 'success' });
      fetchSettings();
    } catch (err: any) {
      setMessage({ text: err.message || 'Error saving settings', type: 'error' });
    } finally {
      setSaveLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-10 space-y-8 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy">
            Website Settings & Tuition Controls
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Designed for non-technical team members. Changes made here update the live website immediately.
          </p>
        </div>
      </div>

      {message && (
        <div
          className={`p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-between ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          <span>{message.text}</span>
        </div>
      )}

      {loading ? (
        <div className="py-20 text-center text-slate-500 flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-brand-blue" />
          <span>Loading configuration...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Course Package Pricing Controls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-soft-green text-emerald-700 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black text-navy">Course Bundle Pricing (AED per term)</h2>
                <p className="text-xs text-slate-500">Manage term fees for Core, Future-Skills, and Full Bundles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-navy">{pkg.name}</span>
                    {pkg.is_popular === 1 && (
                      <span className="text-[10px] bg-brand-lime px-2 py-0.5 rounded-full font-bold text-navy">
                        Popular
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Term Price (AED):
                    </label>
                    <input
                      type="number"
                      value={pkg.price_aed}
                      onChange={(e) => handlePackagePriceChange(pkg.id, Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-bold text-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                    />
                  </div>

                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={pkg.is_popular === 1}
                      onChange={() => handlePackagePopularToggle(pkg.id)}
                      className="w-4 h-4 rounded text-brand-blue"
                    />
                    <span>Mark as "Most Popular"</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Top Announcement Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black text-navy">Top Website Announcement Banner</h2>
                <p className="text-xs text-slate-500">Alert parents about open enrolments or new batches</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer text-xs font-bold text-navy">
                <input
                  type="checkbox"
                  checked={settings['announcement_banner_active'] !== 'false'}
                  onChange={(e) =>
                    handleSettingChange('announcement_banner_active', e.target.checked ? 'true' : 'false')
                  }
                  className="w-4 h-4 rounded text-brand-blue"
                />
                <span>Display Announcement Banner across Top of Website</span>
              </label>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Banner Text:</label>
                <input
                  type="text"
                  value={settings['announcement_text'] || ''}
                  onChange={(e) => handleSettingChange('announcement_text', e.target.value)}
                  placeholder="e.g. 🚀 Spring Term Enrolment Open! Book your free 1-on-1 trial class today."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Homepage Text & Taglines */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-soft-purple text-purple-600 flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black text-navy">Brand & Homepage Messaging</h2>
                <p className="text-xs text-slate-500">Update main tagline and hero description</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy mb-1">Brand Name:</label>
                <input
                  type="text"
                  value={settings['site_name'] || 'EdNxt Academy'}
                  onChange={(e) => handleSettingChange('site_name', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Main Tagline:</label>
                <input
                  type="text"
                  value={settings['tagline'] || 'Build Strong Foundations. Prepare for Tomorrow.'}
                  onChange={(e) => handleSettingChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-navy mb-1">Hero Subheading:</label>
                <textarea
                  rows={2}
                  value={settings['hero_subheading'] || ''}
                  onChange={(e) => handleSettingChange('hero_subheading', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Admissions & Contact Information */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-soft-orange text-amber-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-black text-navy">Admissions & Contact Details</h2>
                <p className="text-xs text-slate-500">Used across header, footer, and contact page</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy mb-1">Admissions Email:</label>
                <input
                  type="email"
                  value={settings['contact_email'] || ''}
                  onChange={(e) => handleSettingChange('contact_email', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Landline Phone:</label>
                <input
                  type="text"
                  value={settings['contact_phone'] || ''}
                  onChange={(e) => handleSettingChange('contact_phone', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">WhatsApp Number:</label>
                <input
                  type="text"
                  value={settings['whatsapp_number'] || ''}
                  onChange={(e) => handleSettingChange('whatsapp_number', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Office Address:</label>
                <input
                  type="text"
                  value={settings['office_address'] || ''}
                  onChange={(e) => handleSettingChange('office_address', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={saveLoading}
              className="px-8 py-3.5 rounded-2xl font-bold text-sm bg-navy text-white hover:bg-navy-dark shadow-soft-lg flex items-center gap-2 transition-all"
            >
              {saveLoading && <Loader2 className="w-4 h-4 animate-spin text-brand-lime" />}
              <Save className="w-4 h-4 text-brand-lime" />
              <span>Save Website Settings</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
