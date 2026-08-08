import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://hfmetcxslyrstxqmplzx.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbWV0Y3hzbHlyc3R4cW1wbHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxNTcyODYsImV4cCI6MjEwMTczMzI4Nn0.ncgOnRHMr-WvriXxttbGIDsQZbwD6ciDue8WxHNyLR0';

// Automatically clean URL if /rest/v1/ was included
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');

/**
 * Supabase client for RSVP and Wishes.
 *
 * Returns null when environment variables are not configured,
 * allowing the app to build and run without Supabase.
 *
 * Required environment variables:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 *
 * SQL Schema (run in Supabase SQL Editor):
 *
 * CREATE TABLE rsvp (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   attendance TEXT NOT NULL CHECK (attendance IN ('attending', 'not_attending')),
 *   guests INTEGER DEFAULT 1,
 *   wishes TEXT,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;
 * CREATE POLICY "Allow public insert" ON rsvp FOR INSERT WITH CHECK (true);
 * CREATE POLICY "Allow public select" ON rsvp FOR SELECT USING (true);
 */

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
    if (!supabaseUrl || !supabaseAnonKey) {
        return null;
    }
    if (!_supabase) {
        _supabase = createClient(supabaseUrl, supabaseAnonKey);
    }
    return _supabase;
}

/** @deprecated Use getSupabase() instead — kept for backward compat */
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as unknown as SupabaseClient);

