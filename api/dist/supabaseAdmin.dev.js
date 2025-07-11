"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supabaseAdmin = void 0;

var _supabaseJs = require("@supabase/supabase-js");

var supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
var supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
var supabaseAdmin = (0, _supabaseJs.createClient)(supabaseUrl, supabaseServiceRoleKey);
exports.supabaseAdmin = supabaseAdmin;