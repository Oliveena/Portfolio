"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supabaseAdmin = void 0;

var _supabaseJs = require("@supabase/supabase-js");

var url = process.env.SUPABASE_URL;
var key = process.env.SUPABASE_SERVICE_ROLE_KEY;
console.log('SUPABASE_URL:', url);
console.log('SUPABASE_SERVICE_ROLE_KEY:', key ? 'present' : 'missing');

if (!url || !key) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
}

var supabaseAdmin = (0, _supabaseJs.createClient)(url, key);
exports.supabaseAdmin = supabaseAdmin;