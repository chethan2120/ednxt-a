'use client';

import React, { useState, useEffect } from 'react';
import { Layers, Edit, Check, AlertCircle, Loader2, X, Search, BookOpen } from 'lucide-react';

interface CurriculumTopicItem {
  id: string;
  curriculum: string;
  subject: string;
  grade: string;
  term: number;
  term_title: string;
  duration: string;
  topics_json: string;
  learning_approach: string;
  assessments_json: string;
  capstone: string;
}

export default function AdminCurriculumPage() {
  const [curriculum, setCurriculum] = useState<CurriculumTopicItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [editingTopic, setEditingTopic] = useState<CurriculumTopicItem | null>(null);
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchCurriculum = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/curriculum');
      if (!res.ok) throw new Error('Failed to load curriculum');
      const data = await res.json();
      setCurriculum(data.curriculum || []);
    } catch (err: any) {
      console.error(err);
      setMessage({ text: 'Error loading curriculum data', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurriculum();
  }, []);

  const handleEdit = (item: CurriculumTopicItem) => {
    setEditingTopic({ ...item });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTopic) return;

    setSaveLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/admin/curriculum/${encodeURIComponent(editingTopic.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingTopic)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update topic');

      setMessage({ text: 'Curriculum topic updated successfully!', type: 'success' });
      setEditingTopic(null);
      fetchCurriculum();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaveLoading(false);
    }
  };

  // Filtered topics
  const filtered = curriculum.filter((item) => {
    const matchesSubject = selectedSubject === 'all' || item.subject === selectedSubject;
    const matchesSearch =
      item.term_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.curriculum.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="p-6 sm:p-10 space-y-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy">
            Curriculum & Syllabus Editor
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Update term titles, chapter breakdowns, learning approaches, and assessment schedules.
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

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500">Filter Stream:</span>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-navy bg-white"
          >
            <option value="all">All Subjects</option>
            <option value="Science">Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="AI for Students">AI for Students</option>
            <option value="Public Speaking">Public Speaking</option>
          </select>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search topic or grade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
          />
        </div>
      </div>

      {/* Curriculum Table */}
      {loading ? (
        <div className="py-20 text-center text-slate-500 flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-brand-blue" />
          <span>Loading curriculum records...</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-slate-500 text-sm">No curriculum entries matching filters.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase font-bold text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Curriculum</th>
                  <th className="py-3 px-4">Grade / Year</th>
                  <th className="py-3 px-4">Term</th>
                  <th className="py-3 px-4">Term Title</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-navy">{item.subject}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 font-semibold text-slate-700 text-[10px]">
                        {item.curriculum}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold">{item.grade}</td>
                    <td className="py-3 px-4">Term {item.term}</td>
                    <td className="py-3 px-4 font-medium text-navy max-w-xs truncate">{item.term_title}</td>
                    <td className="py-3 px-4 text-slate-500">{item.duration}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 hover:bg-navy hover:text-white text-navy transition-colors inline-flex items-center gap-1"
                      >
                        <Edit className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Curriculum Modal */}
      {editingTopic && (
        <div className="fixed inset-0 z-50 bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-card-hover space-y-6 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-brand-blue uppercase">
                  {editingTopic.curriculum} • {editingTopic.subject}
                </span>
                <h2 className="text-xl font-black text-navy mt-0.5">
                  Edit: {editingTopic.grade} (Term {editingTopic.term})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setEditingTopic(null)}
                className="text-slate-400 hover:text-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <label className="block text-xs font-bold text-navy mb-1">Term Title *</label>
                <input
                  type="text"
                  required
                  value={editingTopic.term_title}
                  onChange={(e) => setEditingTopic({ ...editingTopic, term_title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Duration *</label>
                <input
                  type="text"
                  required
                  value={editingTopic.duration}
                  onChange={(e) => setEditingTopic({ ...editingTopic, duration: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Learning Approach & Pedagogy</label>
                <textarea
                  rows={2}
                  value={editingTopic.learning_approach || ''}
                  onChange={(e) => setEditingTopic({ ...editingTopic, learning_approach: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Capstone Project or Showcase</label>
                <input
                  type="text"
                  value={editingTopic.capstone || ''}
                  onChange={(e) => setEditingTopic({ ...editingTopic, capstone: e.target.value })}
                  placeholder="e.g. Designing an interactive AI research companion"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Topics JSON</label>
                <textarea
                  rows={6}
                  value={editingTopic.topics_json}
                  onChange={(e) => setEditingTopic({ ...editingTopic, topics_json: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  JSON array of chapters: [{`{"title":"...", "description":"...", "subtopics":["..."]}`}]
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingTopic(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveLoading}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-navy text-white hover:bg-navy-dark shadow-soft flex items-center gap-2"
                >
                  {saveLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Curriculum</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
