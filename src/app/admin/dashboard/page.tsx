'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ChevronDown,
  UserPlus,
  BookPlus,
  Award,
  Users,
  FileCheck2,
  Settings,
  ArrowRight,
  TrendingUp,
  Inbox,
  Clock,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [showQuickActionsMenu, setShowQuickActionsMenu] = useState(false);
  const [chartShowType, setChartShowType] = useState('Students enrolled');
  const [chartPeriod, setChartPeriod] = useState('October, November and December');
  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries' | 'activity'>('overview');

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full">
      {/* =========================================
          ROW 1: WELCOME HEADER & QUICK ACTIONS
         ========================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Welcome back, Super Admin
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Here is an overview of EdNxt Academy operations, educational streams, and admissions today.
          </p>
        </div>

        {/* Quick Actions Dropdown Button (Amber Gold) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowQuickActionsMenu(!showQuickActionsMenu)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#B58943] hover:bg-[#A37836] shadow-xs flex items-center gap-2 transition-colors"
          >
            <span>Quick Actions</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {showQuickActionsMenu && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white shadow-card-hover border border-slate-100 p-2 z-50 animate-in fade-in duration-150">
              <Link
                href="/admin/enquiries"
                className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy"
                onClick={() => setShowQuickActionsMenu(false)}
              >
                Review Enrolments (2)
              </Link>
              <Link
                href="/admin/courses"
                className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy"
                onClick={() => setShowQuickActionsMenu(false)}
              >
                + Create New Course
              </Link>
              <Link
                href="/admin/curriculum"
                className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy"
                onClick={() => setShowQuickActionsMenu(false)}
              >
                Update Curriculum
              </Link>
              <Link
                href="/admin/settings"
                className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy"
                onClick={() => setShowQuickActionsMenu(false)}
              >
                Website Settings
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* =========================================
          ROW 2: TOP STATS ROW (6 Rounded White Cards)
         ========================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Card 1: Total Students */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Total Students</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">2</div>
        </div>

        {/* Card 2: Pending Registrations */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Pending Registrations</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">0</div>
        </div>

        {/* Card 3: Active Staff */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Active Staff</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">2</div>
        </div>

        {/* Card 4: Published Courses */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Published Courses</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">11</div>
        </div>

        {/* Card 5: Active Enrolments */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Active Enrolments</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">1</div>
        </div>

        {/* Card 6: Certificates Issued */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0ECEE] shadow-xs flex flex-col justify-between">
          <div className="text-[11px] font-bold text-slate-500">Certificates Issued</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">1</div>
        </div>
      </div>

      {/* =========================================
          ROW 3: REQUIRES ATTENTION BANNER
         ========================================= */}
      <div className="rounded-2xl border border-[#F7D6DE] bg-[#FFF5F7] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#A82245]">
            <AlertTriangle className="w-4 h-4 text-[#C23B5A]" />
            <span>Requires attention</span>
          </div>
          <div className="text-sm font-black text-slate-900">
            2 enrolment requests awaiting review
          </div>
          <div className="text-xs text-slate-500">
            Course enrolment requests that have not been approved.
          </div>
        </div>

        <Link
          href="/admin/enquiries"
          className="px-5 py-2 rounded-xl text-xs font-bold bg-[#5C1D2E] text-white hover:bg-[#481624] transition-colors shrink-0 shadow-xs"
        >
          Review
        </Link>
      </div>

      {/* =========================================
          ROW 4: INSTITUTE OVERVIEW MONTHLY BAR CHART
         ========================================= */}
      <div className="bg-white rounded-2xl p-6 border border-[#F0ECEE] shadow-xs space-y-6">
        {/* Top Header of Chart */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base font-black text-slate-900">Institute overview</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Monthly figures from the institute records. Empty months stay at zero.
            </p>
          </div>

          {/* Filters (Show & Period) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Show</span>
              <select
                value={chartShowType}
                onChange={(e) => setChartShowType(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5C1D2E]"
              >
                <option value="Students enrolled">Students enrolled</option>
                <option value="Applications received">Applications received</option>
                <option value="Course completions">Course completions</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Period</span>
              <select
                value={chartPeriod}
                onChange={(e) => setChartPeriod(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#5C1D2E]"
              >
                <option value="October, November and December">October, November and December</option>
                <option value="July, August and September">July, August and September</option>
                <option value="All Academic Year">All Academic Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Visual Monthly Bar Chart (Oct: 0, Nov: 1, Dec: 0) */}
        <div className="pt-4 pb-2">
          <div className="h-56 w-full flex items-end justify-around px-8 relative border-b border-slate-200">
            {/* October Bar (0) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-slate-400">0</span>
              <div className="w-16 sm:w-20 h-1 bg-slate-200 rounded-t" />
              <span className="text-xs font-semibold text-slate-500 absolute -bottom-6">
                October
              </span>
            </div>

            {/* November Bar (1 - Tall Burgundy Bar) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-slate-900">1</span>
              <div className="w-16 sm:w-20 h-44 bg-[#5C1D2E] rounded-t-lg shadow-sm hover:opacity-95 transition-opacity cursor-pointer group relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex px-2 py-1 bg-slate-900 text-white text-[10px] rounded shadow-xs whitespace-nowrap">
                  1 Enrolment Confirmed
                </div>
              </div>
              <span className="text-xs font-bold text-slate-900 absolute -bottom-6">
                November
              </span>
            </div>

            {/* December Bar (0) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold text-slate-400">0</span>
              <div className="w-16 sm:w-20 h-1 bg-slate-200 rounded-t" />
              <span className="text-xs font-semibold text-slate-500 absolute -bottom-6">
                December
              </span>
            </div>
          </div>
          <div className="h-8" />
        </div>
      </div>

      {/* =========================================
          ROW 5: SPLIT LAYOUT (Institute Quick Actions & Accredited Institute)
         ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Approx 70%): Institute Quick Actions */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900">Institute Quick Actions</h2>
            <span className="text-xs text-slate-400">Standard operations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Action 1: Enroll Student */}
            <Link
              href="/admin/enquiries"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <UserPlus className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Enroll Student</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Create portal accounts</div>
            </Link>

            {/* Action 2: Create Course */}
            <Link
              href="/admin/courses"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <BookPlus className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Create Course</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Syllabus & set pricing</div>
            </Link>

            {/* Action 3: Issue Certificate */}
            <Link
              href="/admin/curriculum"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Issue Certificate</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Verified credentials</div>
            </Link>

            {/* Action 4: Manage Applications */}
            <Link
              href="/admin/enquiries"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Review Applications</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Trial & direct requests</div>
            </Link>

            {/* Action 5: Institute Analytics */}
            <Link
              href="/admin/dashboard"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Institute Analytics</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Attendance & reports</div>
            </Link>

            {/* Action 6: Platform Settings */}
            <Link
              href="/admin/settings"
              className="p-4 rounded-2xl bg-white border border-[#F0ECEE] shadow-xs hover:border-[#5C1D2E]/40 hover:shadow-soft transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-pink-50 text-[#5C1D2E] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Settings className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">System Settings</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Tuition & term fees</div>
            </Link>
          </div>
        </div>

        {/* Right Column (Approx 30%): ACCREDITED INSTITUTE Card */}
        <div className="lg:col-span-4 bg-[#5C1D2E] text-white rounded-2xl p-6 shadow-card-hover flex flex-col justify-between">
          <div className="space-y-4">
            {/* Gold Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8A354E] text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-300/30">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>ACCREDITED INSTITUTE</span>
            </div>

            <p className="text-xs text-rose-100 leading-relaxed pt-2">
              All certified programmes and assessments adhere strictly to UK Engineering Council, ASME Section IX, ISO 9712, PCN, and TWI standards.
            </p>
          </div>

          <div className="pt-6 border-t border-rose-300/20 text-[11px] text-rose-200 flex items-center justify-between">
            <span>Verified Quality Assurance</span>
            <span className="font-bold text-white">2026 Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
