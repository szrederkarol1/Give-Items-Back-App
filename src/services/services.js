import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fiqxmkykdwiqlbdvcqzf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcXhta3lrZHdpcWxiZHZjcXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwNjA0NDksImV4cCI6MjAwNTYzNjQ0OX0.8iSHtK9O_4z76OSyEGwIwxlMJ7Y1GsNv875ji-8mpa8"
);

export default supabase;
