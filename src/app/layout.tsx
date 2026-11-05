import type { Metadata } from 'next';
import './globals.css';
import ScrollAction from '@/components/ScrollAction';
import AcademicAdvisorChatbot from '@/components/AcademicAdvisorChatbot';
import FloatingBackgroundElements from '@/components/FloatingBackgroundElements';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata: Metadata = {
  title: 'EdNxt Academy | Build Strong Foundations. Prepare for Tomorrow.',
  description: 'A complete educational learning programme for Grades 6–8 across CBSE and British Key Stage 3. Science, Mathematics, AI for Students, and Public Speaking.',
  keywords: ['EdNxt', 'Middle School Tuition', 'CBSE Grade 6 7 8', 'British KS3 Science Maths', 'AI for Students', 'Public Speaking Dubai', 'NCERT Tuition'],
  openGraph: {
    title: 'EdNxt Academy | Build Strong Foundations. Prepare for Tomorrow.',
    description: 'A complete educational learning programme for Grades 6–8 — Academic Excellence + Future-Ready Skills.',
    url: 'https://ednxt.co',
    siteName: 'EdNxt Academy',
    locale: 'en_AE',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-edbg text-navy antialiased selection:bg-brand-lime selection:text-navy relative">
        <FloatingBackgroundElements />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
        <ScrollAction />
        <AcademicAdvisorChatbot />
        <ScrollAnimations />
      </body>
    </html>
  );
}
