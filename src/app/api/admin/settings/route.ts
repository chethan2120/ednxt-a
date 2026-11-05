import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getAllSettings, updateSettingsBatch, getAllPackages, updatePackage, logActivity } from '@/lib/db';

export async function GET() {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const settings = getAllSettings();
  const packages = getAllPackages();

  return NextResponse.json({ settings, packages });
}

export async function POST(request: Request) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { settings, packages } = await request.json();

    if (settings && typeof settings === 'object') {
      updateSettingsBatch(settings);
    }

    if (packages && Array.isArray(packages)) {
      for (const pkg of packages) {
        if (pkg.id) {
          updatePackage(pkg.id, pkg);
        }
      }
    }

    logActivity(session.email, 'UPDATE_SETTINGS', 'settings', '', 'Updated website settings and pricing');
    return NextResponse.json({ success: true, message: 'Settings updated successfully.' });
  } catch (err: any) {
    console.error('Settings update error:', err);
    return NextResponse.json({ error: 'Failed to update settings.' }, { status: 500 });
  }
}
