'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Inbox,
  BookOpen,
  Award,
  Calendar,
  MessageSquare,
  FolderTree,
  Settings,
  ChevronDown,
  ChevronRight,
  Search,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminNavProps {
  userEmail?: string;
  userName?: string;
}

export function AdminTopBar({ userEmail = 'admin@gmail.com', userName = 'Super Admin' }: AdminNavProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error('Logout error:', e);
    }
  };

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase() || 'SA';

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#F0ECEE] px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 shadow-xs">
      {/* Left: EDNXT Medallion Badge & Title */}
      <div className="flex items-center gap-3 shrink-0">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white shadow-xs">
            <Award className="w-5 h-5 text-brand-lime" />
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-black tracking-tight text-navy">EDNXT</span>
            <span className="text-xs font-semibold text-slate-500 ml-1.5 hidden md:inline">Management Console</span>
          </div>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xl mx-2 sm:mx-6">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search records, courses, applications, students..."
            className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#102B50]/40 focus:border-[#102B50]"
          />
        </div>
      </div>

      {/* Right: Date Pill & Profile Avatar Circle */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span>Thu, 05 Nov 2026</span>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-8 h-8 rounded-full bg-[#102B50] text-white flex items-center justify-center text-xs font-bold shadow-xs hover:opacity-90"
            title={`${userName} (${userEmail})`}
          >
            {initials}
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-card-hover border border-slate-100 p-2 z-50 animate-in fade-in duration-150">
              <div className="px-3 py-2 border-b border-slate-100">
                <div className="text-xs font-bold text-navy">{userName}</div>
                <div className="text-[10px] text-slate-400 truncate">{userEmail}</div>
              </div>
              <Link
                href="/admin/reset-password"
                className="block px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 rounded-lg mt-1"
                onClick={() => setShowProfileMenu(false)}
              >
                Change Password
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-xs text-rose-600 font-semibold hover:bg-rose-50 rounded-lg flex items-center gap-2 mt-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function AdminSidebar({ userEmail = 'admin@gmail.com', userName = 'Super Admin' }: AdminNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    PEOPLE: true,
    ADMISSIONS: true,
    LEARNING: true,
    CREDENTIALS: true,
    COMMUNICATION: true,
    CATEGORIES: true,
    SETTINGS: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error('Logout error:', e);
    }
  };

  return (
    <aside className="w-full lg:w-64 bg-white text-slate-700 border-r border-[#F0ECEE] flex-shrink-0 flex flex-col justify-between p-3 z-30 overflow-y-auto">
      <div className="space-y-4">
        {/* Overview Pill (Active Burgundy) */}
        <Link
          href="/admin/dashboard"
          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-colors ${
            pathname === '/admin/dashboard'
              ? 'bg-[#102B50] text-white shadow-xs'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Overview</span>
        </Link>

        {/* SECTION: PEOPLE */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('PEOPLE')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>PEOPLE</span>
            </div>
            {expandedSections['PEOPLE'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['PEOPLE'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/users"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                User Management
              </Link>
              <Link
                href="/admin/students"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Students
              </Link>
              <Link
                href="/admin/staff"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Staff
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: ADMISSIONS */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('ADMISSIONS')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Inbox className="w-3.5 h-3.5" />
              <span>ADMISSIONS</span>
            </div>
            {expandedSections['ADMISSIONS'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['ADMISSIONS'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/enquiries?type=free_trial"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Registration Requests
              </Link>
              <Link
                href="/admin/enquiries?type=contact"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Applications
              </Link>
              <Link
                href="/admin/enquiries"
                className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                <span>Enrolments</span>
                <span className="w-4 h-4 rounded-full bg-[#C23B5A] text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: LEARNING */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('LEARNING')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>LEARNING</span>
            </div>
            {expandedSections['LEARNING'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['LEARNING'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/courses"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/admin/curriculum"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Certified Programmes
              </Link>
              <Link
                href="/courses"
                target="_blank"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Course Material
              </Link>
              <Link
                href="/admin/dashboard#attendance"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-pink-50 transition-colors"
              >
                Attendance
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: CREDENTIALS */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('CREDENTIALS')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>CREDENTIALS</span>
            </div>
            {expandedSections['CREDENTIALS'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['CREDENTIALS'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/dashboard"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Certificates
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: COMMUNICATION */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('COMMUNICATION')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>COMMUNICATION</span>
            </div>
            {expandedSections['COMMUNICATION'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['COMMUNICATION'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/contact"
                target="_blank"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Contact Info
              </Link>
              <Link
                href="/"
                target="_blank"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Website
              </Link>
              <Link
                href="/about"
                target="_blank"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Community
              </Link>
              <Link
                href="/#curriculum"
                target="_blank"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Articles
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: CATEGORIES */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('CATEGORIES')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <FolderTree className="w-3.5 h-3.5" />
              <span>CATEGORIES</span>
            </div>
            {expandedSections['CATEGORIES'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['CATEGORIES'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/courses"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Categories
              </Link>
            </div>
          )}
        </div>

        {/* SECTION: SETTINGS */}
        <div>
          <button
            type="button"
            onClick={() => toggleSection('SETTINGS')}
            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 hover:text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5" />
              <span>SETTINGS</span>
            </div>
            {expandedSections['SETTINGS'] ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
          {expandedSections['SETTINGS'] && (
            <div className="space-y-0.5 mt-1 ml-2">
              <Link
                href="/admin/settings"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Account Settings
              </Link>
              <Link
                href="/admin/reset-password"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Profile Settings
              </Link>
              <Link
                href="/admin/dashboard"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Reports
              </Link>
              <Link
                href="/admin/dashboard#activity"
                className="block px-3 py-1.5 rounded-lg text-xs text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                Audit Logs
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Sign Out */}
      <div className="pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

export default function AdminNav(props: AdminNavProps) {
  return (
    <>
      <AdminTopBar {...props} />
      <AdminSidebar {...props} />
    </>
  );
}
