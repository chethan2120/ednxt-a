'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Check,
  Eye,
  EyeOff,
  Sparkles,
  AlertCircle,
  Loader2,
  X
} from 'lucide-react';

interface Course {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  stream: string;
  curriculum: string;
  grades: string;
  price_aed: number;
  duration: string;
  description: string;
  learning_outcomes: string;
  image_url: string;
  badge: string;
  is_published: number;
  is_featured: number;
  schedule_info: string;
}

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState<Partial<Course> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/courses');
      if (!res.ok) throw new Error('Failed to load courses');
      const data = await res.json();
      setCourses(data.courses || []);
    } catch (err: any) {
      console.error(err);
      setMessage({ text: 'Error loading courses', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openNewCourseModal = () => {
    setEditingCourse({
      title: '',
      slug: '',
      tagline: '',
      stream: 'Science',
      curriculum: 'Both',
      grades: JSON.stringify(['Grade 6 / Year 7', 'Grade 7 / Year 8', 'Grade 8 / Year 9']),
      price_aed: 1699,
      duration: '12 Weeks per Term',
      description: '',
      learning_outcomes: JSON.stringify(['Foundational concept mastery', 'Hands-on practical exploration']),
      image_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      badge: 'New Course',
      is_published: 1,
      is_featured: 0,
      schedule_info: 'Two 60-min live classes weekly'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (c: Course) => {
    setEditingCourse({ ...c });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse || !editingCourse.title) return;

    setSaveLoading(true);
    setMessage(null);

    try {
      const isEdit = Boolean(editingCourse.id);
      const url = isEdit ? `/api/admin/courses/${editingCourse.id}` : '/api/admin/courses';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCourse)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save course');

      setMessage({ text: isEdit ? 'Course updated successfully!' : 'Course created and published!', type: 'success' });
      setIsModalOpen(false);
      setEditingCourse(null);
      fetchCourses();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;

    try {
      const res = await fetch(`/api/admin/courses/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete course');
      setMessage({ text: 'Course deleted successfully', type: 'success' });
      fetchCourses();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    }
  };

  const togglePublish = async (course: Course) => {
    try {
      const updated = { ...course, is_published: course.is_published === 1 ? 0 : 1 };
      await fetch(`/api/admin/courses/${course.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      fetchCourses();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-6 sm:p-10 space-y-8 max-w-7xl mx-auto w-full">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy">
            Course Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Create, edit, price, and publish courses. Published courses immediately appear across the public website.
          </p>
        </div>

        <button
          type="button"
          onClick={openNewCourseModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-navy text-white hover:bg-navy-dark shadow-soft transition-all"
        >
          <Plus className="w-4 h-4 text-brand-lime" />
          <span>Add New Course</span>
        </button>
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

      {/* Courses Cards Grid */}
      {loading ? (
        <div className="py-20 text-center text-slate-500 flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin text-brand-blue" />
          <span>Loading course catalog...</span>
        </div>
      ) : courses.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
          <p className="text-slate-500 text-sm">No courses found. Click "+ Add New Course" to create one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.id}
              className={`rounded-3xl border bg-white p-6 shadow-soft flex flex-col justify-between transition-all ${
                c.is_published === 1 ? 'border-slate-200' : 'border-dashed border-slate-300 opacity-75'
              }`}
            >
              <div>
                {/* Course Image */}
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={c.image_url || 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80'}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 shadow-xs">
                    {c.stream}
                  </div>
                  <div className="absolute top-3 right-3">
                    <button
                      type="button"
                      onClick={() => togglePublish(c)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold shadow-xs flex items-center gap-1 ${
                        c.is_published === 1
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-700 text-white'
                      }`}
                    >
                      {c.is_published === 1 ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      <span>{c.is_published === 1 ? 'Published' : 'Draft'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-brand-blue uppercase">{c.curriculum} Pathway</span>
                  <span className="text-xs font-bold text-navy">AED {c.price_aed.toLocaleString()}</span>
                </div>

                <h3 className="text-base font-black text-navy line-clamp-1">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{c.description}</p>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{c.duration}</span>
                  {c.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-lime/30 text-navy font-bold">
                      {c.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openEditModal(c)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(c.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Course Edit/Create Modal */}
      {isModalOpen && editingCourse && (
        <div className="fixed inset-0 z-50 bg-navy-dark/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-card-hover space-y-6 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-xl font-black text-navy">
                {editingCourse.id ? 'Edit Course Details' : 'Create New Course'}
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Course Title *</label>
                  <input
                    type="text"
                    required
                    value={editingCourse.title || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Slug (URL friendly)</label>
                  <input
                    type="text"
                    value={editingCourse.slug || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, slug: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                    placeholder="e.g. advanced-science"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Learning Stream *</label>
                  <select
                    value={editingCourse.stream || 'Science'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, stream: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy bg-white"
                  >
                    <option value="Science">Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="AI for Students">AI for Students</option>
                    <option value="Public Speaking">Public Speaking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Curriculum Pathway *</label>
                  <select
                    value={editingCourse.curriculum || 'Both'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, curriculum: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy bg-white"
                  >
                    <option value="Both">Both (CBSE & British KS3)</option>
                    <option value="CBSE">CBSE Only</option>
                    <option value="British">British Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Tuition Price (AED per term) *</label>
                  <input
                    type="number"
                    required
                    value={editingCourse.price_aed ?? 1699}
                    onChange={(e) => setEditingCourse({ ...editingCourse, price_aed: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Duration *</label>
                  <input
                    type="text"
                    value={editingCourse.duration || '12 Weeks per Term'}
                    onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Badge / Tag</label>
                  <input
                    type="text"
                    value={editingCourse.badge || ''}
                    placeholder="e.g. Most Popular, Foundational"
                    onChange={(e) => setEditingCourse({ ...editingCourse, badge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Image URL</label>
                  <input
                    type="text"
                    value={editingCourse.image_url || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, image_url: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Course Description *</label>
                <textarea
                  rows={3}
                  required
                  value={editingCourse.description || ''}
                  onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Weekly Schedule Info</label>
                <input
                  type="text"
                  value={editingCourse.schedule_info || ''}
                  placeholder="e.g. Two 60-min live classes weekly + 1 doubt slot"
                  onChange={(e) => setEditingCourse({ ...editingCourse, schedule_info: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-navy">
                  <input
                    type="checkbox"
                    checked={editingCourse.is_published === 1}
                    onChange={(e) => setEditingCourse({ ...editingCourse, is_published: e.target.checked ? 1 : 0 })}
                    className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue"
                  />
                  <span>Published on Website</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-navy">
                  <input
                    type="checkbox"
                    checked={editingCourse.is_featured === 1}
                    onChange={(e) => setEditingCourse({ ...editingCourse, is_featured: e.target.checked ? 1 : 0 })}
                    className="w-4 h-4 rounded text-brand-blue focus:ring-brand-blue"
                  />
                  <span>Highlight on Homepage</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
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
                  <span>{editingCourse.id ? 'Save Changes' : 'Create Course'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
