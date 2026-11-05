# EdNxt Educational Website — Client Presentation & Technical Manual

Welcome to **EdNxt** — a complete educational platform for middle-school students (Grades 6–8) covering CBSE (NCERT-aligned) and British Curriculum (Key Stage 3) across Science, Mathematics, AI for Students, and Public Speaking.

---

## 1. Brand Identity & Design System
- **Main Tagline:** "Build Strong Foundations. Prepare for Tomorrow."
- **Typography:** Plus Jakarta Sans & Inter
- **Color Palette:**
  - Navy: `#102B50` | Dark Navy: `#0B2142`
  - Blue: `#2563EB` | Lime Accent: `#B4E94E`
  - Soft Pastels: `#EAF3FF` (Blue), `#EAF8E9` (Green), `#F1EAFE` (Purple), `#FFF0DE` (Orange)
  - Background: `#F8FAFF` | Pure White: `#FFFFFF`
- **Original Logos:**
  - Standard SVG: `/public/logo.svg`
  - Light Background: `/public/logo-light.svg`
  - Dark Background: `/public/logo-dark.svg`
  - Favicon: `/public/favicon.svg` & `/public/favicon.ico`

---

## 2. Completed Pages
All 14 required public pages + 7 admin management views are fully implemented and server-rendered:
1. **Home (`/`)**: Hero, 4 Learning Stream cards, Dual-Curriculum interactive explorer, Dynamic Packages pricing, Illustrative Parent Progress Dashboard, Closing CTA, and compliant Footer.
2. **About Us (`/about`)**: Honest brand story, middle-school focus (ages 11–14), core educational values, and teaching philosophy.
3. **Science Mastery (`/courses/science`)**: Biology, Chemistry, and Physics syllabus across all 3 terms for CBSE Grades 6–8 and British KS3 Years 7–9 with practical lab investigations.
4. **Mathematics Problem Solving (`/courses/mathematics`)**: Arithmetic, Algebra, Geometry, and Data analysis across all 3 terms with step-by-step reasoning.
5. **AI for Students (`/courses/ai-for-students`)**: 7-part curriculum covering AI fundamentals, Prompt writing, Responsible AI ethics, Brainstorming, Gemini Notebooks research synthesis, Meeting notes, and Capstone presentations.
6. **Public Speaking & Debate (`/courses/public-speaking`)**: Level 1 (Confident Voice), Level 2 (Persuasive Speaker), and Level 3 (Leader & Orator) with 4-part evaluation rubric.
7. **CBSE Curriculum (`/curriculum/cbse`)**: Complete term-by-term NCERT topic lists, grade mapping, and official syllabus disclaimer.
8. **British Curriculum KS3 (`/curriculum/british`)**: Complete KS3 curriculum for Years 7, 8, and 9 (GCSE Foundation).
9. **Course Packages (`/packages`)**: Core Bundle (AED 2,999/term), Future-Skills Bundle (AED 2,999/term - Most Popular), and Full Bundle (AED 4,999/term) with FAQs.
10. **Free Trial Registration (`/free-trial`)**: Working booking form capturing parent info, student grade, stream, and contact preference.
11. **Contact Us (`/contact`)**: Working enquiry form with Dubai Knowledge Park office details, phone, email, and WhatsApp links.
12. **Parent Login (`/parent-login`)**: Dedicated parent portal authentication with live preview mode showing student progress, attendance, and teacher feedback.
13. **Privacy Policy (`/privacy-policy`)**: Full privacy disclosures compliant with UAE data protection standards.
14. **Terms and Conditions (`/terms`)**: Transparent terms, term tuition policies, and code of conduct.
15. **SEO & Discovery**: Dynamic `/robots.txt` and `/sitemap.xml` generated automatically.

---

## 3. Dedicated Admin Dashboard Area
Located at `/admin`:
- **Admin Login (`/admin/login`)**: Secure authentication with encrypted sessions.
  - **Default Email:** `admin@ednxt.co`
  - **Default Password:** `Admin@EdNxt2026!`
- **Dashboard Overview (`/admin/dashboard`)**: Live metrics (Total enquiries, new enquiries, free trial requests, contact messages, active courses, recent activity log).
- **Course Management (`/admin/courses`)**: Full CRUD to create, edit, delete, publish/unpublish, price, and feature courses on the public website.
- **Curriculum Management (`/admin/curriculum`)**: Term and topic editor for all subjects, grades, and capstones.
- **Enquiry Management (`/admin/enquiries`)**: Real-time submissions table with search, filters (Free Trial / Contact, Status), status workflows (New → Contacted → Trial Scheduled → Converted → Closed), and internal notes.
- **Website Settings (`/admin/settings`)**: Non-technical controls to edit tuition pricing, top announcement banner, contact info, and taglines.
- **Password Reset (`/admin/reset-password`)**: Secure password update module.

---

## 4. Backend & Database Architecture
- **Embedded Database:** SQLite (`better-sqlite3`) located at `data/ednxt.db`. Runs self-contained with zero external cloud dependencies.
- **Supabase Integration:** Full PostgreSQL migration file provided at `supabase/migrations/20261104_init_ednxt.sql` with Row Level Security (RLS) policies and performance indexes.
- **Environment Variables (`.env.local`):**
  - `ADMIN_SESSION_SECRET`: Session signature secret.
  - `NEXT_PUBLIC_SITE_URL`: Base URL.
  - `NEXT_PUBLIC_SUPABASE_URL`: Optional Supabase project URL.
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Optional Supabase anon key.

---

## 5. Footer Compliance
The footer strictly implements the required credit notice:
`Designed and Maintained by WebNxt` where only "WebNxt" links to `https://webnxt.co/` and all other words are plain text.
