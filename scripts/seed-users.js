const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const DB_PATH = path.join(__dirname, '..', 'data', 'ednxt.db');
const db = new Database(DB_PATH);

function hashPassword(password) {
  const salt = 'ednxt_secure_salt_2026';
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

const demoUsers = [
  { email: 'admin@gmail.com', pass: 'demo123', name: 'Super Admin', role: 'admin' },
  { email: 'teacher@gmail.com', pass: 'demo123', name: 'Dr. Sarah Mitchell (Lead Faculty)', role: 'teacher' },
  { email: 'student@gmail.com', pass: 'demo123', name: 'Ethan Jenkins (Student / Parent)', role: 'student' },
  { email: 'admin@ednxt.co', pass: 'Admin@EdNxt2026!', name: 'Lead Administrator', role: 'admin' },
];

for (const u of demoUsers) {
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(u.email);
  const passHash = hashPassword(u.pass);
  if (!existing) {
    db.prepare(`
      INSERT INTO users (email, password_hash, name, role)
      VALUES (?, ?, ?, ?)
    `).run(u.email, passHash, u.name, u.role);
    console.log(`Created user: ${u.email} (${u.role})`);
  } else {
    db.prepare(`
      UPDATE users SET password_hash = ?, name = ?, role = ? WHERE email = ?
    `).run(passHash, u.name, u.role, u.email);
    console.log(`Updated user: ${u.email} (${u.role})`);
  }
}

console.log('All users currently in database:', db.prepare('SELECT id, email, role, name FROM users').all());
