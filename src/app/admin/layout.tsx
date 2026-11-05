import React from 'react';
import { AdminTopBar, AdminSidebar } from '@/components/AdminNav';
import { getCurrentSession } from '@/lib/auth';

export const metadata = {
  title: 'EdNxt Management Console | EdNxt Academy',
  description: 'EdNxt Academy operations, academic streams, and educational programmes dashboard.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getCurrentSession();

  if (!session) {
    return <div className="min-h-screen bg-slate-50 font-sans">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-slate-800">
      <AdminTopBar userEmail={session.email} userName={session.name} />
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        <AdminSidebar userEmail={session.email} userName={session.name} />
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
