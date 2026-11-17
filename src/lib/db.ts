import crypto from 'crypto';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { supabase } from './supabase';
import { INITIAL_COURSES, INITIAL_PACKAGES, INITIAL_SETTINGS } from './initialData';
import { ALL_CURRICULA } from './curriculumData';

// ========================================================
// Supabase + SQLite Hybrid Configuration
// Uses Supabase (pkbwjtpyjbrqutasorgr) as the primary cloud database,
// with graceful embedded SQLite fallback to guarantee 100% uptime.
// ========================================================

const isVercel = Boolean(process.env.VERCEL);
const DB_DIR = isVercel ? '/tmp' : path.join(process.cwd(), 'data');
const DB_PATH = path.join(DB_DIR, 'ednxt.db');

// Ensure local fallback db directory exists
if (!fs.existsSync(DB_DIR)) {
  try {
    fs.mkdirSync(DB_DIR, { recursive: true });
  } catch (e) {
    // Ignore
  }
}

if (isVercel) {
  const sourceDb = path.join(process.cwd(), 'data', 'ednxt.db');
  if (fs.existsSync(sourceDb) && !fs.existsSync(DB_PATH)) {
    try {
      fs.copyFileSync(sourceDb, DB_PATH);
    } catch (e) {
      // Ignore
    }
  }
}

let sqliteInstance: Database.Database | null = null;
let isSqliteInitialized = false;

export function hashPassword(password: string): string {
  const salt = 'ednxt_secure_salt_2026';
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function getSqlite(): Database.Database {
  if (sqliteInstance) return sqliteInstance;
  sqliteInstance = new Database(DB_PATH);
  sqliteInstance.pragma('journal_mode = WAL');

  if (!isSqliteInitialized) {
    initSqliteTables(sqliteInstance);
    isSqliteInitialized = true;
  }
  return sqliteInstance;
}

function initSqliteTables(db: Database.Database) {
  try {
    const tableCheck = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='users'").get();
    if (tableCheck) return;
  } catch (e) {
    // Continue
  }

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
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
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS course_packages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      subtitle TEXT,
      streams_included TEXT NOT NULL,
      price_aed INTEGER NOT NULL,
      billing_period TEXT DEFAULT 'per term',
      features TEXT NOT NULL,
      is_popular INTEGER DEFAULT 0,
      is_published INTEGER DEFAULT 1,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS curriculum_topics (
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
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
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
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admin_activity_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      admin_email TEXT NOT NULL,
      action TEXT NOT NULL,
      target_type TEXT NOT NULL,
      target_id TEXT,
      details TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS website_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

// ----------------- COURSES -----------------

export async function getAllCourses() {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getAllCourses failed, falling back to local SQLite:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM courses ORDER BY id ASC').all();
}

export async function getPublishedCourses() {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_published', 1)
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getPublishedCourses failed, falling back:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM courses WHERE is_published = 1 ORDER BY id ASC').all();
}

export async function getCourseBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .single();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getCourseBySlug failed, falling back:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM courses WHERE slug = ?').get(slug);
}

export async function createCourse(data: any) {
  const payload = {
    slug: data.slug,
    title: data.title,
    tagline: data.tagline,
    stream: data.stream,
    curriculum: data.curriculum,
    grades: typeof data.grades === 'string' ? data.grades : JSON.stringify(data.grades || []),
    price_aed: Number(data.price_aed) || 0,
    duration: data.duration || '12 Weeks per Term',
    description: data.description || '',
    learning_outcomes: typeof data.learning_outcomes === 'string' ? data.learning_outcomes : JSON.stringify(data.learning_outcomes || []),
    image_url: data.image_url || '',
    badge: data.badge || '',
    is_published: data.is_published ? 1 : 0,
    is_featured: data.is_featured ? 1 : 0,
    schedule_info: data.schedule_info || '',
  };

  try {
    const { data: inserted, error } = await supabase
      .from('courses')
      .insert(payload)
      .select('id')
      .single();

    if (!error && inserted) {
      // Mirror to SQLite
      try {
        const db = getSqlite();
        db.prepare(`
          INSERT INTO courses (
            id, slug, title, tagline, stream, curriculum, grades, price_aed, duration,
            description, learning_outcomes, image_url, badge, is_published, is_featured, schedule_info
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(slug) DO UPDATE SET title = excluded.title
        `).run(
          inserted.id, payload.slug, payload.title, payload.tagline, payload.stream, payload.curriculum,
          payload.grades, payload.price_aed, payload.duration, payload.description, payload.learning_outcomes,
          payload.image_url, payload.badge, payload.is_published, payload.is_featured, payload.schedule_info
        );
      } catch (e) {
        // Ignore mirror error
      }
      return inserted.id;
    }
  } catch (err) {
    console.warn('Supabase createCourse failed, writing to SQLite:', err);
  }

  const db = getSqlite();
  const info = db.prepare(`
    INSERT INTO courses (
      slug, title, tagline, stream, curriculum, grades, price_aed, duration,
      description, learning_outcomes, image_url, badge, is_published, is_featured, schedule_info
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    payload.slug, payload.title, payload.tagline, payload.stream, payload.curriculum, payload.grades,
    payload.price_aed, payload.duration, payload.description, payload.learning_outcomes,
    payload.image_url, payload.badge, payload.is_published, payload.is_featured, payload.schedule_info
  );
  return info.lastInsertRowid;
}

export async function updateCourse(id: number, data: any) {
  const payload = {
    slug: data.slug,
    title: data.title,
    tagline: data.tagline,
    stream: data.stream,
    curriculum: data.curriculum,
    grades: typeof data.grades === 'string' ? data.grades : JSON.stringify(data.grades || []),
    price_aed: Number(data.price_aed) || 0,
    duration: data.duration,
    description: data.description,
    learning_outcomes: typeof data.learning_outcomes === 'string' ? data.learning_outcomes : JSON.stringify(data.learning_outcomes || []),
    image_url: data.image_url,
    badge: data.badge,
    is_published: data.is_published ? 1 : 0,
    is_featured: data.is_featured ? 1 : 0,
    schedule_info: data.schedule_info,
    updated_at: new Date().toISOString(),
  };

  try {
    await supabase.from('courses').update(payload).eq('id', id);
  } catch (err) {
    console.warn('Supabase updateCourse error:', err);
  }

  const db = getSqlite();
  db.prepare(`
    UPDATE courses SET
      slug = ?, title = ?, tagline = ?, stream = ?, curriculum = ?, grades = ?,
      price_aed = ?, duration = ?, description = ?, learning_outcomes = ?,
      image_url = ?, badge = ?, is_published = ?, is_featured = ?, schedule_info = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    payload.slug, payload.title, payload.tagline, payload.stream, payload.curriculum,
    payload.grades, payload.price_aed, payload.duration, payload.description,
    payload.learning_outcomes, payload.image_url, payload.badge, payload.is_published,
    payload.is_featured, payload.schedule_info, id
  );
}

export async function deleteCourse(id: number) {
  try {
    await supabase.from('courses').delete().eq('id', id);
  } catch (err) {
    console.warn('Supabase deleteCourse error:', err);
  }
  const db = getSqlite();
  db.prepare('DELETE FROM courses WHERE id = ?').run(id);
}

// ----------------- COURSE PACKAGES -----------------

export async function getAllPackages() {
  try {
    const { data, error } = await supabase
      .from('course_packages')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getAllPackages failed, falling back:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM course_packages ORDER BY id ASC').all();
}

export async function updatePackage(id: number, data: any) {
  const payload = {
    name: data.name,
    subtitle: data.subtitle,
    streams_included: typeof data.streams_included === 'string' ? data.streams_included : JSON.stringify(data.streams_included || []),
    price_aed: Number(data.price_aed) || 0,
    billing_period: data.billing_period || 'per term',
    features: typeof data.features === 'string' ? data.features : JSON.stringify(data.features || []),
    is_popular: data.is_popular ? 1 : 0,
    is_published: data.is_published ? 1 : 0,
    updated_at: new Date().toISOString(),
  };

  try {
    await supabase.from('course_packages').update(payload).eq('id', id);
  } catch (err) {
    console.warn('Supabase updatePackage error:', err);
  }

  const db = getSqlite();
  db.prepare(`
    UPDATE course_packages SET
      name = ?, subtitle = ?, streams_included = ?, price_aed = ?,
      billing_period = ?, features = ?, is_popular = ?, is_published = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    payload.name, payload.subtitle, payload.streams_included, payload.price_aed,
    payload.billing_period, payload.features, payload.is_popular, payload.is_published, id
  );
}

// ----------------- CURRICULUM -----------------

export async function getAllCurriculum() {
  try {
    const { data, error } = await supabase
      .from('curriculum_topics')
      .select('*')
      .order('curriculum', { ascending: true })
      .order('subject', { ascending: true })
      .order('grade', { ascending: true })
      .order('term', { ascending: true });

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getAllCurriculum failed, falling back:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM curriculum_topics ORDER BY curriculum, subject, grade, term ASC').all();
}

export async function getCurriculumTopicById(id: string) {
  try {
    const { data, error } = await supabase
      .from('curriculum_topics')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getCurriculumTopicById error:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM curriculum_topics WHERE id = ?').get(id);
}

export async function updateCurriculumTopic(id: string, data: any) {
  const payload = {
    term_title: data.term_title,
    duration: data.duration,
    topics_json: typeof data.topics_json === 'string' ? data.topics_json : JSON.stringify(data.topics || []),
    learning_approach: data.learning_approach,
    assessments_json: typeof data.assessments_json === 'string' ? data.assessments_json : JSON.stringify(data.assessments || []),
    capstone: data.capstone || '',
    updated_at: new Date().toISOString(),
  };

  try {
    await supabase.from('curriculum_topics').update(payload).eq('id', id);
  } catch (err) {
    console.warn('Supabase updateCurriculumTopic error:', err);
  }

  const db = getSqlite();
  db.prepare(`
    UPDATE curriculum_topics SET
      term_title = ?, duration = ?, topics_json = ?, learning_approach = ?,
      assessments_json = ?, capstone = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    payload.term_title, payload.duration, payload.topics_json,
    payload.learning_approach, payload.assessments_json, payload.capstone, id
  );
}

// ----------------- ENQUIRIES -----------------

export async function createEnquiry(data: {
  type: 'free_trial' | 'contact';
  name: string;
  email: string;
  phone?: string;
  student_name?: string;
  grade?: string;
  curriculum?: string;
  interested_stream?: string;
  preferred_contact_method?: string;
  subject?: string;
  message?: string;
}) {
  const payload = {
    type: data.type,
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    student_name: data.student_name || '',
    grade: data.grade || '',
    curriculum: data.curriculum || '',
    interested_stream: data.interested_stream || '',
    preferred_contact_method: data.preferred_contact_method || 'WhatsApp',
    subject: data.subject || '',
    message: data.message || '',
    status: 'New',
    internal_notes: '',
  };

  try {
    const { data: inserted, error } = await supabase
      .from('enquiries')
      .insert(payload)
      .select('id')
      .single();

    if (!error && inserted) {
      // Mirror to SQLite
      try {
        const db = getSqlite();
        db.prepare(`
          INSERT INTO enquiries (
            id, type, name, email, phone, student_name, grade, curriculum,
            interested_stream, preferred_contact_method, subject, message, status
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
        `).run(
          inserted.id, payload.type, payload.name, payload.email, payload.phone,
          payload.student_name, payload.grade, payload.curriculum,
          payload.interested_stream, payload.preferred_contact_method, payload.subject, payload.message
        );
      } catch (e) {
        // Ignore mirror error
      }
      return inserted.id;
    }
  } catch (err) {
    console.warn('Supabase createEnquiry failed, saving to SQLite:', err);
  }

  const db = getSqlite();
  const info = db.prepare(`
    INSERT INTO enquiries (
      type, name, email, phone, student_name, grade, curriculum,
      interested_stream, preferred_contact_method, subject, message, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
  `).run(
    payload.type, payload.name, payload.email, payload.phone, payload.student_name,
    payload.grade, payload.curriculum, payload.interested_stream,
    payload.preferred_contact_method, payload.subject, payload.message
  );
  return info.lastInsertRowid;
}

export async function getAllEnquiries(typeFilter?: string, statusFilter?: string, search?: string) {
  try {
    let query = supabase.from('enquiries').select('*').order('created_at', { ascending: false });

    if (typeFilter && typeFilter !== 'all') {
      query = query.eq('type', typeFilter);
    }
    if (statusFilter && statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }
    if (search && search.trim() !== '') {
      const s = `%${search.trim()}%`;
      query = query.or(`name.ilike.${s},email.ilike.${s},student_name.ilike.${s},phone.ilike.${s}`);
    }

    const { data, error } = await query;
    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getAllEnquiries failed, falling back:', err);
  }

  const db = getSqlite();
  let sql = 'SELECT * FROM enquiries WHERE 1=1';
  const params: any[] = [];

  if (typeFilter && typeFilter !== 'all') {
    sql += ' AND type = ?';
    params.push(typeFilter);
  }
  if (statusFilter && statusFilter !== 'all') {
    sql += ' AND status = ?';
    params.push(statusFilter);
  }
  if (search && search.trim() !== '') {
    sql += ' AND (name LIKE ? OR email LIKE ? OR student_name LIKE ? OR phone LIKE ?)';
    const s = `%${search.trim()}%`;
    params.push(s, s, s, s);
  }

  sql += ' ORDER BY created_at DESC';
  return db.prepare(sql).all(...params);
}

export async function getEnquiryById(id: number) {
  try {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getEnquiryById error:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM enquiries WHERE id = ?').get(id);
}

export async function updateEnquiryStatus(id: number, status: string, internal_notes?: string) {
  const payload: any = {
    status,
    updated_at: new Date().toISOString(),
  };
  if (internal_notes !== undefined) {
    payload.internal_notes = internal_notes;
  }

  try {
    await supabase.from('enquiries').update(payload).eq('id', id);
  } catch (err) {
    console.warn('Supabase updateEnquiryStatus error:', err);
  }

  const db = getSqlite();
  if (internal_notes !== undefined) {
    db.prepare(`
      UPDATE enquiries SET status = ?, internal_notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?
    `).run(status, internal_notes, id);
  } else {
    db.prepare(`
      UPDATE enquiries SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?
    `).run(status, id);
  }
}

export async function deleteEnquiry(id: number) {
  try {
    await supabase.from('enquiries').delete().eq('id', id);
  } catch (err) {
    console.warn('Supabase deleteEnquiry error:', err);
  }
  const db = getSqlite();
  db.prepare('DELETE FROM enquiries WHERE id = ?').run(id);
}

// ----------------- ACTIVITY LOG -----------------

export async function logActivity(admin_email: string, action: string, target_type: string, target_id?: string, details?: string) {
  const payload = {
    admin_email,
    action,
    target_type,
    target_id: target_id || '',
    details: details || '',
  };

  try {
    await supabase.from('admin_activity_log').insert(payload);
  } catch (err) {
    // Ignore error
  }

  try {
    const db = getSqlite();
    db.prepare(`
      INSERT INTO admin_activity_log (admin_email, action, target_type, target_id, details)
      VALUES (?, ?, ?, ?, ?)
    `).run(admin_email, action, target_type, target_id || '', details || '');
  } catch (e) {
    // Ignore error
  }
}

export async function getRecentActivities(limit = 15) {
  try {
    const { data, error } = await supabase
      .from('admin_activity_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (!error && data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getRecentActivities error:', err);
  }
  const db = getSqlite();
  return db.prepare('SELECT * FROM admin_activity_log ORDER BY created_at DESC LIMIT ?').all(limit);
}

// ----------------- DASHBOARD STATS -----------------

export async function getDashboardStats() {
  try {
    const [enquiriesRes, coursesRes] = await Promise.all([
      supabase.from('enquiries').select('status, type'),
      supabase.from('courses').select('is_published'),
    ]);

    if (!enquiriesRes.error && enquiriesRes.data) {
      const enquiries = enquiriesRes.data;
      const courses = coursesRes.data || [];

      return {
        totalEnquiries: enquiries.length,
        newEnquiries: enquiries.filter((e) => e.status === 'New').length,
        freeTrialRequests: enquiries.filter((e) => e.type === 'free_trial').length,
        contactMessages: enquiries.filter((e) => e.type === 'contact').length,
        activeCourses: courses.filter((c) => c.is_published === 1).length,
        convertedEnquiries: enquiries.filter((e) => e.status === 'Converted').length,
      };
    }
  } catch (err) {
    console.warn('Supabase getDashboardStats failed, falling back:', err);
  }

  const db = getSqlite();
  const totalEnquiries = db.prepare('SELECT count(*) as count FROM enquiries').get() as { count: number };
  const newEnquiries = db.prepare("SELECT count(*) as count FROM enquiries WHERE status = 'New'").get() as { count: number };
  const freeTrialRequests = db.prepare("SELECT count(*) as count FROM enquiries WHERE type = 'free_trial'").get() as { count: number };
  const contactMessages = db.prepare("SELECT count(*) as count FROM enquiries WHERE type = 'contact'").get() as { count: number };
  const activeCourses = db.prepare('SELECT count(*) as count FROM courses WHERE is_published = 1').get() as { count: number };
  const convertedEnquiries = db.prepare("SELECT count(*) as count FROM enquiries WHERE status = 'Converted'").get() as { count: number };

  return {
    totalEnquiries: totalEnquiries.count,
    newEnquiries: newEnquiries.count,
    freeTrialRequests: freeTrialRequests.count,
    contactMessages: contactMessages.count,
    activeCourses: activeCourses.count,
    convertedEnquiries: convertedEnquiries.count,
  };
}

// ----------------- WEBSITE SETTINGS -----------------

export async function getAllSettings(): Promise<Record<string, string>> {
  try {
    const { data, error } = await supabase.from('website_settings').select('*');
    if (!error && data && data.length > 0) {
      const settings: Record<string, string> = {};
      for (const row of data) {
        settings[row.key] = row.value;
      }
      return settings;
    }
  } catch (err) {
    console.warn('Supabase getAllSettings failed, falling back:', err);
  }

  const db = getSqlite();
  const rows = db.prepare('SELECT key, value FROM website_settings').all() as { key: string; value: string }[];
  const settings: Record<string, string> = {};
  for (const row of rows) {
    settings[row.key] = row.value;
  }
  return settings;
}

export async function getSetting(key: string, defaultValue = ''): Promise<string> {
  try {
    const { data, error } = await supabase
      .from('website_settings')
      .select('value')
      .eq('key', key)
      .single();

    if (!error && data) {
      return data.value;
    }
  } catch (err) {
    console.warn('Supabase getSetting error:', err);
  }

  const db = getSqlite();
  const row = db.prepare('SELECT value FROM website_settings WHERE key = ?').get(key) as { value: string } | undefined;
  return row ? row.value : defaultValue;
}

export async function updateSetting(key: string, value: string) {
  try {
    await supabase.from('website_settings').upsert({ key, value, updated_at: new Date().toISOString() });
  } catch (err) {
    console.warn('Supabase updateSetting error:', err);
  }

  const db = getSqlite();
  db.prepare(`
    INSERT INTO website_settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
  `).run(key, value);
}

export async function updateSettingsBatch(record: Record<string, string>) {
  const entries = Object.entries(record).map(([key, value]) => ({
    key,
    value,
    updated_at: new Date().toISOString(),
  }));

  try {
    await supabase.from('website_settings').upsert(entries);
  } catch (err) {
    console.warn('Supabase updateSettingsBatch error:', err);
  }

  const db = getSqlite();
  const upsert = db.prepare(`
    INSERT INTO website_settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
  `);
  const transaction = db.transaction((list: [string, string][]) => {
    for (const [k, v] of list) {
      upsert.run(k, v);
    }
  });
  transaction(Object.entries(record));
}

// ----------------- USERS & AUTH -----------------

export async function getUserByEmail(email: string): Promise<{ id: number; email: string; name: string; role: string; password_hash: string } | null> {
  const normalized = email.trim().toLowerCase();
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', normalized)
      .single();

    if (!error && data) {
      return data;
    }
  } catch (err) {
    console.warn('Supabase getUserByEmail failed, falling back:', err);
  }

  const db = getSqlite();
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(normalized) as any;
  return user || null;
}

export async function verifyUserCredentials(email: string, passwordPlain: string) {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const hash = hashPassword(passwordPlain);
  if (user.password_hash === hash) {
    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }
  return null;
}

export async function updateUserPassword(email: string, newPasswordPlain: string) {
  const normalized = email.trim().toLowerCase();
  const newHash = hashPassword(newPasswordPlain);

  try {
    await supabase.from('users').update({ password_hash: newHash }).eq('email', normalized);
  } catch (err) {
    console.warn('Supabase updateUserPassword error:', err);
  }

  const db = getSqlite();
  db.prepare('UPDATE users SET password_hash = ? WHERE email = ?').run(newHash, normalized);
}
