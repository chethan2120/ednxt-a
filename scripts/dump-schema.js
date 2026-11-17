const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'ednxt.db');
if (!fs.existsSync(dbPath)) {
  console.error('Database file not found:', dbPath);
  process.exit(1);
}

const db = new Database(dbPath);

const tables = [
  'users',
  'courses',
  'course_packages',
  'curriculum_topics',
  'enquiries',
  'admin_activity_log',
  'website_settings'
];

let sql = `-- ============================================================
-- EdNxt Academy - Supabase PostgreSQL Schema & Seed Migration
-- Project: pkbwjtpyjbrqutasorgr
-- Generated: 2026-11-17
-- ============================================================

-- 1. Create Tables
CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.courses (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT,
  stream TEXT NOT NULL,
  curriculum TEXT NOT NULL,
  grades TEXT NOT NULL,
  price_aed INTEGER NOT NULL,
  duration TEXT NOT NULL,
  description TEXT NOT NULL,
  learning_outcomes TEXT NOT NULL,
  image_url TEXT,
  badge TEXT,
  is_published INTEGER DEFAULT 1,
  is_featured INTEGER DEFAULT 0,
  schedule_info TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.course_packages (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  streams_included TEXT NOT NULL,
  price_aed INTEGER NOT NULL,
  billing_period TEXT DEFAULT 'per term',
  features TEXT NOT NULL,
  is_popular INTEGER DEFAULT 0,
  is_published INTEGER DEFAULT 1,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.curriculum_topics (
  id TEXT PRIMARY KEY,
  curriculum TEXT NOT NULL,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  term INTEGER NOT NULL,
  term_title TEXT NOT NULL,
  duration TEXT NOT NULL,
  topics_json TEXT NOT NULL,
  learning_approach TEXT,
  assessments_json TEXT,
  capstone TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.enquiries (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  student_name TEXT,
  grade TEXT,
  curriculum TEXT,
  interested_stream TEXT,
  preferred_contact_method TEXT,
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'New',
  internal_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.admin_activity_log (
  id SERIAL PRIMARY KEY,
  admin_email TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.website_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Configure Row Level Security (RLS) & Policies
-- Allow public anon read/write access for web interactions
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Public access users" ON public.users;
DROP POLICY IF EXISTS "Public access courses" ON public.courses;
DROP POLICY IF EXISTS "Public access course_packages" ON public.course_packages;
DROP POLICY IF EXISTS "Public access curriculum_topics" ON public.curriculum_topics;
DROP POLICY IF EXISTS "Public access enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Public access admin_activity_log" ON public.admin_activity_log;
DROP POLICY IF EXISTS "Public access website_settings" ON public.website_settings;

-- Create permissive policies for application access
CREATE POLICY "Public access users" ON public.users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access courses" ON public.courses FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access course_packages" ON public.course_packages FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access curriculum_topics" ON public.curriculum_topics FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access admin_activity_log" ON public.admin_activity_log FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public access website_settings" ON public.website_settings FOR ALL USING (true) WITH CHECK (true);

-- 3. Initial Seed Data
`;

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return String(val);
  return `'${String(val).replace(/'/g, "''")}'`;
}

// Dump tables data
for (const tbl of tables) {
  try {
    const rows = db.prepare(`SELECT * FROM ${tbl}`).all();
    if (rows.length > 0) {
      sql += `\n-- Seed: ${tbl}\n`;
      for (const row of rows) {
        const cols = Object.keys(row);
        const colNames = cols.join(', ');
        const colValues = cols.map(c => escapeSql(row[c])).join(', ');
        
        if (tbl === 'website_settings') {
          sql += `INSERT INTO public.${tbl} (${colNames}) VALUES (${colValues}) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;\n`;
        } else if (tbl === 'curriculum_topics') {
          sql += `INSERT INTO public.${tbl} (${colNames}) VALUES (${colValues}) ON CONFLICT (id) DO NOTHING;\n`;
        } else if (tbl === 'users') {
          sql += `INSERT INTO public.${tbl} (${colNames}) VALUES (${colValues}) ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash;\n`;
        } else if (tbl === 'courses' || tbl === 'course_packages') {
          sql += `INSERT INTO public.${tbl} (${colNames}) VALUES (${colValues}) ON CONFLICT (slug) DO NOTHING;\n`;
        } else {
          sql += `INSERT INTO public.${tbl} (${colNames}) VALUES (${colValues}) ON CONFLICT DO NOTHING;\n`;
        }
      }
    }
  } catch (err) {
    console.warn(`Could not dump table ${tbl}:`, err.message);
  }
}

sql += `\n-- Reset identity sequences for serial tables\n`;
sql += `SELECT setval(pg_get_serial_sequence('public.users', 'id'), COALESCE(MAX(id), 1)) FROM public.users;\n`;
sql += `SELECT setval(pg_get_serial_sequence('public.courses', 'id'), COALESCE(MAX(id), 1)) FROM public.courses;\n`;
sql += `SELECT setval(pg_get_serial_sequence('public.course_packages', 'id'), COALESCE(MAX(id), 1)) FROM public.course_packages;\n`;
sql += `SELECT setval(pg_get_serial_sequence('public.enquiries', 'id'), COALESCE(MAX(id), 1)) FROM public.enquiries;\n`;
sql += `SELECT setval(pg_get_serial_sequence('public.admin_activity_log', 'id'), COALESCE(MAX(id), 1)) FROM public.admin_activity_log;\n`;

fs.writeFileSync(path.join(__dirname, '..', 'supabase-schema.sql'), sql, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'supabase', 'migrations', '20261117_init.sql'), sql, 'utf8');

console.log('Successfully generated supabase-schema.sql and supabase/migrations/20261117_init.sql');
