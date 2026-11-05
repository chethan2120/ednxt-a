'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Inbox,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Trash2,
  Calendar,
  Phone,
  Mail,
  User,
  AlertCircle,
  Loader2,
  X,
  FileText
} from 'lucide-react';

interface Enquiry {
  id: number;
  type: 'free_trial' | 'contact';
  name: string;
  email: string;
  phone: string;
  student_name: string;
  grade: string;
  curriculum: string;
  interested_stream: string;
  preferred_contact_method: string;
  subject: string;
  message: string;
  status: 'New' | 'Contacted' | 'Trial Scheduled' | 'Converted' | 'Closed';
  internal_notes: string;
  created_at: string;
}

export default function AdminEnquiriesPage() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get('id');

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [updateStatus, setUpdateStatus] = useState<string>('New');
  const [updateNotes, setUpdateNotes] = useState<string>('');
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (typeFilter !== 'all') params.append('type', typeFilter);
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchTerm.trim()) params.append('search', searchTerm.trim());

      const res = await fetch(`/api/admin/enquiries?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to load enquiries');
      const data = await res.json();
      setEnquiries(data.enquiries || []);

      if (highlightId && data.enquiries) {
        const found = data.enquiries.find((e: Enquiry) => String(e.id) === highlightId);
        if (found) {
          openDetailModal(found);
        }
      }
    } catch (err: any) {
      console.error(err);
      setMessage({ text: 'Error loading submissions', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [typeFilter, statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEnquiries();
  };

  const openDetailModal = (enq: Enquiry) => {
    setSelectedEnquiry(enq);
    setUpdateStatus(enq.status);
    setUpdateNotes(enq.internal_notes || '');
  };

  const handleStatusUpdate = async () => {
    if (!selectedEnquiry) return;
    setSaveLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/admin/enquiries/${selectedEnquiry.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: updateStatus,
          internal_notes: updateNotes
        })
      });

      if (!res.ok) throw new Error('Failed to update status');

      setMessage({ text: 'Enquiry updated successfully!', type: 'success' });
      setSelectedEnquiry({
        ...selectedEnquiry,
        status: updateStatus as any,
        internal_notes: updateNotes
      });
      fetchEnquiries();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this enquiry record?')) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete enquiry');
      setMessage({ text: 'Enquiry record removed', type: 'success' });
      setSelectedEnquiry(null);
      fetchEnquiries();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    }
  };

  return (
    <div className="p-6 sm:p-10 space-y-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy">
            Enquiries & Free Trial Submissions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track parent enquiries, coordinate trial class scheduling, and log admissions internal notes.
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
          <button type="button" onClick={() => setMessage(null)} className="text-slate-500 hover:text-navy">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search and Filter Controls */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-soft space-y-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search parent, student, email or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Type:</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-navy bg-white"
              >
                <option value="all">All Enquiries</option>
                <option value="free_trial">Free Trial Requests</option>
                <option value="contact">Contact Messages</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs text-navy bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Trial Scheduled">Trial Scheduled</option>
                <option value="Converted">Converted</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark transition-all"
            >
              Apply Filter
            </button>
          </div>
        </form>
      </div>

      {/* Submissions List */}
      {loading ? (
        <div className="py-20 text-center text-slate-500 flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-brand-blue" />
          <span>Loading submissions...</span>
        </div>
      ) : enquiries.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-2">
          <p className="text-slate-500 text-sm font-semibold">No enquiries found matching your filter criteria.</p>
          <p className="text-slate-400 text-xs">New trial bookings and contact messages submitted by parents will appear here automatically.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase font-bold text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Parent / Contact</th>
                  <th className="py-3.5 px-4">Student & Grade</th>
                  <th className="py-3.5 px-4">Stream / Subject</th>
                  <th className="py-3.5 px-4">Date Received</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          enq.type === 'free_trial'
                            ? 'bg-soft-blue text-brand-blue border border-blue-200/50'
                            : 'bg-soft-green text-emerald-700 border border-emerald-200/50'
                        }`}
                      >
                        {enq.type === 'free_trial' ? 'Free Trial' : 'Contact'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-navy">{enq.name}</div>
                      <div className="text-[11px] text-slate-500">{enq.email}</div>
                      {enq.phone && <div className="text-[10px] text-slate-400">{enq.phone}</div>}
                    </td>
                    <td className="py-3.5 px-4">
                      {enq.student_name ? (
                        <>
                          <div className="font-semibold text-navy">{enq.student_name}</div>
                          <div className="text-[11px] text-slate-500">{enq.grade}</div>
                          <div className="text-[10px] text-slate-400">{enq.curriculum}</div>
                        </>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-navy">
                        {enq.interested_stream || enq.subject}
                      </div>
                      <div className="text-[10px] text-slate-400">Via {enq.preferred_contact_method}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {new Date(enq.created_at).toLocaleDateString([], {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          enq.status === 'New'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : enq.status === 'Contacted'
                            ? 'bg-blue-100 text-blue-900 border border-blue-300'
                            : enq.status === 'Trial Scheduled'
                            ? 'bg-purple-100 text-purple-900 border border-purple-300'
                            : enq.status === 'Converted'
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => openDetailModal(enq)}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-navy text-white hover:bg-navy-dark transition-colors"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail & Status Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-card-hover space-y-6 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase text-brand-blue">
                  Enquiry ID #{selectedEnquiry.id} • {selectedEnquiry.type === 'free_trial' ? 'Free Trial Class' : 'Contact Message'}
                </span>
                <h2 className="text-xl font-black text-navy mt-0.5">{selectedEnquiry.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="text-slate-400 hover:text-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold">Email:</span>
                <a href={`mailto:${selectedEnquiry.email}`} className="font-bold text-brand-blue hover:underline">
                  {selectedEnquiry.email}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold">Phone Number:</span>
                <span className="font-bold text-navy">{selectedEnquiry.phone || 'Not provided'}</span>
              </div>

              {selectedEnquiry.student_name && (
                <>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block font-semibold">Student Name:</span>
                    <span className="font-bold text-navy">{selectedEnquiry.student_name}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block font-semibold">Grade & Curriculum:</span>
                    <span className="font-bold text-navy">
                      {selectedEnquiry.grade} ({selectedEnquiry.curriculum})
                    </span>
                  </div>
                </>
              )}

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold">Requested Stream:</span>
                <span className="font-bold text-navy">
                  {selectedEnquiry.interested_stream || selectedEnquiry.subject}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-semibold">Preferred Channel:</span>
                <span className="font-bold text-navy">{selectedEnquiry.preferred_contact_method}</span>
              </div>
            </div>

            {/* Message Body */}
            {selectedEnquiry.message && (
              <div>
                <label className="block text-xs font-bold text-navy mb-1">Parent Message / Note:</label>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  {selectedEnquiry.message}
                </div>
              </div>
            )}

            {/* Status Update Control */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Update Status:</label>
                  <select
                    value={updateStatus}
                    onChange={(e) => setUpdateStatus(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-navy bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Trial Scheduled">Trial Scheduled</option>
                    <option value="Converted">Converted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Internal Team Notes:</label>
                <textarea
                  rows={3}
                  value={updateNotes}
                  onChange={(e) => setUpdateNotes(e.target.value)}
                  placeholder="e.g. Called mother on WhatsApp. Trial scheduled for Tuesday 5 PM with Science teacher..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDelete(selectedEnquiry.id)}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Record</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleStatusUpdate}
                  disabled={saveLoading}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark shadow-soft flex items-center gap-1.5"
                >
                  {saveLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Status & Notes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
