import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ikcqliufhvxqlqtqkbai.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY3FsaXVmaHZ4cWxxdHFrYmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NzI0NzgsImV4cCI6MjEwMjQ0ODQ3OH0.UExxSoqyr2CeUH9Q2TqTplMW7PMvlejE_gCIbEFWq6c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
