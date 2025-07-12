import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('SUPABASE_URL:', url);
console.log('SUPABASE_SERVICE_ROLE_KEY:', key ? 'present' : 'missing');

if (!url || !key) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
}

export const supabaseAdmin = createClient(url, key);

