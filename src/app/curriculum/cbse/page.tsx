import React from 'react';
import CBSECurriculumView from '@/components/curriculum/CBSECurriculumView';

export const metadata = {
  title: 'CBSE Curriculum (NCERT Aligned) | Grades 6, 7 & 8 | EdNxt',
  description:
    'Detailed NCERT-aligned CBSE curriculum for Grades 6, 7 & 8 across Science and Mathematics. 3 terms, 36 weeks total, aligned with UAE school calendars.',
};

export default function CBSECurriculumPage() {
  return <CBSECurriculumView />;
}
