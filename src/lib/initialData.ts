export const INITIAL_PACKAGES = [
  {
    id: 1,
    slug: 'core-bundle',
    name: 'Core Bundle',
    subtitle: 'Academic Foundations in Science & Mathematics',
    streams_included: JSON.stringify(['Science', 'Mathematics']),
    price_aed: 2999,
    billing_period: 'per term',
    features: JSON.stringify([
      'CBSE (NCERT) or British (KS3) alignment',
      '4 Live Sessions / Week (2 Science + 2 Maths)',
      'Weekly graded homework with detailed feedback',
      '1 Dedicated Doubt-Clearing Slot every week',
      'Diagnostic Assessment at Week 0',
      'Mid-Term Checkpoint at Week 6',
      'Comprehensive Term Report & Parent Consultation'
    ]),
    is_popular: 0,
    is_published: 1
  },
  {
    id: 2,
    slug: 'future-skills-bundle',
    name: 'Future-Skills Bundle',
    subtitle: 'Applied AI & Executive Public Speaking',
    streams_included: JSON.stringify(['AI for Students', 'Public Speaking']),
    price_aed: 2999,
    billing_period: 'per term',
    features: JSON.stringify([
      'Hands-on AI Studio (Prompting, Gemini Notebooks, Agents)',
      'Executive Public Speaking, Debate & Presentation Mastery',
      '2 Live Sessions / Week (1 AI + 1 Speaking)',
      'Project-Based Learning with Capstone Presentations',
      'Small interactive cohorts for maximum speaking time',
      'Video-recorded speech review with rubric feedback',
      'Official EdNxt Capstone Project Certificate'
    ]),
    is_popular: 1,
    is_published: 1
  },
  {
    id: 3,
    slug: 'full-bundle',
    name: 'Full Bundle',
    subtitle: 'Complete Academic Excellence + Future-Ready Skills',
    streams_included: JSON.stringify(['Science', 'Mathematics', 'AI for Students', 'Public Speaking']),
    price_aed: 4999,
    billing_period: 'per term',
    features: JSON.stringify([
      'All Four Streams: Science, Maths, AI & Public Speaking',
      '6 Live Sessions / Week for total holistic development',
      'Complete CBSE or British KS3 Syllabus Coverage',
      'Priority 1-on-1 Academic & Project Mentorship',
      'All Weekly Homework, Diagnostic & Mid-term Evaluations',
      'Live Capstone Showcase & Speech Summit Participation',
      'Comprehensive Parent Dashboard & Bi-weekly Progress Sync'
    ]),
    is_popular: 0,
    is_published: 1
  }
];

export const INITIAL_COURSES = [
  {
    id: 1,
    slug: 'science',
    title: 'Science Mastery (Grades 6–8 / Years 7–9)',
    tagline: 'Explore Biology, Chemistry, Physics and more.',
    stream: 'Science',
    curriculum: 'Both',
    grades: JSON.stringify(['Grade 6 / Year 7', 'Grade 7 / Year 8', 'Grade 8 / Year 9']),
    price_aed: 1699,
    duration: '12 Weeks per Term (36 Weeks Total)',
    description: 'A deep conceptual and experimental journey through Biology, Chemistry, and Physics. Designed to cultivate scientific inquiry, analytical problem solving, and lab-ready thinking for middle schoolers.',
    learning_outcomes: JSON.stringify([
      'Mastery of core CBSE NCERT and British KS3 learning objectives',
      'Hands-on experiment modeling and virtual laboratory techniques',
      'Confidence in scientific terminology, hypothesis testing and data graphing',
      'Preparation for top performance in school examinations and future GCSE/CBSE Boards'
    ]),
    image_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Foundational Excellence',
    is_published: 1,
    is_featured: 1,
    schedule_info: 'Two 60-min live classes weekly + 1 weekly doubt-clearing slot'
  },
  {
    id: 2,
    slug: 'mathematics',
    title: 'Mathematics Problem Solving (Grades 6–8 / Years 7–9)',
    tagline: 'Build problem-solving and logical-thinking skills.',
    stream: 'Mathematics',
    curriculum: 'Both',
    grades: JSON.stringify(['Grade 6 / Year 7', 'Grade 7 / Year 8', 'Grade 8 / Year 9']),
    price_aed: 1699,
    duration: '12 Weeks per Term (36 Weeks Total)',
    description: 'Transform math anxiety into mathematical intuition. We guide students from fundamental arithmetic to abstract algebraic expressions, geometric proofs, coordinate geometry, and data probability.',
    learning_outcomes: JSON.stringify([
      'Fluency in fractions, decimals, integers, and negative numbers',
      'Deep conceptual grasp of linear equations, inequalities, and Cartesian graphing',
      'Spatial reasoning across 2D/3D shapes, mensuration, and angle proofs',
      'Mathematical modeling of real-world financial, architectural, and probability scenarios'
    ]),
    image_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    badge: 'Core Problem Solving',
    is_published: 1,
    is_featured: 1,
    schedule_info: 'Two 60-min live classes weekly + 1 weekly doubt-clearing slot'
  },
  {
    id: 3,
    slug: 'ai-for-students',
    title: 'AI for Students (Future-Ready Skills)',
    tagline: 'Learn to use AI tools responsibly and creatively.',
    stream: 'AI for Students',
    curriculum: 'Both',
    grades: JSON.stringify(['Grade 6 / Year 7', 'Grade 7 / Year 8', 'Grade 8 / Year 9']),
    price_aed: 1699,
    duration: '12 Weeks per Term (36 Weeks Total)',
    description: 'Equip middle-school students with the foundational literacy and practical tools of modern Artificial Intelligence. Learn prompt engineering, Gemini Notebooks, autonomous agents, and responsible digital ethics.',
    learning_outcomes: JSON.stringify([
      'Master the mechanics of LLMs, prompt formulas, and context windows',
      'Harness Gemini Notebooks for synthesising research papers and complex PDFs',
      'Use AI collaboratively for project ideation, meeting notes, and visual slide decks',
      'Critical ethical awareness: Identifying hallucinations, algorithmic bias, and digital integrity'
    ]),
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Most Popular Skill',
    is_published: 1,
    is_featured: 1,
    schedule_info: 'One 60–75 min studio workshop weekly + Project milestones'
  },
  {
    id: 4,
    slug: 'public-speaking',
    title: 'Public Speaking & Leadership',
    tagline: 'Speak with confidence and inspire others.',
    stream: 'Public Speaking',
    curriculum: 'Both',
    grades: JSON.stringify(['Level 1 (Grade 6)', 'Level 2 (Grade 7)', 'Level 3 (Grade 8)']),
    price_aed: 1699,
    duration: '12 Weeks per Term (36 Weeks Total)',
    description: 'Transform self-conscious students into articulate, magnetic communicators. From conquering stage fright and vocal variety to parliamentary debate rebuttals and inspirational TED-style keynotes.',
    learning_outcomes: JSON.stringify([
      'Conquer stage fright through proven posture, breathing, and vocal projection techniques',
      'Deliver impromptu speeches on the spot with the PREP framework',
      'Master parliamentary debating, identifying logical fallacies, and framing rebuttals',
      'Deliver an inspiring 5-minute capstone TED-style talk at the EdNxt Youth Summit'
    ]),
    image_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    badge: 'Leadership Accelerator',
    is_published: 1,
    is_featured: 1,
    schedule_info: 'One 60–75 min interactive speech lab weekly + Video feedback'
  }
];

export const INITIAL_SETTINGS: Record<string, string> = {
  // General & Contact
  'site_name': 'EdNxt Academy',
  'tagline': 'Build Strong Foundations. Prepare for Tomorrow.',
  'hero_subheading': 'A complete learning programme for Grades 6–8 — Academic Excellence + Future-Ready Skills.',
  'contact_email': 'admissions@ednxt.co',
  'contact_phone': '+971 4 234 5678',
  'whatsapp_number': '+971 50 123 4567',
  'office_address': 'Dubai Knowledge Park, Block 12, Dubai, United Arab Emirates',
  'academic_calendar_info': 'Three 12-week terms aligned with the UAE Ministry of Education school calendar.',
  // Pricing display
  'price_core_bundle': '2999',
  'price_future_bundle': '2999',
  'price_full_bundle': '4999',
  // Announcements
  'announcement_banner_active': 'true',
  'announcement_text': '🚀 Spring Term Enrolment Open! Book your free 1-on-1 trial class today.',
  // Social links
  'social_linkedin': 'https://linkedin.com',
  'social_instagram': 'https://instagram.com',
  'social_facebook': 'https://facebook.com',
  'social_youtube': 'https://youtube.com',
  // Maintenance / Credits
  'credits_text': 'Designed and Maintained by WebNxt'
};
