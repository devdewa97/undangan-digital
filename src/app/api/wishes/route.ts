import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/wishes — Fetch all wishes, newest first.
 * Supports pagination via ?page=1&limit=50
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = (page - 1) * limit;

    const { data, error, count } = await supabase
      .from('rsvp')
      .select('id, name, wishes, attendance, created_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
    }

    return NextResponse.json({
      wishes: data || [],
      total: count || 0,
      page,
      limit,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
  }
}
