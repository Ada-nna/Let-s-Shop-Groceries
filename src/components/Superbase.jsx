import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yjpbwafaqiruoksqoxne.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcGJ3YWZhcWlydW9rc3FveG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MTkwNjUsImV4cCI6MjAyOTI5NTA2NX0.uG8qi_YEi7ixsx7T1TW37W4l98JVK6NrAkWMPzaniH0";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
