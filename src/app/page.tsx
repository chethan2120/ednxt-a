import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LearningStreamsSection from '@/components/LearningStreamsSection';
import MiddleSchoolSignificanceSection from '@/components/MiddleSchoolSignificanceSection';
import CurriculumOverviewSection from '@/components/CurriculumOverviewSection';
import WeeklyCadenceSection from '@/components/WeeklyCadenceSection';
import PackagesSection from '@/components/PackagesSection';
import ProgressSection from '@/components/ProgressSection';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import { getAllSettings, getAllPackages } from '@/lib/db';

export const revalidate = 0; // Dynamic server rendering so admin changes reflect immediately!

export default function HomePage() {
  const settings = getAllSettings();
  const packages = getAllPackages();

  const announcementText = settings['announcement_text'] || '🚀 Spring Term Enrolment Open! Book your free 1-on-1 trial class today.';
  const isAnnouncementActive = settings['announcement_banner_active'] !== 'false';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        announcementText={announcementText}
        isAnnouncementActive={isAnnouncementActive}
      />
      <main className="flex-grow">
        <HeroSection />
        <LearningStreamsSection />
        <MiddleSchoolSignificanceSection />
        <CurriculumOverviewSection />
        <WeeklyCadenceSection />
        <PackagesSection initialPackages={packages as any} />
        <ProgressSection />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
