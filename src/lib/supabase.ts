import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Supabase client for RSVP and Wishes.
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
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
