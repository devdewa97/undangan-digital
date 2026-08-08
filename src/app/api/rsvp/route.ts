import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

/**
 * POST /api/rsvp — Submit an RSVP with wishes.
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured. Please set Supabase environment variables.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, attendance, guests, wishes } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!['attending', 'not_attending'].includes(attendance)) {
      return NextResponse.json({ error: 'Invalid attendance value' }, { status: 400 });
    }

    if (!wishes || typeof wishes !== 'string' || wishes.trim().length === 0) {
      return NextResponse.json({ error: 'Wishes are required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('rsvp')
      .insert({
        name: name.trim(),
        attendance,
        guests: attendance === 'attending' ? Math.min(Math.max(guests || 1, 1), 10) : 0,
        wishes: wishes.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save RSVP' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

