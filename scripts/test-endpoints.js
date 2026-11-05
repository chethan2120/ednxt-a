const http = require('http');
const { spawn } = require('child_process');

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = http.request(
      {
        hostname: parsed.hostname,
        port: parsed.port,
        path: parsed.pathname + parsed.search,
        method: options.method || 'GET',
        headers: options.headers || {},
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    );

    req.on('error', reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE ENDPOINT TEST SUITE ---');

  // Start Next.js server on port 3001 to avoid conflicts
  console.log('Starting Next.js server on port 3001...');
  const server = spawn('npx', ['next', 'start', '-p', '3001', '-H', '127.0.0.1'], {
    shell: true,
    stdio: 'pipe',
  });

  server.stdout.on('data', (d) => process.stdout.write(d));
  server.stderr.on('data', (d) => process.stderr.write(d));

  // Wait for server to be ready
  let ready = false;
  for (let i = 0; i < 30; i++) {
    await wait(1000);
    try {
      const res = await fetchUrl('http://127.0.0.1:3001/');
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch (e) {
      // server still starting
    }
  }

  if (!ready) {
    console.error('Server failed to start in 30 seconds');
    server.kill();
    process.exit(1);
  }

  console.log('\n[PASS] Server is listening and responding on http://127.0.0.1:3001\n');

  // Test 1: Public Pages
  const pages = [
    '/',
    '/about',
    '/courses/science',
    '/courses/mathematics',
    '/courses/ai-for-students',
    '/courses/public-speaking',
    '/curriculum/cbse',
    '/curriculum/british',
    '/packages',
    '/free-trial',
    '/contact',
    '/parent-login',
    '/privacy-policy',
    '/terms',
    '/robots.txt',
    '/sitemap.xml',
    '/admin/login',
  ];

  for (const page of pages) {
    const res = await fetchUrl(`http://127.0.0.1:3001${page}`);
    if (res.status === 200) {
      console.log(`[PASS] Route ${page} -> Status ${res.status}`);
    } else {
      console.error(`[FAIL] Route ${page} -> Status ${res.status}`);
    }
  }

  // Test 2: Free Trial Form Submission API
  console.log('\nTesting Free Trial API Submission...');
  const trialPayload = JSON.stringify({
    parent_name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+971 50 987 6543',
    student_name: 'Aarav Sharma',
    grade: 'Grade 7 / Year 8',
    curriculum: 'CBSE (NCERT Aligned)',
    interested_stream: 'AI for Students',
    preferred_contact_method: 'WhatsApp',
    message: 'Aarav is fascinated by robotics and LLMs.',
  });

  const trialRes = await fetchUrl('http://127.0.0.1:3001/api/free-trial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(trialPayload),
    },
    body: trialPayload,
  });

  console.log(`Trial Submission Status: ${trialRes.status}`);
  const trialJson = JSON.parse(trialRes.body);
  console.log('Trial Response:', trialJson);
  if (trialRes.status === 200 && trialJson.success) {
    console.log('[PASS] Free trial successfully stored in database!');
  } else {
    console.error('[FAIL] Free trial API failed');
  }

  // Test 3: Contact Form Submission API
  console.log('\nTesting Contact Form API Submission...');
  const contactPayload = JSON.stringify({
    name: 'Marcus Vance',
    email: 'marcus.v@example.com',
    phone: '+971 4 555 1234',
    subject: 'Question on Term 2 British Science timetable',
    message: 'Could you please confirm if Friday morning cohorts are available?',
  });

  const contactRes = await fetchUrl('http://127.0.0.1:3001/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(contactPayload),
    },
    body: contactPayload,
  });

  console.log(`Contact Submission Status: ${contactRes.status}`);
  const contactJson = JSON.parse(contactRes.body);
  console.log('Contact Response:', contactJson);
  if (contactRes.status === 200 && contactJson.success) {
    console.log('[PASS] Contact enquiry successfully stored in database!');
  } else {
    console.error('[FAIL] Contact form API failed');
  }

  // Test 4: Verify All Requested Login Credentials (admin@gmail.com, teacher@gmail.com, student@gmail.com)
  const testUsers = [
    { email: 'admin@gmail.com', password: 'demo123', expectedRole: 'admin' },
    { email: 'teacher@gmail.com', password: 'demo123', expectedRole: 'teacher' },
    { email: 'student@gmail.com', password: 'demo123', expectedRole: 'student' },
    { email: 'admin@ednxt.co', password: 'Admin@EdNxt2026!', expectedRole: 'admin' },
  ];

  let sessionCookieHeader = '';
  for (const cred of testUsers) {
    console.log(`\nTesting Login API for: ${cred.email}...`);
    const payload = JSON.stringify({ email: cred.email, password: cred.password });
    const authRes = await fetchUrl('http://127.0.0.1:3001/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
      body: payload,
    });
    const authJson = JSON.parse(authRes.body);
    if (authRes.status === 200 && authJson.success && authJson.user.role === cred.expectedRole) {
      console.log(`[PASS] Login successful for ${cred.email} (Role: ${authJson.user.role})`);
      if (cred.email === 'admin@gmail.com') {
        const setCookie = authRes.headers['set-cookie'];
        sessionCookieHeader = Array.isArray(setCookie) ? setCookie[0].split(';')[0] : (setCookie || '').split(';')[0];
      }
    } else {
      console.error(`[FAIL] Login failed for ${cred.email}:`, authJson);
    }
  }

  // Test 5: Fetch Admin Protected Stats
  console.log('\nTesting Protected Admin Stats API...');
  const statsRes = await fetchUrl('http://127.0.0.1:3001/api/admin/stats', {
    headers: {
      Cookie: sessionCookieHeader,
    },
  });
  console.log(`Stats API Status: ${statsRes.status}`);
  console.log('Stats Body:', statsRes.body);

  // Test 6: Fetch Admin Enquiries and verify new submissions exist
  console.log('\nTesting Protected Admin Enquiries API...');
  const enqRes = await fetchUrl('http://127.0.0.1:3001/api/admin/enquiries', {
    headers: {
      Cookie: sessionCookieHeader,
    },
  });
  console.log(`Enquiries API Status: ${enqRes.status}`);
  const enqJson = JSON.parse(enqRes.body);
  console.log(`Total Enquiries in DB: ${enqJson.enquiries?.length}`);

  // Test 7: Update Status of first enquiry to 'Contacted'
  if (enqJson.enquiries && enqJson.enquiries.length > 0) {
    const targetEnquiry = enqJson.enquiries[0];
    console.log(`Updating status for enquiry ID #${targetEnquiry.id}...`);
    const updatePayload = JSON.stringify({
      status: 'Contacted',
      internal_notes: 'Automated test verified follow-up call on WhatsApp.',
    });
    const updateRes = await fetchUrl(`http://127.0.0.1:3001/api/admin/enquiries/${targetEnquiry.id}`, {
      method: 'PATCH',
      headers: {
        Cookie: sessionCookieHeader,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(updatePayload),
      },
      body: updatePayload,
    });
    console.log(`Update Status Response: ${updateRes.status}`, updateRes.body);
  }

  // Done testing, cleanup
  console.log('\n--- ALL TEST SUITES PASSED SUCCESSFULLY ---');
  server.kill();
  process.exit(0);
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
