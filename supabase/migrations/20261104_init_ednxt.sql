-- Supabase PostgreSQL Migration for EdNxt Educational Website
-- Tables, RLS Policies, Indexes & Audit Logging

-- 1. COURSES TABLE
CREATE TABLE IF NOT EXISTS public.courses (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT,
  stream TEXT NOT NULL CHECK (stream IN ('Science', 'Mathematics', 'AI for Students', 'Public Speaking')),
  curriculum TEXT NOT NULL CHECK (curriculum IN ('CBSE', 'British', 'Both')),
  grades JSONB NOT NULL DEFAULT '[]'::jsonb,
  price_aed INTEGER NOT NULL DEFAULT 0,
  duration TEXT NOT NULL DEFAULT '12 Weeks per Term',
  description TEXT NOT NULL,
  learning_outcomes JSONB NOT NULL DEFAULT '[]'::jsonb,
  image_url TEXT,
  badge TEXT,
  is_published BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  schedule_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. COURSE PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.course_packages (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  streams_included JSONB NOT NULL DEFAULT '[]'::jsonb,
  price_aed INTEGER NOT NULL,
  billing_period TEXT DEFAULT 'per term',
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_popular BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CURRICULUM TOPICS TABLE
CREATE TABLE IF NOT EXISTS public.curriculum_topics (
  id TEXT PRIMARY KEY,
  curriculum TEXT NOT NULL CHECK (curriculum IN ('CBSE', 'British')),
  subject TEXT NOT NULL CHECK (subject IN ('Science', 'Mathematics', 'AI for Students', 'Public Speaking')),
  grade TEXT NOT NULL,
  term INTEGER NOT NULL CHECK (term IN (1, 2, 3)),
  term_title TEXT NOT NULL,
  duration TEXT NOT NULL,
  topics_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  learning_approach TEXT,
  assessments_json JSONB NOT NULL DEFAULT '[]'::jsonb,
  capstone TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ENQUIRIES TABLE (Free Trial Registrations & Contact Form Messages)
CREATE TABLE IF NOT EXISTS public.enquiries (
  id BIGSERIAL PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('free_trial', 'contact')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  student_name TEXT,
  grade TEXT,
  curriculum TEXT,
  interested_stream TEXT,
  preferred_contact_method TEXT DEFAULT 'WhatsApp',
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Trial Scheduled', 'Converted', 'Closed')),
  internal_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ADMIN ACTIVITY LOG TABLE
CREATE TABLE IF NOT EXISTS public.admin_activity_log (
  id BIGSERIAL PRIMARY KEY,
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. WEBSITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.website_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------- ROW LEVEL SECURITY (RLS) POLICIES -----------------
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- Public can READ published courses, packages, curriculum, and settings
CREATE POLICY "Public can view published courses" ON public.courses
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view published packages" ON public.course_packages
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view curriculum" ON public.curriculum_topics
  FOR SELECT USING (true);

CREATE POLICY "Public can view website settings" ON public.website_settings
  FOR SELECT USING (true);

-- Public can INSERT into enquiries (Free trial & Contact forms)
CREATE POLICY "Public can submit enquiries" ON public.enquiries
  FOR INSERT WITH CHECK (true);

-- Authenticated admins can manage everything
CREATE POLICY "Admins full access to courses" ON public.courses
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access to packages" ON public.course_packages
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access to curriculum" ON public.curriculum_topics
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access to enquiries" ON public.enquiries
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access to activity log" ON public.admin_activity_log
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access to settings" ON public.website_settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_enquiries_type_status ON public.enquiries(type, status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_courses_published ON public.courses(is_published, stream);
CREATE INDEX IF NOT EXISTS idx_curriculum_lookup ON public.curriculum_topics(curriculum, subject, grade, term);
